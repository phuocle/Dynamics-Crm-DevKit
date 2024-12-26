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
		/** Unique identifier of the system job that created this record. */
		readonly AsyncOperationId: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_account: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_activityfileattachment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_activitymonitor: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_adminsettingsentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_adx_invitation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_adx_inviteredemption: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_aicopilot: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_aipluginauth: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_aipluginoperationparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_aipluginoperationresponsetemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_aiplugintitle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_aipluginusersetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_applicationuser: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_appointment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_archivecleanupinfo: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_archivecleanupoperation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresource: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcebooking: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcebookingheader: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcecategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcecategoryassn: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcecharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcegroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookingstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bulkarchiveconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bulkarchivefailuredetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bulkarchiveoperation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_c360_configuration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_campaign: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_campaignresponse: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_canvasappextendedmetadata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_card: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_cascadegrantrevokeaccessrecordstracker: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_cascadegrantrevokeaccessversiontracker: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_catalogassignment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_certificatecredential: string;
		/** Unique identifier of the base record. */
		readonly channelaccessprofile_duplicatebaserecord: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_characteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_competitor: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_connectioninstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_connector: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_contact: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_contract: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_conversationtranscript: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_credential: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_datalakefolder: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_datalakefolderpermission: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_datalakeworkspace: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_datalakeworkspacepermission: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_dataprocessingconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_deleteditemreference: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_desktopflowmodule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_email: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_emailserverprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_enablearchivalrequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_entitlement: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_entitlementchannel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_entitlemententityallocationtypemapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_entitlementtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_entityrecordfilter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_environmentvariabledefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_environmentvariablevalue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_equipment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_exportedexcel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_exportsolutionupload: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_fax: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_featurecontrolsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_feedback: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_flowcredentialapplication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_flowevent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_flowmachinegroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_flowmachineimage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_flowmachineimageversion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_flowmachinenetwork: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_fxexpression: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_goal: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_goalrollupquery: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_governanceconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_incident: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_kbarticle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_keyvaultreference: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_knowledgearticle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_knowledgebaserecord: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_lead: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_letter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_list: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_managedidentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_marketingformdisplayattributes: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_maskingrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_addtocalendarstyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_appointmentactivitymarketingtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_basestyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_buttonstyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_cdsaconnectorconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_codestyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_columnstyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_contentblock: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_contentblockstyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_contentsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_customerinsightsinfo: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_customerjourneycustomchannelactivity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_customerjourneyiteration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_customerjourneyworkflowlink: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_deprecatedcustomtileactivity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_designerfeatureavailability: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_digitalassetsconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_dividerstyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_emailkeypoint: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_featureconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_file: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_generalstyles: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_gpt3log: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_gwennolfeatureconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_gwennolspamscoreactivity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_gwennolspamscorerequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_imagestyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_keyword: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_layoutstyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_leadentityfield: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_leadscoremodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_leadscoringconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedinaccount: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedinactivity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedinaudience: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedincampaign: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedinconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedinfieldmapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedinform: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedinformanswer: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedinformquestion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedinformsubmission: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedinleadmatchingstrategy: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_linkedinuserprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_listform: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_liveentitydependency: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_marketingconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_marketingdataimport: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_marketingdynamiccontentmetadata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_marketingemaildynamiccontentmetadata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_marketingemailtestattribute: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_marketingemailtestsend: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_marketingformfield: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_marketingformwhitelistrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_matchingstrategyattribute: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_mktactivity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_networkpage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_personalizedpage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_personalizedpagefield: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_phonecallactivitymarketingtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_postingishts: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_qrcodestyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_quicksendemail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_quotainfoentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_reaction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_segmentactivity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_socialpostingconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_socialpostingconsent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_sourceactivity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_tag: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_taskactivitymarketingtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_textstyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_uicconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_usersetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_video: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyncrm_videostyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_aimodelversion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_apsconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_brandprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_brandsender: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_brandtheme: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_buttonstyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_captcha: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_catalogeventstatusconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_cmsaddon: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_compliancesettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_compliancesettings3: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_compliancesettings4: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_configuration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_consent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_consentcenterconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_consentprovider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_consentproviderdefaultconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_consentproviderdefaultpurpose: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_consentsystemconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_contactpointconsent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_contactpointconsent2: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_contactpointconsent3: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_contactpointconsent4: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_contactpointsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_conversioneventdefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_createdentitylink: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_customchannelmessage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_customerdatamapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_customerdataselection: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_entityscoringmodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_eventmetadata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_eventparametermetadata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_experiment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_experimentv2: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_featureconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_formsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_formtargetaudience: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_fragment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_frequencycap: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_gdprrequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_imagestyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_journey: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_journeydependency: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_journeyevent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_journeyoptimizationcount: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_journeyrunparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_journeytemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_keyword: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_marketingfieldsubmission: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_marketingformfield: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_marketingformsubmission: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_matchingstrategy: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_matchingstrategyattribute: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_metadataentityrelationship: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_metadataitem: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_metadatastorestate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_mobiledevice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_predefinedplaceholder: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_preferencecenter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_preferencecenterlink: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_purpose: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_pushdeviceregistrationresult: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_pushmobiledevice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_qrcodestyle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_quiettimesetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_recaptchaconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_segment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_segmentdefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_segmentexecution: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_segmentusage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_sms: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_submitbutton: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_tag: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_teamsengagement: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_topic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_utmtracking: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdynmkt_webinaremailjourney: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_actioncardactionstat: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_actioncardregarding: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_actioncardstataggregation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_activeicdextension: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_actual: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agentcapacityprofileunit: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agentcapacityupdatehistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agentchannelstate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agentcopilotsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agentgroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agentgroupmembership: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agentresourceforecasting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agentstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agentstatushistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreement: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingdate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingincident: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingservice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingservicetask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementinvoiceproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementsubstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibdataset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibdatasetfile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibdatasetrecord: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibdatasetscontainer: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibfeedbackloop: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibfile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibfileattacheddata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aievent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aiodimage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aiodlabel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aiodtrainingboundingbox: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aiodtrainingimage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_analysiscomponent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_analysisjob: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_analysisoverride: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_analysisresult: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_analysisresultdetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_analytics: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_apirequestcache: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_apirequestfolder: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_appconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_appcopilotconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_appinsightsmetadata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_applicationextension: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_applicationtabtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_appprofilerolemapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_appstate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_assignmentconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_assignmentconfigurationstep: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_attribute: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_attributeinfluencestatistics: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_attributevalue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_authsettingsentry: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_autocapturerule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_autocapturesettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_autonomouscasecreationrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookableresourceassociation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookableresourcebookingquicknote: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookableresourcecapacityprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookingalert: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookingalertstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookingrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookingtimestamp: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_botsession: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_callablecontext: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_cannedmessage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_capacityprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channelcapability: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channeldefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channeldefinitionconsent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channeldefinitionlocale: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channelinstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channelinstanceaccount: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channelinstancesecret: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channelmessageattachment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channelmessagecontextpart: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channelmessagepart: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channelprovider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_chatwidgetlanguage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ciprovider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_clientextension: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_collabspaceteamassociation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationnotificationfield: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationnotificationtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationsessiontemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationtemplateparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationtype: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consumingapplication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_contactsuggestionrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_contactsuggestionruleset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationaction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationactionitem: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationactionlocale: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationaggregatedinsights: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationcomment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationdata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationmessageblock: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationparticipantinsights: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationparticipantsentiment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationquestion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationsegmentsentiment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationsentiment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationsignal: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationsubject: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationsummarysuggestion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationsystemtag: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationtag: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_copilotagentpreference: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_copilotinteraction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_copilotinteractiondata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_copilotinteractions: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_copilotsummarizationsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_copilottranscript: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_copilottranscriptdata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_crmconnection: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_csadminconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customapirulesetconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customcontrolextendedsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customerasset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customerassetattachment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customerassetcategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customeremailcommunication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customerfeedbacksurvey: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customerfeedbacksurveyinvite: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customerfeedbacksurveyresponse: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataanalyticsdataset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataanalyticsreport_fs: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataanalyticsreport_mkt: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataanalyticsworkspace: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataflow: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataflowconnectionreference: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataflowrefreshhistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataflow_datalakefolder: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_datahygienesettinginfo: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dealmanageraccess: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dealmanagersettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_decisioncontract: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_decisionruleset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_defextendedchannelinstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_defextendedchannelinstanceaccount: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_deletedconversation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_digitalsellingactivetask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_digitalsellingcompletedtask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dmsrequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dmsrequeststatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_duplicatedetectionpluginrun: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_duplicateleadmapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_effortpredictionresult: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_entitlementapplication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_entityattachment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_entityattributepredictionrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_entityconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_entitylinkchatconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_entityrefreshhistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_entityworkstreammap: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_externalcrm: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_externalrecord: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_favoriteknowledgearticle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_federatedarticle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_federatedarticleincident: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_fieldservicepricelistitem: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_fileupload: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flowcardtype: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flow_actionapprovalmodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flow_approval: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flow_approvalrequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flow_approvalresponse: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flow_approvalstep: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flow_awaitallapprovalmodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flow_basicapprovalmodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flow_flowapproval: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flwconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_forecastconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_forecastdefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_forecastinstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_forecastrecurrence: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_forecastsettingsandsummary: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_formmapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_function: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_geofence: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_geofenceevent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_geofencingsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_geolocationsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_geolocationtracking: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_icdextension: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_icebreakersconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iermlmodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iermltraining: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inboxcardconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inboxconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inboxentityconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttype: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttypecharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttyperecommendationresult: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttyperecommendationrunhistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttyperesolution: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttypeservice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttypeservicetask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttypessetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttype_requirementgroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inspection: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inspectionattachment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inspectiondefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inspectioninstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inspectionresponse: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_insurance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_integratedsearchprovider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intentattribute: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intentattributeset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intentattribute_entity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intentconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intententity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intentfamily: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intentfeature_configuration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intentgroupcondition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intentharvesting_batchjobstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intentharvesting_provisioning_status: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intentsolutionmap: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_intentsolution_mappingconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inventoryadjustment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inventoryjournal: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inventorytransfer: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevicecategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevicecommand: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevicecommanddefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevicedatahistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdeviceproperty: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdeviceregistrationhistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevicevisualizationconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotfieldmapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotpropertydefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotprovider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotproviderinstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_kalanguagesetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_kbattachment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_kmfederatedsearchconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgearticleimage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgearticletemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgeconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgeinteractioninsight: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgemanagementsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgepersonalfilter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgesearchfilter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgesearchinsight: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_kpieventdata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_kpieventdefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_leadhygienesetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_leadmodelconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_liveworkitemevent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_liveworkstreamcapacityprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_localizedsurveyquestion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_locationtemplateassociation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_lockstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_macrosession: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_maskingrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_masterentityroutingconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_migrationtracker: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_mobileapp: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_mobilesource: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_modelpreviewstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_modulerundetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_notificationfield: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_notificationtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_nottoexceed: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocagentassignedcustomapiprivilege: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocapplebusinessaccount: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocapplepay: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocautoblockrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocautomatedactionrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocautomatedactionrulesmapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocbotchannelregistration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocbotchannelregistrationsecret: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occarrier: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occhannelapiconversationprivilege: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occhannelapimessageprivilege: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occhannelapimethodmapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occhannelconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occhannelstateconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occommunicationprovidersetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occommunicationprovidersettingentry: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occustommessagingchannel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocexternalcontext: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocfbapplication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocfbpage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocflaggedspam: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocgatekeeperengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocgooglebusinessmessagesagentaccount: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocgooglebusinessmessagesengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocgooglebusinessmessagespartneraccount: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_oclanguage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_oclinechannelconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocliveworkitemcapacityprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocliveworkitemcharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocliveworkitemcontextitem: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocliveworkitemparticipant: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocliveworkstreamcontextvariable: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_oclocalizationdata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocoutboundconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocoutboundmessage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocpaymentprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocphonenumber: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocprovisioningstate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocrecording: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocrequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocrichobject: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocrichobjectmap: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsentimentdailytopic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsentimentdailytopickeyword: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsentimentdailytopictrending: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsession: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsessioncharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsessionparticipantevent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsimltraining: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsitdimportconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsitdskill: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsitrainingdata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocskillidentmlmodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsmschannelsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsmssettingsecret: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsystemmessage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_octeamschannelconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_octwitterapplication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_octwitterhandle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_octwitterhandleprovisioningstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_octwitterhandlesecret: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocvoice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocvoicechannellanguagesetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocvoicemail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocwechatchannelconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocwhatsappchannelaccount: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocwhatsappchannelnumber: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_oc_geolocationprovider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_omnichannelconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_omnichannelsyncconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_opportunitymodelconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderinvoicingdate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderinvoicingproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderinvoicingsetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderinvoicingsetupdate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_organizationalunit: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orgchartnode: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_overflowactionconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_paneconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_panetabconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_panetoolconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_payment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_paymentdetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_paymentmethod: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_paymentterm: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_personalmessage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_personalsoundsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_personasecurityrolemapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_playbookactivity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_playbookactivityattribute: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_playbookcategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_playbookinstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_playbooktemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmanalysishistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmbusinessruleautomationconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmcalendar: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmcalendarversion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pminferredtask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmprocessextendedmetadataversion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmprocesstemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmprocessusersettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmprocessversion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmrecording: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmsimulation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmview: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_postalbum: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_postalcode: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_predictioncomputationoperation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_predictionmodelstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_predictionscheduledoperation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_predictivemodelscore: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_predictivescore: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_predictivescoringsyncstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_preferredagent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_preferredagentcustomeridentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_preferredagentroutedentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_presence: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_priority: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_problematicasset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_problematicassetfeedback: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productinventory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivityactioninputparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivityactionoutputparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivityagentscript: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivityagentscriptstep: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivitymacroactiontemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivitymacroconnector: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivitymacrosolutionconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivityparameterdefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_propertylocationassociation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_provider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_purchaseorder: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_purchaseorderbill: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_purchaseorderreceiptproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_purchaseordersubstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotebookingincident: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotebookingproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotebookingservice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotebookingservicetask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotebookingsetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quoteinvoicingproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quoteinvoicingsetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rawinsightentitylink: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_realtimescoring: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_realtimescoringoperation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_recomputetracker: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_recording: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_relationshipinsightsunifiedconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_reportbookmark: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementcharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementdependency: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementgroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementorganizationunit: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementrelationship: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementresourcecategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementresourcepreference: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resolution: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resourcerequirement: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resourcerequirementdetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resourceterritory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rma: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rmareceipt: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rmareceiptproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rmasubstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_routingconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_routingconfigurationstep: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_routingrequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_routingrulesetsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rtv: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rtvproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rtvsubstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rulesetdependencymapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sabackupdiagnostic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sabatchruninstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salesaccelerationinsight: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salesaccelerationsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salescopilotinsight: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salescopilotorgsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salescopilotusersetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salesinsightssettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salesocmessage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salesocsmstemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salesroutingdiagnostic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salesroutingrun: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salessuggestion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salestag: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_saruninstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_scenario: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_schedule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_scheduleboardsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_schedulingfeatureflag: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sciconversation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_scicustomemailhighlight: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_scicustomhighlight: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_scicustompublisher: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_scienvironmentsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sciusersettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_segment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_segmentationsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_segmentattribute: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sentimentanalysis: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sequence: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sequencetarget: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_serviceconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_servicecopilotplugin: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_servicecopilotpluginaction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_servicecopilotpluginrole: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_serviceoneprovisioningrequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_servicetasktype: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sessiondata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sessionevent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sessionparticipant: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sessionparticipantdata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sessiontemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_shipvia: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_siconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_skillattachmentruleitem: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_skillattachmenttarget: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_slakpi: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_smartassistconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_smsnumber: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_solutionhealthrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_solutionhealthruleargument: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_solutionhealthruleset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_soundfile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_soundnotificationsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_submodeldefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_suggestionassignmentrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_suggestionsellerpriority: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_surveyconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_surveysetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarm: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarmparticipant: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarmparticipantrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarmrole: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarmskill: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarmtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_systemuserschedulersetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_taggedrecord: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_taxcode: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_taxcodedetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_teamschannelengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_teamsdialeradminsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_teamsengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_templateparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_templateruleset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_templatetags: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_timeentrysetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_timegroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_timegroupdetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_timeoffrequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_timespent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_trade: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_tradecoverage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_trainingresult: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_transactionorigin: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_twitterengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_unifiedroutingdiagnostic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_unifiedroutingrun: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_unifiedroutingsetuptracker: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_untrackedappointment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_urnotificationtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_urnotificationtemplatemapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_virtualtablecolumncandidate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_vivacustomerlist: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_vivaentitysetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_vivaorgextensioncred: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_vivaorgsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_vivausersetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_voicechannelorganizationsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_warehouse: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_wkwcolleaguesforcompany: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_wkwcolleaguesforcontact: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_wkwconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workhourtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_worklistviewconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorder: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workordercharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderdetailsgenerationqueue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderincident: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workordernte: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderresolution: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderresourcerestriction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderservice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderservicetask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workordersubstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workordertype: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workqueuestate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workqueueusersetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workstreamhmmigrationstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msevtmgt_customregistrationfield: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msevtmgt_eventpurchasecontact: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msevtmgt_eventteamsproperties: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msevtmgt_registrationresponse: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msevtmgt_webapplication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msevtmgt_websiteentityconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msfp_alert: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msfp_alertrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msfp_fileresponse: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msfp_surveyreminder: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msgdpr_gdprconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msgdpr_gdprconsentchangerecord: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_mspcat_catalogsubmissionfiles: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_mspcat_packagestore: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_opportunity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_organizationdatasyncfnostate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_organizationdatasyncstate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_organizationdatasyncsubscription: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_organizationdatasyncsubscriptionentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_organizationdatasyncsubscriptionfnotable: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_package: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_packagehistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_phonecall: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_powerbidataset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_powerbidatasetapdx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_powerbimashupparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_powerbireport: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_powerbireportapdx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_powerfxrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_powerpagesmanagedidentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_powerpagesscanreport: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_privilegesremovalsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_publisher: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_queue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_quote: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_ratingmodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_ratingvalue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_reconciliationinfo: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_recordfilter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_recurringappointmentmaster: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_reportparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_resourcegroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_retaineddataexcel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_retentioncleanupinfo: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_retentioncleanupoperation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_retentionconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_retentionfailuredetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_retentionoperation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_retentionsuccessdetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_revokeinheritedaccessrecordstracker: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_roleeditorlayout: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_searchattributesettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_searchcustomanalyzer: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_searchrelationshipsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_service: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_serviceplan: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_serviceplancustomcontrol: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_serviceplanmapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_sharedlinksetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_sharepointdocumentlocation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_sharepointsite: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_socialactivity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_socialprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_solutioncomponentattributeconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_solutioncomponentbatchconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_solutioncomponentconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_solutioncomponentrelationshipconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_stagesolutionupload: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_supportusertable: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapsedatabase: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapselinkexternaltablestate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapselinkprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapselinkprofileentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapselinkprofileentitystate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapselinkschedule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_systemuser: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_task: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_tdsmetadata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_team: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_territory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_transactioncurrency: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_userrating: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_workqueue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_workqueueitem: string;
		/** Date and time when the duplicate record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the duplicate record. */
		DuplicateId: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_account: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_activityfileattachment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_activitymonitor: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_adminsettingsentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_adx_invitation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_adx_inviteredemption: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_aicopilot: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_aipluginauth: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_aipluginoperationparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_aipluginoperationresponsetemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_aiplugintitle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_aipluginusersetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_applicationuser: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_appointment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_archivecleanupinfo: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_archivecleanupoperation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresource: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcebooking: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcebookingheader: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcecategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcecategoryassn: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcecharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcegroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookingstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bulkarchiveconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bulkarchivefailuredetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bulkarchiveoperation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_c360_configuration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_campaign: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_campaignresponse: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_canvasappextendedmetadata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_card: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_cascadegrantrevokeaccessrecordstracker: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_cascadegrantrevokeaccessversiontracker: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_catalogassignment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_certificatecredential: string;
		/** Unique identifier of the potential duplicate record. */
		readonly channelaccessprofile_duplicatematchingrecord: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_characteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_competitor: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_connectioninstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_connector: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_contact: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_contract: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_conversationtranscript: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_credential: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_datalakefolder: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_datalakefolderpermission: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_datalakeworkspace: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_datalakeworkspacepermission: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_dataprocessingconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_deleteditemreference: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_desktopflowmodule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_email: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_emailserverprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_enablearchivalrequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_entitlement: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_entitlementchannel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_entitlemententityallocationtypemapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_entitlementtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_entityrecordfilter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_environmentvariabledefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_environmentvariablevalue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_equipment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_exportedexcel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_exportsolutionupload: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_fax: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_featurecontrolsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_feedback: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_flowcredentialapplication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_flowevent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_flowmachinegroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_flowmachineimage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_flowmachineimageversion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_flowmachinenetwork: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_fxexpression: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_goal: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_goalrollupquery: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_governanceconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_incident: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_kbarticle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_keyvaultreference: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_knowledgearticle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_knowledgebaserecord: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_lead: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_letter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_list: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_managedidentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_marketingformdisplayattributes: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_maskingrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_addtocalendarstyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_appointmentactivitymarketingtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_basestyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_buttonstyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_cdsaconnectorconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_codestyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_columnstyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_contentblock: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_contentblockstyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_contentsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_customerinsightsinfo: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_customerjourneycustomchannelactivity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_customerjourneyiteration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_customerjourneyworkflowlink: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_deprecatedcustomtileactivity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_designerfeatureavailability: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_digitalassetsconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_dividerstyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_emailkeypoint: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_featureconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_file: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_generalstyles: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_gpt3log: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_gwennolfeatureconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_gwennolspamscoreactivity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_gwennolspamscorerequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_imagestyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_keyword: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_layoutstyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_leadentityfield: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_leadscoremodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_leadscoringconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedinaccount: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedinactivity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedinaudience: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedincampaign: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedinconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedinfieldmapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedinform: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedinformanswer: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedinformquestion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedinformsubmission: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedinleadmatchingstrategy: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_linkedinuserprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_listform: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_liveentitydependency: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_marketingconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_marketingdataimport: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_marketingdynamiccontentmetadata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_marketingemaildynamiccontentmetadata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_marketingemailtestattribute: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_marketingemailtestsend: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_marketingformfield: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_marketingformwhitelistrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_matchingstrategyattribute: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_mktactivity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_networkpage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_personalizedpage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_personalizedpagefield: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_phonecallactivitymarketingtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_postingishts: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_qrcodestyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_quicksendemail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_quotainfoentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_reaction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_segmentactivity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_socialpostingconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_socialpostingconsent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_sourceactivity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_tag: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_taskactivitymarketingtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_textstyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_uicconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_usersetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_video: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyncrm_videostyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_aimodelversion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_apsconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_brandprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_brandsender: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_brandtheme: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_buttonstyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_captcha: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_catalogeventstatusconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_cmsaddon: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_compliancesettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_compliancesettings3: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_compliancesettings4: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_configuration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_consent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_consentcenterconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_consentprovider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_consentproviderdefaultconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_consentproviderdefaultpurpose: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_consentsystemconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_contactpointconsent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_contactpointconsent2: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_contactpointconsent3: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_contactpointconsent4: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_contactpointsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_conversioneventdefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_createdentitylink: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_customchannelmessage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_customerdatamapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_customerdataselection: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_entityscoringmodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_eventmetadata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_eventparametermetadata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_experiment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_experimentv2: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_featureconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_formsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_formtargetaudience: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_fragment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_frequencycap: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_gdprrequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_imagestyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_journey: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_journeydependency: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_journeyevent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_journeyoptimizationcount: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_journeyrunparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_journeytemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_keyword: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_marketingfieldsubmission: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_marketingformfield: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_marketingformsubmission: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_matchingstrategy: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_matchingstrategyattribute: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_metadataentityrelationship: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_metadataitem: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_metadatastorestate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_mobiledevice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_predefinedplaceholder: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_preferencecenter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_preferencecenterlink: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_purpose: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_pushdeviceregistrationresult: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_pushmobiledevice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_qrcodestyle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_quiettimesetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_recaptchaconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_segment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_segmentdefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_segmentexecution: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_segmentusage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_sms: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_submitbutton: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_tag: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_teamsengagement: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_topic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_utmtracking: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdynmkt_webinaremailjourney: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_actioncardactionstat: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_actioncardregarding: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_actioncardstataggregation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_activeicdextension: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_actual: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agentcapacityprofileunit: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agentcapacityupdatehistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agentchannelstate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agentcopilotsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agentgroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agentgroupmembership: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agentresourceforecasting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agentstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agentstatushistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreement: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingdate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingincident: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingservice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingservicetask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementinvoiceproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementsubstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibdataset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibdatasetfile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibdatasetrecord: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibdatasetscontainer: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibfeedbackloop: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibfile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibfileattacheddata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aievent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aiodimage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aiodlabel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aiodtrainingboundingbox: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aiodtrainingimage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_analysiscomponent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_analysisjob: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_analysisoverride: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_analysisresult: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_analysisresultdetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_analytics: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_apirequestcache: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_apirequestfolder: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_appconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_appcopilotconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_appinsightsmetadata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_applicationextension: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_applicationtabtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_appprofilerolemapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_appstate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_assignmentconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_assignmentconfigurationstep: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_attribute: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_attributeinfluencestatistics: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_attributevalue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_authsettingsentry: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_autocapturerule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_autocapturesettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_autonomouscasecreationrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookableresourceassociation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookableresourcebookingquicknote: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookableresourcecapacityprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookingalert: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookingalertstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookingrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookingtimestamp: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_botsession: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_callablecontext: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_cannedmessage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_capacityprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channelcapability: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channeldefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channeldefinitionconsent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channeldefinitionlocale: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channelinstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channelinstanceaccount: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channelinstancesecret: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channelmessageattachment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channelmessagecontextpart: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channelmessagepart: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channelprovider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_chatwidgetlanguage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ciprovider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_clientextension: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_collabspaceteamassociation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationnotificationfield: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationnotificationtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationsessiontemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationtemplateparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationtype: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consumingapplication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_contactsuggestionrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_contactsuggestionruleset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationaction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationactionitem: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationactionlocale: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationaggregatedinsights: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationcomment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationdata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationmessageblock: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationparticipantinsights: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationparticipantsentiment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationquestion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationsegmentsentiment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationsentiment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationsignal: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationsubject: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationsummarysuggestion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationsystemtag: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationtag: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_copilotagentpreference: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_copilotinteraction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_copilotinteractiondata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_copilotinteractions: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_copilotsummarizationsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_copilottranscript: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_copilottranscriptdata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_crmconnection: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_csadminconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customapirulesetconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customcontrolextendedsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customerasset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customerassetattachment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customerassetcategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customeremailcommunication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customerfeedbacksurvey: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customerfeedbacksurveyinvite: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customerfeedbacksurveyresponse: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataanalyticsdataset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataanalyticsreport_fs: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataanalyticsreport_mkt: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataanalyticsworkspace: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataflow: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataflowconnectionreference: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataflowrefreshhistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataflow_datalakefolder: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_datahygienesettinginfo: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dealmanageraccess: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dealmanagersettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_decisioncontract: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_decisionruleset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_defextendedchannelinstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_defextendedchannelinstanceaccount: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_deletedconversation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_digitalsellingactivetask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_digitalsellingcompletedtask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dmsrequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dmsrequeststatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_duplicatedetectionpluginrun: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_duplicateleadmapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_effortpredictionresult: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_entitlementapplication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_entityattachment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_entityattributepredictionrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_entityconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_entitylinkchatconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_entityrefreshhistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_entityworkstreammap: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_externalcrm: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_externalrecord: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_favoriteknowledgearticle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_federatedarticle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_federatedarticleincident: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_fieldservicepricelistitem: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_fileupload: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flowcardtype: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flow_actionapprovalmodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flow_approval: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flow_approvalrequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flow_approvalresponse: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flow_approvalstep: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flow_awaitallapprovalmodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flow_basicapprovalmodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flow_flowapproval: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flwconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_forecastconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_forecastdefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_forecastinstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_forecastrecurrence: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_forecastsettingsandsummary: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_formmapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_function: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_geofence: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_geofenceevent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_geofencingsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_geolocationsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_geolocationtracking: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_icdextension: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_icebreakersconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iermlmodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iermltraining: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inboxcardconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inboxconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inboxentityconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttype: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttypecharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttyperecommendationresult: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttyperecommendationrunhistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttyperesolution: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttypeservice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttypeservicetask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttypessetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttype_requirementgroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inspection: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inspectionattachment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inspectiondefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inspectioninstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inspectionresponse: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_insurance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_integratedsearchprovider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intentattribute: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intentattributeset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intentattribute_entity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intentconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intententity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intentfamily: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intentfeature_configuration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intentgroupcondition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intentharvesting_batchjobstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intentharvesting_provisioning_status: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intentsolutionmap: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_intentsolution_mappingconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inventoryadjustment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inventoryjournal: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inventorytransfer: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevicecategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevicecommand: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevicecommanddefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevicedatahistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdeviceproperty: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdeviceregistrationhistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevicevisualizationconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotfieldmapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotpropertydefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotprovider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotproviderinstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_kalanguagesetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_kbattachment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_kmfederatedsearchconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgearticleimage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgearticletemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgeconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgeinteractioninsight: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgemanagementsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgepersonalfilter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgesearchfilter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgesearchinsight: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_kpieventdata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_kpieventdefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_leadhygienesetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_leadmodelconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_liveworkitemevent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_liveworkstreamcapacityprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_localizedsurveyquestion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_locationtemplateassociation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_lockstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_macrosession: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_maskingrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_masterentityroutingconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_migrationtracker: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_mobileapp: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_mobilesource: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_modelpreviewstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_modulerundetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_notificationfield: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_notificationtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_nottoexceed: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocagentassignedcustomapiprivilege: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocapplebusinessaccount: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocapplepay: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocautoblockrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocautomatedactionrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocautomatedactionrulesmapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocbotchannelregistration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocbotchannelregistrationsecret: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occarrier: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occhannelapiconversationprivilege: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occhannelapimessageprivilege: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occhannelapimethodmapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occhannelconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occhannelstateconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occommunicationprovidersetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occommunicationprovidersettingentry: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occustommessagingchannel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocexternalcontext: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocfbapplication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocfbpage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocflaggedspam: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocgatekeeperengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocgooglebusinessmessagesagentaccount: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocgooglebusinessmessagesengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocgooglebusinessmessagespartneraccount: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_oclanguage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_oclinechannelconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocliveworkitemcapacityprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocliveworkitemcharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocliveworkitemcontextitem: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocliveworkitemparticipant: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocliveworkstreamcontextvariable: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_oclocalizationdata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocoutboundconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocoutboundmessage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocpaymentprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocphonenumber: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocprovisioningstate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocrecording: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocrequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocrichobject: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocrichobjectmap: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsentimentdailytopic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsentimentdailytopickeyword: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsentimentdailytopictrending: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsession: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsessioncharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsessionparticipantevent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsimltraining: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsitdimportconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsitdskill: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsitrainingdata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocskillidentmlmodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsmschannelsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsmssettingsecret: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsystemmessage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_octeamschannelconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_octwitterapplication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_octwitterhandle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_octwitterhandleprovisioningstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_octwitterhandlesecret: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocvoice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocvoicechannellanguagesetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocvoicemail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocwechatchannelconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocwhatsappchannelaccount: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocwhatsappchannelnumber: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_oc_geolocationprovider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_omnichannelconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_omnichannelsyncconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_opportunitymodelconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderinvoicingdate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderinvoicingproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderinvoicingsetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderinvoicingsetupdate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_organizationalunit: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orgchartnode: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_overflowactionconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_paneconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_panetabconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_panetoolconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_payment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_paymentdetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_paymentmethod: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_paymentterm: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_personalmessage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_personalsoundsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_personasecurityrolemapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_playbookactivity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_playbookactivityattribute: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_playbookcategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_playbookinstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_playbooktemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmanalysishistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmbusinessruleautomationconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmcalendar: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmcalendarversion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pminferredtask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmprocessextendedmetadataversion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmprocesstemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmprocessusersettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmprocessversion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmrecording: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmsimulation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmview: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_postalbum: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_postalcode: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_predictioncomputationoperation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_predictionmodelstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_predictionscheduledoperation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_predictivemodelscore: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_predictivescore: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_predictivescoringsyncstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_preferredagent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_preferredagentcustomeridentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_preferredagentroutedentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_presence: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_priority: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_problematicasset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_problematicassetfeedback: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productinventory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivityactioninputparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivityactionoutputparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivityagentscript: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivityagentscriptstep: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivitymacroactiontemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivitymacroconnector: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivitymacrosolutionconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivityparameterdefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_propertylocationassociation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_provider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_purchaseorder: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_purchaseorderbill: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_purchaseorderreceiptproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_purchaseordersubstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotebookingincident: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotebookingproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotebookingservice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotebookingservicetask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotebookingsetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quoteinvoicingproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quoteinvoicingsetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rawinsightentitylink: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_realtimescoring: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_realtimescoringoperation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_recomputetracker: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_recording: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_relationshipinsightsunifiedconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_reportbookmark: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementcharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementdependency: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementgroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementorganizationunit: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementrelationship: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementresourcecategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementresourcepreference: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resolution: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resourcerequirement: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resourcerequirementdetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resourceterritory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rma: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rmareceipt: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rmareceiptproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rmasubstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_routingconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_routingconfigurationstep: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_routingrequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_routingrulesetsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rtv: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rtvproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rtvsubstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rulesetdependencymapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sabackupdiagnostic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sabatchruninstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salesaccelerationinsight: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salesaccelerationsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salescopilotinsight: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salescopilotorgsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salescopilotusersetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salesinsightssettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salesocmessage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salesocsmstemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salesroutingdiagnostic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salesroutingrun: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salessuggestion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salestag: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_saruninstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_scenario: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_schedule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_scheduleboardsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_schedulingfeatureflag: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sciconversation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_scicustomemailhighlight: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_scicustomhighlight: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_scicustompublisher: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_scienvironmentsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sciusersettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_segment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_segmentationsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_segmentattribute: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sentimentanalysis: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sequence: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sequencetarget: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_serviceconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_servicecopilotplugin: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_servicecopilotpluginaction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_servicecopilotpluginrole: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_serviceoneprovisioningrequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_servicetasktype: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sessiondata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sessionevent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sessionparticipant: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sessionparticipantdata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sessiontemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_shipvia: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_siconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_skillattachmentruleitem: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_skillattachmenttarget: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_slakpi: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_smartassistconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_smsnumber: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_solutionhealthrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_solutionhealthruleargument: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_solutionhealthruleset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_soundfile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_soundnotificationsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_submodeldefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_suggestionassignmentrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_suggestionsellerpriority: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_surveyconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_surveysetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarm: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarmparticipant: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarmparticipantrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarmrole: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarmskill: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarmtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_systemuserschedulersetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_taggedrecord: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_taxcode: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_taxcodedetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_teamschannelengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_teamsdialeradminsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_teamsengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_templateparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_templateruleset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_templatetags: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_timeentrysetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_timegroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_timegroupdetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_timeoffrequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_timespent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_trade: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_tradecoverage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_trainingresult: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_transactionorigin: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_twitterengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_unifiedroutingdiagnostic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_unifiedroutingrun: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_unifiedroutingsetuptracker: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_untrackedappointment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_urnotificationtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_urnotificationtemplatemapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_virtualtablecolumncandidate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_vivacustomerlist: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_vivaentitysetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_vivaorgextensioncred: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_vivaorgsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_vivausersetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_voicechannelorganizationsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_warehouse: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_wkwcolleaguesforcompany: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_wkwcolleaguesforcontact: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_wkwconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workhourtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_worklistviewconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorder: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workordercharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderdetailsgenerationqueue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderincident: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workordernte: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderresolution: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderresourcerestriction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderservice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderservicetask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workordersubstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workordertype: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workqueuestate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workqueueusersetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workstreamhmmigrationstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msevtmgt_customregistrationfield: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msevtmgt_eventpurchasecontact: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msevtmgt_eventteamsproperties: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msevtmgt_registrationresponse: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msevtmgt_webapplication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msevtmgt_websiteentityconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msfp_alert: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msfp_alertrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msfp_fileresponse: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msfp_surveyreminder: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msgdpr_gdprconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msgdpr_gdprconsentchangerecord: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_mspcat_catalogsubmissionfiles: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_mspcat_packagestore: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_opportunity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_organizationdatasyncfnostate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_organizationdatasyncstate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_organizationdatasyncsubscription: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_organizationdatasyncsubscriptionentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_organizationdatasyncsubscriptionfnotable: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_package: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_packagehistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_phonecall: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_powerbidataset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_powerbidatasetapdx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_powerbimashupparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_powerbireport: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_powerbireportapdx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_powerfxrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_powerpagesmanagedidentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_powerpagesscanreport: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_privilegesremovalsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_publisher: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_queue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_quote: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_ratingmodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_ratingvalue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_reconciliationinfo: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_recordfilter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_recurringappointmentmaster: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_reportparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_resourcegroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_retaineddataexcel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_retentioncleanupinfo: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_retentioncleanupoperation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_retentionconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_retentionfailuredetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_retentionoperation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_retentionsuccessdetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_revokeinheritedaccessrecordstracker: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_roleeditorlayout: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_searchattributesettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_searchcustomanalyzer: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_searchrelationshipsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_service: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_serviceplan: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_serviceplancustomcontrol: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_serviceplanmapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_sharedlinksetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_sharepointdocumentlocation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_sharepointsite: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_socialactivity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_socialprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_solutioncomponentattributeconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_solutioncomponentbatchconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_solutioncomponentconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_solutioncomponentrelationshipconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_stagesolutionupload: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_supportusertable: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapsedatabase: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapselinkexternaltablestate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapselinkprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapselinkprofileentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapselinkprofileentitystate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapselinkschedule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_systemuser: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_task: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_tdsmetadata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_team: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_territory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_transactioncurrency: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_userrating: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_workqueue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_workqueueitem: string;
		/** Unique identifier of the duplicate rule against which this duplicate was found. */
		readonly DuplicateRuleId: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the duplicate record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the duplicate record. */
		readonly OwningUser: string;
		readonly FormattedValue: {
			/** Unique identifier of the system job that created this record. */
			readonly AsyncOperationId: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_account: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_activityfileattachment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_activitymonitor: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_adminsettingsentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_adx_invitation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_adx_inviteredemption: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_aicopilot: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_aipluginauth: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_aipluginoperationparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_aipluginoperationresponsetemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_aiplugintitle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_aipluginusersetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_applicationuser: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_appointment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_archivecleanupinfo: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_archivecleanupoperation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresource: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcebooking: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcebookingheader: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcecategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcecategoryassn: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcecharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcegroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookingstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bulkarchiveconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bulkarchivefailuredetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bulkarchiveoperation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_c360_configuration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_campaign: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_campaignresponse: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_canvasappextendedmetadata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_card: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_cascadegrantrevokeaccessrecordstracker: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_cascadegrantrevokeaccessversiontracker: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_catalogassignment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_certificatecredential: string;
			/** Unique identifier of the base record. */
			readonly channelaccessprofile_duplicatebaserecord: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_characteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_competitor: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_connectioninstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_connector: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_contact: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_contract: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_conversationtranscript: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_credential: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_datalakefolder: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_datalakefolderpermission: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_datalakeworkspace: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_datalakeworkspacepermission: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_dataprocessingconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_deleteditemreference: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_desktopflowmodule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_email: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_emailserverprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_enablearchivalrequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_entitlement: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_entitlementchannel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_entitlemententityallocationtypemapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_entitlementtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_entityrecordfilter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_environmentvariabledefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_environmentvariablevalue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_equipment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_exportedexcel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_exportsolutionupload: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_fax: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_featurecontrolsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_feedback: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_flowcredentialapplication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_flowevent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_flowmachinegroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_flowmachineimage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_flowmachineimageversion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_flowmachinenetwork: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_fxexpression: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_goal: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_goalrollupquery: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_governanceconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_incident: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_kbarticle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_keyvaultreference: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_knowledgearticle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_knowledgebaserecord: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_lead: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_letter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_list: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_managedidentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_marketingformdisplayattributes: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_maskingrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_addtocalendarstyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_appointmentactivitymarketingtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_basestyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_buttonstyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_cdsaconnectorconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_codestyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_columnstyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_contentblock: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_contentblockstyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_contentsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_customerinsightsinfo: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_customerjourneycustomchannelactivity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_customerjourneyiteration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_customerjourneyworkflowlink: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_deprecatedcustomtileactivity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_designerfeatureavailability: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_digitalassetsconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_dividerstyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_emailkeypoint: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_featureconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_file: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_generalstyles: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_gpt3log: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_gwennolfeatureconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_gwennolspamscoreactivity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_gwennolspamscorerequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_imagestyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_keyword: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_layoutstyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_leadentityfield: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_leadscoremodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_leadscoringconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedinaccount: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedinactivity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedinaudience: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedincampaign: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedinconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedinfieldmapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedinform: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedinformanswer: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedinformquestion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedinformsubmission: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedinleadmatchingstrategy: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_linkedinuserprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_listform: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_liveentitydependency: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_marketingconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_marketingdataimport: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_marketingdynamiccontentmetadata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_marketingemaildynamiccontentmetadata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_marketingemailtestattribute: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_marketingemailtestsend: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_marketingformfield: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_marketingformwhitelistrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_matchingstrategyattribute: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_mktactivity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_networkpage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_personalizedpage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_personalizedpagefield: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_phonecallactivitymarketingtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_postingishts: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_qrcodestyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_quicksendemail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_quotainfoentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_reaction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_segmentactivity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_socialpostingconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_socialpostingconsent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_sourceactivity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_tag: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_taskactivitymarketingtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_textstyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_uicconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_usersetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_video: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyncrm_videostyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_aimodelversion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_apsconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_brandprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_brandsender: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_brandtheme: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_buttonstyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_captcha: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_catalogeventstatusconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_cmsaddon: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_compliancesettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_compliancesettings3: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_compliancesettings4: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_configuration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_consent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_consentcenterconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_consentprovider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_consentproviderdefaultconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_consentproviderdefaultpurpose: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_consentsystemconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_contactpointconsent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_contactpointconsent2: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_contactpointconsent3: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_contactpointconsent4: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_contactpointsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_conversioneventdefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_createdentitylink: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_customchannelmessage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_customerdatamapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_customerdataselection: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_entityscoringmodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_eventmetadata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_eventparametermetadata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_experiment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_experimentv2: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_featureconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_formsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_formtargetaudience: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_fragment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_frequencycap: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_gdprrequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_imagestyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_journey: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_journeydependency: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_journeyevent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_journeyoptimizationcount: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_journeyrunparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_journeytemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_keyword: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_marketingfieldsubmission: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_marketingformfield: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_marketingformsubmission: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_matchingstrategy: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_matchingstrategyattribute: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_metadataentityrelationship: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_metadataitem: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_metadatastorestate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_mobiledevice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_predefinedplaceholder: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_preferencecenter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_preferencecenterlink: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_purpose: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_pushdeviceregistrationresult: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_pushmobiledevice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_qrcodestyle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_quiettimesetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_recaptchaconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_segment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_segmentdefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_segmentexecution: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_segmentusage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_sms: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_submitbutton: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_tag: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_teamsengagement: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_topic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_utmtracking: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdynmkt_webinaremailjourney: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_actioncardactionstat: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_actioncardregarding: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_actioncardstataggregation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_activeicdextension: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_actual: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agentcapacityprofileunit: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agentcapacityupdatehistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agentchannelstate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agentcopilotsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agentgroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agentgroupmembership: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agentresourceforecasting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agentstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agentstatushistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreement: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingdate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingincident: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingservice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingservicetask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingsetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementinvoicedate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementinvoiceproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementinvoicesetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementsubstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibdataset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibdatasetfile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibdatasetrecord: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibdatasetscontainer: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibfeedbackloop: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibfile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibfileattacheddata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aievent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aiodimage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aiodlabel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aiodtrainingboundingbox: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aiodtrainingimage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_analysiscomponent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_analysisjob: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_analysisoverride: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_analysisresult: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_analysisresultdetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_analytics: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_apirequestcache: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_apirequestfolder: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_appconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_appcopilotconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_appinsightsmetadata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_applicationextension: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_applicationtabtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_appprofilerolemapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_appstate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_assignmentconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_assignmentconfigurationstep: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_attribute: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_attributeinfluencestatistics: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_attributevalue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_authsettingsentry: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_autocapturerule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_autocapturesettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_autonomouscasecreationrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookableresourceassociation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookableresourcebookingquicknote: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookableresourcecapacityprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookingalert: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookingalertstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookingrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookingtimestamp: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_botsession: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_callablecontext: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_cannedmessage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_capacityprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channelcapability: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channeldefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channeldefinitionconsent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channeldefinitionlocale: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channelinstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channelinstanceaccount: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channelinstancesecret: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channelmessageattachment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channelmessagecontextpart: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channelmessagepart: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channelprovider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_chatwidgetlanguage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ciprovider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_clientextension: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_collabspaceteamassociation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationnotificationfield: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationnotificationtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationsessiontemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationtemplateparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationtype: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consumingapplication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_contactsuggestionrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_contactsuggestionruleset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationaction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationactionitem: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationactionlocale: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationaggregatedinsights: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationcomment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationdata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationmessageblock: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationparticipantinsights: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationparticipantsentiment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationquestion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationsegmentsentiment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationsentiment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationsignal: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationsubject: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationsummarysuggestion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationsystemtag: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationtag: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_copilotagentpreference: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_copilotinteraction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_copilotinteractiondata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_copilotinteractions: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_copilotsummarizationsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_copilottranscript: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_copilottranscriptdata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_crmconnection: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_csadminconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customapirulesetconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customcontrolextendedsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customerasset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customerassetattachment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customerassetcategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customeremailcommunication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customerfeedbacksurvey: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customerfeedbacksurveyinvite: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customerfeedbacksurveyresponse: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataanalyticsdataset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataanalyticsreport_fs: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataanalyticsreport_fspredictrs: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataanalyticsreport_fspredictwhd: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataanalyticsreport_mkt: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataanalyticsworkspace: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataflow: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataflowconnectionreference: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataflowrefreshhistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataflow_datalakefolder: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_datahygienesettinginfo: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dealmanageraccess: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dealmanagersettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_decisioncontract: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_decisionruleset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_defextendedchannelinstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_defextendedchannelinstanceaccount: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_deletedconversation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_digitalsellingactivetask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_digitalsellingcompletedtask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dmsrequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dmsrequeststatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_duplicatedetectionpluginrun: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_duplicateleadmapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_effortpredictionresult: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_entitlementapplication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_entityattachment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_entityattributepredictionrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_entityconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_entitylinkchatconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_entityrefreshhistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_entityworkstreammap: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_externalcrm: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_externalrecord: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_favoriteknowledgearticle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_federatedarticle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_federatedarticleincident: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_fieldservicepricelistitem: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_fileupload: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flowcardtype: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flow_actionapprovalmodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flow_approval: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flow_approvalrequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flow_approvalresponse: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flow_approvalstep: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flow_awaitallapprovalmodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flow_basicapprovalmodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flow_flowapproval: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flwconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_forecastconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_forecastdefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_forecastinstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_forecastrecurrence: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_forecastsettingsandsummary: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_formmapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_function: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_geofence: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_geofenceevent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_geofencingsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_geolocationsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_geolocationtracking: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_icdextension: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_icebreakersconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iermlmodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iermltraining: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inboxcardconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inboxconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inboxentityconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttype: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttypecharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttypeproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttyperecommendationresult: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttyperecommendationrunhistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttyperesolution: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttypeservice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttypeservicetask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttypessetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttype_requirementgroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inspection: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inspectionattachment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inspectiondefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inspectioninstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inspectionresponse: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_insurance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_integratedsearchprovider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intentattribute: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intentattributeset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intentattribute_entity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intentconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intententity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intentfamily: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intentfeature_configuration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intentgroupcondition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intentharvesting_batchjobstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intentharvesting_provisioning_status: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intentsolutionmap: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_intentsolution_mappingconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inventoryadjustment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inventoryadjustmentproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inventoryjournal: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inventorytransfer: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevicecategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevicecommand: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevicecommanddefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevicedatahistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdeviceproperty: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdeviceregistrationhistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevicevisualizationconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotfieldmapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotpropertydefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotprovider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotproviderinstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_kalanguagesetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_kbattachment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_kmfederatedsearchconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgearticleimage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgearticletemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgeconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgeinteractioninsight: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgemanagementsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgepersonalfilter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgesearchfilter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgesearchinsight: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_kpieventdata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_kpieventdefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_leadhygienesetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_leadmodelconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_liveworkitemevent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_liveworkstreamcapacityprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_localizedsurveyquestion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_locationtemplateassociation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_lockstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_macrosession: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_maskingrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_masterentityroutingconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_migrationtracker: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_mobileapp: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_mobilesource: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_modelpreviewstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_modulerundetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_notificationfield: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_notificationtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_nottoexceed: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocagentassignedcustomapiprivilege: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocapplebusinessaccount: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocapplepay: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocautoblockrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocautomatedactionrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocautomatedactionrulesmapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocbotchannelregistration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocbotchannelregistrationsecret: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occarrier: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occhannelapiconversationprivilege: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occhannelapimessageprivilege: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occhannelapimethodmapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occhannelconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occhannelstateconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occommunicationprovidersetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occommunicationprovidersettingentry: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occustommessagingchannel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocexternalcontext: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocfbapplication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocfbpage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocflaggedspam: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocgatekeeperengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocgooglebusinessmessagesagentaccount: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocgooglebusinessmessagesengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocgooglebusinessmessagespartneraccount: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_oclanguage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_oclinechannelconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocliveworkitemcapacityprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocliveworkitemcharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocliveworkitemcontextitem: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocliveworkitemparticipant: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocliveworkstreamcontextvariable: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_oclocalizationdata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocoutboundconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocoutboundmessage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocpaymentprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocphonenumber: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocprovisioningstate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocrecording: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocrequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocrichobject: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocrichobjectmap: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsentimentdailytopic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsentimentdailytopickeyword: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsentimentdailytopictrending: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsession: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsessioncharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsessionparticipantevent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsimltraining: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsitdimportconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsitdskill: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsitrainingdata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocskillidentmlmodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsmschannelsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsmssettingsecret: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsystemmessage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_octeamschannelconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_octwitterapplication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_octwitterhandle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_octwitterhandleprovisioningstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_octwitterhandlesecret: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocvoice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocvoicechannellanguagesetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocvoicemail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocwechatchannelconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocwhatsappchannelaccount: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocwhatsappchannelnumber: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_oc_geolocationprovider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_omnichannelconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_omnichannelsyncconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_opportunitymodelconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderinvoicingdate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderinvoicingproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderinvoicingsetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderinvoicingsetupdate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_organizationalunit: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orgchartnode: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_overflowactionconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_paneconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_panetabconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_panetoolconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_payment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_paymentdetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_paymentmethod: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_paymentterm: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_personalmessage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_personalsoundsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_personasecurityrolemapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_playbookactivity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_playbookactivityattribute: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_playbookcategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_playbookinstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_playbooktemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmanalysishistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmbusinessruleautomationconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmcalendar: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmcalendarversion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pminferredtask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmprocessextendedmetadataversion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmprocesstemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmprocessusersettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmprocessversion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmrecording: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmsimulation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmview: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_postalbum: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_postalcode: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_predictioncomputationoperation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_predictionmodelstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_predictionscheduledoperation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_predictivemodelscore: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_predictivescore: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_predictivescoringsyncstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_preferredagent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_preferredagentcustomeridentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_preferredagentroutedentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_presence: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_priority: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_problematicasset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_problematicassetfeedback: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productinventory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivityactioninputparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivityactionoutputparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivityagentscript: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivityagentscriptstep: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivitymacroactiontemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivitymacroconnector: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivitymacrosolutionconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivityparameterdefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_propertylocationassociation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_provider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_purchaseorder: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_purchaseorderbill: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_purchaseorderreceipt: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_purchaseorderreceiptproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_purchaseordersubstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotebookingincident: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotebookingproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotebookingservice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotebookingservicetask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotebookingsetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quoteinvoicingproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quoteinvoicingsetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rawinsightentitylink: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_realtimescoring: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_realtimescoringoperation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_recomputetracker: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_recording: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_relationshipinsightsunifiedconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_reportbookmark: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementcharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementdependency: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementgroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementorganizationunit: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementrelationship: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementresourcecategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementresourcepreference: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resolution: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resourcerequirement: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resourcerequirementdetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resourceterritory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rma: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rmareceipt: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rmareceiptproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rmasubstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_routingconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_routingconfigurationstep: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_routingrequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_routingrulesetsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rtv: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rtvproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rtvsubstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rulesetdependencymapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sabackupdiagnostic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sabatchruninstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salesaccelerationinsight: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salesaccelerationsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salescopilotinsight: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salescopilotorgsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salescopilotusersetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salesinsightssettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salesocmessage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salesocsmstemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salesroutingdiagnostic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salesroutingrun: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salessuggestion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salestag: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_saruninstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_scenario: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_schedule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_scheduleboardsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_schedulingfeatureflag: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sciconversation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_scicustomemailhighlight: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_scicustomhighlight: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_scicustompublisher: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_scienvironmentsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sciusersettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_segment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_segmentationsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_segmentattribute: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sentimentanalysis: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sequence: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sequencetarget: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_serviceconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_servicecopilotplugin: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_servicecopilotpluginaction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_servicecopilotpluginrole: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_serviceoneprovisioningrequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_servicetasktype: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sessiondata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sessionevent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sessionparticipant: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sessionparticipantdata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sessiontemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_shipvia: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_siconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_skillattachmentruleitem: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_skillattachmenttarget: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_slakpi: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_smartassistconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_smsnumber: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_solutionhealthrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_solutionhealthruleargument: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_solutionhealthruleset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_soundfile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_soundnotificationsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_submodeldefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_suggestionassignmentrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_suggestionsellerpriority: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_surveyconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_surveysetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarm: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarmparticipant: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarmparticipantrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarmrole: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarmskill: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarmtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_systemuserschedulersetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_taggedrecord: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_taxcode: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_taxcodedetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_teamschannelengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_teamsdialeradminsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_teamsengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_templateparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_templateruleset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_templatetags: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_timeentrysetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_timegroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_timegroupdetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_timeoffrequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_timespent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_trade: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_tradecoverage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_trainingresult: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_transactionorigin: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_twitterengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_unifiedroutingdiagnostic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_unifiedroutingrun: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_unifiedroutingsetuptracker: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_untrackedappointment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_urnotificationtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_urnotificationtemplatemapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_virtualtablecolumncandidate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_vivacustomerlist: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_vivaentitysetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_vivaorgextensioncred: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_vivaorgsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_vivausersetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_voicechannelorganizationsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_warehouse: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_wkwcolleaguesforcompany: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_wkwcolleaguesforcontact: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_wkwconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workhourtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_worklistviewconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorder: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workordercharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderdetailsgenerationqueue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderincident: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workordernte: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderresolution: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderresourcerestriction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderservice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderservicetask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workordersubstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workordertype: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workqueuestate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workqueueusersetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workstreamhmmigrationstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msevtmgt_customregistrationfield: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msevtmgt_eventpurchasecontact: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msevtmgt_eventteamsproperties: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msevtmgt_registrationresponse: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msevtmgt_webapplication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msevtmgt_websiteentityconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msfp_alert: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msfp_alertrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msfp_fileresponse: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msfp_surveyreminder: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msgdpr_gdprconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msgdpr_gdprconsentchangerecord: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_mspcat_catalogsubmissionfiles: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_mspcat_packagestore: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_opportunity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_organizationdatasyncfnostate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_organizationdatasyncstate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_organizationdatasyncsubscription: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_organizationdatasyncsubscriptionentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_organizationdatasyncsubscriptionfnotable: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_package: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_packagehistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_phonecall: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_powerbidataset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_powerbidatasetapdx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_powerbimashupparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_powerbireport: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_powerbireportapdx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_powerfxrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_powerpagesmanagedidentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_powerpagesscanreport: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_privilegesremovalsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_publisher: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_queue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_quote: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_ratingmodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_ratingvalue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_reconciliationinfo: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_recordfilter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_recurringappointmentmaster: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_reportparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_resourcegroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_retaineddataexcel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_retentioncleanupinfo: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_retentioncleanupoperation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_retentionconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_retentionfailuredetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_retentionoperation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_retentionsuccessdetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_revokeinheritedaccessrecordstracker: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_roleeditorlayout: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_searchattributesettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_searchcustomanalyzer: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_searchrelationshipsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_service: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_serviceplan: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_serviceplancustomcontrol: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_serviceplanmapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_sharedlinksetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_sharepointdocumentlocation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_sharepointsite: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_socialactivity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_socialprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_solutioncomponentattributeconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_solutioncomponentbatchconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_solutioncomponentconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_solutioncomponentrelationshipconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_stagesolutionupload: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_supportusertable: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapsedatabase: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapselinkexternaltablestate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapselinkprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapselinkprofileentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapselinkprofileentitystate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapselinkschedule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_systemuser: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_task: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_tdsmetadata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_team: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_territory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_transactioncurrency: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_userrating: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_workqueue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_workqueueitem: string;
			/** Date and time when the duplicate record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the duplicate record. */
			readonly DuplicateId: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_account: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_activityfileattachment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_activitymonitor: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_adminsettingsentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_adx_invitation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_adx_inviteredemption: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_aicopilot: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_aipluginauth: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_aipluginoperationparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_aipluginoperationresponsetemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_aiplugintitle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_aipluginusersetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_applicationuser: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_appointment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_archivecleanupinfo: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_archivecleanupoperation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresource: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcebooking: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcebookingheader: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcecategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcecategoryassn: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcecharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcegroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookingstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bulkarchiveconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bulkarchivefailuredetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bulkarchiveoperation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_c360_configuration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_campaign: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_campaignresponse: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_canvasappextendedmetadata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_card: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_cascadegrantrevokeaccessrecordstracker: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_cascadegrantrevokeaccessversiontracker: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_catalogassignment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_certificatecredential: string;
			/** Unique identifier of the potential duplicate record. */
			readonly channelaccessprofile_duplicatematchingrecord: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_characteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_competitor: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_connectioninstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_connector: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_contact: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_contract: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_conversationtranscript: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_credential: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_datalakefolder: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_datalakefolderpermission: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_datalakeworkspace: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_datalakeworkspacepermission: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_dataprocessingconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_deleteditemreference: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_desktopflowmodule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_email: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_emailserverprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_enablearchivalrequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_entitlement: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_entitlementchannel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_entitlemententityallocationtypemapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_entitlementtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_entityrecordfilter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_environmentvariabledefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_environmentvariablevalue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_equipment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_exportedexcel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_exportsolutionupload: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_fax: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_featurecontrolsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_feedback: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_flowcredentialapplication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_flowevent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_flowmachinegroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_flowmachineimage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_flowmachineimageversion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_flowmachinenetwork: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_fxexpression: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_goal: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_goalrollupquery: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_governanceconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_incident: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_kbarticle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_keyvaultreference: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_knowledgearticle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_knowledgebaserecord: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_lead: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_letter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_list: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_managedidentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_marketingformdisplayattributes: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_maskingrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_addtocalendarstyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_appointmentactivitymarketingtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_basestyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_buttonstyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_cdsaconnectorconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_codestyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_columnstyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_contentblock: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_contentblockstyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_contentsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_customerinsightsinfo: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_customerjourneycustomchannelactivity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_customerjourneyiteration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_customerjourneyworkflowlink: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_deprecatedcustomtileactivity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_designerfeatureavailability: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_digitalassetsconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_dividerstyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_emailkeypoint: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_featureconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_file: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_generalstyles: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_gpt3log: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_gwennolfeatureconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_gwennolspamscoreactivity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_gwennolspamscorerequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_imagestyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_keyword: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_layoutstyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_leadentityfield: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_leadscoremodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_leadscoringconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedinaccount: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedinactivity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedinaudience: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedincampaign: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedinconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedinfieldmapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedinform: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedinformanswer: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedinformquestion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedinformsubmission: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedinleadmatchingstrategy: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_linkedinuserprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_listform: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_liveentitydependency: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_marketingconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_marketingdataimport: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_marketingdynamiccontentmetadata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_marketingemaildynamiccontentmetadata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_marketingemailtestattribute: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_marketingemailtestsend: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_marketingformfield: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_marketingformwhitelistrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_matchingstrategyattribute: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_mktactivity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_networkpage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_personalizedpage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_personalizedpagefield: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_phonecallactivitymarketingtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_postingishts: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_qrcodestyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_quicksendemail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_quotainfoentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_reaction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_segmentactivity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_socialpostingconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_socialpostingconsent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_sourceactivity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_tag: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_taskactivitymarketingtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_textstyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_uicconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_usersetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_video: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyncrm_videostyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_aimodelversion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_apsconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_brandprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_brandsender: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_brandtheme: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_buttonstyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_captcha: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_catalogeventstatusconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_cmsaddon: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_compliancesettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_compliancesettings3: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_compliancesettings4: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_configuration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_consent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_consentcenterconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_consentprovider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_consentproviderdefaultconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_consentproviderdefaultpurpose: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_consentsystemconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_contactpointconsent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_contactpointconsent2: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_contactpointconsent3: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_contactpointconsent4: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_contactpointsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_conversioneventdefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_createdentitylink: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_customchannelmessage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_customerdatamapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_customerdataselection: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_entityscoringmodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_eventmetadata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_eventparametermetadata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_experiment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_experimentv2: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_featureconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_formsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_formtargetaudience: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_fragment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_frequencycap: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_gdprrequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_imagestyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_journey: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_journeydependency: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_journeyevent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_journeyoptimizationcount: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_journeyrunparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_journeytemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_keyword: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_marketingfieldsubmission: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_marketingformfield: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_marketingformsubmission: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_matchingstrategy: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_matchingstrategyattribute: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_metadataentityrelationship: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_metadataitem: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_metadatastorestate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_mobiledevice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_predefinedplaceholder: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_preferencecenter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_preferencecenterlink: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_purpose: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_pushdeviceregistrationresult: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_pushmobiledevice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_qrcodestyle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_quiettimesetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_recaptchaconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_segment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_segmentdefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_segmentexecution: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_segmentusage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_sms: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_submitbutton: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_tag: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_teamsengagement: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_topic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_utmtracking: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdynmkt_webinaremailjourney: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_actioncardactionstat: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_actioncardregarding: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_actioncardstataggregation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_activeicdextension: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_actual: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agentcapacityprofileunit: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agentcapacityupdatehistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agentchannelstate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agentcopilotsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agentgroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agentgroupmembership: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agentresourceforecasting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agentstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agentstatushistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreement: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingdate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingincident: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingservice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingservicetask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingsetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementinvoicedate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementinvoiceproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementinvoicesetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementsubstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibdataset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibdatasetfile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibdatasetrecord: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibdatasetscontainer: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibfeedbackloop: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibfile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibfileattacheddata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aievent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aiodimage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aiodlabel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aiodtrainingboundingbox: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aiodtrainingimage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_analysiscomponent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_analysisjob: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_analysisoverride: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_analysisresult: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_analysisresultdetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_analytics: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_apirequestcache: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_apirequestfolder: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_appconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_appcopilotconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_appinsightsmetadata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_applicationextension: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_applicationtabtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_appprofilerolemapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_appstate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_assignmentconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_assignmentconfigurationstep: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_attribute: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_attributeinfluencestatistics: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_attributevalue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_authsettingsentry: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_autocapturerule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_autocapturesettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_autonomouscasecreationrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookableresourceassociation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookableresourcebookingquicknote: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookableresourcecapacityprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookingalert: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookingalertstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookingrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookingtimestamp: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_botsession: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_callablecontext: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_cannedmessage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_capacityprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channelcapability: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channeldefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channeldefinitionconsent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channeldefinitionlocale: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channelinstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channelinstanceaccount: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channelinstancesecret: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channelmessageattachment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channelmessagecontextpart: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channelmessagepart: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channelprovider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_chatwidgetlanguage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ciprovider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_clientextension: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_collabspaceteamassociation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationnotificationfield: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationnotificationtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationsessiontemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationtemplateparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationtype: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consumingapplication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_contactsuggestionrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_contactsuggestionruleset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationaction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationactionitem: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationactionlocale: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationaggregatedinsights: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationcomment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationdata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationmessageblock: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationparticipantinsights: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationparticipantsentiment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationquestion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationsegmentsentiment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationsentiment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationsignal: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationsubject: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationsummarysuggestion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationsystemtag: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationtag: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_copilotagentpreference: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_copilotinteraction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_copilotinteractiondata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_copilotinteractions: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_copilotsummarizationsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_copilottranscript: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_copilottranscriptdata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_crmconnection: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_csadminconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customapirulesetconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customcontrolextendedsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customerasset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customerassetattachment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customerassetcategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customeremailcommunication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customerfeedbacksurvey: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customerfeedbacksurveyinvite: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customerfeedbacksurveyresponse: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataanalyticsdataset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataanalyticsreport_fs: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataanalyticsreport_fspredictrs: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataanalyticsreport_fspredictwhd: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataanalyticsreport_mkt: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataanalyticsworkspace: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataflow: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataflowconnectionreference: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataflowrefreshhistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataflow_datalakefolder: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_datahygienesettinginfo: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dealmanageraccess: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dealmanagersettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_decisioncontract: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_decisionruleset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_defextendedchannelinstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_defextendedchannelinstanceaccount: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_deletedconversation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_digitalsellingactivetask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_digitalsellingcompletedtask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dmsrequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dmsrequeststatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_duplicatedetectionpluginrun: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_duplicateleadmapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_effortpredictionresult: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_entitlementapplication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_entityattachment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_entityattributepredictionrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_entityconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_entitylinkchatconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_entityrefreshhistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_entityworkstreammap: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_externalcrm: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_externalrecord: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_favoriteknowledgearticle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_federatedarticle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_federatedarticleincident: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_fieldservicepricelistitem: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_fileupload: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flowcardtype: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flow_actionapprovalmodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flow_approval: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flow_approvalrequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flow_approvalresponse: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flow_approvalstep: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flow_awaitallapprovalmodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flow_basicapprovalmodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flow_flowapproval: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flwconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_forecastconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_forecastdefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_forecastinstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_forecastrecurrence: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_forecastsettingsandsummary: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_formmapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_function: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_geofence: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_geofenceevent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_geofencingsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_geolocationsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_geolocationtracking: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_icdextension: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_icebreakersconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iermlmodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iermltraining: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inboxcardconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inboxconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inboxentityconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttype: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttypecharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttypeproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttyperecommendationresult: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttyperecommendationrunhistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttyperesolution: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttypeservice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttypeservicetask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttypessetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttype_requirementgroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inspection: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inspectionattachment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inspectiondefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inspectioninstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inspectionresponse: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_insurance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_integratedsearchprovider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intentattribute: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intentattributeset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intentattribute_entity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intentconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intententity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intentfamily: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intentfeature_configuration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intentgroupcondition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intentharvesting_batchjobstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intentharvesting_provisioning_status: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intentsolutionmap: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_intentsolution_mappingconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inventoryadjustment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inventoryadjustmentproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inventoryjournal: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inventorytransfer: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevicecategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevicecommand: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevicecommanddefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevicedatahistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdeviceproperty: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdeviceregistrationhistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevicevisualizationconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotfieldmapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotpropertydefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotprovider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotproviderinstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_kalanguagesetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_kbattachment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_kmfederatedsearchconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgearticleimage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgearticletemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgeconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgeinteractioninsight: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgemanagementsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgepersonalfilter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgesearchfilter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgesearchinsight: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_kpieventdata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_kpieventdefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_leadhygienesetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_leadmodelconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_liveworkitemevent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_liveworkstreamcapacityprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_localizedsurveyquestion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_locationtemplateassociation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_lockstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_macrosession: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_maskingrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_masterentityroutingconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_migrationtracker: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_mobileapp: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_mobilesource: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_modelpreviewstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_modulerundetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_notificationfield: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_notificationtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_nottoexceed: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocagentassignedcustomapiprivilege: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocapplebusinessaccount: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocapplepay: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocautoblockrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocautomatedactionrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocautomatedactionrulesmapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocbotchannelregistration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocbotchannelregistrationsecret: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occarrier: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occhannelapiconversationprivilege: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occhannelapimessageprivilege: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occhannelapimethodmapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occhannelconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occhannelstateconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occommunicationprovidersetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occommunicationprovidersettingentry: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occustommessagingchannel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocexternalcontext: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocfbapplication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocfbpage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocflaggedspam: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocgatekeeperengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocgooglebusinessmessagesagentaccount: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocgooglebusinessmessagesengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocgooglebusinessmessagespartneraccount: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_oclanguage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_oclinechannelconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocliveworkitemcapacityprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocliveworkitemcharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocliveworkitemcontextitem: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocliveworkitemparticipant: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocliveworkstreamcontextvariable: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_oclocalizationdata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocoutboundconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocoutboundmessage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocpaymentprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocphonenumber: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocprovisioningstate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocrecording: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocrequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocrichobject: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocrichobjectmap: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsentimentdailytopic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsentimentdailytopickeyword: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsentimentdailytopictrending: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsession: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsessioncharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsessionparticipantevent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsimltraining: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsitdimportconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsitdskill: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsitrainingdata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocskillidentmlmodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsmschannelsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsmssettingsecret: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsystemmessage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_octeamschannelconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_octwitterapplication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_octwitterhandle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_octwitterhandleprovisioningstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_octwitterhandlesecret: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocvoice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocvoicechannellanguagesetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocvoicemail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocwechatchannelconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocwhatsappchannelaccount: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocwhatsappchannelnumber: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_oc_geolocationprovider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_omnichannelconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_omnichannelsyncconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_opportunitymodelconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderinvoicingdate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderinvoicingproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderinvoicingsetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderinvoicingsetupdate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_organizationalunit: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orgchartnode: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_overflowactionconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_paneconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_panetabconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_panetoolconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_payment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_paymentdetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_paymentmethod: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_paymentterm: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_personalmessage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_personalsoundsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_personasecurityrolemapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_playbookactivity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_playbookactivityattribute: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_playbookcategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_playbookinstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_playbooktemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmanalysishistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmbusinessruleautomationconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmcalendar: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmcalendarversion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pminferredtask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmprocessextendedmetadataversion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmprocesstemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmprocessusersettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmprocessversion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmrecording: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmsimulation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmview: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_postalbum: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_postalcode: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_predictioncomputationoperation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_predictionmodelstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_predictionscheduledoperation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_predictivemodelscore: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_predictivescore: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_predictivescoringsyncstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_preferredagent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_preferredagentcustomeridentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_preferredagentroutedentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_presence: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_priority: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_problematicasset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_problematicassetfeedback: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productinventory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivityactioninputparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivityactionoutputparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivityagentscript: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivityagentscriptstep: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivitymacroactiontemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivitymacroconnector: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivitymacrosolutionconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivityparameterdefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_propertylocationassociation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_provider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_purchaseorder: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_purchaseorderbill: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_purchaseorderreceipt: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_purchaseorderreceiptproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_purchaseordersubstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotebookingincident: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotebookingproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotebookingservice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotebookingservicetask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotebookingsetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quoteinvoicingproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quoteinvoicingsetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rawinsightentitylink: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_realtimescoring: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_realtimescoringoperation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_recomputetracker: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_recording: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_relationshipinsightsunifiedconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_reportbookmark: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementcharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementdependency: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementgroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementorganizationunit: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementrelationship: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementresourcecategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementresourcepreference: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resolution: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resourcerequirement: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resourcerequirementdetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resourceterritory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rma: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rmareceipt: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rmareceiptproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rmasubstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_routingconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_routingconfigurationstep: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_routingrequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_routingrulesetsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rtv: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rtvproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rtvsubstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rulesetdependencymapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sabackupdiagnostic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sabatchruninstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salesaccelerationinsight: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salesaccelerationsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salescopilotinsight: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salescopilotorgsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salescopilotusersetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salesinsightssettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salesocmessage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salesocsmstemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salesroutingdiagnostic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salesroutingrun: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salessuggestion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salestag: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_saruninstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_scenario: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_schedule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_scheduleboardsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_schedulingfeatureflag: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sciconversation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_scicustomemailhighlight: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_scicustomhighlight: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_scicustompublisher: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_scienvironmentsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sciusersettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_segment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_segmentationsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_segmentattribute: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sentimentanalysis: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sequence: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sequencetarget: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_serviceconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_servicecopilotplugin: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_servicecopilotpluginaction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_servicecopilotpluginrole: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_serviceoneprovisioningrequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_servicetasktype: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sessiondata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sessionevent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sessionparticipant: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sessionparticipantdata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sessiontemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_shipvia: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_siconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_skillattachmentruleitem: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_skillattachmenttarget: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_slakpi: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_smartassistconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_smsnumber: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_solutionhealthrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_solutionhealthruleargument: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_solutionhealthruleset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_soundfile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_soundnotificationsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_submodeldefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_suggestionassignmentrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_suggestionsellerpriority: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_surveyconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_surveysetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarm: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarmparticipant: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarmparticipantrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarmrole: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarmskill: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarmtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_systemuserschedulersetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_taggedrecord: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_taxcode: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_taxcodedetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_teamschannelengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_teamsdialeradminsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_teamsengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_templateparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_templateruleset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_templatetags: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_timeentrysetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_timegroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_timegroupdetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_timeoffrequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_timespent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_trade: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_tradecoverage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_trainingresult: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_transactionorigin: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_twitterengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_unifiedroutingdiagnostic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_unifiedroutingrun: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_unifiedroutingsetuptracker: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_untrackedappointment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_urnotificationtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_urnotificationtemplatemapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_virtualtablecolumncandidate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_vivacustomerlist: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_vivaentitysetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_vivaorgextensioncred: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_vivaorgsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_vivausersetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_voicechannelorganizationsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_warehouse: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_wkwcolleaguesforcompany: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_wkwcolleaguesforcontact: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_wkwconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workhourtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_worklistviewconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorder: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workordercharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderdetailsgenerationqueue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderincident: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workordernte: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderresolution: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderresourcerestriction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderservice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderservicetask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workordersubstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workordertype: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workqueuestate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workqueueusersetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workstreamhmmigrationstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msevtmgt_customregistrationfield: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msevtmgt_eventpurchasecontact: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msevtmgt_eventteamsproperties: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msevtmgt_registrationresponse: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msevtmgt_webapplication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msevtmgt_websiteentityconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msfp_alert: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msfp_alertrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msfp_fileresponse: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msfp_surveyreminder: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msgdpr_gdprconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msgdpr_gdprconsentchangerecord: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_mspcat_catalogsubmissionfiles: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_mspcat_packagestore: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_opportunity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_organizationdatasyncfnostate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_organizationdatasyncstate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_organizationdatasyncsubscription: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_organizationdatasyncsubscriptionentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_organizationdatasyncsubscriptionfnotable: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_package: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_packagehistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_phonecall: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_powerbidataset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_powerbidatasetapdx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_powerbimashupparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_powerbireport: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_powerbireportapdx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_powerfxrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_powerpagesmanagedidentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_powerpagesscanreport: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_privilegesremovalsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_publisher: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_queue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_quote: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_ratingmodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_ratingvalue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_reconciliationinfo: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_recordfilter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_recurringappointmentmaster: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_reportparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_resourcegroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_retaineddataexcel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_retentioncleanupinfo: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_retentioncleanupoperation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_retentionconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_retentionfailuredetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_retentionoperation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_retentionsuccessdetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_revokeinheritedaccessrecordstracker: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_roleeditorlayout: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_searchattributesettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_searchcustomanalyzer: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_searchrelationshipsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_service: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_serviceplan: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_serviceplancustomcontrol: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_serviceplanmapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_sharedlinksetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_sharepointdocumentlocation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_sharepointsite: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_socialactivity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_socialprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_solutioncomponentattributeconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_solutioncomponentbatchconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_solutioncomponentconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_solutioncomponentrelationshipconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_stagesolutionupload: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_supportusertable: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapsedatabase: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapselinkexternaltablestate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapselinkprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapselinkprofileentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapselinkprofileentitystate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapselinkschedule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_systemuser: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_task: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_tdsmetadata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_team: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_territory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_transactioncurrency: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_userrating: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_workqueue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_workqueueitem: string;
			/** Unique identifier of the duplicate rule against which this duplicate was found. */
			readonly DuplicateRuleId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the duplicate record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the duplicate record. */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
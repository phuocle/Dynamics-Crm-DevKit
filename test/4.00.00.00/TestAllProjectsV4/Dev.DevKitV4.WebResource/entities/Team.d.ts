//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKitV4 {
	namespace FormTeam {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the default queue for the team. */
			QueueId: DevKit.Controls.Lookup;
		}
		interface tab_general_Sections {
			Description: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
			TeamMembers: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Controls.Lookup;
			/** The object Id for a group. */
			AzureActiveDirectoryObjectId: DevKit.Controls.String;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Description of the team. */
			Description: DevKit.Controls.String;
			MembershipType: DevKit.Controls.OptionSet;
			/** Name of the team. */
			Name: DevKit.Controls.String;
			/** Select the team type. */
			TeamType: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			adx_inviteredemption_team_owningteam: DevKit.Controls.NavigationItem;
			adx_portalcomment_team_owningteam: DevKit.Controls.NavigationItem;
			msfp_alert_team_owningteam: DevKit.Controls.NavigationItem;
			msfp_surveyinvite_team_owningteam: DevKit.Controls.NavigationItem;
			msfp_surveyresponse_team_owningteam: DevKit.Controls.NavigationItem;
			team_accounts: DevKit.Controls.NavigationItem;
			team_activityfileattachment: DevKit.Controls.NavigationItem;
			team_adx_invitation: DevKit.Controls.NavigationItem;
			team_adx_setting: DevKit.Controls.NavigationItem;
			team_aiinsightcard: DevKit.Controls.NavigationItem;
			team_aiplugin: DevKit.Controls.NavigationItem;
			team_aipluginauth: DevKit.Controls.NavigationItem;
			team_aipluginconversationstarter: DevKit.Controls.NavigationItem;
			team_aipluginconversationstartermapping: DevKit.Controls.NavigationItem;
			team_aipluginexternalschema: DevKit.Controls.NavigationItem;
			team_aipluginexternalschemaproperty: DevKit.Controls.NavigationItem;
			team_aiplugingovernance: DevKit.Controls.NavigationItem;
			team_aiplugingovernanceext: DevKit.Controls.NavigationItem;
			team_aiplugininstance: DevKit.Controls.NavigationItem;
			team_aipluginoperation: DevKit.Controls.NavigationItem;
			team_aipluginoperationparameter: DevKit.Controls.NavigationItem;
			team_aipluginoperationresponsetemplate: DevKit.Controls.NavigationItem;
			team_aipluginusersetting: DevKit.Controls.NavigationItem;
			team_aiskillconfig: DevKit.Controls.NavigationItem;
			team_appnotification: DevKit.Controls.NavigationItem;
			team_appointment: DevKit.Controls.NavigationItem;
			team_approvalprocess: DevKit.Controls.NavigationItem;
			team_approvalstageapproval: DevKit.Controls.NavigationItem;
			team_approvalstagecondition: DevKit.Controls.NavigationItem;
			team_approvalstageintelligent: DevKit.Controls.NavigationItem;
			team_approvalstageorder: DevKit.Controls.NavigationItem;
			team_archivecleanupinfo: DevKit.Controls.NavigationItem;
			team_archivecleanupoperation: DevKit.Controls.NavigationItem;
			team_bot: DevKit.Controls.NavigationItem;
			team_botcomponent: DevKit.Controls.NavigationItem;
			team_botcomponentcollection: DevKit.Controls.NavigationItem;
			team_bulkarchiveconfig: DevKit.Controls.NavigationItem;
			team_bulkarchivefailuredetail: DevKit.Controls.NavigationItem;
			team_bulkarchiveoperation: DevKit.Controls.NavigationItem;
			team_businessprocess: DevKit.Controls.NavigationItem;
			team_businessprocesslinkedartifact: DevKit.Controls.NavigationItem;
			team_canvasappextendedmetadata: DevKit.Controls.NavigationItem;
			team_card: DevKit.Controls.NavigationItem;
			team_certificatecredential: DevKit.Controls.NavigationItem;
			team_channelaccessprofile: DevKit.Controls.NavigationItem;
			team_comment: DevKit.Controls.NavigationItem;
			team_componentversion: DevKit.Controls.NavigationItem;
			team_connectioninstance: DevKit.Controls.NavigationItem;
			team_connectionreference: DevKit.Controls.NavigationItem;
			team_connector: DevKit.Controls.NavigationItem;
			team_contacts: DevKit.Controls.NavigationItem;
			team_conversationtranscript: DevKit.Controls.NavigationItem;
			team_convertrule: DevKit.Controls.NavigationItem;
			team_copilotglossaryterm: DevKit.Controls.NavigationItem;
			team_copilotsynonyms: DevKit.Controls.NavigationItem;
			team_credential: DevKit.Controls.NavigationItem;
			team_customapi: DevKit.Controls.NavigationItem;
			team_datalakefolder: DevKit.Controls.NavigationItem;
			team_desktopflowbinary: DevKit.Controls.NavigationItem;
			team_desktopflowmodule: DevKit.Controls.NavigationItem;
			team_dvfilesearch: DevKit.Controls.NavigationItem;
			team_dvfilesearchattribute: DevKit.Controls.NavigationItem;
			team_dvfilesearchentity: DevKit.Controls.NavigationItem;
			team_dvtablesearch: DevKit.Controls.NavigationItem;
			team_dvtablesearchattribute: DevKit.Controls.NavigationItem;
			team_dvtablesearchentity: DevKit.Controls.NavigationItem;
			team_email: DevKit.Controls.NavigationItem;
			team_email_templates: DevKit.Controls.NavigationItem;
			team_emailserverprofile: DevKit.Controls.NavigationItem;
			team_enablearchivalrequest: DevKit.Controls.NavigationItem;
			team_environmentvariabledefinition: DevKit.Controls.NavigationItem;
			team_exchangesyncidmapping: DevKit.Controls.NavigationItem;
			team_exportedexcel: DevKit.Controls.NavigationItem;
			team_exportsolutionupload: DevKit.Controls.NavigationItem;
			team_externalparty: DevKit.Controls.NavigationItem;
			team_fabricaiskill: DevKit.Controls.NavigationItem;
			team_featurecontrolsetting: DevKit.Controls.NavigationItem;
			team_federatedknowledgecitation: DevKit.Controls.NavigationItem;
			team_federatedknowledgeconfiguration: DevKit.Controls.NavigationItem;
			team_federatedknowledgeentityconfiguration: DevKit.Controls.NavigationItem;
			team_federatedknowledgemetadatarefresh: DevKit.Controls.NavigationItem;
			team_flowaggregation: DevKit.Controls.NavigationItem;
			team_flowcapacityassignment: DevKit.Controls.NavigationItem;
			team_flowcredentialapplication: DevKit.Controls.NavigationItem;
			team_flowevent: DevKit.Controls.NavigationItem;
			team_flowmachine: DevKit.Controls.NavigationItem;
			team_flowmachinegroup: DevKit.Controls.NavigationItem;
			team_flowmachineimage: DevKit.Controls.NavigationItem;
			team_flowmachineimageversion: DevKit.Controls.NavigationItem;
			team_flowmachinenetwork: DevKit.Controls.NavigationItem;
			team_flowrun: DevKit.Controls.NavigationItem;
			team_flowsession: DevKit.Controls.NavigationItem;
			team_fxexpression: DevKit.Controls.NavigationItem;
			team_goal: DevKit.Controls.NavigationItem;
			team_goal_goalowner: DevKit.Controls.NavigationItem;
			team_goalrollupquery: DevKit.Controls.NavigationItem;
			team_governanceconfiguration: DevKit.Controls.NavigationItem;
			team_indexedtrait: DevKit.Controls.NavigationItem;
			team_intelligentmemory: DevKit.Controls.NavigationItem;
			team_interactionforemail: DevKit.Controls.NavigationItem;
			team_keyvaultreference: DevKit.Controls.NavigationItem;
			team_knowledgearticle: DevKit.Controls.NavigationItem;
			team_knowledgefaq: DevKit.Controls.NavigationItem;
			team_mailbox: DevKit.Controls.NavigationItem;
			team_mailboxtrackingcategory: DevKit.Controls.NavigationItem;
			team_managedidentity: DevKit.Controls.NavigationItem;
			team_msdyn_aibdataset: DevKit.Controls.NavigationItem;
			team_msdyn_aibdatasetfile: DevKit.Controls.NavigationItem;
			team_msdyn_aibdatasetrecord: DevKit.Controls.NavigationItem;
			team_msdyn_aibdatasetscontainer: DevKit.Controls.NavigationItem;
			team_msdyn_aibfeedbackloop: DevKit.Controls.NavigationItem;
			team_msdyn_aibfile: DevKit.Controls.NavigationItem;
			team_msdyn_aibfileattacheddata: DevKit.Controls.NavigationItem;
			team_msdyn_aiconfigurationsearch: DevKit.Controls.NavigationItem;
			team_msdyn_aidataprocessingevent: DevKit.Controls.NavigationItem;
			team_msdyn_aidocumenttemplate: DevKit.Controls.NavigationItem;
			team_msdyn_aievaluationconfiguration: DevKit.Controls.NavigationItem;
			team_msdyn_aievaluationrun: DevKit.Controls.NavigationItem;
			team_msdyn_aievent: DevKit.Controls.NavigationItem;
			team_msdyn_aifptrainingdocument: DevKit.Controls.NavigationItem;
			team_msdyn_aimodel: DevKit.Controls.NavigationItem;
			team_msdyn_aimodelcatalog: DevKit.Controls.NavigationItem;
			team_msdyn_aiodimage: DevKit.Controls.NavigationItem;
			team_msdyn_aiodlabel: DevKit.Controls.NavigationItem;
			team_msdyn_aiodtrainingboundingbox: DevKit.Controls.NavigationItem;
			team_msdyn_aiodtrainingimage: DevKit.Controls.NavigationItem;
			team_msdyn_aioptimization: DevKit.Controls.NavigationItem;
			team_msdyn_aioptimizationprivatedata: DevKit.Controls.NavigationItem;
			team_msdyn_aitemplate: DevKit.Controls.NavigationItem;
			team_msdyn_aitestcase: DevKit.Controls.NavigationItem;
			team_msdyn_aitestcasedocument: DevKit.Controls.NavigationItem;
			team_msdyn_aitestcaseinput: DevKit.Controls.NavigationItem;
			team_msdyn_aitestrun: DevKit.Controls.NavigationItem;
			team_msdyn_aitestrunbatch: DevKit.Controls.NavigationItem;
			team_msdyn_analysiscomponent: DevKit.Controls.NavigationItem;
			team_msdyn_analysisjob: DevKit.Controls.NavigationItem;
			team_msdyn_analysisoverride: DevKit.Controls.NavigationItem;
			team_msdyn_analysisresult: DevKit.Controls.NavigationItem;
			team_msdyn_analysisresultdetail: DevKit.Controls.NavigationItem;
			team_msdyn_apirequestcache: DevKit.Controls.NavigationItem;
			team_msdyn_apirequestfolder: DevKit.Controls.NavigationItem;
			team_msdyn_copilotinteractions: DevKit.Controls.NavigationItem;
			team_msdyn_customcontrolextendedsettings: DevKit.Controls.NavigationItem;
			team_msdyn_dataflow: DevKit.Controls.NavigationItem;
			team_msdyn_dataflow_datalakefolder: DevKit.Controls.NavigationItem;
			team_msdyn_dataflowconnectionreference: DevKit.Controls.NavigationItem;
			team_msdyn_dataflowrefreshhistory: DevKit.Controls.NavigationItem;
			team_msdyn_dataflowtemplate: DevKit.Controls.NavigationItem;
			team_msdyn_dataworkspace: DevKit.Controls.NavigationItem;
			team_msdyn_dmsrequest: DevKit.Controls.NavigationItem;
			team_msdyn_dmsrequeststatus: DevKit.Controls.NavigationItem;
			team_msdyn_dmssyncrequest: DevKit.Controls.NavigationItem;
			team_msdyn_dmssyncstatus: DevKit.Controls.NavigationItem;
			team_msdyn_entitylinkchatconfiguration: DevKit.Controls.NavigationItem;
			team_msdyn_entityrefreshhistory: DevKit.Controls.NavigationItem;
			team_msdyn_favoriteknowledgearticle: DevKit.Controls.NavigationItem;
			team_msdyn_federatedarticle: DevKit.Controls.NavigationItem;
			team_msdyn_fileupload: DevKit.Controls.NavigationItem;
			team_msdyn_flow_actionapprovalmodel: DevKit.Controls.NavigationItem;
			team_msdyn_flow_approval: DevKit.Controls.NavigationItem;
			team_msdyn_flow_approvalrequest: DevKit.Controls.NavigationItem;
			team_msdyn_flow_approvalresponse: DevKit.Controls.NavigationItem;
			team_msdyn_flow_approvalstep: DevKit.Controls.NavigationItem;
			team_msdyn_flow_awaitallactionapprovalmodel: DevKit.Controls.NavigationItem;
			team_msdyn_flow_awaitallapprovalmodel: DevKit.Controls.NavigationItem;
			team_msdyn_flow_basicapprovalmodel: DevKit.Controls.NavigationItem;
			team_msdyn_flow_flowapproval: DevKit.Controls.NavigationItem;
			team_msdyn_formmapping: DevKit.Controls.NavigationItem;
			team_msdyn_function: DevKit.Controls.NavigationItem;
			team_msdyn_healthcare_feedback: DevKit.Controls.NavigationItem;
			team_msdyn_historicalcaseharvestbatch: DevKit.Controls.NavigationItem;
			team_msdyn_historicalcaseharvestrun: DevKit.Controls.NavigationItem;
			team_msdyn_integratedsearchprovider: DevKit.Controls.NavigationItem;
			team_msdyn_kalanguagesetting: DevKit.Controls.NavigationItem;
			team_msdyn_kbattachment: DevKit.Controls.NavigationItem;
			team_msdyn_kmfederatedsearchconfig: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgearticleimage: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgearticletemplate: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgeassetconfiguration: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgeharvestjobrecord: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgeinteractioninsight: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgemanagementsetting: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgepersonalfilter: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgesearchfilter: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgesearchinsight: DevKit.Controls.NavigationItem;
			team_msdyn_mobileapp: DevKit.Controls.NavigationItem;
			team_msdyn_objectdetectionproduct: DevKit.Controls.NavigationItem;
			team_msdyn_onlineshopperintention: DevKit.Controls.NavigationItem;
			team_msdyn_plan: DevKit.Controls.NavigationItem;
			team_msdyn_planartifact: DevKit.Controls.NavigationItem;
			team_msdyn_planattachment: DevKit.Controls.NavigationItem;
			team_msdyn_pmanalysishistory: DevKit.Controls.NavigationItem;
			team_msdyn_pmbusinessruleautomationconfig: DevKit.Controls.NavigationItem;
			team_msdyn_pmcalendar: DevKit.Controls.NavigationItem;
			team_msdyn_pmcalendarversion: DevKit.Controls.NavigationItem;
			team_msdyn_pminferredtask: DevKit.Controls.NavigationItem;
			team_msdyn_pmprocessextendedmetadataversion: DevKit.Controls.NavigationItem;
			team_msdyn_pmprocesstemplate: DevKit.Controls.NavigationItem;
			team_msdyn_pmprocessusersettings: DevKit.Controls.NavigationItem;
			team_msdyn_pmprocessversion: DevKit.Controls.NavigationItem;
			team_msdyn_pmrecording: DevKit.Controls.NavigationItem;
			team_msdyn_pmsimulation: DevKit.Controls.NavigationItem;
			team_msdyn_pmtemplate: DevKit.Controls.NavigationItem;
			team_msdyn_pmview: DevKit.Controls.NavigationItem;
			team_msdyn_qna: DevKit.Controls.NavigationItem;
			team_msdyn_richtextfile: DevKit.Controls.NavigationItem;
			team_msdyn_salesforcestructuredobject: DevKit.Controls.NavigationItem;
			team_msdyn_salesforcestructuredqnaconfig: DevKit.Controls.NavigationItem;
			team_msdyn_schedule: DevKit.Controls.NavigationItem;
			team_msdyn_serviceconfiguration: DevKit.Controls.NavigationItem;
			team_msdyn_slakpi: DevKit.Controls.NavigationItem;
			team_msdyn_solutionhealthrule: DevKit.Controls.NavigationItem;
			team_msdyn_solutionhealthruleargument: DevKit.Controls.NavigationItem;
			team_msdyn_virtualtablecolumncandidate: DevKit.Controls.NavigationItem;
			team_msdynce_botcontent: DevKit.Controls.NavigationItem;
			team_msfp_alertrule: DevKit.Controls.NavigationItem;
			team_msfp_emailtemplate: DevKit.Controls.NavigationItem;
			team_msfp_fileresponse: DevKit.Controls.NavigationItem;
			team_msfp_localizedemailtemplate: DevKit.Controls.NavigationItem;
			team_msfp_project: DevKit.Controls.NavigationItem;
			team_msfp_question: DevKit.Controls.NavigationItem;
			team_msfp_questionresponse: DevKit.Controls.NavigationItem;
			team_msfp_satisfactionmetric: DevKit.Controls.NavigationItem;
			team_msfp_survey: DevKit.Controls.NavigationItem;
			team_msfp_surveyreminder: DevKit.Controls.NavigationItem;
			team_msfp_unsubscribedrecipient: DevKit.Controls.NavigationItem;
			team_mspcat_catalogsubmissionfiles: DevKit.Controls.NavigationItem;
			team_mspcat_packagestore: DevKit.Controls.NavigationItem;
			team_nlsqregistration: DevKit.Controls.NavigationItem;
			team_pdfsetting: DevKit.Controls.NavigationItem;
			team_phonecall: DevKit.Controls.NavigationItem;
			team_plannerbusinessscenario: DevKit.Controls.NavigationItem;
			team_plannersyncaction: DevKit.Controls.NavigationItem;
			team_plugin: DevKit.Controls.NavigationItem;
			team_powerbidataset: DevKit.Controls.NavigationItem;
			team_powerbidatasetapdx: DevKit.Controls.NavigationItem;
			team_powerbimashupparameter: DevKit.Controls.NavigationItem;
			team_powerbireport: DevKit.Controls.NavigationItem;
			team_powerbireportapdx: DevKit.Controls.NavigationItem;
			team_powerfxrule: DevKit.Controls.NavigationItem;
			team_powerpagecomponent: DevKit.Controls.NavigationItem;
			team_powerpagesddosalert: DevKit.Controls.NavigationItem;
			team_powerpagesite: DevKit.Controls.NavigationItem;
			team_powerpagesitelanguage: DevKit.Controls.NavigationItem;
			team_powerpagesitepublished: DevKit.Controls.NavigationItem;
			team_powerpageslog: DevKit.Controls.NavigationItem;
			team_powerpagesmanagedidentity: DevKit.Controls.NavigationItem;
			team_powerpagesscanreport: DevKit.Controls.NavigationItem;
			team_powerpagessiteaifeedback: DevKit.Controls.NavigationItem;
			team_powerpagessourcefile: DevKit.Controls.NavigationItem;
			team_privilegecheckerrun: DevKit.Controls.NavigationItem;
			team_processorregistration: DevKit.Controls.NavigationItem;
			team_processstageparameter: DevKit.Controls.NavigationItem;
			team_profilerule: DevKit.Controls.NavigationItem;
			team_queueitembase_workerid: DevKit.Controls.NavigationItem;
			team_recentlyused: DevKit.Controls.NavigationItem;
			team_reconciliationentityinfo: DevKit.Controls.NavigationItem;
			team_reconciliationentitystepinfo: DevKit.Controls.NavigationItem;
			team_reconciliationinfo: DevKit.Controls.NavigationItem;
			team_retaineddataexcel: DevKit.Controls.NavigationItem;
			team_retentioncleanupinfo: DevKit.Controls.NavigationItem;
			team_retentioncleanupoperation: DevKit.Controls.NavigationItem;
			team_retentionconfig: DevKit.Controls.NavigationItem;
			team_retentionfailuredetail: DevKit.Controls.NavigationItem;
			team_retentionoperation: DevKit.Controls.NavigationItem;
			team_retentionsuccessdetail: DevKit.Controls.NavigationItem;
			team_routingrule: DevKit.Controls.NavigationItem;
			team_routingruleitem: DevKit.Controls.NavigationItem;
			team_savingrule: DevKit.Controls.NavigationItem;
			team_sharepointsite: DevKit.Controls.NavigationItem;
			team_sideloadedaiplugin: DevKit.Controls.NavigationItem;
			team_signal: DevKit.Controls.NavigationItem;
			team_signalregistration: DevKit.Controls.NavigationItem;
			team_slaBase: DevKit.Controls.NavigationItem;
			team_solutioncomponentbatchconfiguration: DevKit.Controls.NavigationItem;
			team_stagesolutionupload: DevKit.Controls.NavigationItem;
			team_synapsedatabase: DevKit.Controls.NavigationItem;
			team_tag: DevKit.Controls.NavigationItem;
			team_taggedflowsession: DevKit.Controls.NavigationItem;
			team_taggedprocess: DevKit.Controls.NavigationItem;
			team_task: DevKit.Controls.NavigationItem;
			team_tdsmetadata: DevKit.Controls.NavigationItem;
			team_trait: DevKit.Controls.NavigationItem;
			team_traitregistration: DevKit.Controls.NavigationItem;
			team_unstructuredfilesearchentity: DevKit.Controls.NavigationItem;
			team_unstructuredfilesearchrecord: DevKit.Controls.NavigationItem;
			team_workflow: DevKit.Controls.NavigationItem;
			team_workflowbinary: DevKit.Controls.NavigationItem;
			team_workflowlog: DevKit.Controls.NavigationItem;
			team_workflowmetadata: DevKit.Controls.NavigationItem;
			team_workqueue: DevKit.Controls.NavigationItem;
			team_workqueueitem: DevKit.Controls.NavigationItem;
		}
		interface Grid {
			Members: DevKit.Controls.Grid;
		}
	}
	class FormTeam extends DevKit.IForm {
		/**
		* Team [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Team */
		Body: DevKitV4.FormTeam.Body;
		/** The Header section of form Team */
		Header: DevKitV4.FormTeam.Header;
		/** The Navigation of form Team */
		Navigation: DevKitV4.FormTeam.Navigation;
		/** The Grid of form Team */
		Grid: DevKitV4.FormTeam.Grid;
		/** The SidePanes of form Team */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTeam_form_Business {
		interface tab_general_Sections {
			Description: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
			TeamMembers: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Controls.Lookup;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Description of the team. */
			Description: DevKit.Controls.String;
			/** Name of the team. */
			Name: DevKit.Controls.String;
			/** Select the team type. */
			TeamType: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			adx_inviteredemption_team_owningteam: DevKit.Controls.NavigationItem;
			adx_portalcomment_team_owningteam: DevKit.Controls.NavigationItem;
			msfp_alert_team_owningteam: DevKit.Controls.NavigationItem;
			msfp_surveyinvite_team_owningteam: DevKit.Controls.NavigationItem;
			msfp_surveyresponse_team_owningteam: DevKit.Controls.NavigationItem;
			team_accounts: DevKit.Controls.NavigationItem;
			team_activityfileattachment: DevKit.Controls.NavigationItem;
			team_adx_invitation: DevKit.Controls.NavigationItem;
			team_adx_setting: DevKit.Controls.NavigationItem;
			team_aiinsightcard: DevKit.Controls.NavigationItem;
			team_aiplugin: DevKit.Controls.NavigationItem;
			team_aipluginauth: DevKit.Controls.NavigationItem;
			team_aipluginconversationstarter: DevKit.Controls.NavigationItem;
			team_aipluginconversationstartermapping: DevKit.Controls.NavigationItem;
			team_aipluginexternalschema: DevKit.Controls.NavigationItem;
			team_aipluginexternalschemaproperty: DevKit.Controls.NavigationItem;
			team_aiplugingovernance: DevKit.Controls.NavigationItem;
			team_aiplugingovernanceext: DevKit.Controls.NavigationItem;
			team_aiplugininstance: DevKit.Controls.NavigationItem;
			team_aipluginoperation: DevKit.Controls.NavigationItem;
			team_aipluginoperationparameter: DevKit.Controls.NavigationItem;
			team_aipluginoperationresponsetemplate: DevKit.Controls.NavigationItem;
			team_aipluginusersetting: DevKit.Controls.NavigationItem;
			team_aiskillconfig: DevKit.Controls.NavigationItem;
			team_appnotification: DevKit.Controls.NavigationItem;
			team_appointment: DevKit.Controls.NavigationItem;
			team_approvalprocess: DevKit.Controls.NavigationItem;
			team_approvalstageapproval: DevKit.Controls.NavigationItem;
			team_approvalstagecondition: DevKit.Controls.NavigationItem;
			team_approvalstageintelligent: DevKit.Controls.NavigationItem;
			team_approvalstageorder: DevKit.Controls.NavigationItem;
			team_archivecleanupinfo: DevKit.Controls.NavigationItem;
			team_archivecleanupoperation: DevKit.Controls.NavigationItem;
			team_bot: DevKit.Controls.NavigationItem;
			team_botcomponent: DevKit.Controls.NavigationItem;
			team_botcomponentcollection: DevKit.Controls.NavigationItem;
			team_bulkarchiveconfig: DevKit.Controls.NavigationItem;
			team_bulkarchivefailuredetail: DevKit.Controls.NavigationItem;
			team_bulkarchiveoperation: DevKit.Controls.NavigationItem;
			team_businessprocess: DevKit.Controls.NavigationItem;
			team_businessprocesslinkedartifact: DevKit.Controls.NavigationItem;
			team_canvasappextendedmetadata: DevKit.Controls.NavigationItem;
			team_card: DevKit.Controls.NavigationItem;
			team_certificatecredential: DevKit.Controls.NavigationItem;
			team_channelaccessprofile: DevKit.Controls.NavigationItem;
			team_comment: DevKit.Controls.NavigationItem;
			team_componentversion: DevKit.Controls.NavigationItem;
			team_connectioninstance: DevKit.Controls.NavigationItem;
			team_connectionreference: DevKit.Controls.NavigationItem;
			team_connector: DevKit.Controls.NavigationItem;
			team_contacts: DevKit.Controls.NavigationItem;
			team_conversationtranscript: DevKit.Controls.NavigationItem;
			team_convertrule: DevKit.Controls.NavigationItem;
			team_copilotglossaryterm: DevKit.Controls.NavigationItem;
			team_copilotsynonyms: DevKit.Controls.NavigationItem;
			team_credential: DevKit.Controls.NavigationItem;
			team_customapi: DevKit.Controls.NavigationItem;
			team_datalakefolder: DevKit.Controls.NavigationItem;
			team_desktopflowbinary: DevKit.Controls.NavigationItem;
			team_desktopflowmodule: DevKit.Controls.NavigationItem;
			team_dvfilesearch: DevKit.Controls.NavigationItem;
			team_dvfilesearchattribute: DevKit.Controls.NavigationItem;
			team_dvfilesearchentity: DevKit.Controls.NavigationItem;
			team_dvtablesearch: DevKit.Controls.NavigationItem;
			team_dvtablesearchattribute: DevKit.Controls.NavigationItem;
			team_dvtablesearchentity: DevKit.Controls.NavigationItem;
			team_email: DevKit.Controls.NavigationItem;
			team_email_templates: DevKit.Controls.NavigationItem;
			team_emailserverprofile: DevKit.Controls.NavigationItem;
			team_enablearchivalrequest: DevKit.Controls.NavigationItem;
			team_environmentvariabledefinition: DevKit.Controls.NavigationItem;
			team_exchangesyncidmapping: DevKit.Controls.NavigationItem;
			team_exportedexcel: DevKit.Controls.NavigationItem;
			team_exportsolutionupload: DevKit.Controls.NavigationItem;
			team_externalparty: DevKit.Controls.NavigationItem;
			team_fabricaiskill: DevKit.Controls.NavigationItem;
			team_featurecontrolsetting: DevKit.Controls.NavigationItem;
			team_federatedknowledgecitation: DevKit.Controls.NavigationItem;
			team_federatedknowledgeconfiguration: DevKit.Controls.NavigationItem;
			team_federatedknowledgeentityconfiguration: DevKit.Controls.NavigationItem;
			team_federatedknowledgemetadatarefresh: DevKit.Controls.NavigationItem;
			team_flowaggregation: DevKit.Controls.NavigationItem;
			team_flowcapacityassignment: DevKit.Controls.NavigationItem;
			team_flowcredentialapplication: DevKit.Controls.NavigationItem;
			team_flowevent: DevKit.Controls.NavigationItem;
			team_flowmachine: DevKit.Controls.NavigationItem;
			team_flowmachinegroup: DevKit.Controls.NavigationItem;
			team_flowmachineimage: DevKit.Controls.NavigationItem;
			team_flowmachineimageversion: DevKit.Controls.NavigationItem;
			team_flowmachinenetwork: DevKit.Controls.NavigationItem;
			team_flowrun: DevKit.Controls.NavigationItem;
			team_flowsession: DevKit.Controls.NavigationItem;
			team_fxexpression: DevKit.Controls.NavigationItem;
			team_goal: DevKit.Controls.NavigationItem;
			team_goal_goalowner: DevKit.Controls.NavigationItem;
			team_goalrollupquery: DevKit.Controls.NavigationItem;
			team_governanceconfiguration: DevKit.Controls.NavigationItem;
			team_indexedtrait: DevKit.Controls.NavigationItem;
			team_intelligentmemory: DevKit.Controls.NavigationItem;
			team_interactionforemail: DevKit.Controls.NavigationItem;
			team_keyvaultreference: DevKit.Controls.NavigationItem;
			team_knowledgearticle: DevKit.Controls.NavigationItem;
			team_knowledgefaq: DevKit.Controls.NavigationItem;
			team_mailbox: DevKit.Controls.NavigationItem;
			team_mailboxtrackingcategory: DevKit.Controls.NavigationItem;
			team_managedidentity: DevKit.Controls.NavigationItem;
			team_msdyn_aibdataset: DevKit.Controls.NavigationItem;
			team_msdyn_aibdatasetfile: DevKit.Controls.NavigationItem;
			team_msdyn_aibdatasetrecord: DevKit.Controls.NavigationItem;
			team_msdyn_aibdatasetscontainer: DevKit.Controls.NavigationItem;
			team_msdyn_aibfeedbackloop: DevKit.Controls.NavigationItem;
			team_msdyn_aibfile: DevKit.Controls.NavigationItem;
			team_msdyn_aibfileattacheddata: DevKit.Controls.NavigationItem;
			team_msdyn_aiconfigurationsearch: DevKit.Controls.NavigationItem;
			team_msdyn_aidataprocessingevent: DevKit.Controls.NavigationItem;
			team_msdyn_aidocumenttemplate: DevKit.Controls.NavigationItem;
			team_msdyn_aievaluationconfiguration: DevKit.Controls.NavigationItem;
			team_msdyn_aievaluationrun: DevKit.Controls.NavigationItem;
			team_msdyn_aievent: DevKit.Controls.NavigationItem;
			team_msdyn_aifptrainingdocument: DevKit.Controls.NavigationItem;
			team_msdyn_aimodel: DevKit.Controls.NavigationItem;
			team_msdyn_aimodelcatalog: DevKit.Controls.NavigationItem;
			team_msdyn_aiodimage: DevKit.Controls.NavigationItem;
			team_msdyn_aiodlabel: DevKit.Controls.NavigationItem;
			team_msdyn_aiodtrainingboundingbox: DevKit.Controls.NavigationItem;
			team_msdyn_aiodtrainingimage: DevKit.Controls.NavigationItem;
			team_msdyn_aioptimization: DevKit.Controls.NavigationItem;
			team_msdyn_aioptimizationprivatedata: DevKit.Controls.NavigationItem;
			team_msdyn_aitemplate: DevKit.Controls.NavigationItem;
			team_msdyn_aitestcase: DevKit.Controls.NavigationItem;
			team_msdyn_aitestcasedocument: DevKit.Controls.NavigationItem;
			team_msdyn_aitestcaseinput: DevKit.Controls.NavigationItem;
			team_msdyn_aitestrun: DevKit.Controls.NavigationItem;
			team_msdyn_aitestrunbatch: DevKit.Controls.NavigationItem;
			team_msdyn_analysiscomponent: DevKit.Controls.NavigationItem;
			team_msdyn_analysisjob: DevKit.Controls.NavigationItem;
			team_msdyn_analysisoverride: DevKit.Controls.NavigationItem;
			team_msdyn_analysisresult: DevKit.Controls.NavigationItem;
			team_msdyn_analysisresultdetail: DevKit.Controls.NavigationItem;
			team_msdyn_apirequestcache: DevKit.Controls.NavigationItem;
			team_msdyn_apirequestfolder: DevKit.Controls.NavigationItem;
			team_msdyn_copilotinteractions: DevKit.Controls.NavigationItem;
			team_msdyn_customcontrolextendedsettings: DevKit.Controls.NavigationItem;
			team_msdyn_dataflow: DevKit.Controls.NavigationItem;
			team_msdyn_dataflow_datalakefolder: DevKit.Controls.NavigationItem;
			team_msdyn_dataflowconnectionreference: DevKit.Controls.NavigationItem;
			team_msdyn_dataflowrefreshhistory: DevKit.Controls.NavigationItem;
			team_msdyn_dataflowtemplate: DevKit.Controls.NavigationItem;
			team_msdyn_dataworkspace: DevKit.Controls.NavigationItem;
			team_msdyn_dmsrequest: DevKit.Controls.NavigationItem;
			team_msdyn_dmsrequeststatus: DevKit.Controls.NavigationItem;
			team_msdyn_dmssyncrequest: DevKit.Controls.NavigationItem;
			team_msdyn_dmssyncstatus: DevKit.Controls.NavigationItem;
			team_msdyn_entitylinkchatconfiguration: DevKit.Controls.NavigationItem;
			team_msdyn_entityrefreshhistory: DevKit.Controls.NavigationItem;
			team_msdyn_favoriteknowledgearticle: DevKit.Controls.NavigationItem;
			team_msdyn_federatedarticle: DevKit.Controls.NavigationItem;
			team_msdyn_fileupload: DevKit.Controls.NavigationItem;
			team_msdyn_flow_actionapprovalmodel: DevKit.Controls.NavigationItem;
			team_msdyn_flow_approval: DevKit.Controls.NavigationItem;
			team_msdyn_flow_approvalrequest: DevKit.Controls.NavigationItem;
			team_msdyn_flow_approvalresponse: DevKit.Controls.NavigationItem;
			team_msdyn_flow_approvalstep: DevKit.Controls.NavigationItem;
			team_msdyn_flow_awaitallactionapprovalmodel: DevKit.Controls.NavigationItem;
			team_msdyn_flow_awaitallapprovalmodel: DevKit.Controls.NavigationItem;
			team_msdyn_flow_basicapprovalmodel: DevKit.Controls.NavigationItem;
			team_msdyn_flow_flowapproval: DevKit.Controls.NavigationItem;
			team_msdyn_formmapping: DevKit.Controls.NavigationItem;
			team_msdyn_function: DevKit.Controls.NavigationItem;
			team_msdyn_healthcare_feedback: DevKit.Controls.NavigationItem;
			team_msdyn_historicalcaseharvestbatch: DevKit.Controls.NavigationItem;
			team_msdyn_historicalcaseharvestrun: DevKit.Controls.NavigationItem;
			team_msdyn_integratedsearchprovider: DevKit.Controls.NavigationItem;
			team_msdyn_kalanguagesetting: DevKit.Controls.NavigationItem;
			team_msdyn_kbattachment: DevKit.Controls.NavigationItem;
			team_msdyn_kmfederatedsearchconfig: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgearticleimage: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgearticletemplate: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgeassetconfiguration: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgeharvestjobrecord: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgeinteractioninsight: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgemanagementsetting: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgepersonalfilter: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgesearchfilter: DevKit.Controls.NavigationItem;
			team_msdyn_knowledgesearchinsight: DevKit.Controls.NavigationItem;
			team_msdyn_mobileapp: DevKit.Controls.NavigationItem;
			team_msdyn_objectdetectionproduct: DevKit.Controls.NavigationItem;
			team_msdyn_onlineshopperintention: DevKit.Controls.NavigationItem;
			team_msdyn_plan: DevKit.Controls.NavigationItem;
			team_msdyn_planartifact: DevKit.Controls.NavigationItem;
			team_msdyn_planattachment: DevKit.Controls.NavigationItem;
			team_msdyn_pmanalysishistory: DevKit.Controls.NavigationItem;
			team_msdyn_pmbusinessruleautomationconfig: DevKit.Controls.NavigationItem;
			team_msdyn_pmcalendar: DevKit.Controls.NavigationItem;
			team_msdyn_pmcalendarversion: DevKit.Controls.NavigationItem;
			team_msdyn_pminferredtask: DevKit.Controls.NavigationItem;
			team_msdyn_pmprocessextendedmetadataversion: DevKit.Controls.NavigationItem;
			team_msdyn_pmprocesstemplate: DevKit.Controls.NavigationItem;
			team_msdyn_pmprocessusersettings: DevKit.Controls.NavigationItem;
			team_msdyn_pmprocessversion: DevKit.Controls.NavigationItem;
			team_msdyn_pmrecording: DevKit.Controls.NavigationItem;
			team_msdyn_pmsimulation: DevKit.Controls.NavigationItem;
			team_msdyn_pmtemplate: DevKit.Controls.NavigationItem;
			team_msdyn_pmview: DevKit.Controls.NavigationItem;
			team_msdyn_qna: DevKit.Controls.NavigationItem;
			team_msdyn_richtextfile: DevKit.Controls.NavigationItem;
			team_msdyn_salesforcestructuredobject: DevKit.Controls.NavigationItem;
			team_msdyn_salesforcestructuredqnaconfig: DevKit.Controls.NavigationItem;
			team_msdyn_schedule: DevKit.Controls.NavigationItem;
			team_msdyn_serviceconfiguration: DevKit.Controls.NavigationItem;
			team_msdyn_slakpi: DevKit.Controls.NavigationItem;
			team_msdyn_solutionhealthrule: DevKit.Controls.NavigationItem;
			team_msdyn_solutionhealthruleargument: DevKit.Controls.NavigationItem;
			team_msdyn_virtualtablecolumncandidate: DevKit.Controls.NavigationItem;
			team_msdynce_botcontent: DevKit.Controls.NavigationItem;
			team_msfp_alertrule: DevKit.Controls.NavigationItem;
			team_msfp_emailtemplate: DevKit.Controls.NavigationItem;
			team_msfp_fileresponse: DevKit.Controls.NavigationItem;
			team_msfp_localizedemailtemplate: DevKit.Controls.NavigationItem;
			team_msfp_project: DevKit.Controls.NavigationItem;
			team_msfp_question: DevKit.Controls.NavigationItem;
			team_msfp_questionresponse: DevKit.Controls.NavigationItem;
			team_msfp_satisfactionmetric: DevKit.Controls.NavigationItem;
			team_msfp_survey: DevKit.Controls.NavigationItem;
			team_msfp_surveyreminder: DevKit.Controls.NavigationItem;
			team_msfp_unsubscribedrecipient: DevKit.Controls.NavigationItem;
			team_mspcat_catalogsubmissionfiles: DevKit.Controls.NavigationItem;
			team_mspcat_packagestore: DevKit.Controls.NavigationItem;
			team_nlsqregistration: DevKit.Controls.NavigationItem;
			team_pdfsetting: DevKit.Controls.NavigationItem;
			team_phonecall: DevKit.Controls.NavigationItem;
			team_plannerbusinessscenario: DevKit.Controls.NavigationItem;
			team_plannersyncaction: DevKit.Controls.NavigationItem;
			team_plugin: DevKit.Controls.NavigationItem;
			team_powerbidataset: DevKit.Controls.NavigationItem;
			team_powerbidatasetapdx: DevKit.Controls.NavigationItem;
			team_powerbimashupparameter: DevKit.Controls.NavigationItem;
			team_powerbireport: DevKit.Controls.NavigationItem;
			team_powerbireportapdx: DevKit.Controls.NavigationItem;
			team_powerfxrule: DevKit.Controls.NavigationItem;
			team_powerpagecomponent: DevKit.Controls.NavigationItem;
			team_powerpagesddosalert: DevKit.Controls.NavigationItem;
			team_powerpagesite: DevKit.Controls.NavigationItem;
			team_powerpagesitelanguage: DevKit.Controls.NavigationItem;
			team_powerpagesitepublished: DevKit.Controls.NavigationItem;
			team_powerpageslog: DevKit.Controls.NavigationItem;
			team_powerpagesmanagedidentity: DevKit.Controls.NavigationItem;
			team_powerpagesscanreport: DevKit.Controls.NavigationItem;
			team_powerpagessiteaifeedback: DevKit.Controls.NavigationItem;
			team_powerpagessourcefile: DevKit.Controls.NavigationItem;
			team_privilegecheckerrun: DevKit.Controls.NavigationItem;
			team_processorregistration: DevKit.Controls.NavigationItem;
			team_processstageparameter: DevKit.Controls.NavigationItem;
			team_profilerule: DevKit.Controls.NavigationItem;
			team_queueitembase_workerid: DevKit.Controls.NavigationItem;
			team_recentlyused: DevKit.Controls.NavigationItem;
			team_reconciliationentityinfo: DevKit.Controls.NavigationItem;
			team_reconciliationentitystepinfo: DevKit.Controls.NavigationItem;
			team_reconciliationinfo: DevKit.Controls.NavigationItem;
			team_retaineddataexcel: DevKit.Controls.NavigationItem;
			team_retentioncleanupinfo: DevKit.Controls.NavigationItem;
			team_retentioncleanupoperation: DevKit.Controls.NavigationItem;
			team_retentionconfig: DevKit.Controls.NavigationItem;
			team_retentionfailuredetail: DevKit.Controls.NavigationItem;
			team_retentionoperation: DevKit.Controls.NavigationItem;
			team_retentionsuccessdetail: DevKit.Controls.NavigationItem;
			team_routingrule: DevKit.Controls.NavigationItem;
			team_routingruleitem: DevKit.Controls.NavigationItem;
			team_savingrule: DevKit.Controls.NavigationItem;
			team_sharepointsite: DevKit.Controls.NavigationItem;
			team_sideloadedaiplugin: DevKit.Controls.NavigationItem;
			team_signal: DevKit.Controls.NavigationItem;
			team_signalregistration: DevKit.Controls.NavigationItem;
			team_slaBase: DevKit.Controls.NavigationItem;
			team_solutioncomponentbatchconfiguration: DevKit.Controls.NavigationItem;
			team_stagesolutionupload: DevKit.Controls.NavigationItem;
			team_synapsedatabase: DevKit.Controls.NavigationItem;
			team_tag: DevKit.Controls.NavigationItem;
			team_taggedflowsession: DevKit.Controls.NavigationItem;
			team_taggedprocess: DevKit.Controls.NavigationItem;
			team_task: DevKit.Controls.NavigationItem;
			team_tdsmetadata: DevKit.Controls.NavigationItem;
			team_trait: DevKit.Controls.NavigationItem;
			team_traitregistration: DevKit.Controls.NavigationItem;
			team_unstructuredfilesearchentity: DevKit.Controls.NavigationItem;
			team_unstructuredfilesearchrecord: DevKit.Controls.NavigationItem;
			team_workflow: DevKit.Controls.NavigationItem;
			team_workflowbinary: DevKit.Controls.NavigationItem;
			team_workflowlog: DevKit.Controls.NavigationItem;
			team_workflowmetadata: DevKit.Controls.NavigationItem;
			team_workqueue: DevKit.Controls.NavigationItem;
			team_workqueueitem: DevKit.Controls.NavigationItem;
		}
		interface Grid {
			Members: DevKit.Controls.Grid;
		}
	}
	class FormTeam_form_Business extends DevKit.IForm {
		/**
		* Team form – Business [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Team_form_Business */
		Body: DevKitV4.FormTeam_form_Business.Body;
		/** The Navigation of form Team_form_Business */
		Navigation: DevKitV4.FormTeam_form_Business.Navigation;
		/** The Grid of form Team_form_Business */
		Grid: DevKitV4.FormTeam_form_Business.Grid;
		/** The SidePanes of form Team_form_Business */
		SidePanes: DevKit.SidePanes;
	}
	class TeamApi {
		/**
		* DynamicsCrm.DevKit TeamApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>) : DevKitV4.TeamApi;
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the user primary responsible for the team. */
		AdministratorId: string | null;
		/** The object Id for a group. */
		AzureActiveDirectoryObjectId: string | null;
		/** Unique identifier of the business unit with which the team is associated. */
		BusinessUnitId: string | null;
		/** Unique identifier of the user who created the team. */
		readonly CreatedBy: string | null;
		/** Date and time when the team was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the team. */
		readonly CreatedOnBehalfBy: string | null;
		/** The delegated authorization context for the team. */
		DelegatedAuthorizationId: string | null;
		/** Description of the team. */
		Description: string | null;
		/** Email address for the team. */
		EMailAddress: string | null;
		/** Exchange rate for the currency associated with the team with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Information about whether the team is a default business unit team. */
		readonly IsDefault: boolean | null;
		readonly IsSasTokenSet: boolean | null;
		MembershipType: OptionSet.Team.MembershipType | null;
		/** Unique identifier of the user who last modified the team. */
		readonly ModifiedBy: string | null;
		/** Date and time when the team was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the team. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the team. */
		Name: string | null;
		/** Unique identifier of the organization associated with the team. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Unique identifier of the default queue for the team. */
		QueueId: string | null;
		/** Choose the record that the team relates to. */
		RegardingObjectId: string | null;
		/** Sas Token for Team. */
		readonly SasToken: string | null;
		/** For internal use only. */
		readonly ShareLinkQualifier: string | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** Select whether the team will be managed by the system. */
		readonly SystemManaged: boolean | null;
		/** Unique identifier for the team. */
		TeamId: string | null;
		/** Shows the team template that is associated with the team. */
		TeamTemplateId: string | null;
		/** Select the team type. */
		TeamType: OptionSet.Team.TeamType | null;
		/** Unique identifier of the currency associated with the team. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Version number of the team. */
		readonly VersionNumber: number | null;
		/** Pronunciation of the full name of the team, written in phonetic hiragana or katakana characters. */
		YomiName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user primary responsible for the team. */
			readonly AdministratorId: string;
			/** The object Id for a group. */
			readonly AzureActiveDirectoryObjectId: string;
			/** Unique identifier of the business unit with which the team is associated. */
			readonly BusinessUnitId: string;
			/** Unique identifier of the user who created the team. */
			readonly CreatedBy: string;
			/** Date and time when the team was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the team. */
			readonly CreatedOnBehalfBy: string;
			/** The delegated authorization context for the team. */
			readonly DelegatedAuthorizationId: string;
			/** Description of the team. */
			readonly Description: string;
			/** Email address for the team. */
			readonly EMailAddress: string;
			/** Exchange rate for the currency associated with the team with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information about whether the team is a default business unit team. */
			readonly IsDefault: string;
			readonly IsSasTokenSet: string;
			readonly MembershipType: string;
			/** Unique identifier of the user who last modified the team. */
			readonly ModifiedBy: string;
			/** Date and time when the team was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the team. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the team. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the team. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Unique identifier of the default queue for the team. */
			readonly QueueId: string;
			/** Choose the record that the team relates to. */
			readonly RegardingObjectId: string;
			/** Sas Token for Team. */
			readonly SasToken: string;
			/** For internal use only. */
			readonly ShareLinkQualifier: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Select whether the team will be managed by the system. */
			readonly SystemManaged: string;
			/** Unique identifier for the team. */
			readonly TeamId: string;
			/** Shows the team template that is associated with the team. */
			readonly TeamTemplateId: string;
			/** Select the team type. */
			readonly TeamType: string;
			/** Unique identifier of the currency associated with the team. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Version number of the team. */
			readonly VersionNumber: string;
			/** Pronunciation of the full name of the team, written in phonetic hiragana or katakana characters. */
			readonly YomiName: string;
		}
	}
}
declare namespace OptionSet {
	namespace Team {
		enum MembershipType {
			/** Guests = 3*/
			Guests = 3,
			/** Members = 1*/
			Members = 1,
			/** Members_and_guests = 0*/
			Members_and_guests = 0,
			/** Owners = 2*/
			Owners = 2
		}
		enum RegardingObjectTypeCode {
		}
		enum TeamType {
			/** Access = 1*/
			Access = 1,
			/** Office_Group = 3*/
			Office_Group = 3,
			/** Owner = 0*/
			Owner = 0,
			/** Security_Group = 2*/
			Security_Group = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
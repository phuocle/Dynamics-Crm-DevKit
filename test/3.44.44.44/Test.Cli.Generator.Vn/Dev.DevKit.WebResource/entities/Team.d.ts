//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBieu_mau_nhom_Doanh_nghiep {
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
			/** Mã định danh duy nhất của người dùng chịu trách nhiệm chính cho nhóm. */
			AdministratorId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của bơn vị kinh doanh có nhóm được liên kết. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Mô tả nhóm. */
			Description: DevKit.Controls.String;
			/** Tên của nhóm. */
			Name: DevKit.Controls.String;
			/** Chọn loại nhóm. */
			TeamType: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			adx_inviteredemption_team_owningteam: DevKit.Controls.NavigationItem,
			adx_portalcomment_team_owningteam: DevKit.Controls.NavigationItem,
			team_accounts: DevKit.Controls.NavigationItem,
			team_activityfileattachment: DevKit.Controls.NavigationItem,
			team_adx_invitation: DevKit.Controls.NavigationItem,
			team_adx_setting: DevKit.Controls.NavigationItem,
			team_aiplugin: DevKit.Controls.NavigationItem,
			team_aipluginauth: DevKit.Controls.NavigationItem,
			team_aipluginconversationstarter: DevKit.Controls.NavigationItem,
			team_aipluginconversationstartermapping: DevKit.Controls.NavigationItem,
			team_aipluginexternalschema: DevKit.Controls.NavigationItem,
			team_aipluginexternalschemaproperty: DevKit.Controls.NavigationItem,
			team_aiplugingovernance: DevKit.Controls.NavigationItem,
			team_aiplugingovernanceext: DevKit.Controls.NavigationItem,
			team_aiplugininstance: DevKit.Controls.NavigationItem,
			team_aipluginoperation: DevKit.Controls.NavigationItem,
			team_aipluginoperationparameter: DevKit.Controls.NavigationItem,
			team_aipluginoperationresponsetemplate: DevKit.Controls.NavigationItem,
			team_aipluginusersetting: DevKit.Controls.NavigationItem,
			team_appnotification: DevKit.Controls.NavigationItem,
			team_appointment: DevKit.Controls.NavigationItem,
			team_archivecleanupinfo: DevKit.Controls.NavigationItem,
			team_archivecleanupoperation: DevKit.Controls.NavigationItem,
			team_bot: DevKit.Controls.NavigationItem,
			team_botcomponent: DevKit.Controls.NavigationItem,
			team_botcomponentcollection: DevKit.Controls.NavigationItem,
			team_bulkarchiveconfig: DevKit.Controls.NavigationItem,
			team_bulkarchivefailuredetail: DevKit.Controls.NavigationItem,
			team_bulkarchiveoperation: DevKit.Controls.NavigationItem,
			team_canvasappextendedmetadata: DevKit.Controls.NavigationItem,
			team_card: DevKit.Controls.NavigationItem,
			team_channelaccessprofile: DevKit.Controls.NavigationItem,
			team_comment: DevKit.Controls.NavigationItem,
			team_componentversion: DevKit.Controls.NavigationItem,
			team_connectioninstance: DevKit.Controls.NavigationItem,
			team_connectionreference: DevKit.Controls.NavigationItem,
			team_connector: DevKit.Controls.NavigationItem,
			team_contacts: DevKit.Controls.NavigationItem,
			team_conversationtranscript: DevKit.Controls.NavigationItem,
			team_convertrule: DevKit.Controls.NavigationItem,
			team_copilotglossaryterm: DevKit.Controls.NavigationItem,
			team_copilotsynonyms: DevKit.Controls.NavigationItem,
			team_credential: DevKit.Controls.NavigationItem,
			team_customapi: DevKit.Controls.NavigationItem,
			team_datalakefolder: DevKit.Controls.NavigationItem,
			team_desktopflowbinary: DevKit.Controls.NavigationItem,
			team_desktopflowmodule: DevKit.Controls.NavigationItem,
			team_dvfilesearch: DevKit.Controls.NavigationItem,
			team_dvfilesearchattribute: DevKit.Controls.NavigationItem,
			team_dvfilesearchentity: DevKit.Controls.NavigationItem,
			team_dvtablesearch: DevKit.Controls.NavigationItem,
			team_dvtablesearchattribute: DevKit.Controls.NavigationItem,
			team_dvtablesearchentity: DevKit.Controls.NavigationItem,
			team_email: DevKit.Controls.NavigationItem,
			team_email_templates: DevKit.Controls.NavigationItem,
			team_emailserverprofile: DevKit.Controls.NavigationItem,
			team_enablearchivalrequest: DevKit.Controls.NavigationItem,
			team_environmentvariabledefinition: DevKit.Controls.NavigationItem,
			team_environmentvariablevalue: DevKit.Controls.NavigationItem,
			team_exchangesyncidmapping: DevKit.Controls.NavigationItem,
			team_exportedexcel: DevKit.Controls.NavigationItem,
			team_exportsolutionupload: DevKit.Controls.NavigationItem,
			team_externalparty: DevKit.Controls.NavigationItem,
			team_fabricaiskill: DevKit.Controls.NavigationItem,
			team_featurecontrolsetting: DevKit.Controls.NavigationItem,
			team_federatedknowledgeconfiguration: DevKit.Controls.NavigationItem,
			team_federatedknowledgeentityconfiguration: DevKit.Controls.NavigationItem,
			team_flowcapacityassignment: DevKit.Controls.NavigationItem,
			team_flowcredentialapplication: DevKit.Controls.NavigationItem,
			team_flowevent: DevKit.Controls.NavigationItem,
			team_flowmachine: DevKit.Controls.NavigationItem,
			team_flowmachinegroup: DevKit.Controls.NavigationItem,
			team_flowmachineimage: DevKit.Controls.NavigationItem,
			team_flowmachineimageversion: DevKit.Controls.NavigationItem,
			team_flowmachinenetwork: DevKit.Controls.NavigationItem,
			team_flowrun: DevKit.Controls.NavigationItem,
			team_flowsession: DevKit.Controls.NavigationItem,
			team_fxexpression: DevKit.Controls.NavigationItem,
			team_goal: DevKit.Controls.NavigationItem,
			team_goal_goalowner: DevKit.Controls.NavigationItem,
			team_goalrollupquery: DevKit.Controls.NavigationItem,
			team_interactionforemail: DevKit.Controls.NavigationItem,
			team_keyvaultreference: DevKit.Controls.NavigationItem,
			team_knowledgearticle: DevKit.Controls.NavigationItem,
			team_mailbox: DevKit.Controls.NavigationItem,
			team_mailboxtrackingcategory: DevKit.Controls.NavigationItem,
			team_managedidentity: DevKit.Controls.NavigationItem,
			team_msdyn_aibdataset: DevKit.Controls.NavigationItem,
			team_msdyn_aibdatasetfile: DevKit.Controls.NavigationItem,
			team_msdyn_aibdatasetrecord: DevKit.Controls.NavigationItem,
			team_msdyn_aibdatasetscontainer: DevKit.Controls.NavigationItem,
			team_msdyn_aibfeedbackloop: DevKit.Controls.NavigationItem,
			team_msdyn_aibfile: DevKit.Controls.NavigationItem,
			team_msdyn_aibfileattacheddata: DevKit.Controls.NavigationItem,
			team_msdyn_aievent: DevKit.Controls.NavigationItem,
			team_msdyn_aifptrainingdocument: DevKit.Controls.NavigationItem,
			team_msdyn_aimodel: DevKit.Controls.NavigationItem,
			team_msdyn_aiodimage: DevKit.Controls.NavigationItem,
			team_msdyn_aiodlabel: DevKit.Controls.NavigationItem,
			team_msdyn_aiodtrainingboundingbox: DevKit.Controls.NavigationItem,
			team_msdyn_aiodtrainingimage: DevKit.Controls.NavigationItem,
			team_msdyn_aitemplate: DevKit.Controls.NavigationItem,
			team_msdyn_analysiscomponent: DevKit.Controls.NavigationItem,
			team_msdyn_analysisjob: DevKit.Controls.NavigationItem,
			team_msdyn_analysisoverride: DevKit.Controls.NavigationItem,
			team_msdyn_analysisresult: DevKit.Controls.NavigationItem,
			team_msdyn_analysisresultdetail: DevKit.Controls.NavigationItem,
			team_msdyn_customcontrolextendedsettings: DevKit.Controls.NavigationItem,
			team_msdyn_dataflow: DevKit.Controls.NavigationItem,
			team_msdyn_dataflow_datalakefolder: DevKit.Controls.NavigationItem,
			team_msdyn_dataflowconnectionreference: DevKit.Controls.NavigationItem,
			team_msdyn_dataflowrefreshhistory: DevKit.Controls.NavigationItem,
			team_msdyn_dataflowtemplate: DevKit.Controls.NavigationItem,
			team_msdyn_dmsrequest: DevKit.Controls.NavigationItem,
			team_msdyn_dmsrequeststatus: DevKit.Controls.NavigationItem,
			team_msdyn_dmssyncrequest: DevKit.Controls.NavigationItem,
			team_msdyn_dmssyncstatus: DevKit.Controls.NavigationItem,
			team_msdyn_entitylinkchatconfiguration: DevKit.Controls.NavigationItem,
			team_msdyn_entityrefreshhistory: DevKit.Controls.NavigationItem,
			team_msdyn_favoriteknowledgearticle: DevKit.Controls.NavigationItem,
			team_msdyn_federatedarticle: DevKit.Controls.NavigationItem,
			team_msdyn_fileupload: DevKit.Controls.NavigationItem,
			team_msdyn_flow_actionapprovalmodel: DevKit.Controls.NavigationItem,
			team_msdyn_flow_approval: DevKit.Controls.NavigationItem,
			team_msdyn_flow_approvalrequest: DevKit.Controls.NavigationItem,
			team_msdyn_flow_approvalresponse: DevKit.Controls.NavigationItem,
			team_msdyn_flow_approvalstep: DevKit.Controls.NavigationItem,
			team_msdyn_flow_awaitallactionapprovalmodel: DevKit.Controls.NavigationItem,
			team_msdyn_flow_awaitallapprovalmodel: DevKit.Controls.NavigationItem,
			team_msdyn_flow_basicapprovalmodel: DevKit.Controls.NavigationItem,
			team_msdyn_flow_flowapproval: DevKit.Controls.NavigationItem,
			team_msdyn_integratedsearchprovider: DevKit.Controls.NavigationItem,
			team_msdyn_kalanguagesetting: DevKit.Controls.NavigationItem,
			team_msdyn_kbattachment: DevKit.Controls.NavigationItem,
			team_msdyn_kmfederatedsearchconfig: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgearticleimage: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgearticletemplate: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgeassetconfiguration: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgeinteractioninsight: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgemanagementsetting: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgepersonalfilter: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgesearchfilter: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgesearchinsight: DevKit.Controls.NavigationItem,
			team_msdyn_mobileapp: DevKit.Controls.NavigationItem,
			team_msdyn_pmanalysishistory: DevKit.Controls.NavigationItem,
			team_msdyn_pmbusinessruleautomationconfig: DevKit.Controls.NavigationItem,
			team_msdyn_pmcalendar: DevKit.Controls.NavigationItem,
			team_msdyn_pmcalendarversion: DevKit.Controls.NavigationItem,
			team_msdyn_pminferredtask: DevKit.Controls.NavigationItem,
			team_msdyn_pmprocessextendedmetadataversion: DevKit.Controls.NavigationItem,
			team_msdyn_pmprocesstemplate: DevKit.Controls.NavigationItem,
			team_msdyn_pmprocessusersettings: DevKit.Controls.NavigationItem,
			team_msdyn_pmprocessversion: DevKit.Controls.NavigationItem,
			team_msdyn_pmrecording: DevKit.Controls.NavigationItem,
			team_msdyn_pmsimulation: DevKit.Controls.NavigationItem,
			team_msdyn_pmtemplate: DevKit.Controls.NavigationItem,
			team_msdyn_pmview: DevKit.Controls.NavigationItem,
			team_msdyn_richtextfile: DevKit.Controls.NavigationItem,
			team_msdyn_salesforcestructuredobject: DevKit.Controls.NavigationItem,
			team_msdyn_salesforcestructuredqnaconfig: DevKit.Controls.NavigationItem,
			team_msdyn_schedule: DevKit.Controls.NavigationItem,
			team_msdyn_serviceconfiguration: DevKit.Controls.NavigationItem,
			team_msdyn_slakpi: DevKit.Controls.NavigationItem,
			team_msdyn_solutionhealthrule: DevKit.Controls.NavigationItem,
			team_msdyn_solutionhealthruleargument: DevKit.Controls.NavigationItem,
			team_msdyn_virtualtablecolumncandidate: DevKit.Controls.NavigationItem,
			team_msdynce_botcontent: DevKit.Controls.NavigationItem,
			team_mspcat_catalogsubmissionfiles: DevKit.Controls.NavigationItem,
			team_mspcat_packagestore: DevKit.Controls.NavigationItem,
			team_nlsqregistration: DevKit.Controls.NavigationItem,
			team_pdfsetting: DevKit.Controls.NavigationItem,
			team_phonecall: DevKit.Controls.NavigationItem,
			team_plannerbusinessscenario: DevKit.Controls.NavigationItem,
			team_plannersyncaction: DevKit.Controls.NavigationItem,
			team_powerbidataset: DevKit.Controls.NavigationItem,
			team_powerbidatasetapdx: DevKit.Controls.NavigationItem,
			team_powerbimashupparameter: DevKit.Controls.NavigationItem,
			team_powerbireport: DevKit.Controls.NavigationItem,
			team_powerbireportapdx: DevKit.Controls.NavigationItem,
			team_powerfxrule: DevKit.Controls.NavigationItem,
			team_powerpagecomponent: DevKit.Controls.NavigationItem,
			team_powerpagesite: DevKit.Controls.NavigationItem,
			team_powerpagesitelanguage: DevKit.Controls.NavigationItem,
			team_powerpagesitepublished: DevKit.Controls.NavigationItem,
			team_powerpageslog: DevKit.Controls.NavigationItem,
			team_powerpagesscanreport: DevKit.Controls.NavigationItem,
			team_privilegecheckerrun: DevKit.Controls.NavigationItem,
			team_processstageparameter: DevKit.Controls.NavigationItem,
			team_profilerule: DevKit.Controls.NavigationItem,
			team_queueitembase_workerid: DevKit.Controls.NavigationItem,
			team_recentlyused: DevKit.Controls.NavigationItem,
			team_reconciliationentityinfo: DevKit.Controls.NavigationItem,
			team_reconciliationentitystepinfo: DevKit.Controls.NavigationItem,
			team_reconciliationinfo: DevKit.Controls.NavigationItem,
			team_retaineddataexcel: DevKit.Controls.NavigationItem,
			team_retentioncleanupinfo: DevKit.Controls.NavigationItem,
			team_retentioncleanupoperation: DevKit.Controls.NavigationItem,
			team_retentionconfig: DevKit.Controls.NavigationItem,
			team_retentionfailuredetail: DevKit.Controls.NavigationItem,
			team_retentionoperation: DevKit.Controls.NavigationItem,
			team_routingrule: DevKit.Controls.NavigationItem,
			team_routingruleitem: DevKit.Controls.NavigationItem,
			team_sharepointsite: DevKit.Controls.NavigationItem,
			team_sideloadedaiplugin: DevKit.Controls.NavigationItem,
			team_slaBase: DevKit.Controls.NavigationItem,
			team_solutioncomponentbatchconfiguration: DevKit.Controls.NavigationItem,
			team_stagesolutionupload: DevKit.Controls.NavigationItem,
			team_synapsedatabase: DevKit.Controls.NavigationItem,
			team_task: DevKit.Controls.NavigationItem,
			team_tdsmetadata: DevKit.Controls.NavigationItem,
			team_workflow: DevKit.Controls.NavigationItem,
			team_workflowbinary: DevKit.Controls.NavigationItem,
			team_workflowlog: DevKit.Controls.NavigationItem,
			team_workqueue: DevKit.Controls.NavigationItem,
			team_workqueueitem: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Members: DevKit.Controls.Grid;
		}
	}
	class FormBieu_mau_nhom_Doanh_nghiep extends DevKit.IForm {
		/**
		* Biểu mẫu nhóm – Doanh nghiệp [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Bieu_mau_nhom_Doanh_nghiep */
		Body: DevKit.FormBieu_mau_nhom_Doanh_nghiep.Body;
		/** The Navigation of form Bieu_mau_nhom_Doanh_nghiep */
		Navigation: DevKit.FormBieu_mau_nhom_Doanh_nghiep.Navigation;
		/** The Grid of form Bieu_mau_nhom_Doanh_nghiep */
		Grid: DevKit.FormBieu_mau_nhom_Doanh_nghiep.Grid;
		/** The SidePanes of form Bieu_mau_nhom_Doanh_nghiep */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTeam {
		interface Header extends DevKit.Controls.IHeader {
			/** Mã định danh duy nhất của hàng đợi mặc định cho nhóm. */
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
			/** Mã định danh duy nhất của người dùng chịu trách nhiệm chính cho nhóm. */
			AdministratorId: DevKit.Controls.Lookup;
			/** ID đối tượng Azure active directory cho một nhóm. */
			AzureActiveDirectoryObjectId: DevKit.Controls.String;
			/** Mã định danh duy nhất của bơn vị kinh doanh có nhóm được liên kết. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Mô tả nhóm. */
			Description: DevKit.Controls.String;
			MembershipType: DevKit.Controls.OptionSet;
			/** Tên của nhóm. */
			Name: DevKit.Controls.String;
			/** Chọn loại nhóm. */
			TeamType: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			adx_inviteredemption_team_owningteam: DevKit.Controls.NavigationItem,
			adx_portalcomment_team_owningteam: DevKit.Controls.NavigationItem,
			team_accounts: DevKit.Controls.NavigationItem,
			team_activityfileattachment: DevKit.Controls.NavigationItem,
			team_adx_invitation: DevKit.Controls.NavigationItem,
			team_adx_setting: DevKit.Controls.NavigationItem,
			team_aiplugin: DevKit.Controls.NavigationItem,
			team_aipluginauth: DevKit.Controls.NavigationItem,
			team_aipluginconversationstarter: DevKit.Controls.NavigationItem,
			team_aipluginconversationstartermapping: DevKit.Controls.NavigationItem,
			team_aipluginexternalschema: DevKit.Controls.NavigationItem,
			team_aipluginexternalschemaproperty: DevKit.Controls.NavigationItem,
			team_aiplugingovernance: DevKit.Controls.NavigationItem,
			team_aiplugingovernanceext: DevKit.Controls.NavigationItem,
			team_aiplugininstance: DevKit.Controls.NavigationItem,
			team_aipluginoperation: DevKit.Controls.NavigationItem,
			team_aipluginoperationparameter: DevKit.Controls.NavigationItem,
			team_aipluginoperationresponsetemplate: DevKit.Controls.NavigationItem,
			team_aipluginusersetting: DevKit.Controls.NavigationItem,
			team_appnotification: DevKit.Controls.NavigationItem,
			team_appointment: DevKit.Controls.NavigationItem,
			team_archivecleanupinfo: DevKit.Controls.NavigationItem,
			team_archivecleanupoperation: DevKit.Controls.NavigationItem,
			team_bot: DevKit.Controls.NavigationItem,
			team_botcomponent: DevKit.Controls.NavigationItem,
			team_botcomponentcollection: DevKit.Controls.NavigationItem,
			team_bulkarchiveconfig: DevKit.Controls.NavigationItem,
			team_bulkarchivefailuredetail: DevKit.Controls.NavigationItem,
			team_bulkarchiveoperation: DevKit.Controls.NavigationItem,
			team_canvasappextendedmetadata: DevKit.Controls.NavigationItem,
			team_card: DevKit.Controls.NavigationItem,
			team_channelaccessprofile: DevKit.Controls.NavigationItem,
			team_comment: DevKit.Controls.NavigationItem,
			team_componentversion: DevKit.Controls.NavigationItem,
			team_connectioninstance: DevKit.Controls.NavigationItem,
			team_connectionreference: DevKit.Controls.NavigationItem,
			team_connector: DevKit.Controls.NavigationItem,
			team_contacts: DevKit.Controls.NavigationItem,
			team_conversationtranscript: DevKit.Controls.NavigationItem,
			team_convertrule: DevKit.Controls.NavigationItem,
			team_copilotglossaryterm: DevKit.Controls.NavigationItem,
			team_copilotsynonyms: DevKit.Controls.NavigationItem,
			team_credential: DevKit.Controls.NavigationItem,
			team_customapi: DevKit.Controls.NavigationItem,
			team_datalakefolder: DevKit.Controls.NavigationItem,
			team_desktopflowbinary: DevKit.Controls.NavigationItem,
			team_desktopflowmodule: DevKit.Controls.NavigationItem,
			team_dvfilesearch: DevKit.Controls.NavigationItem,
			team_dvfilesearchattribute: DevKit.Controls.NavigationItem,
			team_dvfilesearchentity: DevKit.Controls.NavigationItem,
			team_dvtablesearch: DevKit.Controls.NavigationItem,
			team_dvtablesearchattribute: DevKit.Controls.NavigationItem,
			team_dvtablesearchentity: DevKit.Controls.NavigationItem,
			team_email: DevKit.Controls.NavigationItem,
			team_email_templates: DevKit.Controls.NavigationItem,
			team_emailserverprofile: DevKit.Controls.NavigationItem,
			team_enablearchivalrequest: DevKit.Controls.NavigationItem,
			team_environmentvariabledefinition: DevKit.Controls.NavigationItem,
			team_environmentvariablevalue: DevKit.Controls.NavigationItem,
			team_exchangesyncidmapping: DevKit.Controls.NavigationItem,
			team_exportedexcel: DevKit.Controls.NavigationItem,
			team_exportsolutionupload: DevKit.Controls.NavigationItem,
			team_externalparty: DevKit.Controls.NavigationItem,
			team_fabricaiskill: DevKit.Controls.NavigationItem,
			team_featurecontrolsetting: DevKit.Controls.NavigationItem,
			team_federatedknowledgeconfiguration: DevKit.Controls.NavigationItem,
			team_federatedknowledgeentityconfiguration: DevKit.Controls.NavigationItem,
			team_flowcapacityassignment: DevKit.Controls.NavigationItem,
			team_flowcredentialapplication: DevKit.Controls.NavigationItem,
			team_flowevent: DevKit.Controls.NavigationItem,
			team_flowmachine: DevKit.Controls.NavigationItem,
			team_flowmachinegroup: DevKit.Controls.NavigationItem,
			team_flowmachineimage: DevKit.Controls.NavigationItem,
			team_flowmachineimageversion: DevKit.Controls.NavigationItem,
			team_flowmachinenetwork: DevKit.Controls.NavigationItem,
			team_flowrun: DevKit.Controls.NavigationItem,
			team_flowsession: DevKit.Controls.NavigationItem,
			team_fxexpression: DevKit.Controls.NavigationItem,
			team_goal: DevKit.Controls.NavigationItem,
			team_goal_goalowner: DevKit.Controls.NavigationItem,
			team_goalrollupquery: DevKit.Controls.NavigationItem,
			team_interactionforemail: DevKit.Controls.NavigationItem,
			team_keyvaultreference: DevKit.Controls.NavigationItem,
			team_knowledgearticle: DevKit.Controls.NavigationItem,
			team_mailbox: DevKit.Controls.NavigationItem,
			team_mailboxtrackingcategory: DevKit.Controls.NavigationItem,
			team_managedidentity: DevKit.Controls.NavigationItem,
			team_msdyn_aibdataset: DevKit.Controls.NavigationItem,
			team_msdyn_aibdatasetfile: DevKit.Controls.NavigationItem,
			team_msdyn_aibdatasetrecord: DevKit.Controls.NavigationItem,
			team_msdyn_aibdatasetscontainer: DevKit.Controls.NavigationItem,
			team_msdyn_aibfeedbackloop: DevKit.Controls.NavigationItem,
			team_msdyn_aibfile: DevKit.Controls.NavigationItem,
			team_msdyn_aibfileattacheddata: DevKit.Controls.NavigationItem,
			team_msdyn_aievent: DevKit.Controls.NavigationItem,
			team_msdyn_aifptrainingdocument: DevKit.Controls.NavigationItem,
			team_msdyn_aimodel: DevKit.Controls.NavigationItem,
			team_msdyn_aiodimage: DevKit.Controls.NavigationItem,
			team_msdyn_aiodlabel: DevKit.Controls.NavigationItem,
			team_msdyn_aiodtrainingboundingbox: DevKit.Controls.NavigationItem,
			team_msdyn_aiodtrainingimage: DevKit.Controls.NavigationItem,
			team_msdyn_aitemplate: DevKit.Controls.NavigationItem,
			team_msdyn_analysiscomponent: DevKit.Controls.NavigationItem,
			team_msdyn_analysisjob: DevKit.Controls.NavigationItem,
			team_msdyn_analysisoverride: DevKit.Controls.NavigationItem,
			team_msdyn_analysisresult: DevKit.Controls.NavigationItem,
			team_msdyn_analysisresultdetail: DevKit.Controls.NavigationItem,
			team_msdyn_customcontrolextendedsettings: DevKit.Controls.NavigationItem,
			team_msdyn_dataflow: DevKit.Controls.NavigationItem,
			team_msdyn_dataflow_datalakefolder: DevKit.Controls.NavigationItem,
			team_msdyn_dataflowconnectionreference: DevKit.Controls.NavigationItem,
			team_msdyn_dataflowrefreshhistory: DevKit.Controls.NavigationItem,
			team_msdyn_dataflowtemplate: DevKit.Controls.NavigationItem,
			team_msdyn_dmsrequest: DevKit.Controls.NavigationItem,
			team_msdyn_dmsrequeststatus: DevKit.Controls.NavigationItem,
			team_msdyn_dmssyncrequest: DevKit.Controls.NavigationItem,
			team_msdyn_dmssyncstatus: DevKit.Controls.NavigationItem,
			team_msdyn_entitylinkchatconfiguration: DevKit.Controls.NavigationItem,
			team_msdyn_entityrefreshhistory: DevKit.Controls.NavigationItem,
			team_msdyn_favoriteknowledgearticle: DevKit.Controls.NavigationItem,
			team_msdyn_federatedarticle: DevKit.Controls.NavigationItem,
			team_msdyn_fileupload: DevKit.Controls.NavigationItem,
			team_msdyn_flow_actionapprovalmodel: DevKit.Controls.NavigationItem,
			team_msdyn_flow_approval: DevKit.Controls.NavigationItem,
			team_msdyn_flow_approvalrequest: DevKit.Controls.NavigationItem,
			team_msdyn_flow_approvalresponse: DevKit.Controls.NavigationItem,
			team_msdyn_flow_approvalstep: DevKit.Controls.NavigationItem,
			team_msdyn_flow_awaitallactionapprovalmodel: DevKit.Controls.NavigationItem,
			team_msdyn_flow_awaitallapprovalmodel: DevKit.Controls.NavigationItem,
			team_msdyn_flow_basicapprovalmodel: DevKit.Controls.NavigationItem,
			team_msdyn_flow_flowapproval: DevKit.Controls.NavigationItem,
			team_msdyn_integratedsearchprovider: DevKit.Controls.NavigationItem,
			team_msdyn_kalanguagesetting: DevKit.Controls.NavigationItem,
			team_msdyn_kbattachment: DevKit.Controls.NavigationItem,
			team_msdyn_kmfederatedsearchconfig: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgearticleimage: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgearticletemplate: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgeassetconfiguration: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgeinteractioninsight: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgemanagementsetting: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgepersonalfilter: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgesearchfilter: DevKit.Controls.NavigationItem,
			team_msdyn_knowledgesearchinsight: DevKit.Controls.NavigationItem,
			team_msdyn_mobileapp: DevKit.Controls.NavigationItem,
			team_msdyn_pmanalysishistory: DevKit.Controls.NavigationItem,
			team_msdyn_pmbusinessruleautomationconfig: DevKit.Controls.NavigationItem,
			team_msdyn_pmcalendar: DevKit.Controls.NavigationItem,
			team_msdyn_pmcalendarversion: DevKit.Controls.NavigationItem,
			team_msdyn_pminferredtask: DevKit.Controls.NavigationItem,
			team_msdyn_pmprocessextendedmetadataversion: DevKit.Controls.NavigationItem,
			team_msdyn_pmprocesstemplate: DevKit.Controls.NavigationItem,
			team_msdyn_pmprocessusersettings: DevKit.Controls.NavigationItem,
			team_msdyn_pmprocessversion: DevKit.Controls.NavigationItem,
			team_msdyn_pmrecording: DevKit.Controls.NavigationItem,
			team_msdyn_pmsimulation: DevKit.Controls.NavigationItem,
			team_msdyn_pmtemplate: DevKit.Controls.NavigationItem,
			team_msdyn_pmview: DevKit.Controls.NavigationItem,
			team_msdyn_richtextfile: DevKit.Controls.NavigationItem,
			team_msdyn_salesforcestructuredobject: DevKit.Controls.NavigationItem,
			team_msdyn_salesforcestructuredqnaconfig: DevKit.Controls.NavigationItem,
			team_msdyn_schedule: DevKit.Controls.NavigationItem,
			team_msdyn_serviceconfiguration: DevKit.Controls.NavigationItem,
			team_msdyn_slakpi: DevKit.Controls.NavigationItem,
			team_msdyn_solutionhealthrule: DevKit.Controls.NavigationItem,
			team_msdyn_solutionhealthruleargument: DevKit.Controls.NavigationItem,
			team_msdyn_virtualtablecolumncandidate: DevKit.Controls.NavigationItem,
			team_msdynce_botcontent: DevKit.Controls.NavigationItem,
			team_mspcat_catalogsubmissionfiles: DevKit.Controls.NavigationItem,
			team_mspcat_packagestore: DevKit.Controls.NavigationItem,
			team_nlsqregistration: DevKit.Controls.NavigationItem,
			team_pdfsetting: DevKit.Controls.NavigationItem,
			team_phonecall: DevKit.Controls.NavigationItem,
			team_plannerbusinessscenario: DevKit.Controls.NavigationItem,
			team_plannersyncaction: DevKit.Controls.NavigationItem,
			team_powerbidataset: DevKit.Controls.NavigationItem,
			team_powerbidatasetapdx: DevKit.Controls.NavigationItem,
			team_powerbimashupparameter: DevKit.Controls.NavigationItem,
			team_powerbireport: DevKit.Controls.NavigationItem,
			team_powerbireportapdx: DevKit.Controls.NavigationItem,
			team_powerfxrule: DevKit.Controls.NavigationItem,
			team_powerpagecomponent: DevKit.Controls.NavigationItem,
			team_powerpagesite: DevKit.Controls.NavigationItem,
			team_powerpagesitelanguage: DevKit.Controls.NavigationItem,
			team_powerpagesitepublished: DevKit.Controls.NavigationItem,
			team_powerpageslog: DevKit.Controls.NavigationItem,
			team_powerpagesscanreport: DevKit.Controls.NavigationItem,
			team_privilegecheckerrun: DevKit.Controls.NavigationItem,
			team_processstageparameter: DevKit.Controls.NavigationItem,
			team_profilerule: DevKit.Controls.NavigationItem,
			team_queueitembase_workerid: DevKit.Controls.NavigationItem,
			team_recentlyused: DevKit.Controls.NavigationItem,
			team_reconciliationentityinfo: DevKit.Controls.NavigationItem,
			team_reconciliationentitystepinfo: DevKit.Controls.NavigationItem,
			team_reconciliationinfo: DevKit.Controls.NavigationItem,
			team_retaineddataexcel: DevKit.Controls.NavigationItem,
			team_retentioncleanupinfo: DevKit.Controls.NavigationItem,
			team_retentioncleanupoperation: DevKit.Controls.NavigationItem,
			team_retentionconfig: DevKit.Controls.NavigationItem,
			team_retentionfailuredetail: DevKit.Controls.NavigationItem,
			team_retentionoperation: DevKit.Controls.NavigationItem,
			team_routingrule: DevKit.Controls.NavigationItem,
			team_routingruleitem: DevKit.Controls.NavigationItem,
			team_sharepointsite: DevKit.Controls.NavigationItem,
			team_sideloadedaiplugin: DevKit.Controls.NavigationItem,
			team_slaBase: DevKit.Controls.NavigationItem,
			team_solutioncomponentbatchconfiguration: DevKit.Controls.NavigationItem,
			team_stagesolutionupload: DevKit.Controls.NavigationItem,
			team_synapsedatabase: DevKit.Controls.NavigationItem,
			team_task: DevKit.Controls.NavigationItem,
			team_tdsmetadata: DevKit.Controls.NavigationItem,
			team_workflow: DevKit.Controls.NavigationItem,
			team_workflowbinary: DevKit.Controls.NavigationItem,
			team_workflowlog: DevKit.Controls.NavigationItem,
			team_workqueue: DevKit.Controls.NavigationItem,
			team_workqueueitem: DevKit.Controls.NavigationItem
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
		Body: DevKit.FormTeam.Body;
		/** The Header section of form Team */
		Header: DevKit.FormTeam.Header;
		/** The Navigation of form Team */
		Navigation: DevKit.FormTeam.Navigation;
		/** The Grid of form Team */
		Grid: DevKit.FormTeam.Grid;
		/** The SidePanes of form Team */
		SidePanes: DevKit.SidePanes;
	}
	class TeamApi {
		/**
		* DynamicsCrm.DevKit TeamApi
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
		/** Mã định danh duy nhất của người dùng chịu trách nhiệm chính cho nhóm. */
		AdministratorId: string;
		/** ID đối tượng Azure active directory cho một nhóm. */
		AzureActiveDirectoryObjectId: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh có nhóm được liên kết. */
		BusinessUnitId: string;
		/** Mã định danh duy nhất của người dùng đã tạo nhóm. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo nhóm. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo nhóm. */
		readonly CreatedOnBehalfBy: string;
		/** The delegated authorization context for the team. */
		DelegatedAuthorizationId: string;
		/** Mô tả nhóm. */
		Description: string;
		/** Địa chỉ email cho nhóm. */
		EMailAddress: string;
		/** Tỷ giá của loại tiền liên kết với nhóm theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Thông tin về khả năng nhóm là nhóm bơn vị kinh doanh mặc định. */
		readonly IsDefault: boolean;
		readonly IsSasTokenSet: boolean;
		MembershipType: OptionSet.Team.MembershipType;
		/** Mã định danh duy nhất của người dùng sửa đổi nhóm lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi nhóm lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa nhóm lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của nhóm. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức liên kết với nhóm. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Mã định danh duy nhất của hàng đợi mặc định cho nhóm. */
		QueueId: string;
		/** Chọn bản ghi liên quan đến nhóm. */
		RegardingObjectId: string;
		/** Sas Token for Team. */
		readonly SasToken: string;
		/** For internal use only. */
		readonly ShareLinkQualifier: string;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Chọn khả năng hệ thống sẽ quản lý nhóm. */
		readonly SystemManaged: boolean;
		/** Mã định danh duy nhất cho nhóm. */
		TeamId: string;
		/** Cho biết mẫu nhóm liên kết với nhóm. */
		TeamTemplateId: string;
		/** Chọn loại nhóm. */
		TeamType: OptionSet.Team.TeamType;
		/** Mã định danh duy nhất của loại tiền liên kết với nhóm. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Số phiên bản của nhóm. */
		readonly VersionNumber: number;
		/** Cách phát âm tên đầy đủ của nhóm, ghi bằng ký tự phiên âm chữ mềm hoặc chữ cứng. */
		YomiName: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng chịu trách nhiệm chính cho nhóm. */
			readonly AdministratorId: string;
			/** ID đối tượng Azure active directory cho một nhóm. */
			readonly AzureActiveDirectoryObjectId: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh có nhóm được liên kết. */
			readonly BusinessUnitId: string;
			/** Mã định danh duy nhất của người dùng đã tạo nhóm. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo nhóm. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo nhóm. */
			readonly CreatedOnBehalfBy: string;
			/** The delegated authorization context for the team. */
			readonly DelegatedAuthorizationId: string;
			/** Mô tả nhóm. */
			readonly Description: string;
			/** Địa chỉ email cho nhóm. */
			readonly EMailAddress: string;
			/** Tỷ giá của loại tiền liên kết với nhóm theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Thông tin về khả năng nhóm là nhóm bơn vị kinh doanh mặc định. */
			readonly IsDefault: string;
			readonly IsSasTokenSet: string;
			readonly MembershipType: string;
			/** Mã định danh duy nhất của người dùng sửa đổi nhóm lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi nhóm lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa nhóm lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của nhóm. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức liên kết với nhóm. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Mã định danh duy nhất của hàng đợi mặc định cho nhóm. */
			readonly QueueId: string;
			/** Chọn bản ghi liên quan đến nhóm. */
			readonly RegardingObjectId: string;
			/** Sas Token for Team. */
			readonly SasToken: string;
			/** For internal use only. */
			readonly ShareLinkQualifier: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Chọn khả năng hệ thống sẽ quản lý nhóm. */
			readonly SystemManaged: string;
			/** Mã định danh duy nhất cho nhóm. */
			readonly TeamId: string;
			/** Cho biết mẫu nhóm liên kết với nhóm. */
			readonly TeamTemplateId: string;
			/** Chọn loại nhóm. */
			readonly TeamType: string;
			/** Mã định danh duy nhất của loại tiền liên kết với nhóm. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Số phiên bản của nhóm. */
			readonly VersionNumber: string;
			/** Cách phát âm tên đầy đủ của nhóm, ghi bằng ký tự phiên âm chữ mềm hoặc chữ cứng. */
			readonly YomiName: string;
		}
	}
}
declare namespace OptionSet {
	namespace Team {
		enum MembershipType {
			/** 3 */
			Guests,
			/** 1 */
			Members,
			/** 0 */
			Members_and_guests,
			/** 2 */
			Owners
		}
		enum RegardingObjectTypeCode {
		}
		enum TeamType {
			/** 0 */
			Chu_so_huu,
			/** 2 */
			Nhom_bao_mat_AAD,
			/** 3 */
			Nhom_Office_AAD,
			/** 1 */
			Truy_cap
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
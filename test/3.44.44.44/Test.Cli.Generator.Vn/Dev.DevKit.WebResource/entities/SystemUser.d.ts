//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBieu_mau_nguoi_dung_Doanh_nghiep {
		interface tab_ADMINISTRATION_TAB_Sections {
			administration: DevKit.Controls.Section;
			e_mail_configuration: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			DirectReports: DevKit.Controls.Section;
			mailing_address: DevKit.Controls.Section;
			online_account_information: DevKit.Controls.Section;
			onpremise_account_information: DevKit.Controls.Section;
			organization_information: DevKit.Controls.Section;
			TEAMS_TAB: DevKit.Controls.Section;
			user_information: DevKit.Controls.Section;
		}
		interface tab_ADMINISTRATION_TAB extends DevKit.Controls.ITab {
			Section: tab_ADMINISTRATION_TAB_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			ADMINISTRATION_TAB: tab_ADMINISTRATION_TAB;
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Loại người dùng. */
			AccessMode: DevKit.Controls.OptionSet;
			/** Cho biết địa chỉ chính đầy đủ. */
			Address1_Composite: DevKit.Controls.String;
			/** Số điện thoại đầu tiên liên kết với địa chỉ 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Mã định danh duy nhất của bơn vị kinh doanh có người dùng được liên kết. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Loại giấy phép của người dùng. */
			CALType: DevKit.Controls.OptionSet;
			/** Chọn hộp thư liên kết với người dùng này. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Miền Danh mục hiện hoạt người dùng là thành viên. */
			DomainName: DevKit.Controls.String;
			/** Tên đầy đủ của người dùng. */
			FullName: DevKit.Controls.String;
			/** Địa chỉ email nội bộ cho người dùng. */
			InternalEMailAddress: DevKit.Controls.String;
			/** Trạng thái lời mời của người dùng. */
			InviteStatusCode: DevKit.Controls.OptionSet;
			/** Số điện thoại di động cho người dùng. */
			MobilePhone: DevKit.Controls.String;
			/** Mã định danh duy nhất của người quản lý của người dùng. */
			ParentSystemUserId: DevKit.Controls.Lookup;
			/** Địa chỉ ưu tiên cho người dùng. */
			PreferredAddressCode: DevKit.Controls.OptionSet;
			/** Tiêu đề của người dùng. */
			Title: DevKit.Controls.String;
			/** ID Windows Live */
			WindowsLiveID: DevKit.Controls.String;
		}
		interface Navigation {
			adx_inviteredemption_systemuser_owninguser: DevKit.Controls.NavigationItem,
			adx_portalcomment_systemuser_owninguser: DevKit.Controls.NavigationItem,
			adx_webformsession_systemuser: DevKit.Controls.NavigationItem,
			AIPluginUserSetting_SystemUser_Syst: DevKit.Controls.NavigationItem,
			bizmap_systemuser_businessid: DevKit.Controls.NavigationItem,
			contact_owning_user: DevKit.Controls.NavigationItem,
			email_acceptingentity_systemuser: DevKit.Controls.NavigationItem,
			flowmachinegroup_PasswordChangedBy: DevKit.Controls.NavigationItem,
			flowmachinegroup_RotationStartedBy: DevKit.Controls.NavigationItem,
			knowledgearticle_primaryauthorid: DevKit.Controls.NavigationItem,
			lk_audit_callinguserid: DevKit.Controls.NavigationItem,
			lk_audit_userid: DevKit.Controls.NavigationItem,
			lk_feedback_closedby: DevKit.Controls.NavigationItem,
			lk_queueitembase_workerid: DevKit.Controls.NavigationItem,
			lk_teambase_administratorid: DevKit.Controls.NavigationItem,
			mailbox_regarding_systemuser: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_adplacement_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_adplacement_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermission_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermission_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermissionprofile_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermissionprofile_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_contentsnippet_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_contentsnippet_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityform_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityform_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityformmetadata_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityformmetadata_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitylist_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitylist_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitypermission_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitypermission_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pagetemplate_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pagetemplate_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pollplacement_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pollplacement_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstate_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstate_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstatetransitionrule_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstatetransitionrule_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_redirect_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_redirect_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_shortcut_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_shortcut_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitemarker_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitemarker_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitesetting_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitesetting_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webfile_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webfile_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webform_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webform_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformmetadata_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformmetadata_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformstep_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformstep_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblink_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblink_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblinkset_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblinkset_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpage_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpage_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpageaccesscontrolrule_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpageaccesscontrolrule_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webrole_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webrole_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_website_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_website_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websiteaccess_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websiteaccess_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websitelanguage_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websitelanguage_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webtemplate_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webtemplate_modifiedby: DevKit.Controls.NavigationItem,
			privilegecheckerlog_CheckedUser_systemuser: DevKit.Controls.NavigationItem,
			privilegecheckerlog_ImpersonatingUser_systemuser: DevKit.Controls.NavigationItem,
			privilegecheckerlog_SupportingCaller_systemuser: DevKit.Controls.NavigationItem,
			queue_primary_user: DevKit.Controls.NavigationItem,
			sideloadedaiplugin_sideloadedpluginownerid: DevKit.Controls.NavigationItem,
			system_user_accounts: DevKit.Controls.NavigationItem,
			system_user_contacts: DevKit.Controls.NavigationItem,
			system_user_email_templates: DevKit.Controls.NavigationItem,
			system_user_territories: DevKit.Controls.NavigationItem,
			system_user_workflow: DevKit.Controls.NavigationItem,
			systemuser_appusersetting_userId: DevKit.Controls.NavigationItem,
			systemuser_bot_publishedby: DevKit.Controls.NavigationItem,
			SystemUser_Email_EmailSender: DevKit.Controls.NavigationItem,
			SystemUser_ExternalPartyItems: DevKit.Controls.NavigationItem,
			systemuser_internal_addresses: DevKit.Controls.NavigationItem,
			user_accounts: DevKit.Controls.NavigationItem,
			user_activityfileattachment: DevKit.Controls.NavigationItem,
			user_adx_invitation: DevKit.Controls.NavigationItem,
			user_adx_setting: DevKit.Controls.NavigationItem,
			user_aiplugin: DevKit.Controls.NavigationItem,
			user_aipluginauth: DevKit.Controls.NavigationItem,
			user_aipluginconversationstarter: DevKit.Controls.NavigationItem,
			user_aipluginconversationstartermapping: DevKit.Controls.NavigationItem,
			user_aipluginexternalschema: DevKit.Controls.NavigationItem,
			user_aipluginexternalschemaproperty: DevKit.Controls.NavigationItem,
			user_aiplugingovernance: DevKit.Controls.NavigationItem,
			user_aiplugingovernanceext: DevKit.Controls.NavigationItem,
			user_aiplugininstance: DevKit.Controls.NavigationItem,
			user_aipluginoperation: DevKit.Controls.NavigationItem,
			user_aipluginoperationparameter: DevKit.Controls.NavigationItem,
			user_aipluginoperationresponsetemplate: DevKit.Controls.NavigationItem,
			user_aipluginusersetting: DevKit.Controls.NavigationItem,
			user_appnotification: DevKit.Controls.NavigationItem,
			user_appointment: DevKit.Controls.NavigationItem,
			user_archivecleanupinfo: DevKit.Controls.NavigationItem,
			user_archivecleanupoperation: DevKit.Controls.NavigationItem,
			user_bot: DevKit.Controls.NavigationItem,
			user_botcomponent: DevKit.Controls.NavigationItem,
			user_botcomponentcollection: DevKit.Controls.NavigationItem,
			user_bulkarchiveconfig: DevKit.Controls.NavigationItem,
			user_bulkarchivefailuredetail: DevKit.Controls.NavigationItem,
			user_bulkarchiveoperation: DevKit.Controls.NavigationItem,
			user_canvasappextendedmetadata: DevKit.Controls.NavigationItem,
			user_card: DevKit.Controls.NavigationItem,
			user_channelaccessprofile: DevKit.Controls.NavigationItem,
			user_comment: DevKit.Controls.NavigationItem,
			user_componentversion: DevKit.Controls.NavigationItem,
			user_connectioninstance: DevKit.Controls.NavigationItem,
			user_connectionreference: DevKit.Controls.NavigationItem,
			user_connector: DevKit.Controls.NavigationItem,
			user_conversationtranscript: DevKit.Controls.NavigationItem,
			user_convertrule: DevKit.Controls.NavigationItem,
			user_copilotglossaryterm: DevKit.Controls.NavigationItem,
			user_copilotsynonyms: DevKit.Controls.NavigationItem,
			user_credential: DevKit.Controls.NavigationItem,
			user_customapi: DevKit.Controls.NavigationItem,
			user_datalakefolder: DevKit.Controls.NavigationItem,
			user_desktopflowbinary: DevKit.Controls.NavigationItem,
			user_desktopflowmodule: DevKit.Controls.NavigationItem,
			user_dvfilesearch: DevKit.Controls.NavigationItem,
			user_dvfilesearchattribute: DevKit.Controls.NavigationItem,
			user_dvfilesearchentity: DevKit.Controls.NavigationItem,
			user_dvtablesearch: DevKit.Controls.NavigationItem,
			user_dvtablesearchattribute: DevKit.Controls.NavigationItem,
			user_dvtablesearchentity: DevKit.Controls.NavigationItem,
			user_email: DevKit.Controls.NavigationItem,
			user_enablearchivalrequest: DevKit.Controls.NavigationItem,
			user_environmentvariabledefinition: DevKit.Controls.NavigationItem,
			user_environmentvariablevalue: DevKit.Controls.NavigationItem,
			user_exchangesyncidmapping: DevKit.Controls.NavigationItem,
			user_exportedexcel: DevKit.Controls.NavigationItem,
			user_exportsolutionupload: DevKit.Controls.NavigationItem,
			user_externalparty: DevKit.Controls.NavigationItem,
			user_fabricaiskill: DevKit.Controls.NavigationItem,
			user_featurecontrolsetting: DevKit.Controls.NavigationItem,
			user_federatedknowledgeconfiguration: DevKit.Controls.NavigationItem,
			user_federatedknowledgeentityconfiguration: DevKit.Controls.NavigationItem,
			user_flowcapacityassignment: DevKit.Controls.NavigationItem,
			user_flowcredentialapplication: DevKit.Controls.NavigationItem,
			user_flowevent: DevKit.Controls.NavigationItem,
			user_flowmachine: DevKit.Controls.NavigationItem,
			user_flowmachinegroup: DevKit.Controls.NavigationItem,
			user_flowmachineimage: DevKit.Controls.NavigationItem,
			user_flowmachineimageversion: DevKit.Controls.NavigationItem,
			user_flowmachinenetwork: DevKit.Controls.NavigationItem,
			user_flowrun: DevKit.Controls.NavigationItem,
			user_flowsession: DevKit.Controls.NavigationItem,
			user_fxexpression: DevKit.Controls.NavigationItem,
			user_goal: DevKit.Controls.NavigationItem,
			user_goal_goalowner: DevKit.Controls.NavigationItem,
			user_interactionforemail: DevKit.Controls.NavigationItem,
			user_keyvaultreference: DevKit.Controls.NavigationItem,
			user_knowledgearticle: DevKit.Controls.NavigationItem,
			user_mailbox: DevKit.Controls.NavigationItem,
			user_managedidentity: DevKit.Controls.NavigationItem,
			user_msdyn_aibdataset: DevKit.Controls.NavigationItem,
			user_msdyn_aibdatasetfile: DevKit.Controls.NavigationItem,
			user_msdyn_aibdatasetrecord: DevKit.Controls.NavigationItem,
			user_msdyn_aibdatasetscontainer: DevKit.Controls.NavigationItem,
			user_msdyn_aibfeedbackloop: DevKit.Controls.NavigationItem,
			user_msdyn_aibfile: DevKit.Controls.NavigationItem,
			user_msdyn_aibfileattacheddata: DevKit.Controls.NavigationItem,
			user_msdyn_aievent: DevKit.Controls.NavigationItem,
			user_msdyn_aifptrainingdocument: DevKit.Controls.NavigationItem,
			user_msdyn_aimodel: DevKit.Controls.NavigationItem,
			user_msdyn_aiodimage: DevKit.Controls.NavigationItem,
			user_msdyn_aiodlabel: DevKit.Controls.NavigationItem,
			user_msdyn_aiodtrainingboundingbox: DevKit.Controls.NavigationItem,
			user_msdyn_aiodtrainingimage: DevKit.Controls.NavigationItem,
			user_msdyn_aitemplate: DevKit.Controls.NavigationItem,
			user_msdyn_analysiscomponent: DevKit.Controls.NavigationItem,
			user_msdyn_analysisjob: DevKit.Controls.NavigationItem,
			user_msdyn_analysisoverride: DevKit.Controls.NavigationItem,
			user_msdyn_analysisresult: DevKit.Controls.NavigationItem,
			user_msdyn_analysisresultdetail: DevKit.Controls.NavigationItem,
			user_msdyn_customcontrolextendedsettings: DevKit.Controls.NavigationItem,
			user_msdyn_dataflow: DevKit.Controls.NavigationItem,
			user_msdyn_dataflow_datalakefolder: DevKit.Controls.NavigationItem,
			user_msdyn_dataflowconnectionreference: DevKit.Controls.NavigationItem,
			user_msdyn_dataflowrefreshhistory: DevKit.Controls.NavigationItem,
			user_msdyn_dataflowtemplate: DevKit.Controls.NavigationItem,
			user_msdyn_dmsrequest: DevKit.Controls.NavigationItem,
			user_msdyn_dmsrequeststatus: DevKit.Controls.NavigationItem,
			user_msdyn_dmssyncrequest: DevKit.Controls.NavigationItem,
			user_msdyn_dmssyncstatus: DevKit.Controls.NavigationItem,
			user_msdyn_entitylinkchatconfiguration: DevKit.Controls.NavigationItem,
			user_msdyn_entityrefreshhistory: DevKit.Controls.NavigationItem,
			user_msdyn_favoriteknowledgearticle: DevKit.Controls.NavigationItem,
			user_msdyn_federatedarticle: DevKit.Controls.NavigationItem,
			user_msdyn_fileupload: DevKit.Controls.NavigationItem,
			user_msdyn_flow_actionapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approval: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approvalrequest: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approvalresponse: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approvalstep: DevKit.Controls.NavigationItem,
			user_msdyn_flow_awaitallactionapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_awaitallapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_basicapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_flowapproval: DevKit.Controls.NavigationItem,
			user_msdyn_integratedsearchprovider: DevKit.Controls.NavigationItem,
			user_msdyn_kalanguagesetting: DevKit.Controls.NavigationItem,
			user_msdyn_kbattachment: DevKit.Controls.NavigationItem,
			user_msdyn_kmfederatedsearchconfig: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgearticleimage: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgearticletemplate: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgeassetconfiguration: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgeinteractioninsight: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgemanagementsetting: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgepersonalfilter: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgesearchfilter: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgesearchinsight: DevKit.Controls.NavigationItem,
			user_msdyn_mobileapp: DevKit.Controls.NavigationItem,
			user_msdyn_pmanalysishistory: DevKit.Controls.NavigationItem,
			user_msdyn_pmbusinessruleautomationconfig: DevKit.Controls.NavigationItem,
			user_msdyn_pmcalendar: DevKit.Controls.NavigationItem,
			user_msdyn_pmcalendarversion: DevKit.Controls.NavigationItem,
			user_msdyn_pminferredtask: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocessextendedmetadataversion: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocesstemplate: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocessusersettings: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocessversion: DevKit.Controls.NavigationItem,
			user_msdyn_pmrecording: DevKit.Controls.NavigationItem,
			user_msdyn_pmsimulation: DevKit.Controls.NavigationItem,
			user_msdyn_pmtemplate: DevKit.Controls.NavigationItem,
			user_msdyn_pmview: DevKit.Controls.NavigationItem,
			user_msdyn_richtextfile: DevKit.Controls.NavigationItem,
			user_msdyn_salesforcestructuredobject: DevKit.Controls.NavigationItem,
			user_msdyn_salesforcestructuredqnaconfig: DevKit.Controls.NavigationItem,
			user_msdyn_schedule: DevKit.Controls.NavigationItem,
			user_msdyn_serviceconfiguration: DevKit.Controls.NavigationItem,
			user_msdyn_slakpi: DevKit.Controls.NavigationItem,
			user_msdyn_solutionhealthrule: DevKit.Controls.NavigationItem,
			user_msdyn_solutionhealthruleargument: DevKit.Controls.NavigationItem,
			user_msdyn_virtualtablecolumncandidate: DevKit.Controls.NavigationItem,
			user_msdynce_botcontent: DevKit.Controls.NavigationItem,
			user_mspcat_catalogsubmissionfiles: DevKit.Controls.NavigationItem,
			user_mspcat_packagestore: DevKit.Controls.NavigationItem,
			user_nlsqregistration: DevKit.Controls.NavigationItem,
			user_parent_user: DevKit.Controls.NavigationItem,
			user_pdfsetting: DevKit.Controls.NavigationItem,
			user_phonecall: DevKit.Controls.NavigationItem,
			user_plannerbusinessscenario: DevKit.Controls.NavigationItem,
			user_plannersyncaction: DevKit.Controls.NavigationItem,
			user_powerbidataset: DevKit.Controls.NavigationItem,
			user_powerbidatasetapdx: DevKit.Controls.NavigationItem,
			user_powerbimashupparameter: DevKit.Controls.NavigationItem,
			user_powerbireport: DevKit.Controls.NavigationItem,
			user_powerbireportapdx: DevKit.Controls.NavigationItem,
			user_powerfxrule: DevKit.Controls.NavigationItem,
			user_powerpagecomponent: DevKit.Controls.NavigationItem,
			user_powerpagesite: DevKit.Controls.NavigationItem,
			user_powerpagesitelanguage: DevKit.Controls.NavigationItem,
			user_powerpagesitepublished: DevKit.Controls.NavigationItem,
			user_powerpageslog: DevKit.Controls.NavigationItem,
			user_powerpagesscanreport: DevKit.Controls.NavigationItem,
			user_privilegecheckerrun: DevKit.Controls.NavigationItem,
			user_processstageparameter: DevKit.Controls.NavigationItem,
			user_profilerule: DevKit.Controls.NavigationItem,
			user_recentlyused: DevKit.Controls.NavigationItem,
			user_reconciliationentityinfo: DevKit.Controls.NavigationItem,
			user_reconciliationentitystepinfo: DevKit.Controls.NavigationItem,
			user_reconciliationinfo: DevKit.Controls.NavigationItem,
			user_retaineddataexcel: DevKit.Controls.NavigationItem,
			user_retentioncleanupinfo: DevKit.Controls.NavigationItem,
			user_retentioncleanupoperation: DevKit.Controls.NavigationItem,
			user_retentionconfig: DevKit.Controls.NavigationItem,
			user_retentionfailuredetail: DevKit.Controls.NavigationItem,
			user_retentionoperation: DevKit.Controls.NavigationItem,
			user_routingrule: DevKit.Controls.NavigationItem,
			user_routingruleitem: DevKit.Controls.NavigationItem,
			user_settings: DevKit.Controls.NavigationItem,
			user_sharepointsite: DevKit.Controls.NavigationItem,
			user_sideloadedaiplugin: DevKit.Controls.NavigationItem,
			user_slabase: DevKit.Controls.NavigationItem,
			user_solutioncomponentbatchconfiguration: DevKit.Controls.NavigationItem,
			user_stagesolutionupload: DevKit.Controls.NavigationItem,
			user_synapsedatabase: DevKit.Controls.NavigationItem,
			user_task: DevKit.Controls.NavigationItem,
			user_tdsmetadata: DevKit.Controls.NavigationItem,
			user_untrackedemail: DevKit.Controls.NavigationItem,
			user_userauthztracker: DevKit.Controls.NavigationItem,
			user_workflowbinary: DevKit.Controls.NavigationItem,
			user_workqueue: DevKit.Controls.NavigationItem,
			user_workqueueitem: DevKit.Controls.NavigationItem,
			workqueueitem_processinguser: DevKit.Controls.NavigationItem
		}
		interface Grid {
			DirectReports: DevKit.Controls.Grid;
			TeamsSubGrid: DevKit.Controls.Grid;
		}
	}
	class FormBieu_mau_nguoi_dung_Doanh_nghiep extends DevKit.IForm {
		/**
		* Biểu mẫu người dùng – Doanh nghiệp [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Bieu_mau_nguoi_dung_Doanh_nghiep */
		Body: DevKit.FormBieu_mau_nguoi_dung_Doanh_nghiep.Body;
		/** The Navigation of form Bieu_mau_nguoi_dung_Doanh_nghiep */
		Navigation: DevKit.FormBieu_mau_nguoi_dung_Doanh_nghiep.Navigation;
		/** The Grid of form Bieu_mau_nguoi_dung_Doanh_nghiep */
		Grid: DevKit.FormBieu_mau_nguoi_dung_Doanh_nghiep.Grid;
		/** The SidePanes of form Bieu_mau_nguoi_dung_Doanh_nghiep */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNguoi_dung {
		interface tab_ADMINISTRATION_TAB_Sections {
			administration: DevKit.Controls.Section;
			e_mail_configuration: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB_Sections {
			DirectReports: DevKit.Controls.Section;
			mailing_address: DevKit.Controls.Section;
			user_information_2: DevKit.Controls.Section;
		}
		interface tab_MobileOfflineProfile_TAB_Sections {
			mobileofflineaccessinfo: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			online_account_information: DevKit.Controls.Section;
			onpremise_account_information: DevKit.Controls.Section;
			organization_information: DevKit.Controls.Section;
			queue_information: DevKit.Controls.Section;
			queue_selection: DevKit.Controls.Section;
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			teams_information: DevKit.Controls.Section;
			user_information: DevKit.Controls.Section;
		}
		interface tab_ADMINISTRATION_TAB extends DevKit.Controls.ITab {
			Section: tab_ADMINISTRATION_TAB_Sections;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_MobileOfflineProfile_TAB extends DevKit.Controls.ITab {
			Section: tab_MobileOfflineProfile_TAB_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			ADMINISTRATION_TAB: tab_ADMINISTRATION_TAB;
			DETAILS_TAB: tab_DETAILS_TAB;
			MobileOfflineProfile_TAB: tab_MobileOfflineProfile_TAB;
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Loại người dùng. */
			AccessMode: DevKit.Controls.OptionSet;
			/** Cho biết địa chỉ chính đầy đủ. */
			Address1_Composite: DevKit.Controls.String;
			/** Số fax cho địa chỉ 1. */
			Address1_Fax: DevKit.Controls.String;
			/** Số điện thoại đầu tiên liên kết với địa chỉ 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Số điện thoại thứ hai liên kết với địa chỉ 1. */
			Address1_Telephone2: DevKit.Controls.String;
			/** Số điện thoại thứ ba liên kết với địa chỉ 1. */
			Address1_Telephone3: DevKit.Controls.String;
			/** Cho biết địa chỉ phụ đầy đủ. */
			Address2_Composite: DevKit.Controls.String;
			/** Mã định danh duy nhất của bơn vị kinh doanh có người dùng được liên kết. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Loại giấy phép của người dùng. */
			CALType: DevKit.Controls.OptionSet;
			/** Chọn hộp thư liên kết với người dùng này. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Miền Danh mục hiện hoạt người dùng là thành viên. */
			DomainName: DevKit.Controls.String;
			/** Tên đầy đủ của người dùng. */
			FullName: DevKit.Controls.String;
			/** Số điện thoại nhà riêng cho người dùng. */
			HomePhone: DevKit.Controls.String;
			/** Địa chỉ email nội bộ cho người dùng. */
			InternalEMailAddress: DevKit.Controls.String;
			/** Trạng thái lời mời của người dùng. */
			InviteStatusCode: DevKit.Controls.OptionSet;
			/** Địa chỉ email thông báo di động cho người dùng. */
			MobileAlertEMail: DevKit.Controls.String;
			/** Các mục chứa Người dùng Hệ thống cụ thể. */
			MobileOfflineProfileId: DevKit.Controls.Lookup;
			/** Số điện thoại di động cho người dùng. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Mã định danh duy nhất của người quản lý của người dùng. */
			ParentSystemUserId: DevKit.Controls.Lookup;
			/** Địa chỉ email cá nhân của người dùng. */
			PersonalEMailAddress: DevKit.Controls.String;
			/** Vị trí của người dùng trong mô hình bảo mật theo cấp bậc. */
			PositionId: DevKit.Controls.Lookup;
			/** Địa chỉ ưu tiên cho người dùng. */
			PreferredAddressCode: DevKit.Controls.OptionSet;
			/** Số điện thoại ưu tiên cho người dùng. */
			PreferredPhoneCode: DevKit.Controls.OptionSet;
			/** Mã định danh duy nhất của hàng đợi mặc định cho người dùng. */
			QueueId: DevKit.Controls.Lookup;
			/** Tiêu đề của người dùng. */
			Title: DevKit.Controls.String;
			/** ID Windows Live */
			WindowsLiveID: DevKit.Controls.String;
		}
		interface Navigation {
			adx_inviteredemption_systemuser_owninguser: DevKit.Controls.NavigationItem,
			adx_portalcomment_systemuser_owninguser: DevKit.Controls.NavigationItem,
			adx_webformsession_systemuser: DevKit.Controls.NavigationItem,
			AIPluginUserSetting_SystemUser_Syst: DevKit.Controls.NavigationItem,
			bizmap_systemuser_businessid: DevKit.Controls.NavigationItem,
			contact_owning_user: DevKit.Controls.NavigationItem,
			email_acceptingentity_systemuser: DevKit.Controls.NavigationItem,
			flowmachinegroup_PasswordChangedBy: DevKit.Controls.NavigationItem,
			flowmachinegroup_RotationStartedBy: DevKit.Controls.NavigationItem,
			knowledgearticle_primaryauthorid: DevKit.Controls.NavigationItem,
			lk_audit_callinguserid: DevKit.Controls.NavigationItem,
			lk_audit_userid: DevKit.Controls.NavigationItem,
			lk_feedback_closedby: DevKit.Controls.NavigationItem,
			lk_queueitembase_workerid: DevKit.Controls.NavigationItem,
			lk_teambase_administratorid: DevKit.Controls.NavigationItem,
			mailbox_regarding_systemuser: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_adplacement_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_adplacement_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermission_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermission_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermissionprofile_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermissionprofile_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_contentsnippet_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_contentsnippet_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityform_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityform_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityformmetadata_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityformmetadata_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitylist_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitylist_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitypermission_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitypermission_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pagetemplate_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pagetemplate_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pollplacement_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pollplacement_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstate_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstate_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstatetransitionrule_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstatetransitionrule_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_redirect_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_redirect_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_shortcut_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_shortcut_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitemarker_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitemarker_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitesetting_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitesetting_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webfile_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webfile_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webform_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webform_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformmetadata_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformmetadata_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformstep_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformstep_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblink_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblink_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblinkset_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblinkset_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpage_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpage_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpageaccesscontrolrule_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpageaccesscontrolrule_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webrole_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webrole_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_website_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_website_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websiteaccess_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websiteaccess_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websitelanguage_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websitelanguage_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webtemplate_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webtemplate_modifiedby: DevKit.Controls.NavigationItem,
			privilegecheckerlog_CheckedUser_systemuser: DevKit.Controls.NavigationItem,
			privilegecheckerlog_ImpersonatingUser_systemuser: DevKit.Controls.NavigationItem,
			privilegecheckerlog_SupportingCaller_systemuser: DevKit.Controls.NavigationItem,
			queue_primary_user: DevKit.Controls.NavigationItem,
			sideloadedaiplugin_sideloadedpluginownerid: DevKit.Controls.NavigationItem,
			system_user_accounts: DevKit.Controls.NavigationItem,
			system_user_contacts: DevKit.Controls.NavigationItem,
			system_user_email_templates: DevKit.Controls.NavigationItem,
			system_user_territories: DevKit.Controls.NavigationItem,
			system_user_workflow: DevKit.Controls.NavigationItem,
			systemuser_appusersetting_userId: DevKit.Controls.NavigationItem,
			systemuser_bot_publishedby: DevKit.Controls.NavigationItem,
			SystemUser_Email_EmailSender: DevKit.Controls.NavigationItem,
			SystemUser_ExternalPartyItems: DevKit.Controls.NavigationItem,
			systemuser_internal_addresses: DevKit.Controls.NavigationItem,
			user_accounts: DevKit.Controls.NavigationItem,
			user_activityfileattachment: DevKit.Controls.NavigationItem,
			user_adx_invitation: DevKit.Controls.NavigationItem,
			user_adx_setting: DevKit.Controls.NavigationItem,
			user_aiplugin: DevKit.Controls.NavigationItem,
			user_aipluginauth: DevKit.Controls.NavigationItem,
			user_aipluginconversationstarter: DevKit.Controls.NavigationItem,
			user_aipluginconversationstartermapping: DevKit.Controls.NavigationItem,
			user_aipluginexternalschema: DevKit.Controls.NavigationItem,
			user_aipluginexternalschemaproperty: DevKit.Controls.NavigationItem,
			user_aiplugingovernance: DevKit.Controls.NavigationItem,
			user_aiplugingovernanceext: DevKit.Controls.NavigationItem,
			user_aiplugininstance: DevKit.Controls.NavigationItem,
			user_aipluginoperation: DevKit.Controls.NavigationItem,
			user_aipluginoperationparameter: DevKit.Controls.NavigationItem,
			user_aipluginoperationresponsetemplate: DevKit.Controls.NavigationItem,
			user_aipluginusersetting: DevKit.Controls.NavigationItem,
			user_appnotification: DevKit.Controls.NavigationItem,
			user_appointment: DevKit.Controls.NavigationItem,
			user_archivecleanupinfo: DevKit.Controls.NavigationItem,
			user_archivecleanupoperation: DevKit.Controls.NavigationItem,
			user_bot: DevKit.Controls.NavigationItem,
			user_botcomponent: DevKit.Controls.NavigationItem,
			user_botcomponentcollection: DevKit.Controls.NavigationItem,
			user_bulkarchiveconfig: DevKit.Controls.NavigationItem,
			user_bulkarchivefailuredetail: DevKit.Controls.NavigationItem,
			user_bulkarchiveoperation: DevKit.Controls.NavigationItem,
			user_canvasappextendedmetadata: DevKit.Controls.NavigationItem,
			user_card: DevKit.Controls.NavigationItem,
			user_channelaccessprofile: DevKit.Controls.NavigationItem,
			user_comment: DevKit.Controls.NavigationItem,
			user_componentversion: DevKit.Controls.NavigationItem,
			user_connectioninstance: DevKit.Controls.NavigationItem,
			user_connectionreference: DevKit.Controls.NavigationItem,
			user_connector: DevKit.Controls.NavigationItem,
			user_conversationtranscript: DevKit.Controls.NavigationItem,
			user_convertrule: DevKit.Controls.NavigationItem,
			user_copilotglossaryterm: DevKit.Controls.NavigationItem,
			user_copilotsynonyms: DevKit.Controls.NavigationItem,
			user_credential: DevKit.Controls.NavigationItem,
			user_customapi: DevKit.Controls.NavigationItem,
			user_datalakefolder: DevKit.Controls.NavigationItem,
			user_desktopflowbinary: DevKit.Controls.NavigationItem,
			user_desktopflowmodule: DevKit.Controls.NavigationItem,
			user_dvfilesearch: DevKit.Controls.NavigationItem,
			user_dvfilesearchattribute: DevKit.Controls.NavigationItem,
			user_dvfilesearchentity: DevKit.Controls.NavigationItem,
			user_dvtablesearch: DevKit.Controls.NavigationItem,
			user_dvtablesearchattribute: DevKit.Controls.NavigationItem,
			user_dvtablesearchentity: DevKit.Controls.NavigationItem,
			user_email: DevKit.Controls.NavigationItem,
			user_enablearchivalrequest: DevKit.Controls.NavigationItem,
			user_environmentvariabledefinition: DevKit.Controls.NavigationItem,
			user_environmentvariablevalue: DevKit.Controls.NavigationItem,
			user_exchangesyncidmapping: DevKit.Controls.NavigationItem,
			user_exportedexcel: DevKit.Controls.NavigationItem,
			user_exportsolutionupload: DevKit.Controls.NavigationItem,
			user_externalparty: DevKit.Controls.NavigationItem,
			user_fabricaiskill: DevKit.Controls.NavigationItem,
			user_featurecontrolsetting: DevKit.Controls.NavigationItem,
			user_federatedknowledgeconfiguration: DevKit.Controls.NavigationItem,
			user_federatedknowledgeentityconfiguration: DevKit.Controls.NavigationItem,
			user_flowcapacityassignment: DevKit.Controls.NavigationItem,
			user_flowcredentialapplication: DevKit.Controls.NavigationItem,
			user_flowevent: DevKit.Controls.NavigationItem,
			user_flowmachine: DevKit.Controls.NavigationItem,
			user_flowmachinegroup: DevKit.Controls.NavigationItem,
			user_flowmachineimage: DevKit.Controls.NavigationItem,
			user_flowmachineimageversion: DevKit.Controls.NavigationItem,
			user_flowmachinenetwork: DevKit.Controls.NavigationItem,
			user_flowrun: DevKit.Controls.NavigationItem,
			user_flowsession: DevKit.Controls.NavigationItem,
			user_fxexpression: DevKit.Controls.NavigationItem,
			user_goal: DevKit.Controls.NavigationItem,
			user_goal_goalowner: DevKit.Controls.NavigationItem,
			user_interactionforemail: DevKit.Controls.NavigationItem,
			user_keyvaultreference: DevKit.Controls.NavigationItem,
			user_knowledgearticle: DevKit.Controls.NavigationItem,
			user_mailbox: DevKit.Controls.NavigationItem,
			user_managedidentity: DevKit.Controls.NavigationItem,
			user_msdyn_aibdataset: DevKit.Controls.NavigationItem,
			user_msdyn_aibdatasetfile: DevKit.Controls.NavigationItem,
			user_msdyn_aibdatasetrecord: DevKit.Controls.NavigationItem,
			user_msdyn_aibdatasetscontainer: DevKit.Controls.NavigationItem,
			user_msdyn_aibfeedbackloop: DevKit.Controls.NavigationItem,
			user_msdyn_aibfile: DevKit.Controls.NavigationItem,
			user_msdyn_aibfileattacheddata: DevKit.Controls.NavigationItem,
			user_msdyn_aievent: DevKit.Controls.NavigationItem,
			user_msdyn_aifptrainingdocument: DevKit.Controls.NavigationItem,
			user_msdyn_aimodel: DevKit.Controls.NavigationItem,
			user_msdyn_aiodimage: DevKit.Controls.NavigationItem,
			user_msdyn_aiodlabel: DevKit.Controls.NavigationItem,
			user_msdyn_aiodtrainingboundingbox: DevKit.Controls.NavigationItem,
			user_msdyn_aiodtrainingimage: DevKit.Controls.NavigationItem,
			user_msdyn_aitemplate: DevKit.Controls.NavigationItem,
			user_msdyn_analysiscomponent: DevKit.Controls.NavigationItem,
			user_msdyn_analysisjob: DevKit.Controls.NavigationItem,
			user_msdyn_analysisoverride: DevKit.Controls.NavigationItem,
			user_msdyn_analysisresult: DevKit.Controls.NavigationItem,
			user_msdyn_analysisresultdetail: DevKit.Controls.NavigationItem,
			user_msdyn_customcontrolextendedsettings: DevKit.Controls.NavigationItem,
			user_msdyn_dataflow: DevKit.Controls.NavigationItem,
			user_msdyn_dataflow_datalakefolder: DevKit.Controls.NavigationItem,
			user_msdyn_dataflowconnectionreference: DevKit.Controls.NavigationItem,
			user_msdyn_dataflowrefreshhistory: DevKit.Controls.NavigationItem,
			user_msdyn_dataflowtemplate: DevKit.Controls.NavigationItem,
			user_msdyn_dmsrequest: DevKit.Controls.NavigationItem,
			user_msdyn_dmsrequeststatus: DevKit.Controls.NavigationItem,
			user_msdyn_dmssyncrequest: DevKit.Controls.NavigationItem,
			user_msdyn_dmssyncstatus: DevKit.Controls.NavigationItem,
			user_msdyn_entitylinkchatconfiguration: DevKit.Controls.NavigationItem,
			user_msdyn_entityrefreshhistory: DevKit.Controls.NavigationItem,
			user_msdyn_favoriteknowledgearticle: DevKit.Controls.NavigationItem,
			user_msdyn_federatedarticle: DevKit.Controls.NavigationItem,
			user_msdyn_fileupload: DevKit.Controls.NavigationItem,
			user_msdyn_flow_actionapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approval: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approvalrequest: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approvalresponse: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approvalstep: DevKit.Controls.NavigationItem,
			user_msdyn_flow_awaitallactionapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_awaitallapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_basicapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_flowapproval: DevKit.Controls.NavigationItem,
			user_msdyn_integratedsearchprovider: DevKit.Controls.NavigationItem,
			user_msdyn_kalanguagesetting: DevKit.Controls.NavigationItem,
			user_msdyn_kbattachment: DevKit.Controls.NavigationItem,
			user_msdyn_kmfederatedsearchconfig: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgearticleimage: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgearticletemplate: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgeassetconfiguration: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgeinteractioninsight: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgemanagementsetting: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgepersonalfilter: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgesearchfilter: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgesearchinsight: DevKit.Controls.NavigationItem,
			user_msdyn_mobileapp: DevKit.Controls.NavigationItem,
			user_msdyn_pmanalysishistory: DevKit.Controls.NavigationItem,
			user_msdyn_pmbusinessruleautomationconfig: DevKit.Controls.NavigationItem,
			user_msdyn_pmcalendar: DevKit.Controls.NavigationItem,
			user_msdyn_pmcalendarversion: DevKit.Controls.NavigationItem,
			user_msdyn_pminferredtask: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocessextendedmetadataversion: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocesstemplate: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocessusersettings: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocessversion: DevKit.Controls.NavigationItem,
			user_msdyn_pmrecording: DevKit.Controls.NavigationItem,
			user_msdyn_pmsimulation: DevKit.Controls.NavigationItem,
			user_msdyn_pmtemplate: DevKit.Controls.NavigationItem,
			user_msdyn_pmview: DevKit.Controls.NavigationItem,
			user_msdyn_richtextfile: DevKit.Controls.NavigationItem,
			user_msdyn_salesforcestructuredobject: DevKit.Controls.NavigationItem,
			user_msdyn_salesforcestructuredqnaconfig: DevKit.Controls.NavigationItem,
			user_msdyn_schedule: DevKit.Controls.NavigationItem,
			user_msdyn_serviceconfiguration: DevKit.Controls.NavigationItem,
			user_msdyn_slakpi: DevKit.Controls.NavigationItem,
			user_msdyn_solutionhealthrule: DevKit.Controls.NavigationItem,
			user_msdyn_solutionhealthruleargument: DevKit.Controls.NavigationItem,
			user_msdyn_virtualtablecolumncandidate: DevKit.Controls.NavigationItem,
			user_msdynce_botcontent: DevKit.Controls.NavigationItem,
			user_mspcat_catalogsubmissionfiles: DevKit.Controls.NavigationItem,
			user_mspcat_packagestore: DevKit.Controls.NavigationItem,
			user_nlsqregistration: DevKit.Controls.NavigationItem,
			user_parent_user: DevKit.Controls.NavigationItem,
			user_pdfsetting: DevKit.Controls.NavigationItem,
			user_phonecall: DevKit.Controls.NavigationItem,
			user_plannerbusinessscenario: DevKit.Controls.NavigationItem,
			user_plannersyncaction: DevKit.Controls.NavigationItem,
			user_powerbidataset: DevKit.Controls.NavigationItem,
			user_powerbidatasetapdx: DevKit.Controls.NavigationItem,
			user_powerbimashupparameter: DevKit.Controls.NavigationItem,
			user_powerbireport: DevKit.Controls.NavigationItem,
			user_powerbireportapdx: DevKit.Controls.NavigationItem,
			user_powerfxrule: DevKit.Controls.NavigationItem,
			user_powerpagecomponent: DevKit.Controls.NavigationItem,
			user_powerpagesite: DevKit.Controls.NavigationItem,
			user_powerpagesitelanguage: DevKit.Controls.NavigationItem,
			user_powerpagesitepublished: DevKit.Controls.NavigationItem,
			user_powerpageslog: DevKit.Controls.NavigationItem,
			user_powerpagesscanreport: DevKit.Controls.NavigationItem,
			user_privilegecheckerrun: DevKit.Controls.NavigationItem,
			user_processstageparameter: DevKit.Controls.NavigationItem,
			user_profilerule: DevKit.Controls.NavigationItem,
			user_recentlyused: DevKit.Controls.NavigationItem,
			user_reconciliationentityinfo: DevKit.Controls.NavigationItem,
			user_reconciliationentitystepinfo: DevKit.Controls.NavigationItem,
			user_reconciliationinfo: DevKit.Controls.NavigationItem,
			user_retaineddataexcel: DevKit.Controls.NavigationItem,
			user_retentioncleanupinfo: DevKit.Controls.NavigationItem,
			user_retentioncleanupoperation: DevKit.Controls.NavigationItem,
			user_retentionconfig: DevKit.Controls.NavigationItem,
			user_retentionfailuredetail: DevKit.Controls.NavigationItem,
			user_retentionoperation: DevKit.Controls.NavigationItem,
			user_routingrule: DevKit.Controls.NavigationItem,
			user_routingruleitem: DevKit.Controls.NavigationItem,
			user_settings: DevKit.Controls.NavigationItem,
			user_sharepointsite: DevKit.Controls.NavigationItem,
			user_sideloadedaiplugin: DevKit.Controls.NavigationItem,
			user_slabase: DevKit.Controls.NavigationItem,
			user_solutioncomponentbatchconfiguration: DevKit.Controls.NavigationItem,
			user_stagesolutionupload: DevKit.Controls.NavigationItem,
			user_synapsedatabase: DevKit.Controls.NavigationItem,
			user_task: DevKit.Controls.NavigationItem,
			user_tdsmetadata: DevKit.Controls.NavigationItem,
			user_untrackedemail: DevKit.Controls.NavigationItem,
			user_userauthztracker: DevKit.Controls.NavigationItem,
			user_workflowbinary: DevKit.Controls.NavigationItem,
			user_workqueue: DevKit.Controls.NavigationItem,
			user_workqueueitem: DevKit.Controls.NavigationItem,
			workqueueitem_processinguser: DevKit.Controls.NavigationItem
		}
		interface Grid {
			DirectReports: DevKit.Controls.Grid;
			PrivateQueuesSubGrid: DevKit.Controls.Grid;
			TeamsSubGrid: DevKit.Controls.Grid;
		}
	}
	class FormNguoi_dung extends DevKit.IForm {
		/**
		* Người dùng [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Nguoi_dung */
		Body: DevKit.FormNguoi_dung.Body;
		/** The Navigation of form Nguoi_dung */
		Navigation: DevKit.FormNguoi_dung.Navigation;
		/** The Grid of form Nguoi_dung */
		Grid: DevKit.FormNguoi_dung.Grid;
		/** The SidePanes of form Nguoi_dung */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNguoi_dung_Ung_dung {
		interface tab_SUMMARY_TAB_Sections {
			onpremise_account_information: DevKit.Controls.Section;
			user_information: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Mã định danh cho ứng dụng. Mã này được dùng để truy cập vào dữ liệu trong một ứng dụng khác. */
			ApplicationId: DevKit.Controls.String;
			/** URI được dùng làm mã định danh logic duy nhất cho ứng dụng bên ngoài. Mã này có thể được dùng để xác thực ứng dụng. */
			ApplicationIdUri: DevKit.Controls.String;
			/** Đây là ID đối tượng danh mục ứng dụng. */
			AzureActiveDirectoryObjectId: DevKit.Controls.String;
			/** Miền Danh mục hiện hoạt người dùng là thành viên. */
			DomainName: DevKit.Controls.String;
			/** Tên đầy đủ của người dùng. */
			FullName: DevKit.Controls.String;
			/** Địa chỉ email nội bộ cho người dùng. */
			InternalEMailAddress: DevKit.Controls.String;
		}
		interface Navigation {
			adx_inviteredemption_systemuser_owninguser: DevKit.Controls.NavigationItem,
			adx_portalcomment_systemuser_owninguser: DevKit.Controls.NavigationItem,
			adx_webformsession_systemuser: DevKit.Controls.NavigationItem,
			AIPluginUserSetting_SystemUser_Syst: DevKit.Controls.NavigationItem,
			bizmap_systemuser_businessid: DevKit.Controls.NavigationItem,
			contact_owning_user: DevKit.Controls.NavigationItem,
			email_acceptingentity_systemuser: DevKit.Controls.NavigationItem,
			flowmachinegroup_PasswordChangedBy: DevKit.Controls.NavigationItem,
			flowmachinegroup_RotationStartedBy: DevKit.Controls.NavigationItem,
			knowledgearticle_primaryauthorid: DevKit.Controls.NavigationItem,
			lk_audit_callinguserid: DevKit.Controls.NavigationItem,
			lk_audit_userid: DevKit.Controls.NavigationItem,
			lk_feedback_closedby: DevKit.Controls.NavigationItem,
			lk_queueitembase_workerid: DevKit.Controls.NavigationItem,
			lk_teambase_administratorid: DevKit.Controls.NavigationItem,
			mailbox_regarding_systemuser: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_adplacement_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_adplacement_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermission_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermission_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermissionprofile_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_columnpermissionprofile_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_contentsnippet_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_contentsnippet_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityform_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityform_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityformmetadata_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entityformmetadata_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitylist_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitylist_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitypermission_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_entitypermission_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pagetemplate_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pagetemplate_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pollplacement_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_pollplacement_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstate_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstate_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstatetransitionrule_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_publishingstatetransitionrule_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_redirect_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_redirect_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_shortcut_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_shortcut_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitemarker_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitemarker_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitesetting_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_sitesetting_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webfile_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webfile_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webform_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webform_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformmetadata_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformmetadata_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformstep_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webformstep_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblink_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblink_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblinkset_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_weblinkset_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpage_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpage_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpageaccesscontrolrule_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webpageaccesscontrolrule_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webrole_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webrole_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_website_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_website_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websiteaccess_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websiteaccess_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websitelanguage_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_websitelanguage_modifiedby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webtemplate_createdby: DevKit.Controls.NavigationItem,
			mspp_systemuser_mspp_webtemplate_modifiedby: DevKit.Controls.NavigationItem,
			privilegecheckerlog_CheckedUser_systemuser: DevKit.Controls.NavigationItem,
			privilegecheckerlog_ImpersonatingUser_systemuser: DevKit.Controls.NavigationItem,
			privilegecheckerlog_SupportingCaller_systemuser: DevKit.Controls.NavigationItem,
			queue_primary_user: DevKit.Controls.NavigationItem,
			sideloadedaiplugin_sideloadedpluginownerid: DevKit.Controls.NavigationItem,
			system_user_accounts: DevKit.Controls.NavigationItem,
			system_user_contacts: DevKit.Controls.NavigationItem,
			system_user_email_templates: DevKit.Controls.NavigationItem,
			system_user_territories: DevKit.Controls.NavigationItem,
			system_user_workflow: DevKit.Controls.NavigationItem,
			systemuser_appusersetting_userId: DevKit.Controls.NavigationItem,
			systemuser_bot_publishedby: DevKit.Controls.NavigationItem,
			SystemUser_Email_EmailSender: DevKit.Controls.NavigationItem,
			SystemUser_ExternalPartyItems: DevKit.Controls.NavigationItem,
			systemuser_internal_addresses: DevKit.Controls.NavigationItem,
			user_accounts: DevKit.Controls.NavigationItem,
			user_activityfileattachment: DevKit.Controls.NavigationItem,
			user_adx_invitation: DevKit.Controls.NavigationItem,
			user_adx_setting: DevKit.Controls.NavigationItem,
			user_aiplugin: DevKit.Controls.NavigationItem,
			user_aipluginauth: DevKit.Controls.NavigationItem,
			user_aipluginconversationstarter: DevKit.Controls.NavigationItem,
			user_aipluginconversationstartermapping: DevKit.Controls.NavigationItem,
			user_aipluginexternalschema: DevKit.Controls.NavigationItem,
			user_aipluginexternalschemaproperty: DevKit.Controls.NavigationItem,
			user_aiplugingovernance: DevKit.Controls.NavigationItem,
			user_aiplugingovernanceext: DevKit.Controls.NavigationItem,
			user_aiplugininstance: DevKit.Controls.NavigationItem,
			user_aipluginoperation: DevKit.Controls.NavigationItem,
			user_aipluginoperationparameter: DevKit.Controls.NavigationItem,
			user_aipluginoperationresponsetemplate: DevKit.Controls.NavigationItem,
			user_aipluginusersetting: DevKit.Controls.NavigationItem,
			user_appnotification: DevKit.Controls.NavigationItem,
			user_appointment: DevKit.Controls.NavigationItem,
			user_archivecleanupinfo: DevKit.Controls.NavigationItem,
			user_archivecleanupoperation: DevKit.Controls.NavigationItem,
			user_bot: DevKit.Controls.NavigationItem,
			user_botcomponent: DevKit.Controls.NavigationItem,
			user_botcomponentcollection: DevKit.Controls.NavigationItem,
			user_bulkarchiveconfig: DevKit.Controls.NavigationItem,
			user_bulkarchivefailuredetail: DevKit.Controls.NavigationItem,
			user_bulkarchiveoperation: DevKit.Controls.NavigationItem,
			user_canvasappextendedmetadata: DevKit.Controls.NavigationItem,
			user_card: DevKit.Controls.NavigationItem,
			user_channelaccessprofile: DevKit.Controls.NavigationItem,
			user_comment: DevKit.Controls.NavigationItem,
			user_componentversion: DevKit.Controls.NavigationItem,
			user_connectioninstance: DevKit.Controls.NavigationItem,
			user_connectionreference: DevKit.Controls.NavigationItem,
			user_connector: DevKit.Controls.NavigationItem,
			user_conversationtranscript: DevKit.Controls.NavigationItem,
			user_convertrule: DevKit.Controls.NavigationItem,
			user_copilotglossaryterm: DevKit.Controls.NavigationItem,
			user_copilotsynonyms: DevKit.Controls.NavigationItem,
			user_credential: DevKit.Controls.NavigationItem,
			user_customapi: DevKit.Controls.NavigationItem,
			user_datalakefolder: DevKit.Controls.NavigationItem,
			user_desktopflowbinary: DevKit.Controls.NavigationItem,
			user_desktopflowmodule: DevKit.Controls.NavigationItem,
			user_dvfilesearch: DevKit.Controls.NavigationItem,
			user_dvfilesearchattribute: DevKit.Controls.NavigationItem,
			user_dvfilesearchentity: DevKit.Controls.NavigationItem,
			user_dvtablesearch: DevKit.Controls.NavigationItem,
			user_dvtablesearchattribute: DevKit.Controls.NavigationItem,
			user_dvtablesearchentity: DevKit.Controls.NavigationItem,
			user_email: DevKit.Controls.NavigationItem,
			user_enablearchivalrequest: DevKit.Controls.NavigationItem,
			user_environmentvariabledefinition: DevKit.Controls.NavigationItem,
			user_environmentvariablevalue: DevKit.Controls.NavigationItem,
			user_exchangesyncidmapping: DevKit.Controls.NavigationItem,
			user_exportedexcel: DevKit.Controls.NavigationItem,
			user_exportsolutionupload: DevKit.Controls.NavigationItem,
			user_externalparty: DevKit.Controls.NavigationItem,
			user_fabricaiskill: DevKit.Controls.NavigationItem,
			user_featurecontrolsetting: DevKit.Controls.NavigationItem,
			user_federatedknowledgeconfiguration: DevKit.Controls.NavigationItem,
			user_federatedknowledgeentityconfiguration: DevKit.Controls.NavigationItem,
			user_flowcapacityassignment: DevKit.Controls.NavigationItem,
			user_flowcredentialapplication: DevKit.Controls.NavigationItem,
			user_flowevent: DevKit.Controls.NavigationItem,
			user_flowmachine: DevKit.Controls.NavigationItem,
			user_flowmachinegroup: DevKit.Controls.NavigationItem,
			user_flowmachineimage: DevKit.Controls.NavigationItem,
			user_flowmachineimageversion: DevKit.Controls.NavigationItem,
			user_flowmachinenetwork: DevKit.Controls.NavigationItem,
			user_flowrun: DevKit.Controls.NavigationItem,
			user_flowsession: DevKit.Controls.NavigationItem,
			user_fxexpression: DevKit.Controls.NavigationItem,
			user_goal: DevKit.Controls.NavigationItem,
			user_goal_goalowner: DevKit.Controls.NavigationItem,
			user_interactionforemail: DevKit.Controls.NavigationItem,
			user_keyvaultreference: DevKit.Controls.NavigationItem,
			user_knowledgearticle: DevKit.Controls.NavigationItem,
			user_mailbox: DevKit.Controls.NavigationItem,
			user_managedidentity: DevKit.Controls.NavigationItem,
			user_msdyn_aibdataset: DevKit.Controls.NavigationItem,
			user_msdyn_aibdatasetfile: DevKit.Controls.NavigationItem,
			user_msdyn_aibdatasetrecord: DevKit.Controls.NavigationItem,
			user_msdyn_aibdatasetscontainer: DevKit.Controls.NavigationItem,
			user_msdyn_aibfeedbackloop: DevKit.Controls.NavigationItem,
			user_msdyn_aibfile: DevKit.Controls.NavigationItem,
			user_msdyn_aibfileattacheddata: DevKit.Controls.NavigationItem,
			user_msdyn_aievent: DevKit.Controls.NavigationItem,
			user_msdyn_aifptrainingdocument: DevKit.Controls.NavigationItem,
			user_msdyn_aimodel: DevKit.Controls.NavigationItem,
			user_msdyn_aiodimage: DevKit.Controls.NavigationItem,
			user_msdyn_aiodlabel: DevKit.Controls.NavigationItem,
			user_msdyn_aiodtrainingboundingbox: DevKit.Controls.NavigationItem,
			user_msdyn_aiodtrainingimage: DevKit.Controls.NavigationItem,
			user_msdyn_aitemplate: DevKit.Controls.NavigationItem,
			user_msdyn_analysiscomponent: DevKit.Controls.NavigationItem,
			user_msdyn_analysisjob: DevKit.Controls.NavigationItem,
			user_msdyn_analysisoverride: DevKit.Controls.NavigationItem,
			user_msdyn_analysisresult: DevKit.Controls.NavigationItem,
			user_msdyn_analysisresultdetail: DevKit.Controls.NavigationItem,
			user_msdyn_customcontrolextendedsettings: DevKit.Controls.NavigationItem,
			user_msdyn_dataflow: DevKit.Controls.NavigationItem,
			user_msdyn_dataflow_datalakefolder: DevKit.Controls.NavigationItem,
			user_msdyn_dataflowconnectionreference: DevKit.Controls.NavigationItem,
			user_msdyn_dataflowrefreshhistory: DevKit.Controls.NavigationItem,
			user_msdyn_dataflowtemplate: DevKit.Controls.NavigationItem,
			user_msdyn_dmsrequest: DevKit.Controls.NavigationItem,
			user_msdyn_dmsrequeststatus: DevKit.Controls.NavigationItem,
			user_msdyn_dmssyncrequest: DevKit.Controls.NavigationItem,
			user_msdyn_dmssyncstatus: DevKit.Controls.NavigationItem,
			user_msdyn_entitylinkchatconfiguration: DevKit.Controls.NavigationItem,
			user_msdyn_entityrefreshhistory: DevKit.Controls.NavigationItem,
			user_msdyn_favoriteknowledgearticle: DevKit.Controls.NavigationItem,
			user_msdyn_federatedarticle: DevKit.Controls.NavigationItem,
			user_msdyn_fileupload: DevKit.Controls.NavigationItem,
			user_msdyn_flow_actionapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approval: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approvalrequest: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approvalresponse: DevKit.Controls.NavigationItem,
			user_msdyn_flow_approvalstep: DevKit.Controls.NavigationItem,
			user_msdyn_flow_awaitallactionapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_awaitallapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_basicapprovalmodel: DevKit.Controls.NavigationItem,
			user_msdyn_flow_flowapproval: DevKit.Controls.NavigationItem,
			user_msdyn_integratedsearchprovider: DevKit.Controls.NavigationItem,
			user_msdyn_kalanguagesetting: DevKit.Controls.NavigationItem,
			user_msdyn_kbattachment: DevKit.Controls.NavigationItem,
			user_msdyn_kmfederatedsearchconfig: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgearticleimage: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgearticletemplate: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgeassetconfiguration: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgeinteractioninsight: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgemanagementsetting: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgepersonalfilter: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgesearchfilter: DevKit.Controls.NavigationItem,
			user_msdyn_knowledgesearchinsight: DevKit.Controls.NavigationItem,
			user_msdyn_mobileapp: DevKit.Controls.NavigationItem,
			user_msdyn_pmanalysishistory: DevKit.Controls.NavigationItem,
			user_msdyn_pmbusinessruleautomationconfig: DevKit.Controls.NavigationItem,
			user_msdyn_pmcalendar: DevKit.Controls.NavigationItem,
			user_msdyn_pmcalendarversion: DevKit.Controls.NavigationItem,
			user_msdyn_pminferredtask: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocessextendedmetadataversion: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocesstemplate: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocessusersettings: DevKit.Controls.NavigationItem,
			user_msdyn_pmprocessversion: DevKit.Controls.NavigationItem,
			user_msdyn_pmrecording: DevKit.Controls.NavigationItem,
			user_msdyn_pmsimulation: DevKit.Controls.NavigationItem,
			user_msdyn_pmtemplate: DevKit.Controls.NavigationItem,
			user_msdyn_pmview: DevKit.Controls.NavigationItem,
			user_msdyn_richtextfile: DevKit.Controls.NavigationItem,
			user_msdyn_salesforcestructuredobject: DevKit.Controls.NavigationItem,
			user_msdyn_salesforcestructuredqnaconfig: DevKit.Controls.NavigationItem,
			user_msdyn_schedule: DevKit.Controls.NavigationItem,
			user_msdyn_serviceconfiguration: DevKit.Controls.NavigationItem,
			user_msdyn_slakpi: DevKit.Controls.NavigationItem,
			user_msdyn_solutionhealthrule: DevKit.Controls.NavigationItem,
			user_msdyn_solutionhealthruleargument: DevKit.Controls.NavigationItem,
			user_msdyn_virtualtablecolumncandidate: DevKit.Controls.NavigationItem,
			user_msdynce_botcontent: DevKit.Controls.NavigationItem,
			user_mspcat_catalogsubmissionfiles: DevKit.Controls.NavigationItem,
			user_mspcat_packagestore: DevKit.Controls.NavigationItem,
			user_nlsqregistration: DevKit.Controls.NavigationItem,
			user_parent_user: DevKit.Controls.NavigationItem,
			user_pdfsetting: DevKit.Controls.NavigationItem,
			user_phonecall: DevKit.Controls.NavigationItem,
			user_plannerbusinessscenario: DevKit.Controls.NavigationItem,
			user_plannersyncaction: DevKit.Controls.NavigationItem,
			user_powerbidataset: DevKit.Controls.NavigationItem,
			user_powerbidatasetapdx: DevKit.Controls.NavigationItem,
			user_powerbimashupparameter: DevKit.Controls.NavigationItem,
			user_powerbireport: DevKit.Controls.NavigationItem,
			user_powerbireportapdx: DevKit.Controls.NavigationItem,
			user_powerfxrule: DevKit.Controls.NavigationItem,
			user_powerpagecomponent: DevKit.Controls.NavigationItem,
			user_powerpagesite: DevKit.Controls.NavigationItem,
			user_powerpagesitelanguage: DevKit.Controls.NavigationItem,
			user_powerpagesitepublished: DevKit.Controls.NavigationItem,
			user_powerpageslog: DevKit.Controls.NavigationItem,
			user_powerpagesscanreport: DevKit.Controls.NavigationItem,
			user_privilegecheckerrun: DevKit.Controls.NavigationItem,
			user_processstageparameter: DevKit.Controls.NavigationItem,
			user_profilerule: DevKit.Controls.NavigationItem,
			user_recentlyused: DevKit.Controls.NavigationItem,
			user_reconciliationentityinfo: DevKit.Controls.NavigationItem,
			user_reconciliationentitystepinfo: DevKit.Controls.NavigationItem,
			user_reconciliationinfo: DevKit.Controls.NavigationItem,
			user_retaineddataexcel: DevKit.Controls.NavigationItem,
			user_retentioncleanupinfo: DevKit.Controls.NavigationItem,
			user_retentioncleanupoperation: DevKit.Controls.NavigationItem,
			user_retentionconfig: DevKit.Controls.NavigationItem,
			user_retentionfailuredetail: DevKit.Controls.NavigationItem,
			user_retentionoperation: DevKit.Controls.NavigationItem,
			user_routingrule: DevKit.Controls.NavigationItem,
			user_routingruleitem: DevKit.Controls.NavigationItem,
			user_settings: DevKit.Controls.NavigationItem,
			user_sharepointsite: DevKit.Controls.NavigationItem,
			user_sideloadedaiplugin: DevKit.Controls.NavigationItem,
			user_slabase: DevKit.Controls.NavigationItem,
			user_solutioncomponentbatchconfiguration: DevKit.Controls.NavigationItem,
			user_stagesolutionupload: DevKit.Controls.NavigationItem,
			user_synapsedatabase: DevKit.Controls.NavigationItem,
			user_task: DevKit.Controls.NavigationItem,
			user_tdsmetadata: DevKit.Controls.NavigationItem,
			user_untrackedemail: DevKit.Controls.NavigationItem,
			user_userauthztracker: DevKit.Controls.NavigationItem,
			user_workflowbinary: DevKit.Controls.NavigationItem,
			user_workqueue: DevKit.Controls.NavigationItem,
			user_workqueueitem: DevKit.Controls.NavigationItem,
			workqueueitem_processinguser: DevKit.Controls.NavigationItem
		}
	}
	class FormNguoi_dung_Ung_dung extends DevKit.IForm {
		/**
		* Người dùng Ứng dụng [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Nguoi_dung_Ung_dung */
		Body: DevKit.FormNguoi_dung_Ung_dung.Body;
		/** The Navigation of form Nguoi_dung_Ung_dung */
		Navigation: DevKit.FormNguoi_dung_Ung_dung.Navigation;
		/** The SidePanes of form Nguoi_dung_Ung_dung */
		SidePanes: DevKit.SidePanes;
	}
	class SystemUserApi {
		/**
		* DynamicsCrm.DevKit SystemUserApi
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
		/** Loại người dùng. */
		AccessMode: OptionSet.SystemUser.AccessMode;
		/** GUID đối tượng Danh mục hiện hoạt cho người dùng hệ thống. */
		readonly ActiveDirectoryGuid: string;
		/** Mã định danh duy nhất cho địa chỉ 1. */
		Address1_AddressId: string;
		/** Loại địa chỉ cho địa chỉ 1, chẳng hạn như địa chỉ lập hóa đơn, giao hàng hoặc địa chỉ chính. */
		Address1_AddressTypeCode: OptionSet.SystemUser.Address1_AddressTypeCode;
		/** Tên thành phố cho địa chỉ 1. */
		Address1_City: string;
		/** Cho biết địa chỉ chính đầy đủ. */
		readonly Address1_Composite: string;
		/** Tên quốc gia/khu vực trong địa chỉ 1. */
		Address1_Country: string;
		/** Tên hạt cho địa chỉ 1. */
		Address1_County: string;
		/** Số fax cho địa chỉ 1. */
		Address1_Fax: string;
		/** Vĩ độ cho địa chỉ 1. */
		Address1_Latitude: number;
		/** Dòng đầu tiên để nhập thông tin địa chỉ 1. */
		Address1_Line1: string;
		/** Dòng thứ hai để nhập thông tin địa chỉ 1. */
		Address1_Line2: string;
		/** Dòng thứ ba để nhập thông tin địa chỉ 1. */
		Address1_Line3: string;
		/** Kinh độ cho địa chỉ 1. */
		Address1_Longitude: number;
		/** Tên để nhập cho địa chỉ 1. */
		Address1_Name: string;
		/** Mã ZIP hoặc mã bưu điện cho địa chỉ 1. */
		Address1_PostalCode: string;
		/** Số hòm thư cho địa chỉ 1. */
		Address1_PostOfficeBox: string;
		/** Phương thức giao hàng cho địa chỉ 1. */
		Address1_ShippingMethodCode: OptionSet.SystemUser.Address1_ShippingMethodCode;
		/** Bang hoặc tỉnh cho địa chỉ 1. */
		Address1_StateOrProvince: string;
		/** Số điện thoại đầu tiên liên kết với địa chỉ 1. */
		Address1_Telephone1: string;
		/** Số điện thoại thứ hai liên kết với địa chỉ 1. */
		Address1_Telephone2: string;
		/** Số điện thoại thứ ba liên kết với địa chỉ 1. */
		Address1_Telephone3: string;
		/** Vùng United Parcel Service (UPS) cho địa chỉ 1. */
		Address1_UPSZone: string;
		/** Phần bù UTC cho địa chỉ 1. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
		Address1_UTCOffset: number;
		/** Mã định danh duy nhất cho địa chỉ 2. */
		Address2_AddressId: string;
		/** Loại địa chỉ dành cho địa chỉ 2, chẳng hạn như địa chỉ thanh toán, giao hàng hoặc địa chỉ chính. */
		Address2_AddressTypeCode: OptionSet.SystemUser.Address2_AddressTypeCode;
		/** Tên thành phố cho địa chỉ 2. */
		Address2_City: string;
		/** Cho biết địa chỉ phụ đầy đủ. */
		readonly Address2_Composite: string;
		/** Tên quốc gia/khu vực trong địa chỉ 2. */
		Address2_Country: string;
		/** Tên hạt cho địa chỉ 2. */
		Address2_County: string;
		/** Số fax cho địa chỉ 2. */
		Address2_Fax: string;
		/** Vĩ độ cho địa chỉ 2. */
		Address2_Latitude: number;
		/** Dòng đầu tiên để nhập thông tin địa chỉ 2. */
		Address2_Line1: string;
		/** Dòng thứ hai để nhập thông tin địa chỉ 2. */
		Address2_Line2: string;
		/** Dòng thứ ba để nhập thông tin địa chỉ 2. */
		Address2_Line3: string;
		/** Kinh độ cho địa chỉ 2. */
		Address2_Longitude: number;
		/** Tên để nhập cho địa chỉ 2. */
		Address2_Name: string;
		/** Mã ZIP hoặc mã bưu điện cho địa chỉ 2. */
		Address2_PostalCode: string;
		/** Số hòm thư cho địa chỉ 2. */
		Address2_PostOfficeBox: string;
		/** Phương thức giao hàng cho địa chỉ 2. */
		Address2_ShippingMethodCode: OptionSet.SystemUser.Address2_ShippingMethodCode;
		/** Bang hoặc tỉnh cho địa chỉ 2. */
		Address2_StateOrProvince: string;
		/** Số điện thoại đầu tiên liên kết với địa chỉ 2. */
		Address2_Telephone1: string;
		/** Số điện thoại thứ hai liên kết với địa chỉ 2. */
		Address2_Telephone2: string;
		/** Số điện thoại thứ ba liên kết với địa chỉ 2. */
		Address2_Telephone3: string;
		/** Vùng United Parcel Service (UPS) cho địa chỉ 2. */
		Address2_UPSZone: string;
		/** Phần bù UTC cho địa chỉ 2. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
		Address2_UTCOffset: number;
		/** Mã định danh cho ứng dụng. Mã này được dùng để truy cập vào dữ liệu trong một ứng dụng khác. */
		ApplicationId: string;
		/** URI được dùng làm mã định danh logic duy nhất cho ứng dụng bên ngoài. Mã này có thể được dùng để xác thực ứng dụng. */
		readonly ApplicationIdUri: string;
		/** Đây là ID đối tượng danh mục ứng dụng. */
		readonly AzureActiveDirectoryObjectId: string;
		/** Date and time when the user was set as soft deleted in Azure. */
		readonly AzureDeletedOn_UtcDateAndTime: Date;
		/** Azure state of user */
		AzureState: OptionSet.SystemUser.AzureState;
		/** Mã định danh duy nhất của bơn vị kinh doanh có người dùng được liên kết. */
		BusinessUnitId: string;
		/** Lịch tài chính liên kết với người dùng. */
		CalendarId: string;
		/** Loại giấy phép của người dùng. */
		CALType: OptionSet.SystemUser.CALType;
		/** Mã định danh duy nhất của người dùng đã tạo người dùng. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo người dùng. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo người dùng hệ thống. */
		readonly CreatedOnBehalfBy: string;
		/** Cho biết khả năng hệ thống sẽ nạp bộ lọc outlook mặc định. */
		readonly DefaultFiltersPopulated: boolean;
		/** Chọn hộp thư liên kết với người dùng này. */
		readonly DefaultMailbox: string;
		/** Nhập tên thư mục mặc định cho vị trí OneDrive cho Doanh nghiệp của người dùng. */
		readonly DefaultOdbFolderName: string;
		/** User delete state */
		readonly DeletedState: OptionSet.SystemUser.DeletedState;
		/** Lý do tắt người dùng. */
		readonly DisabledReason: string;
		/** Khả năng hiển thị người dùng trong dạng xem dịch vụ. */
		DisplayInServiceViews: boolean;
		/** Miền Danh mục hiện hoạt người dùng là thành viên. */
		DomainName: string;
		/** Cho biết trạng thái của địa chỉ email chính. */
		EmailRouterAccessApproval: OptionSet.SystemUser.EmailRouterAccessApproval;
		/** Mã định danh nhân viên cho người dùng. */
		EmployeeId: string;
		/** Hiển thị hình ảnh mặc định cho bản ghi. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Tỷ giá của loại tiền liên kết với người dùng hệ thống theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Tên người dùng. */
		FirstName: string;
		/** Tên đầy đủ của người dùng. */
		readonly FullName: string;
		/** Mã định danh chính phủ cho người dùng. */
		GovernmentId: string;
		/** Số điện thoại nhà riêng cho người dùng. */
		HomePhone: string;
		/** Chỉ sử dụng nội bộ. */
		readonly IdentityId: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Phương thức gửi email đến cho người dùng. */
		IncomingEmailDeliveryMethod: OptionSet.SystemUser.IncomingEmailDeliveryMethod;
		/** Địa chỉ email nội bộ cho người dùng. */
		InternalEMailAddress: string;
		/** Trạng thái lời mời của người dùng. */
		InviteStatusCode: OptionSet.SystemUser.InviteStatusCode;
		/** Thông tin về khả năng người dùng là người dùng AD. */
		readonly IsActiveDirectoryUser: boolean;
		/** Thông tin về khả năng bật người dùng. */
		IsDisabled: boolean;
		/** Cho biết trạng thái phê duyệt về địa chỉ email của Quản trị viên O365. */
		readonly IsEmailAddressApprovedByO365Admin: boolean;
		/** Kiểm tra khả năng người dùng là người dùng tích hợp. */
		IsIntegrationUser: boolean;
		/** Thông tin về khả năng cấp phép cho người dùng. */
		IsLicensed: boolean;
		/** Thông tin về khả năng đồng bộ người dùng với danh mục. */
		IsSyncWithDirectory: boolean;
		/** Tiêu đề công việc của người dùng. */
		JobTitle: string;
		/** Họ người dùng. */
		LastName: string;
		/** Dấu thời gian của bản cập nhật mới nhất cho người dùng */
		readonly LatestUpdateTime_UtcDateAndTime: Date;
		/** Tên đệm người dùng. */
		MiddleName: string;
		/** Địa chỉ email thông báo di động cho người dùng. */
		MobileAlertEMail: string;
		/** Các mục chứa Người dùng Hệ thống cụ thể. */
		MobileOfflineProfileId: string;
		/** Số điện thoại di động cho người dùng. */
		MobilePhone: string;
		/** Mã định danh duy nhất của người dùng sửa đổi người dùng lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi người dùng lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa người dùng hệ thống lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Biệt danh của người dùng. */
		NickName: string;
		/** Mã định danh duy nhất của tổ chức liên kết với người dùng. */
		readonly OrganizationId: string;
		/** Phương thức gửi email đi cho người dùng. */
		OutgoingEmailDeliveryMethod: OptionSet.SystemUser.OutgoingEmailDeliveryMethod;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Mã định danh duy nhất của người quản lý của người dùng. */
		ParentSystemUserId: string;
		/** Chỉ sử dụng nội bộ. */
		PassportHi: number;
		/** Chỉ sử dụng nội bộ. */
		PassportLo: number;
		/** Địa chỉ email cá nhân của người dùng. */
		PersonalEMailAddress: string;
		/** URL cho Trang web đặt ảnh của người dùng. */
		PhotoUrl: string;
		/** Vị trí của người dùng trong mô hình bảo mật theo cấp bậc. */
		PositionId: string;
		/** Địa chỉ ưu tiên cho người dùng. */
		PreferredAddressCode: OptionSet.SystemUser.PreferredAddressCode;
		/** Địa chỉ email ưu tiên cho người dùng. */
		PreferredEmailCode: OptionSet.SystemUser.PreferredEmailCode;
		/** Số điện thoại ưu tiên cho người dùng. */
		PreferredPhoneCode: OptionSet.SystemUser.PreferredPhoneCode;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Mã định danh duy nhất của hàng đợi mặc định cho người dùng. */
		QueueId: string;
		/** Danh xưng cho tương ứng với người dùng. */
		Salutation: string;
		/** Kiểm tra khả năng người dùng là người dùng thiết lập. */
		SetupUser: boolean;
		/** Địa chỉ Email Công việc SharePoint */
		SharePointEmailAddress: string;
		/** Kỹ năng đặt của người dùng. */
		Skills: string;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Mã định danh duy nhất cho người dùng. */
		SystemUserId: string;
		/** Mã định danh duy nhất của vùng lãnh thổ gán cho người dùng. */
		TerritoryId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tiêu đề của người dùng. */
		Title: string;
		/** Mã định danh duy nhất của loại tiền liên kết với systemuser. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Cho biết loại giấy phép của người dùng. */
		UserLicenseType: number;
		/**  Thông tin Nhận diện Người dùng trong PUID Người dùng */
		readonly UserPuid: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của người dùng. */
		readonly VersionNumber: number;
		/** ID Windows Live */
		WindowsLiveID: string;
		/** Địa chỉ email đăng nhập Yammer của người dùng */
		YammerEmailAddress: string;
		/** ID Yammer của người dùng */
		YammerUserId: string;
		/** Cách phát âm tên của người dùng, ghi bằng ký tự phiên âm chữ mềm hoặc chữ cứng. */
		YomiFirstName: string;
		/** Cách phát âm tên đầy đủ của người dùng, ghi bằng ký tự phiên âm chữ mềm hoặc chữ cứng. */
		readonly YomiFullName: string;
		/** Cách phát âm họ của người dùng, ghi bằng ký tự phiên âm chữ mềm hoặc chữ cứng. */
		YomiLastName: string;
		/** Cách phát âm tên đệm của người dùng, ghi bằng ký tự phiên âm chữ mềm hoặc chữ cứng. */
		YomiMiddleName: string;
		readonly FormattedValue: {
			/** Loại người dùng. */
			readonly AccessMode: string;
			/** GUID đối tượng Danh mục hiện hoạt cho người dùng hệ thống. */
			readonly ActiveDirectoryGuid: string;
			/** Mã định danh duy nhất cho địa chỉ 1. */
			readonly Address1_AddressId: string;
			/** Loại địa chỉ cho địa chỉ 1, chẳng hạn như địa chỉ lập hóa đơn, giao hàng hoặc địa chỉ chính. */
			readonly Address1_AddressTypeCode: string;
			/** Tên thành phố cho địa chỉ 1. */
			readonly Address1_City: string;
			/** Cho biết địa chỉ chính đầy đủ. */
			readonly Address1_Composite: string;
			/** Tên quốc gia/khu vực trong địa chỉ 1. */
			readonly Address1_Country: string;
			/** Tên hạt cho địa chỉ 1. */
			readonly Address1_County: string;
			/** Số fax cho địa chỉ 1. */
			readonly Address1_Fax: string;
			/** Vĩ độ cho địa chỉ 1. */
			readonly Address1_Latitude: string;
			/** Dòng đầu tiên để nhập thông tin địa chỉ 1. */
			readonly Address1_Line1: string;
			/** Dòng thứ hai để nhập thông tin địa chỉ 1. */
			readonly Address1_Line2: string;
			/** Dòng thứ ba để nhập thông tin địa chỉ 1. */
			readonly Address1_Line3: string;
			/** Kinh độ cho địa chỉ 1. */
			readonly Address1_Longitude: string;
			/** Tên để nhập cho địa chỉ 1. */
			readonly Address1_Name: string;
			/** Mã ZIP hoặc mã bưu điện cho địa chỉ 1. */
			readonly Address1_PostalCode: string;
			/** Số hòm thư cho địa chỉ 1. */
			readonly Address1_PostOfficeBox: string;
			/** Phương thức giao hàng cho địa chỉ 1. */
			readonly Address1_ShippingMethodCode: string;
			/** Bang hoặc tỉnh cho địa chỉ 1. */
			readonly Address1_StateOrProvince: string;
			/** Số điện thoại đầu tiên liên kết với địa chỉ 1. */
			readonly Address1_Telephone1: string;
			/** Số điện thoại thứ hai liên kết với địa chỉ 1. */
			readonly Address1_Telephone2: string;
			/** Số điện thoại thứ ba liên kết với địa chỉ 1. */
			readonly Address1_Telephone3: string;
			/** Vùng United Parcel Service (UPS) cho địa chỉ 1. */
			readonly Address1_UPSZone: string;
			/** Phần bù UTC cho địa chỉ 1. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
			readonly Address1_UTCOffset: string;
			/** Mã định danh duy nhất cho địa chỉ 2. */
			readonly Address2_AddressId: string;
			/** Loại địa chỉ dành cho địa chỉ 2, chẳng hạn như địa chỉ thanh toán, giao hàng hoặc địa chỉ chính. */
			readonly Address2_AddressTypeCode: string;
			/** Tên thành phố cho địa chỉ 2. */
			readonly Address2_City: string;
			/** Cho biết địa chỉ phụ đầy đủ. */
			readonly Address2_Composite: string;
			/** Tên quốc gia/khu vực trong địa chỉ 2. */
			readonly Address2_Country: string;
			/** Tên hạt cho địa chỉ 2. */
			readonly Address2_County: string;
			/** Số fax cho địa chỉ 2. */
			readonly Address2_Fax: string;
			/** Vĩ độ cho địa chỉ 2. */
			readonly Address2_Latitude: string;
			/** Dòng đầu tiên để nhập thông tin địa chỉ 2. */
			readonly Address2_Line1: string;
			/** Dòng thứ hai để nhập thông tin địa chỉ 2. */
			readonly Address2_Line2: string;
			/** Dòng thứ ba để nhập thông tin địa chỉ 2. */
			readonly Address2_Line3: string;
			/** Kinh độ cho địa chỉ 2. */
			readonly Address2_Longitude: string;
			/** Tên để nhập cho địa chỉ 2. */
			readonly Address2_Name: string;
			/** Mã ZIP hoặc mã bưu điện cho địa chỉ 2. */
			readonly Address2_PostalCode: string;
			/** Số hòm thư cho địa chỉ 2. */
			readonly Address2_PostOfficeBox: string;
			/** Phương thức giao hàng cho địa chỉ 2. */
			readonly Address2_ShippingMethodCode: string;
			/** Bang hoặc tỉnh cho địa chỉ 2. */
			readonly Address2_StateOrProvince: string;
			/** Số điện thoại đầu tiên liên kết với địa chỉ 2. */
			readonly Address2_Telephone1: string;
			/** Số điện thoại thứ hai liên kết với địa chỉ 2. */
			readonly Address2_Telephone2: string;
			/** Số điện thoại thứ ba liên kết với địa chỉ 2. */
			readonly Address2_Telephone3: string;
			/** Vùng United Parcel Service (UPS) cho địa chỉ 2. */
			readonly Address2_UPSZone: string;
			/** Phần bù UTC cho địa chỉ 2. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
			readonly Address2_UTCOffset: string;
			/** Mã định danh cho ứng dụng. Mã này được dùng để truy cập vào dữ liệu trong một ứng dụng khác. */
			readonly ApplicationId: string;
			/** URI được dùng làm mã định danh logic duy nhất cho ứng dụng bên ngoài. Mã này có thể được dùng để xác thực ứng dụng. */
			readonly ApplicationIdUri: string;
			/** Đây là ID đối tượng danh mục ứng dụng. */
			readonly AzureActiveDirectoryObjectId: string;
			/** Date and time when the user was set as soft deleted in Azure. */
			readonly AzureDeletedOn_UtcDateAndTime: string;
			/** Azure state of user */
			readonly AzureState: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh có người dùng được liên kết. */
			readonly BusinessUnitId: string;
			/** Lịch tài chính liên kết với người dùng. */
			readonly CalendarId: string;
			/** Loại giấy phép của người dùng. */
			readonly CALType: string;
			/** Mã định danh duy nhất của người dùng đã tạo người dùng. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo người dùng. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo người dùng hệ thống. */
			readonly CreatedOnBehalfBy: string;
			/** Cho biết khả năng hệ thống sẽ nạp bộ lọc outlook mặc định. */
			readonly DefaultFiltersPopulated: string;
			/** Chọn hộp thư liên kết với người dùng này. */
			readonly DefaultMailbox: string;
			/** Nhập tên thư mục mặc định cho vị trí OneDrive cho Doanh nghiệp của người dùng. */
			readonly DefaultOdbFolderName: string;
			/** User delete state */
			readonly DeletedState: string;
			/** Lý do tắt người dùng. */
			readonly DisabledReason: string;
			/** Khả năng hiển thị người dùng trong dạng xem dịch vụ. */
			readonly DisplayInServiceViews: string;
			/** Miền Danh mục hiện hoạt người dùng là thành viên. */
			readonly DomainName: string;
			/** Cho biết trạng thái của địa chỉ email chính. */
			readonly EmailRouterAccessApproval: string;
			/** Mã định danh nhân viên cho người dùng. */
			readonly EmployeeId: string;
			/** Hiển thị hình ảnh mặc định cho bản ghi. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Tỷ giá của loại tiền liên kết với người dùng hệ thống theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Tên người dùng. */
			readonly FirstName: string;
			/** Tên đầy đủ của người dùng. */
			readonly FullName: string;
			/** Mã định danh chính phủ cho người dùng. */
			readonly GovernmentId: string;
			/** Số điện thoại nhà riêng cho người dùng. */
			readonly HomePhone: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IdentityId: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Phương thức gửi email đến cho người dùng. */
			readonly IncomingEmailDeliveryMethod: string;
			/** Địa chỉ email nội bộ cho người dùng. */
			readonly InternalEMailAddress: string;
			/** Trạng thái lời mời của người dùng. */
			readonly InviteStatusCode: string;
			/** Thông tin về khả năng người dùng là người dùng AD. */
			readonly IsActiveDirectoryUser: string;
			/** Thông tin về khả năng bật người dùng. */
			readonly IsDisabled: string;
			/** Cho biết trạng thái phê duyệt về địa chỉ email của Quản trị viên O365. */
			readonly IsEmailAddressApprovedByO365Admin: string;
			/** Kiểm tra khả năng người dùng là người dùng tích hợp. */
			readonly IsIntegrationUser: string;
			/** Thông tin về khả năng cấp phép cho người dùng. */
			readonly IsLicensed: string;
			/** Thông tin về khả năng đồng bộ người dùng với danh mục. */
			readonly IsSyncWithDirectory: string;
			/** Tiêu đề công việc của người dùng. */
			readonly JobTitle: string;
			/** Họ người dùng. */
			readonly LastName: string;
			/** Dấu thời gian của bản cập nhật mới nhất cho người dùng */
			readonly LatestUpdateTime_UtcDateAndTime: string;
			/** Tên đệm người dùng. */
			readonly MiddleName: string;
			/** Địa chỉ email thông báo di động cho người dùng. */
			readonly MobileAlertEMail: string;
			/** Các mục chứa Người dùng Hệ thống cụ thể. */
			readonly MobileOfflineProfileId: string;
			/** Số điện thoại di động cho người dùng. */
			readonly MobilePhone: string;
			/** Mã định danh duy nhất của người dùng sửa đổi người dùng lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi người dùng lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa người dùng hệ thống lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Biệt danh của người dùng. */
			readonly NickName: string;
			/** Mã định danh duy nhất của tổ chức liên kết với người dùng. */
			readonly OrganizationId: string;
			/** Phương thức gửi email đi cho người dùng. */
			readonly OutgoingEmailDeliveryMethod: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Mã định danh duy nhất của người quản lý của người dùng. */
			readonly ParentSystemUserId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PassportHi: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PassportLo: string;
			/** Địa chỉ email cá nhân của người dùng. */
			readonly PersonalEMailAddress: string;
			/** URL cho Trang web đặt ảnh của người dùng. */
			readonly PhotoUrl: string;
			/** Vị trí của người dùng trong mô hình bảo mật theo cấp bậc. */
			readonly PositionId: string;
			/** Địa chỉ ưu tiên cho người dùng. */
			readonly PreferredAddressCode: string;
			/** Địa chỉ email ưu tiên cho người dùng. */
			readonly PreferredEmailCode: string;
			/** Số điện thoại ưu tiên cho người dùng. */
			readonly PreferredPhoneCode: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Mã định danh duy nhất của hàng đợi mặc định cho người dùng. */
			readonly QueueId: string;
			/** Danh xưng cho tương ứng với người dùng. */
			readonly Salutation: string;
			/** Kiểm tra khả năng người dùng là người dùng thiết lập. */
			readonly SetupUser: string;
			/** Địa chỉ Email Công việc SharePoint */
			readonly SharePointEmailAddress: string;
			/** Kỹ năng đặt của người dùng. */
			readonly Skills: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Mã định danh duy nhất cho người dùng. */
			readonly SystemUserId: string;
			/** Mã định danh duy nhất của vùng lãnh thổ gán cho người dùng. */
			readonly TerritoryId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tiêu đề của người dùng. */
			readonly Title: string;
			/** Mã định danh duy nhất của loại tiền liên kết với systemuser. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Cho biết loại giấy phép của người dùng. */
			readonly UserLicenseType: string;
			/**  Thông tin Nhận diện Người dùng trong PUID Người dùng */
			readonly UserPuid: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của người dùng. */
			readonly VersionNumber: string;
			/** ID Windows Live */
			readonly WindowsLiveID: string;
			/** Địa chỉ email đăng nhập Yammer của người dùng */
			readonly YammerEmailAddress: string;
			/** ID Yammer của người dùng */
			readonly YammerUserId: string;
			/** Cách phát âm tên của người dùng, ghi bằng ký tự phiên âm chữ mềm hoặc chữ cứng. */
			readonly YomiFirstName: string;
			/** Cách phát âm tên đầy đủ của người dùng, ghi bằng ký tự phiên âm chữ mềm hoặc chữ cứng. */
			readonly YomiFullName: string;
			/** Cách phát âm họ của người dùng, ghi bằng ký tự phiên âm chữ mềm hoặc chữ cứng. */
			readonly YomiLastName: string;
			/** Cách phát âm tên đệm của người dùng, ghi bằng ký tự phiên âm chữ mềm hoặc chữ cứng. */
			readonly YomiMiddleName: string;
		}
	}
}
declare namespace OptionSet {
	namespace SystemUser {
		enum AccessMode {
			/** 2 */
			Doc,
			/** 0 */
			Doc_ghi,
			/** 4 */
			Khong_tuong_tac,
			/** 3 */
			Nguoi_dung_ho_tro,
			/** 1 */
			Quan_tri,
			/** 5 */
			Quan_tri_vien_dai_dien
		}
		enum Address1_AddressTypeCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum AzureState {
			/** 0 */
			Exists,
			/** 2 */
			Not_found_or_hard_deleted,
			/** 1 */
			Soft_deleted
		}
		enum CALType {
			/** 9 */
			Ban_hang,
			/** 0 */
			Chuyen_nghiep,
			/** 2 */
			Co_ban,
			/** 10 */
			Dich_vu,
			/** 7 */
			Doanh_nghiep,
			/** 11 */
			Field_Service,
			/** 12 */
			Project_Service,
			/** 1 */
			Quan_tri,
			/** 3 */
			Thiet_bi_chuyen_nghiep,
			/** 4 */
			Thiet_bi_co_ban,
			/** 8 */
			Thiet_bi_doanh_nghiep,
			/** 6 */
			Thiet_bi_thiet_yeu,
			/** 5 */
			Thiet_yeu
		}
		enum DeletedState {
			/** 0 */
			Not_deleted,
			/** 1 */
			Soft_deleted
		}
		enum EmailRouterAccessApproval {
			/** 3 */
			Bi_tu_choi,
			/** 1 */
			Da_phe_chuan,
			/** 2 */
			Dang_cho_Phe_duyet,
			/** 0 */
			Trong
		}
		enum IncomingEmailDeliveryMethod {
			/** 2 */
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email,
			/** 3 */
			Hop_thu_chuyen_tiep,
			/** 0 */
			Khong,
			/** 1 */
			Microsoft_Dynamics_365_danh_cho_Outlook
		}
		enum InviteStatusCode {
			/** 0 */
			Chua_gui_loi_moi,
			/** 1 */
			Da_moi,
			/** 4 */
			Loi_moi_da_chap_nhan,
			/** 3 */
			Loi_moi_da_het_han,
			/** 6 */
			Loi_moi_da_thu_hoi,
			/** 5 */
			Loi_moi_da_tu_choi,
			/** 2 */
			Loi_moi_gan_het_han
		}
		enum OutgoingEmailDeliveryMethod {
			/** 2 */
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email,
			/** 0 */
			Khong,
			/** 1 */
			Microsoft_Dynamics_365_danh_cho_Outlook
		}
		enum PreferredAddressCode {
			/** 2 */
			Dia_chi_khac,
			/** 1 */
			Dia_chi_thu_tin
		}
		enum PreferredEmailCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum PreferredPhoneCode {
			/** 1 */
			Dien_thoai_Chinh,
			/** 4 */
			Dien_thoai_Di_dong,
			/** 2 */
			Dien_thoai_Khac,
			/** 3 */
			Dien_thoai_Nha_rieng
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
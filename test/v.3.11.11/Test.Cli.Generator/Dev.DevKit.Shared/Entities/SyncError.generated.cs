﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.SyncErrorOptionSets
{
	public enum ErrorType
	{
		/// <summary>
		/// Conflict = 0
		/// </summary>
		Conflict = 0,
		/// <summary>
		/// Others = 3
		/// </summary>
		Others = 3,
		/// <summary>
		/// Record already exists = 2
		/// </summary>
		Record_already_exists = 2,
		/// <summary>
		/// Record not found = 1
		/// </summary>
		Record_not_found = 1
	}

	public enum StateCode
	{
		/// <summary>
		/// Active = 0
		/// </summary>
		Active = 0,
		/// <summary>
		/// Resolved = 1
		/// </summary>
		Resolved = 1
	}

	public enum StatusCode
	{
		/// <summary>
		/// Active = 0
		/// </summary>
		Active = 0,
		/// <summary>
		/// Fixed = 1
		/// </summary>
		Fixed = 1
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SyncError : EntityBase
	{
		public struct Fields
		{
			public const string Action = "action";
			public const string ActionData = "actiondata";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string ErrorCode = "errorcode";
			public const string ErrorDetail = "errordetail";
			public const string ErrorMessage = "errormessage";
			public const string ErrorTime = "errortime";
			public const string ErrorType = "errortype";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string RegardingObjectId = "regardingobjectid";
			public const string RequestData = "requestdata";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string SyncErrorId = "syncerrorid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "syncerror";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9869;

		[DebuggerNonUserCode()]
		public SyncError()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SyncError(Guid SyncErrorId)
		{
			Entity = new Entity(EntityLogicalName, SyncErrorId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SyncError(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SyncError(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SyncError(Entity entity, Entity merge)
		{
			Entity = entity;
			foreach (var property in merge?.Attributes)
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SyncError(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Action Name for which sync error has occurred</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Action</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Action
		{
			get { return Entity.GetAttributeValue<string>(Fields.Action); }
			set { Entity.Attributes[Fields.Action] = value; }
		}

		/// <summary>
		/// <para>Show the action data</para>
		/// <para>String - MaxLength: 10000</para>
		/// <para>Action Data</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ActionData
		{
			get { return Entity.GetAttributeValue<string>(Fields.ActionData); }
			set { Entity.Attributes[Fields.ActionData] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the sync error.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the sync Error was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the sync error.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Enter a short description of the sync error.</para>
		/// <para>Memo - MaxLength: 4000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		/// <summary>
		/// <para>Displays the error code.</para>
		/// <para>Memo - MaxLength: 100</para>
		/// <para>Error Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ErrorCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.ErrorCode); }
			set { Entity.Attributes[Fields.ErrorCode] = value; }
		}

		/// <summary>
		/// <para>Error description from the exception</para>
		/// <para>Memo - MaxLength: 1073741823</para>
		/// <para>Error Detail</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ErrorDetail
		{
			get { return Entity.GetAttributeValue<string>(Fields.ErrorDetail); }
			set { Entity.Attributes[Fields.ErrorDetail] = value; }
		}

		/// <summary>
		/// <para>Error Message of the exception</para>
		/// <para>String - MaxLength: 1000</para>
		/// <para>Error Message</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ErrorMessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.ErrorMessage); }
			set { Entity.Attributes[Fields.ErrorMessage] = value; }
		}

		/// <summary>
		/// <para>Date and time when the upsync request was executed on CRM server</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Error Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ErrorTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ErrorTime); }
			set { Entity.Attributes[Fields.ErrorTime] = value; }
		}

		/// <summary>
		/// <para>Select the preferred error type.</para>
		/// <para>Picklist</para>
		/// <para>Error Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SyncErrorOptionSets.ErrorType? ErrorType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ErrorType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SyncErrorOptionSets.ErrorType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ErrorType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ErrorType] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the user who last modified the sync error.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the sync error was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the sync error.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Entity name of the record for which sync error has occurred</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user or team who owns the sync error.</para>
		/// <para>Lookup to systemuser, team</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}

		/// <summary>
		/// <para>Business unit that owns the sync error.</para>
		/// <para>ReadOnly - Lookup to businessunit</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier of the team who owns the sync error.</para>
		/// <para>ReadOnly - Lookup to team</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who owns the sync error.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Choose the record that the sync error relates to.</para>
		/// <para>Lookup to account, activityfileattachment, activitymimeattachment, activitymonitor, activityparty, adminsettingsentity, annotation, appaction, appactionmigration, appactionrule, appelement, applicationuser, appmodulecomponentedge, appmodulecomponentnode, appointment, appsetting, appusersetting, attachment, attributeimageconfig, bookableresource, bookableresourcebooking, bookableresourcebookingexchangesyncidmapping, bookableresourcebookingheader, bookableresourcecategory, bookableresourcecategoryassn, bookableresourcecharacteristic, bookableresourcegroup, bookingstatus, bot, botcomponent, bulkoperation, bulkoperationlog, businessdatalocalizedlabel, businessunit, campaign, campaignactivity, campaignresponse, canvasappextendedmetadata, cascadegrantrevokeaccessrecordstracker, cascadegrantrevokeaccessversiontracker, catalog, catalogassignment, category, channelaccessprofile, channelaccessprofilerule, channelaccessprofileruleitem, characteristic, chat, childincidentcount, comment, commitment, competitor, competitoraddress, connection, connectionreference, connectionrole, connector, constraintbasedgroup, contact, contract, contractdetail, contracttemplate, conversationtranscript, customapi, customapirequestparameter, customapiresponseproperty, customeraddress, customeropportunityrole, datalakefolder, datalakefolderpermission, datalakeworkspace, datalakeworkspacepermission, dataprocessingconfiguration, discount, discounttype, duplicaterule, duplicaterulecondition, dynamicproperty, dynamicpropertyassociation, dynamicpropertyinstance, dynamicpropertyoptionsetitem, email, emailserverprofile, entitlement, entitlementchannel, entitlemententityallocationtypemapping, entitlementtemplate, entitlementtemplatechannel, entityanalyticsconfig, entityimageconfig, entityindex, environmentvariabledefinition, environmentvariablevalue, equipment, expiredprocess, exportsolutionupload, externalparty, externalpartyitem, fax, featurecontrolsetting, feedback, fieldpermission, fieldsecurityprofile, fileattachment, flowmachine, flowmachinegroup, flowsession, goal, goalrollupquery, holidaywrapper, importmap, incident, incidentresolution, indexattributes, internaladdress, internalcatalogassignment, invoice, invoicedetail, kbarticle, kbarticletemplate, keyvaultreference, knowledgearticle, knowledgearticleincident, knowledgearticleviews, knowledgebaserecord, lead, leadaddress, leadtoopportunitysalesprocess, letter, list, listoperation, mailbox, mailmergetemplate, managedidentity, marketingformdisplayattributes, metric, msdynce_botcontent, msdynsm_marketingsitemap, msdynsm_salessitemap, msdynsm_servicessitemap, msdynsm_settingssitemap, msdyn_3dmodel, msdyn_accountpricelist, msdyn_actioncardregarding, msdyn_actioncardrolesetting, msdyn_actual, msdyn_adaptivecardconfiguration, msdyn_adminappstate, msdyn_agentstatushistory, msdyn_agreement, msdyn_agreementbookingdate, msdyn_agreementbookingincident, msdyn_agreementbookingproduct, msdyn_agreementbookingservice, msdyn_agreementbookingservicetask, msdyn_agreementbookingsetup, msdyn_agreementinvoicedate, msdyn_agreementinvoiceproduct, msdyn_agreementinvoicesetup, msdyn_agreementsubstatus, msdyn_aibdataset, msdyn_aibdatasetfile, msdyn_aibdatasetrecord, msdyn_aibdatasetscontainer, msdyn_aibfeedbackloop, msdyn_aibfile, msdyn_aibfileattacheddata, msdyn_aiconfiguration, msdyn_aicontactsuggestion, msdyn_aifptrainingdocument, msdyn_aimodel, msdyn_aiodimage, msdyn_aiodlabel, msdyn_aiodtrainingboundingbox, msdyn_aiodtrainingimage, msdyn_aitemplate, msdyn_analysiscomponent, msdyn_analysisjob, msdyn_analysisresult, msdyn_analysisresultdetail, msdyn_analytics, msdyn_analyticsadminsettings, msdyn_analyticsforcs, msdyn_appconfiguration, msdyn_applicationextension, msdyn_applicationtabtemplate, msdyn_approval, msdyn_approvalset, msdyn_assetcategorytemplateassociation, msdyn_assetsuggestionssetting, msdyn_assettemplateassociation, msdyn_assignmentconfiguration, msdyn_assignmentconfigurationstep, msdyn_assignmentmap, msdyn_assignmentrule, msdyn_attribute, msdyn_attributevalue, msdyn_authenticationsettings, msdyn_authsettingsentry, msdyn_autocapturerule, msdyn_autocapturesettings, msdyn_batchjob, msdyn_bookableresourceassociation, msdyn_bookableresourcebookingquicknote, msdyn_bookableresourcecapacityprofile, msdyn_bookingalert, msdyn_bookingalertstatus, msdyn_bookingchange, msdyn_bookingjournal, msdyn_bookingrule, msdyn_bookingsetupmetadata, msdyn_bookingtimestamp, msdyn_bpf_2c5fe86acc8b414b8322ae571000c799, msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b, msdyn_bpf_665e73aa18c247d886bfc50499c73b82, msdyn_bpf_989e9b1857e24af18787d5143b67523b, msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3, msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39, msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d, msdyn_businessclosure, msdyn_callablecontext, msdyn_cannedmessage, msdyn_capacityprofile, msdyn_caseenrichment, msdyn_casesuggestionrequestpayload, msdyn_casetopic, msdyn_casetopicsetting, msdyn_casetopicsummary, msdyn_casetopic_incident, msdyn_cdsentityengagementctx, msdyn_channel, msdyn_channelcapability, msdyn_channelprovider, msdyn_characteristicreqforteammember, msdyn_chatansweroption, msdyn_chatquestionnaireresponse, msdyn_chatquestionnaireresponseitem, msdyn_chatwidgetlanguage, msdyn_ciprovider, msdyn_clientextension, msdyn_collabgraphresource, msdyn_configuration, msdyn_consoleapplicationnotificationfield, msdyn_consoleapplicationnotificationtemplate, msdyn_consoleapplicationsessiontemplate, msdyn_consoleapplicationtemplate, msdyn_consoleapplicationtemplateparameter, msdyn_consoleapplicationtype, msdyn_consoleappparameterdefinition, msdyn_contactpricelist, msdyn_contactsuggestionrule, msdyn_contactsuggestionruleset, msdyn_contractlinedetailperformance, msdyn_contractlineinvoiceschedule, msdyn_contractlinescheduleofvalue, msdyn_contractperformance, msdyn_conversationaction, msdyn_conversationactionlocale, msdyn_conversationdata, msdyn_conversationinsight, msdyn_conversationsuggestionrequestpayload, msdyn_conversationtopic, msdyn_conversationtopicsetting, msdyn_conversationtopicsummary, msdyn_conversationtopic_conversation, msdyn_csadminconfig, msdyn_customengagementctx, msdyn_customerasset, msdyn_customerassetattachment, msdyn_customerassetcategory, msdyn_dataanalyticscustomizedreport, msdyn_dataanalyticsreport, msdyn_dataanalyticsreport_csrmanager, msdyn_dataanalyticsreport_forecast, msdyn_dataanalyticsreport_fs, msdyn_dataanalyticsreport_fspredictrs, msdyn_dataanalyticsreport_fspredictwhd, msdyn_dataanalyticsreport_ksinsights, msdyn_dataanalyticsreport_oc, msdyn_dataanalyticsreport_ocvoice, msdyn_dataanalyticsreport_sutreporting, msdyn_databaseversion, msdyn_dataexport, msdyn_dataflow, msdyn_dataflowrefreshhistory, msdyn_datainsightsandanalyticsfeature, msdyn_dealmanageraccess, msdyn_dealmanagersettings, msdyn_decisioncontract, msdyn_decisionruleset, msdyn_delegation, msdyn_dimension, msdyn_dimensionfieldname, msdyn_duplicatedetectionpluginrun, msdyn_duplicateleadmapping, msdyn_effortpredictionresult, msdyn_entitlementapplication, msdyn_entityconfig, msdyn_entityconfiguration, msdyn_entitylinkchatconfiguration, msdyn_entityrankingrule, msdyn_entityrefreshhistory, msdyn_entityroutingconfiguration, msdyn_estimate, msdyn_estimateline, msdyn_expense, msdyn_expensecategory, msdyn_expensereceipt, msdyn_extendedusersetting, msdyn_facebookengagementctx, msdyn_fact, msdyn_federatedarticle, msdyn_federatedarticleincident, msdyn_fieldcomputation, msdyn_fieldservicepricelistitem, msdyn_fieldservicesetting, msdyn_fieldserviceslaconfiguration, msdyn_fieldservicesystemjob, msdyn_findworkevent, msdyn_flowcardtype, msdyn_forecastconfiguration, msdyn_forecastdefinition, msdyn_forecastinstance, msdyn_forecastrecurrence, msdyn_forecastsettingsandsummary, msdyn_functionallocation, msdyn_gdprdata, msdyn_geofence, msdyn_geofenceevent, msdyn_geofencingsettings, msdyn_geolocationsettings, msdyn_geolocationtracking, msdyn_helppage, msdyn_icebreakersconfig, msdyn_iermlmodel, msdyn_iermltraining, msdyn_inboxconfiguration, msdyn_incidenttype, msdyn_incidenttypecharacteristic, msdyn_incidenttypeproduct, msdyn_incidenttyperecommendationresult, msdyn_incidenttyperecommendationrunhistory, msdyn_incidenttyperesolution, msdyn_incidenttypeservice, msdyn_incidenttypeservicetask, msdyn_incidenttypessetup, msdyn_incidenttype_requirementgroup, msdyn_insightsstorevirtualentity, msdyn_inspection, msdyn_inspectionattachment, msdyn_inspectiondefinition, msdyn_inspectioninstance, msdyn_inspectionresponse, msdyn_integrationjob, msdyn_integrationjobdetail, msdyn_inventoryadjustment, msdyn_inventoryadjustmentproduct, msdyn_inventoryjournal, msdyn_inventorytransfer, msdyn_invoicefrequency, msdyn_invoicefrequencydetail, msdyn_invoicelinetransaction, msdyn_iotalert, msdyn_iotdevice, msdyn_iotdevicecategory, msdyn_iotdevicecommand, msdyn_iotdevicecommanddefinition, msdyn_iotdevicedatahistory, msdyn_iotdeviceproperty, msdyn_iotdeviceregistrationhistory, msdyn_iotdevicevisualizationconfiguration, msdyn_iotfieldmapping, msdyn_iotpropertydefinition, msdyn_iotprovider, msdyn_iotproviderinstance, msdyn_iotsettings, msdyn_iottocaseprocess, msdyn_journal, msdyn_journalline, msdyn_kalanguagesetting, msdyn_kbattachment, msdyn_kbenrichment, msdyn_kbkeywordsdescsuggestionsetting, msdyn_kmfederatedsearchconfig, msdyn_kmpersonalizationsetting, msdyn_knowledgearticleimage, msdyn_knowledgearticletemplate, msdyn_knowledgeinteractioninsight, msdyn_knowledgemanagementsetting, msdyn_knowledgepersonalfilter, msdyn_knowledgesearchfilter, msdyn_knowledgesearchinsight, msdyn_kpieventdata, msdyn_kpieventdefinition, msdyn_leadhygienesetting, msdyn_leadmodelconfig, msdyn_lineengagementctx, msdyn_livechatconfig, msdyn_livechatengagementctx, msdyn_livechatwidgetlocation, msdyn_liveconversation, msdyn_liveworkitemevent, msdyn_liveworkstream, msdyn_liveworkstreamcapacityprofile, msdyn_localizedsurveyquestion, msdyn_macrosession, msdyn_maskingrule, msdyn_masterentityroutingconfiguration, msdyn_migrationtracker, msdyn_mlresultcache, msdyn_modelpreviewstatus, msdyn_msteamssetting, msdyn_msteamssettingsv2, msdyn_notesanalysisconfig, msdyn_notificationfield, msdyn_notificationtemplate, msdyn_ocapplebusinessaccount, msdyn_ocapplemessagesforbusinessengagementctx, msdyn_ocapplepay, msdyn_ocautoblockrule, msdyn_ocbotchannelregistration, msdyn_occarrier, msdyn_occhannelapiconversationprivilege, msdyn_occhannelapimessageprivilege, msdyn_occhannelapimethodmapping, msdyn_occhannelconfiguration, msdyn_occhannelstateconfiguration, msdyn_occommunicationprovidersetting, msdyn_occommunicationprovidersettingentry, msdyn_occustommessagingchannel, msdyn_ocfbapplication, msdyn_ocfbpage, msdyn_ocflaggedspam, msdyn_oclanguage, msdyn_oclinechannelconfig, msdyn_ocliveworkitem, msdyn_ocliveworkitemcapacityprofile, msdyn_ocliveworkitemcharacteristic, msdyn_ocliveworkitemcontextitem, msdyn_ocliveworkitemparticipant, msdyn_ocliveworkitemsentiment, msdyn_ocliveworkstreamcontextvariable, msdyn_oclocalizationdata, msdyn_ocoutboundconfiguration, msdyn_ocoutboundmessage, msdyn_ocpaymentprofile, msdyn_ocphonenumber, msdyn_ocprovisioningstate, msdyn_ocrecording, msdyn_ocrequest, msdyn_ocrichobject, msdyn_ocrichobjectmap, msdyn_ocruleitem, msdyn_ocsentimentdailytopic, msdyn_ocsentimentdailytopickeyword, msdyn_ocsentimentdailytopictrending, msdyn_ocsession, msdyn_ocsessioncharacteristic, msdyn_ocsessionparticipantevent, msdyn_ocsessionsentiment, msdyn_ocsimltraining, msdyn_ocsitdimportconfig, msdyn_ocsitdskill, msdyn_ocsitrainingdata, msdyn_ocskillidentmlmodel, msdyn_ocsmschannelsetting, msdyn_ocsystemmessage, msdyn_octag, msdyn_octeamschannelconfig, msdyn_octwitterapplication, msdyn_octwitterhandle, msdyn_ocwechatchannelconfig, msdyn_ocwhatsappchannelaccount, msdyn_ocwhatsappchannelnumber, msdyn_oc_geolocationprovider, msdyn_omnichannelconfiguration, msdyn_omnichannelpersonalization, msdyn_omnichannelqueue, msdyn_omnichannelsyncconfig, msdyn_operatinghour, msdyn_opportunitylineresourcecategory, msdyn_opportunitylinetransaction, msdyn_opportunitylinetransactioncategory, msdyn_opportunitylinetransactionclassificatio, msdyn_opportunitymodelconfig, msdyn_opportunitypricelist, msdyn_orderinvoicingdate, msdyn_orderinvoicingproduct, msdyn_orderinvoicingsetup, msdyn_orderinvoicingsetupdate, msdyn_orderlineresourcecategory, msdyn_orderlinetransaction, msdyn_orderlinetransactioncategory, msdyn_orderlinetransactionclassification, msdyn_orderpricelist, msdyn_organizationalunit, msdyn_overflowactionconfig, msdyn_paneconfiguration, msdyn_panetabconfiguration, msdyn_panetoolconfiguration, msdyn_payment, msdyn_paymentdetail, msdyn_paymentmethod, msdyn_paymentterm, msdyn_personalmessage, msdyn_personalsoundsetting, msdyn_personasecurityrolemapping, msdyn_playbookactivity, msdyn_playbookactivityattribute, msdyn_playbookcategory, msdyn_playbookinstance, msdyn_playbooktemplate, msdyn_pmanalysishistory, msdyn_pminferredtask, msdyn_pmrecording, msdyn_pmtemplate, msdyn_postalbum, msdyn_postalcode, msdyn_postconfig, msdyn_postruleconfig, msdyn_predictivemodelscore, msdyn_predictivescore, msdyn_predictworkhourdurationsetting, msdyn_presence, msdyn_priority, msdyn_problematicasset, msdyn_problematicassetfeedback, msdyn_processnotes, msdyn_productinventory, msdyn_productivityactioninputparameter, msdyn_productivityactionoutputparameter, msdyn_productivityagentscript, msdyn_productivityagentscriptstep, msdyn_productivitymacroactiontemplate, msdyn_productivitymacroconnector, msdyn_productivitymacrosolutionconfiguration, msdyn_productivityparameterdefinition, msdyn_project, msdyn_projectapproval, msdyn_projectparameter, msdyn_projectparameterpricelist, msdyn_projectpricelist, msdyn_projecttask, msdyn_projecttaskdependency, msdyn_projecttaskstatususer, msdyn_projectteam, msdyn_projectteammembersignup, msdyn_projecttransactioncategory, msdyn_property, msdyn_propertyassetassociation, msdyn_propertylog, msdyn_propertytemplateassociation, msdyn_provider, msdyn_purchaseorder, msdyn_purchaseorderbill, msdyn_purchaseorderproduct, msdyn_purchaseorderreceipt, msdyn_purchaseorderreceiptproduct, msdyn_purchaseordersubstatus, msdyn_questionsequence, msdyn_quotebookingincident, msdyn_quotebookingproduct, msdyn_quotebookingservice, msdyn_quotebookingservicetask, msdyn_quotebookingsetup, msdyn_quoteinvoicingproduct, msdyn_quoteinvoicingsetup, msdyn_quotelineanalyticsbreakdown, msdyn_quotelineinvoiceschedule, msdyn_quotelineresourcecategory, msdyn_quotelinescheduleofvalue, msdyn_quotelinetransaction, msdyn_quotelinetransactioncategory, msdyn_quotelinetransactionclassification, msdyn_quotepricelist, msdyn_recording, msdyn_relationshipinsightsunifiedconfig, msdyn_requirementcharacteristic, msdyn_requirementdependency, msdyn_requirementgroup, msdyn_requirementorganizationunit, msdyn_requirementrelationship, msdyn_requirementresourcecategory, msdyn_requirementresourcepreference, msdyn_requirementstatus, msdyn_resolution, msdyn_resourceassignment, msdyn_resourceassignmentdetail, msdyn_resourcecategorymarkuppricelevel, msdyn_resourcecategorypricelevel, msdyn_resourcepaytype, msdyn_resourcerequest, msdyn_resourcerequirement, msdyn_resourcerequirementdetail, msdyn_resourceterritory, msdyn_richtextfile, msdyn_rma, msdyn_rmaproduct, msdyn_rmareceipt, msdyn_rmareceiptproduct, msdyn_rmasubstatus, msdyn_rolecompetencyrequirement, msdyn_roleutilization, msdyn_routingconfiguration, msdyn_routingconfigurationstep, msdyn_routingrequest, msdyn_routingrulesetsetting, msdyn_rtv, msdyn_rtvproduct, msdyn_rtvsubstatus, msdyn_rulesetdependencymapping, msdyn_salesaccelerationsettings, msdyn_salesassignmentsetting, msdyn_salesinsightssettings, msdyn_salesroutingrun, msdyn_salessuggestion, msdyn_salestag, msdyn_scenario, msdyn_scheduleboardsetting, msdyn_schedulingfeatureflag, msdyn_schedulingparameter, msdyn_searchconfiguration, msdyn_segment, msdyn_segmentcatalogue, msdyn_sentimentanalysis, msdyn_sequence, msdyn_sequencestat, msdyn_sequencetarget, msdyn_sequencetargetstep, msdyn_sequencetemplate, msdyn_serviceconfiguration, msdyn_servicetasktype, msdyn_sessiondata, msdyn_sessionevent, msdyn_sessionparticipant, msdyn_sessionparticipantdata, msdyn_sessiontemplate, msdyn_shipvia, msdyn_siconfig, msdyn_sikeyvalueconfig, msdyn_skillattachmentruleitem, msdyn_skillattachmenttarget, msdyn_slakpi, msdyn_smartassistconfig, msdyn_smsengagementctx, msdyn_smsnumber, msdyn_solutionhealthrule, msdyn_solutionhealthruleargument, msdyn_solutionhealthruleset, msdyn_soundfile, msdyn_soundnotificationsetting, msdyn_suggestioninteraction, msdyn_suggestionrequestpayload, msdyn_suggestionsmodelsummary, msdyn_suggestionssetting, msdyn_surveyquestion, msdyn_swarm, msdyn_swarmparticipant, msdyn_swarmparticipantrule, msdyn_swarmrole, msdyn_swarmskill, msdyn_swarmtemplate, msdyn_systemuserschedulersetting, msdyn_taxcode, msdyn_taxcodedetail, msdyn_teamschannelengagementctx, msdyn_teamschatassociation, msdyn_teamschatsuggestion, msdyn_teamscollaboration, msdyn_teamsdialeradminsettings, msdyn_teamsengagementctx, msdyn_templateforproperties, msdyn_templateparameter, msdyn_templatetags, msdyn_timeentry, msdyn_timeentrysetting, msdyn_timegroup, msdyn_timegroupdetail, msdyn_timeoffcalendar, msdyn_timeoffrequest, msdyn_timespent, msdyn_tour, msdyn_transactioncategory, msdyn_transactioncategoryclassification, msdyn_transactioncategoryhierarchyelement, msdyn_transactioncategorypricelevel, msdyn_transactionconnection, msdyn_transactionorigin, msdyn_transactiontype, msdyn_transcript, msdyn_twitterengagementctx, msdyn_unifiedroutingdiagnostic, msdyn_unifiedroutingrun, msdyn_unifiedroutingsetuptracker, msdyn_uniquenumber, msdyn_untrackedappointment, msdyn_upgraderun, msdyn_upgradestep, msdyn_upgradeversion, msdyn_urnotificationtemplate, msdyn_urnotificationtemplatemapping, msdyn_usagemetric, msdyn_usersetting, msdyn_userworkhistory, msdyn_visitorjourney, msdyn_wallsavedquery, msdyn_wallsavedqueryusersettings, msdyn_warehouse, msdyn_wechatengagementctx, msdyn_whatsappengagementctx, msdyn_workhourtemplate, msdyn_worklistviewconfiguration, msdyn_workorder, msdyn_workordercharacteristic, msdyn_workorderdetailsgenerationqueue, msdyn_workorderincident, msdyn_workorderproduct, msdyn_workorderresolution, msdyn_workorderresourcerestriction, msdyn_workorderservice, msdyn_workorderservicetask, msdyn_workordersubstatus, msdyn_workordertype, msdyn_workqueuestate, msdyn_workqueueusersetting, msdyusd_actioncallworkflow, msdyusd_agentscriptaction, msdyusd_agentscripttaskcategory, msdyusd_answer, msdyusd_auditanddiagnosticssetting, msdyusd_configuration, msdyusd_customizationfiles, msdyusd_entityassignment, msdyusd_entitysearch, msdyusd_form, msdyusd_languagemodule, msdyusd_scriptlet, msdyusd_scripttasktrigger, msdyusd_search, msdyusd_sessioninformation, msdyusd_sessiontransfer, msdyusd_task, msdyusd_toolbarbutton, msdyusd_toolbarstrip, msdyusd_tracesourcesetting, msdyusd_ucisettings, msdyusd_uiievent, msdyusd_usersettings, msdyusd_windowroute, msfp_alert, msfp_alertrule, msfp_emailtemplate, msfp_fileresponse, msfp_localizedemailtemplate, msfp_project, msfp_question, msfp_questionresponse, msfp_satisfactionmetric, msfp_survey, msfp_surveyinvite, msfp_surveyreminder, msfp_surveyresponse, msfp_unsubscribedrecipient, newprocess, offlinecommanddefinition, opportunity, opportunityclose, opportunityproduct, opportunitysalesprocess, orderclose, organization, organizationdatasyncstate, organizationdatasyncsubscription, organizationdatasyncsubscriptionentity, organizationsetting, package, pdfsetting, phonecall, phonetocaseprocess, pluginpackage, position, postfollow, pricelevel, privilegesremovalsetting, processsession, processstage, processstageparameter, processtrigger, product, productassociation, productpricelevel, productsubstitute, provisionlanguageforuser, publisher, queue, queueitem, quote, quoteclose, quotedetail, ratingmodel, ratingvalue, recurringappointmentmaster, relationshipattribute, report, reportcategory, resource, resourcegroup, resourcegroupexpansion, resourcespec, revokeinheritedaccessrecordstracker, role, rollupfield, salesliterature, salesliteratureitem, salesorder, salesorderdetail, salesprocessinstance, savedquery, savedqueryvisualization, service, serviceappointment, serviceplan, serviceplanmapping, settingdefinition, sharedlinksetting, sharedobject, sharedworkspace, sharepointdocumentlocation, sharepointsite, site, sla, slaitem, slakpiinstance, socialactivity, socialprofile, solution, solutioncomponentattributeconfiguration, solutioncomponentbatchconfiguration, solutioncomponentconfiguration, solutioncomponentrelationshipconfiguration, stagesolutionupload, subject, synapsedatabase, synapselinkexternaltablestate, synapselinkprofile, synapselinkprofileentity, synapselinkprofileentitystate, synapselinkschedule, syncerror, systemuser, systemuserauthorizationchangetracker, task, team, teammobileofflineprofilemembership, teamtemplate, template, territory, topic, topichistory, topicmodel, topicmodelconfiguration, topicmodelexecutionhistory, transactioncurrency, translationprocess, uii_action, uii_audit, uii_context, uii_hostedapplication, uii_nonhostedapplication, uii_option, uii_savedsession, uii_sessiontransfer, uii_workflow, uii_workflowstep, uii_workflow_workflowstep_mapping, uom, uomschedule, usermobileofflineprofilemembership, userquery, userqueryvisualization, virtualentitymetadata, workflow, workflowbinary</para>
		/// <para>Record</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
		}

		/// <summary>
		/// <para>Request data for the entity that had the sync error.</para>
		/// <para>Memo - MaxLength: 1073741823</para>
		/// <para>Request Data</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RequestData
		{
			get { return Entity.GetAttributeValue<string>(Fields.RequestData); }
			set { Entity.Attributes[Fields.RequestData] = value; }
		}

		/// <summary>
		/// <para>Shows whether the sync error is active or resolved.</para>
		/// <para>State</para>
		/// <para>State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StateCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StateCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StateCode] = null;
			}
		}

		/// <summary>
		/// <para>Select the sync error status.</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StatusCode] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the sync error.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Sync Error Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SyncErrorId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SyncErrorId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Shows the version number of the sync error.</para>
		/// <para>ReadOnly - BigInt</para>
		/// <para>Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}
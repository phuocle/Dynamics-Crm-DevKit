'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.DuplicateRecordApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
				}
				if (isMultiOptionSet) {
					return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
				}
				return entity[logicalName + f];
			};
			var getValue = function () {
				if (entity[logicalName] === undefined || entity[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName];
					}
					return null;
				}
				if (isMultiOptionSet) {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return entity[logicalName];
			};
			var setValue = function (value) {
				if (isMultiOptionSet) value = value.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _duplicaterecord = {
			AsyncOperationId: { b: 'asyncoperationid', a: '_asyncoperationid_value', c: 'asyncoperations', d: 'asyncoperation', r: true },
			baserecordid_account: { b: 'baserecordid_account', a: '_baserecordid_value', c: 'accounts', d: 'account', r: true },
			baserecordid_activityfileattachment: { b: 'baserecordid_activityfileattachment', a: '_baserecordid_value', c: 'activityfileattachments', d: 'activityfileattachment', r: true },
			baserecordid_adx_invitation: { b: 'baserecordid_adx_invitation', a: '_baserecordid_value', c: 'adx_invitations', d: 'adx_invitation', r: true },
			baserecordid_adx_inviteredemption: { b: 'baserecordid_adx_inviteredemption', a: '_baserecordid_value', c: 'adx_inviteredemptions', d: 'adx_inviteredemption', r: true },
			baserecordid_aicopilot: { b: 'baserecordid_aicopilot', a: '_baserecordid_value', c: 'aicopilots', d: 'aicopilot', r: true },
			baserecordid_aipluginauth: { b: 'baserecordid_aipluginauth', a: '_baserecordid_value', c: 'aipluginauths', d: 'aipluginauth', r: true },
			baserecordid_aipluginoperationparameter: { b: 'baserecordid_aipluginoperationparameter', a: '_baserecordid_value', c: 'aipluginoperationparameters', d: 'aipluginoperationparameter', r: true },
			baserecordid_aipluginoperationresponsetemplate: { b: 'baserecordid_aipluginoperationresponsetemplate', a: '_baserecordid_value', c: 'aipluginoperationresponsetemplates', d: 'aipluginoperationresponsetemplate', r: true },
			baserecordid_aiplugintitle: { b: 'baserecordid_aiplugintitle', a: '_baserecordid_value', c: 'aiplugintitles', d: 'aiplugintitle', r: true },
			baserecordid_aipluginusersetting: { b: 'baserecordid_aipluginusersetting', a: '_baserecordid_value', c: 'aipluginusersettings', d: 'aipluginusersetting', r: true },
			baserecordid_applicationuser: { b: 'baserecordid_applicationuser', a: '_baserecordid_value', c: 'applicationusers', d: 'applicationuser', r: true },
			baserecordid_appointment: { b: 'baserecordid_appointment', a: '_baserecordid_value', c: 'appointments', d: 'appointment', r: true },
			baserecordid_archivecleanupinfo: { b: 'baserecordid_archivecleanupinfo', a: '_baserecordid_value', c: 'archivecleanupinfos', d: 'archivecleanupinfo', r: true },
			baserecordid_archivecleanupoperation: { b: 'baserecordid_archivecleanupoperation', a: '_baserecordid_value', c: 'archivecleanupoperations', d: 'archivecleanupoperation', r: true },
			baserecordid_bulkarchiveconfig: { b: 'baserecordid_bulkarchiveconfig', a: '_baserecordid_value', c: 'bulkarchiveconfigs', d: 'bulkarchiveconfig', r: true },
			baserecordid_bulkarchivefailuredetail: { b: 'baserecordid_bulkarchivefailuredetail', a: '_baserecordid_value', c: 'bulkarchivefailuredetails', d: 'bulkarchivefailuredetail', r: true },
			baserecordid_bulkarchiveoperation: { b: 'baserecordid_bulkarchiveoperation', a: '_baserecordid_value', c: 'bulkarchiveoperations', d: 'bulkarchiveoperation', r: true },
			baserecordid_canvasappextendedmetadata: { b: 'baserecordid_canvasappextendedmetadata', a: '_baserecordid_value', c: 'canvasappextendedmetadatas', d: 'canvasappextendedmetadata', r: true },
			baserecordid_card: { b: 'baserecordid_card', a: '_baserecordid_value', c: 'cards', d: 'card', r: true },
			baserecordid_cascadegrantrevokeaccessrecordstracker: { b: 'baserecordid_cascadegrantrevokeaccessrecordstracker', a: '_baserecordid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker', r: true },
			baserecordid_cascadegrantrevokeaccessversiontracker: { b: 'baserecordid_cascadegrantrevokeaccessversiontracker', a: '_baserecordid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker', r: true },
			baserecordid_catalogassignment: { b: 'baserecordid_catalogassignment', a: '_baserecordid_value', c: 'catalogassignments', d: 'catalogassignment', r: true },
			channelaccessprofile_duplicatebaserecord: { b: 'channelaccessprofile_duplicatebaserecord', a: '_baserecordid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile', r: true },
			baserecordid_connectioninstance: { b: 'baserecordid_connectioninstance', a: '_baserecordid_value', c: 'connectioninstances', d: 'connectioninstance', r: true },
			baserecordid_connector: { b: 'baserecordid_connector', a: '_baserecordid_value', c: 'connectors', d: 'connector', r: true },
			baserecordid_contact: { b: 'baserecordid_contact', a: '_baserecordid_value', c: 'contacts', d: 'contact', r: true },
			baserecordid_conversationtranscript: { b: 'baserecordid_conversationtranscript', a: '_baserecordid_value', c: 'conversationtranscripts', d: 'conversationtranscript', r: true },
			baserecordid_credential: { b: 'baserecordid_credential', a: '_baserecordid_value', c: 'credentials', d: 'credential', r: true },
			baserecordid_datalakefolder: { b: 'baserecordid_datalakefolder', a: '_baserecordid_value', c: 'datalakefolders', d: 'datalakefolder', r: true },
			baserecordid_datalakefolderpermission: { b: 'baserecordid_datalakefolderpermission', a: '_baserecordid_value', c: 'datalakefolderpermissions', d: 'datalakefolderpermission', r: true },
			baserecordid_datalakeworkspace: { b: 'baserecordid_datalakeworkspace', a: '_baserecordid_value', c: 'datalakeworkspaces', d: 'datalakeworkspace', r: true },
			baserecordid_datalakeworkspacepermission: { b: 'baserecordid_datalakeworkspacepermission', a: '_baserecordid_value', c: 'datalakeworkspacepermissions', d: 'datalakeworkspacepermission', r: true },
			baserecordid_dataprocessingconfiguration: { b: 'baserecordid_dataprocessingconfiguration', a: '_baserecordid_value', c: 'dataprocessingconfigurations', d: 'dataprocessingconfiguration', r: true },
			baserecordid_deleteditemreference: { b: 'baserecordid_deleteditemreference', a: '_baserecordid_value', c: 'deleteditemreferences', d: 'deleteditemreference', r: true },
			baserecordid_desktopflowmodule: { b: 'baserecordid_desktopflowmodule', a: '_baserecordid_value', c: 'desktopflowmodules', d: 'desktopflowmodule', r: true },
			baserecordid_email: { b: 'baserecordid_email', a: '_baserecordid_value', c: 'emails', d: 'email', r: true },
			baserecordid_emailserverprofile: { b: 'baserecordid_emailserverprofile', a: '_baserecordid_value', c: 'emailserverprofiles', d: 'emailserverprofile', r: true },
			baserecordid_enablearchivalrequest: { b: 'baserecordid_enablearchivalrequest', a: '_baserecordid_value', c: 'enablearchivalrequests', d: 'enablearchivalrequest', r: true },
			baserecordid_entityrecordfilter: { b: 'baserecordid_entityrecordfilter', a: '_baserecordid_value', c: 'entityrecordfilters', d: 'entityrecordfilter', r: true },
			baserecordid_environmentvariabledefinition: { b: 'baserecordid_environmentvariabledefinition', a: '_baserecordid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition', r: true },
			baserecordid_environmentvariablevalue: { b: 'baserecordid_environmentvariablevalue', a: '_baserecordid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue', r: true },
			baserecordid_exportedexcel: { b: 'baserecordid_exportedexcel', a: '_baserecordid_value', c: 'exportedexcels', d: 'exportedexcel', r: true },
			baserecordid_exportsolutionupload: { b: 'baserecordid_exportsolutionupload', a: '_baserecordid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload', r: true },
			baserecordid_fax: { b: 'baserecordid_fax', a: '_baserecordid_value', c: 'faxes', d: 'fax', r: true },
			baserecordid_featurecontrolsetting: { b: 'baserecordid_featurecontrolsetting', a: '_baserecordid_value', c: 'featurecontrolsettings', d: 'featurecontrolsetting', r: true },
			baserecordid_feedback: { b: 'baserecordid_feedback', a: '_baserecordid_value', c: 'feedback', d: 'feedback', r: true },
			baserecordid_flowcredentialapplication: { b: 'baserecordid_flowcredentialapplication', a: '_baserecordid_value', c: 'flowcredentialapplications', d: 'flowcredentialapplication', r: true },
			baserecordid_flowevent: { b: 'baserecordid_flowevent', a: '_baserecordid_value', c: 'flowevents', d: 'flowevent', r: true },
			baserecordid_flowmachinegroup: { b: 'baserecordid_flowmachinegroup', a: '_baserecordid_value', c: 'flowmachinegroups', d: 'flowmachinegroup', r: true },
			baserecordid_flowmachineimage: { b: 'baserecordid_flowmachineimage', a: '_baserecordid_value', c: 'flowmachineimages', d: 'flowmachineimage', r: true },
			baserecordid_flowmachineimageversion: { b: 'baserecordid_flowmachineimageversion', a: '_baserecordid_value', c: 'flowmachineimageversions', d: 'flowmachineimageversion', r: true },
			baserecordid_flowmachinenetwork: { b: 'baserecordid_flowmachinenetwork', a: '_baserecordid_value', c: 'flowmachinenetworks', d: 'flowmachinenetwork', r: true },
			baserecordid_fxexpression: { b: 'baserecordid_fxexpression', a: '_baserecordid_value', c: 'fxexpressions', d: 'fxexpression', r: true },
			baserecordid_goal: { b: 'baserecordid_goal', a: '_baserecordid_value', c: 'goals', d: 'goal', r: true },
			baserecordid_goalrollupquery: { b: 'baserecordid_goalrollupquery', a: '_baserecordid_value', c: 'goalrollupqueries', d: 'goalrollupquery', r: true },
			baserecordid_kbarticle: { b: 'baserecordid_kbarticle', a: '_baserecordid_value', c: 'kbarticles', d: 'kbarticle', r: true },
			baserecordid_keyvaultreference: { b: 'baserecordid_keyvaultreference', a: '_baserecordid_value', c: 'keyvaultreferences', d: 'keyvaultreference', r: true },
			baserecordid_knowledgearticle: { b: 'baserecordid_knowledgearticle', a: '_baserecordid_value', c: 'knowledgearticles', d: 'knowledgearticle', r: true },
			baserecordid_knowledgebaserecord: { b: 'baserecordid_knowledgebaserecord', a: '_baserecordid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord', r: true },
			baserecordid_letter: { b: 'baserecordid_letter', a: '_baserecordid_value', c: 'letters', d: 'letter', r: true },
			baserecordid_managedidentity: { b: 'baserecordid_managedidentity', a: '_baserecordid_value', c: 'managedidentities', d: 'managedidentity', r: true },
			baserecordid_maskingrule: { b: 'baserecordid_maskingrule', a: '_baserecordid_value', c: 'maskingrules', d: 'maskingrule', r: true },
			baserecordid_msdyn_aibdataset: { b: 'baserecordid_msdyn_aibdataset', a: '_baserecordid_value', c: 'msdyn_aibdatasets', d: 'msdyn_aibdataset', r: true },
			baserecordid_msdyn_aibdatasetfile: { b: 'baserecordid_msdyn_aibdatasetfile', a: '_baserecordid_value', c: 'msdyn_aibdatasetfiles', d: 'msdyn_aibdatasetfile', r: true },
			baserecordid_msdyn_aibdatasetrecord: { b: 'baserecordid_msdyn_aibdatasetrecord', a: '_baserecordid_value', c: 'msdyn_aibdatasetrecords', d: 'msdyn_aibdatasetrecord', r: true },
			baserecordid_msdyn_aibdatasetscontainer: { b: 'baserecordid_msdyn_aibdatasetscontainer', a: '_baserecordid_value', c: 'msdyn_aibdatasetscontainers', d: 'msdyn_aibdatasetscontainer', r: true },
			baserecordid_msdyn_aibfeedbackloop: { b: 'baserecordid_msdyn_aibfeedbackloop', a: '_baserecordid_value', c: 'msdyn_aibfeedbackloops', d: 'msdyn_aibfeedbackloop', r: true },
			baserecordid_msdyn_aibfile: { b: 'baserecordid_msdyn_aibfile', a: '_baserecordid_value', c: 'msdyn_aibfiles', d: 'msdyn_aibfile', r: true },
			baserecordid_msdyn_aibfileattacheddata: { b: 'baserecordid_msdyn_aibfileattacheddata', a: '_baserecordid_value', c: 'msdyn_aibfileattacheddatas', d: 'msdyn_aibfileattacheddata', r: true },
			baserecordid_msdyn_aievent: { b: 'baserecordid_msdyn_aievent', a: '_baserecordid_value', c: 'msdyn_aievents', d: 'msdyn_aievent', r: true },
			baserecordid_msdyn_aiodimage: { b: 'baserecordid_msdyn_aiodimage', a: '_baserecordid_value', c: 'msdyn_aiodimages', d: 'msdyn_aiodimage', r: true },
			baserecordid_msdyn_aiodlabel: { b: 'baserecordid_msdyn_aiodlabel', a: '_baserecordid_value', c: 'msdyn_aiodlabels', d: 'msdyn_aiodlabel', r: true },
			baserecordid_msdyn_aiodtrainingboundingbox: { b: 'baserecordid_msdyn_aiodtrainingboundingbox', a: '_baserecordid_value', c: 'msdyn_aiodtrainingboundingboxes', d: 'msdyn_aiodtrainingboundingbox', r: true },
			baserecordid_msdyn_aiodtrainingimage: { b: 'baserecordid_msdyn_aiodtrainingimage', a: '_baserecordid_value', c: 'msdyn_aiodtrainingimages', d: 'msdyn_aiodtrainingimage', r: true },
			baserecordid_msdyn_analysiscomponent: { b: 'baserecordid_msdyn_analysiscomponent', a: '_baserecordid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent', r: true },
			baserecordid_msdyn_analysisjob: { b: 'baserecordid_msdyn_analysisjob', a: '_baserecordid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob', r: true },
			baserecordid_msdyn_analysisoverride: { b: 'baserecordid_msdyn_analysisoverride', a: '_baserecordid_value', c: 'msdyn_analysisoverrides', d: 'msdyn_analysisoverride', r: true },
			baserecordid_msdyn_analysisresult: { b: 'baserecordid_msdyn_analysisresult', a: '_baserecordid_value', c: 'msdyn_analysisresults', d: 'msdyn_analysisresult', r: true },
			baserecordid_msdyn_analysisresultdetail: { b: 'baserecordid_msdyn_analysisresultdetail', a: '_baserecordid_value', c: 'msdyn_analysisresultdetails', d: 'msdyn_analysisresultdetail', r: true },
			baserecordid_msdyn_appinsightsmetadata: { b: 'baserecordid_msdyn_appinsightsmetadata', a: '_baserecordid_value', c: 'msdyn_appinsightsmetadatas', d: 'msdyn_appinsightsmetadata', r: true },
			baserecordid_msdyn_customcontrolextendedsettings: { b: 'baserecordid_msdyn_customcontrolextendedsettings', a: '_baserecordid_value', c: 'msdyn_customcontrolextendedsettingses', d: 'msdyn_customcontrolextendedsettings', r: true },
			baserecordid_msdyn_dataflow: { b: 'baserecordid_msdyn_dataflow', a: '_baserecordid_value', c: 'msdyn_dataflows', d: 'msdyn_dataflow', r: true },
			baserecordid_msdyn_dataflowconnectionreference: { b: 'baserecordid_msdyn_dataflowconnectionreference', a: '_baserecordid_value', c: 'msdyn_dataflowconnectionreferences', d: 'msdyn_dataflowconnectionreference', r: true },
			baserecordid_msdyn_dataflowrefreshhistory: { b: 'baserecordid_msdyn_dataflowrefreshhistory', a: '_baserecordid_value', c: 'msdyn_dataflowrefreshhistories', d: 'msdyn_dataflowrefreshhistory', r: true },
			baserecordid_msdyn_dataflow_datalakefolder: { b: 'baserecordid_msdyn_dataflow_datalakefolder', a: '_baserecordid_value', c: 'msdyn_dataflow_datalakefolders', d: 'msdyn_dataflow_datalakefolder', r: true },
			baserecordid_msdyn_dmsrequest: { b: 'baserecordid_msdyn_dmsrequest', a: '_baserecordid_value', c: 'msdyn_dmsrequests', d: 'msdyn_dmsrequest', r: true },
			baserecordid_msdyn_dmsrequeststatus: { b: 'baserecordid_msdyn_dmsrequeststatus', a: '_baserecordid_value', c: 'msdyn_dmsrequeststatuses', d: 'msdyn_dmsrequeststatus', r: true },
			baserecordid_msdyn_entitylinkchatconfiguration: { b: 'baserecordid_msdyn_entitylinkchatconfiguration', a: '_baserecordid_value', c: 'msdyn_entitylinkchatconfigurations', d: 'msdyn_entitylinkchatconfiguration', r: true },
			baserecordid_msdyn_entityrefreshhistory: { b: 'baserecordid_msdyn_entityrefreshhistory', a: '_baserecordid_value', c: 'msdyn_entityrefreshhistories', d: 'msdyn_entityrefreshhistory', r: true },
			baserecordid_msdyn_favoriteknowledgearticle: { b: 'baserecordid_msdyn_favoriteknowledgearticle', a: '_baserecordid_value', c: 'msdyn_favoriteknowledgearticles', d: 'msdyn_favoriteknowledgearticle', r: true },
			baserecordid_msdyn_federatedarticle: { b: 'baserecordid_msdyn_federatedarticle', a: '_baserecordid_value', c: 'msdyn_federatedarticles', d: 'msdyn_federatedarticle', r: true },
			baserecordid_msdyn_federatedarticleincident: { b: 'baserecordid_msdyn_federatedarticleincident', a: '_baserecordid_value', c: 'msdyn_federatedarticleincidents', d: 'msdyn_federatedarticleincident', r: true },
			baserecordid_msdyn_fileupload: { b: 'baserecordid_msdyn_fileupload', a: '_baserecordid_value', c: 'msdyn_fileuploads', d: 'msdyn_fileupload', r: true },
			baserecordid_msdyn_flow_actionapprovalmodel: { b: 'baserecordid_msdyn_flow_actionapprovalmodel', a: '_baserecordid_value', c: 'msdyn_flow_actionapprovalmodels', d: 'msdyn_flow_actionapprovalmodel', r: true },
			baserecordid_msdyn_flow_approval: { b: 'baserecordid_msdyn_flow_approval', a: '_baserecordid_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval', r: true },
			baserecordid_msdyn_flow_approvalrequest: { b: 'baserecordid_msdyn_flow_approvalrequest', a: '_baserecordid_value', c: 'msdyn_flow_approvalrequests', d: 'msdyn_flow_approvalrequest', r: true },
			baserecordid_msdyn_flow_approvalresponse: { b: 'baserecordid_msdyn_flow_approvalresponse', a: '_baserecordid_value', c: 'msdyn_flow_approvalresponses', d: 'msdyn_flow_approvalresponse', r: true },
			baserecordid_msdyn_flow_approvalstep: { b: 'baserecordid_msdyn_flow_approvalstep', a: '_baserecordid_value', c: 'msdyn_flow_approvalsteps', d: 'msdyn_flow_approvalstep', r: true },
			baserecordid_msdyn_flow_awaitallactionapprovalmodel: { b: 'baserecordid_msdyn_flow_awaitallactionapprovalmodel', a: '_baserecordid_value', c: 'msdyn_flow_awaitallactionapprovalmodels', d: 'msdyn_flow_awaitallactionapprovalmodel', r: true },
			baserecordid_msdyn_flow_awaitallapprovalmodel: { b: 'baserecordid_msdyn_flow_awaitallapprovalmodel', a: '_baserecordid_value', c: 'msdyn_flow_awaitallapprovalmodels', d: 'msdyn_flow_awaitallapprovalmodel', r: true },
			baserecordid_msdyn_flow_basicapprovalmodel: { b: 'baserecordid_msdyn_flow_basicapprovalmodel', a: '_baserecordid_value', c: 'msdyn_flow_basicapprovalmodels', d: 'msdyn_flow_basicapprovalmodel', r: true },
			baserecordid_msdyn_flow_flowapproval: { b: 'baserecordid_msdyn_flow_flowapproval', a: '_baserecordid_value', c: 'msdyn_flow_flowapprovals', d: 'msdyn_flow_flowapproval', r: true },
			baserecordid_msdyn_integratedsearchprovider: { b: 'baserecordid_msdyn_integratedsearchprovider', a: '_baserecordid_value', c: 'msdyn_integratedsearchproviders', d: 'msdyn_integratedsearchprovider', r: true },
			baserecordid_msdyn_kalanguagesetting: { b: 'baserecordid_msdyn_kalanguagesetting', a: '_baserecordid_value', c: 'msdyn_kalanguagesettings', d: 'msdyn_kalanguagesetting', r: true },
			baserecordid_msdyn_kbattachment: { b: 'baserecordid_msdyn_kbattachment', a: '_baserecordid_value', c: 'msdyn_kbattachments', d: 'msdyn_kbattachment', r: true },
			baserecordid_msdyn_kmfederatedsearchconfig: { b: 'baserecordid_msdyn_kmfederatedsearchconfig', a: '_baserecordid_value', c: 'msdyn_kmfederatedsearchconfigs', d: 'msdyn_kmfederatedsearchconfig', r: true },
			baserecordid_msdyn_knowledgearticleimage: { b: 'baserecordid_msdyn_knowledgearticleimage', a: '_baserecordid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage', r: true },
			baserecordid_msdyn_knowledgearticletemplate: { b: 'baserecordid_msdyn_knowledgearticletemplate', a: '_baserecordid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate', r: true },
			baserecordid_msdyn_knowledgeconfiguration: { b: 'baserecordid_msdyn_knowledgeconfiguration', a: '_baserecordid_value', c: 'msdyn_knowledgeconfigurations', d: 'msdyn_knowledgeconfiguration', r: true },
			baserecordid_msdyn_knowledgeinteractioninsight: { b: 'baserecordid_msdyn_knowledgeinteractioninsight', a: '_baserecordid_value', c: 'msdyn_knowledgeinteractioninsights', d: 'msdyn_knowledgeinteractioninsight', r: true },
			baserecordid_msdyn_knowledgemanagementsetting: { b: 'baserecordid_msdyn_knowledgemanagementsetting', a: '_baserecordid_value', c: 'msdyn_knowledgemanagementsettings', d: 'msdyn_knowledgemanagementsetting', r: true },
			baserecordid_msdyn_knowledgepersonalfilter: { b: 'baserecordid_msdyn_knowledgepersonalfilter', a: '_baserecordid_value', c: 'msdyn_knowledgepersonalfilters', d: 'msdyn_knowledgepersonalfilter', r: true },
			baserecordid_msdyn_knowledgesearchfilter: { b: 'baserecordid_msdyn_knowledgesearchfilter', a: '_baserecordid_value', c: 'msdyn_knowledgesearchfilters', d: 'msdyn_knowledgesearchfilter', r: true },
			baserecordid_msdyn_knowledgesearchinsight: { b: 'baserecordid_msdyn_knowledgesearchinsight', a: '_baserecordid_value', c: 'msdyn_knowledgesearchinsights', d: 'msdyn_knowledgesearchinsight', r: true },
			baserecordid_msdyn_mobileapp: { b: 'baserecordid_msdyn_mobileapp', a: '_baserecordid_value', c: 'msdyn_mobileapps', d: 'msdyn_mobileapp', r: true },
			baserecordid_msdyn_modulerundetail: { b: 'baserecordid_msdyn_modulerundetail', a: '_baserecordid_value', c: 'msdyn_modulerundetails', d: 'msdyn_modulerundetail', r: true },
			baserecordid_msdyn_pmanalysishistory: { b: 'baserecordid_msdyn_pmanalysishistory', a: '_baserecordid_value', c: 'msdyn_pmanalysishistories', d: 'msdyn_pmanalysishistory', r: true },
			baserecordid_msdyn_pmbusinessruleautomationconfig: { b: 'baserecordid_msdyn_pmbusinessruleautomationconfig', a: '_baserecordid_value', c: 'msdyn_pmbusinessruleautomationconfigs', d: 'msdyn_pmbusinessruleautomationconfig', r: true },
			baserecordid_msdyn_pmcalendar: { b: 'baserecordid_msdyn_pmcalendar', a: '_baserecordid_value', c: 'msdyn_pmcalendars', d: 'msdyn_pmcalendar', r: true },
			baserecordid_msdyn_pmcalendarversion: { b: 'baserecordid_msdyn_pmcalendarversion', a: '_baserecordid_value', c: 'msdyn_pmcalendarversions', d: 'msdyn_pmcalendarversion', r: true },
			baserecordid_msdyn_pminferredtask: { b: 'baserecordid_msdyn_pminferredtask', a: '_baserecordid_value', c: 'msdyn_pminferredtasks', d: 'msdyn_pminferredtask', r: true },
			baserecordid_msdyn_pmprocessextendedmetadataversion: { b: 'baserecordid_msdyn_pmprocessextendedmetadataversion', a: '_baserecordid_value', c: 'msdyn_pmprocessextendedmetadataversions', d: 'msdyn_pmprocessextendedmetadataversion', r: true },
			baserecordid_msdyn_pmprocesstemplate: { b: 'baserecordid_msdyn_pmprocesstemplate', a: '_baserecordid_value', c: 'msdyn_pmprocesstemplates', d: 'msdyn_pmprocesstemplate', r: true },
			baserecordid_msdyn_pmprocessusersettings: { b: 'baserecordid_msdyn_pmprocessusersettings', a: '_baserecordid_value', c: 'msdyn_pmprocessusersettingses', d: 'msdyn_pmprocessusersettings', r: true },
			baserecordid_msdyn_pmprocessversion: { b: 'baserecordid_msdyn_pmprocessversion', a: '_baserecordid_value', c: 'msdyn_pmprocessversions', d: 'msdyn_pmprocessversion', r: true },
			baserecordid_msdyn_pmrecording: { b: 'baserecordid_msdyn_pmrecording', a: '_baserecordid_value', c: 'msdyn_pmrecordings', d: 'msdyn_pmrecording', r: true },
			baserecordid_msdyn_pmsimulation: { b: 'baserecordid_msdyn_pmsimulation', a: '_baserecordid_value', c: 'msdyn_pmsimulations', d: 'msdyn_pmsimulation', r: true },
			baserecordid_msdyn_pmtemplate: { b: 'baserecordid_msdyn_pmtemplate', a: '_baserecordid_value', c: 'msdyn_pmtemplates', d: 'msdyn_pmtemplate', r: true },
			baserecordid_msdyn_pmview: { b: 'baserecordid_msdyn_pmview', a: '_baserecordid_value', c: 'msdyn_pmviews', d: 'msdyn_pmview', r: true },
			baserecordid_msdyn_schedule: { b: 'baserecordid_msdyn_schedule', a: '_baserecordid_value', c: 'msdyn_schedules', d: 'msdyn_schedule', r: true },
			baserecordid_msdyn_serviceconfiguration: { b: 'baserecordid_msdyn_serviceconfiguration', a: '_baserecordid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration', r: true },
			baserecordid_msdyn_slakpi: { b: 'baserecordid_msdyn_slakpi', a: '_baserecordid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi', r: true },
			baserecordid_msdyn_solutionhealthrule: { b: 'baserecordid_msdyn_solutionhealthrule', a: '_baserecordid_value', c: 'msdyn_solutionhealthrules', d: 'msdyn_solutionhealthrule', r: true },
			baserecordid_msdyn_solutionhealthruleargument: { b: 'baserecordid_msdyn_solutionhealthruleargument', a: '_baserecordid_value', c: 'msdyn_solutionhealthrulearguments', d: 'msdyn_solutionhealthruleargument', r: true },
			baserecordid_msdyn_solutionhealthruleset: { b: 'baserecordid_msdyn_solutionhealthruleset', a: '_baserecordid_value', c: 'msdyn_solutionhealthrulesets', d: 'msdyn_solutionhealthruleset', r: true },
			baserecordid_msdyn_virtualtablecolumncandidate: { b: 'baserecordid_msdyn_virtualtablecolumncandidate', a: '_baserecordid_value', c: 'msdyn_virtualtablecolumncandidates', d: 'msdyn_virtualtablecolumncandidate', r: true },
			baserecordid_mspcat_catalogsubmissionfiles: { b: 'baserecordid_mspcat_catalogsubmissionfiles', a: '_baserecordid_value', c: 'mspcat_catalogsubmissionfileses', d: 'mspcat_catalogsubmissionfiles', r: true },
			baserecordid_mspcat_packagestore: { b: 'baserecordid_mspcat_packagestore', a: '_baserecordid_value', c: 'mspcat_packagestores', d: 'mspcat_packagestore', r: true },
			baserecordid_organizationdatasyncfnostate: { b: 'baserecordid_organizationdatasyncfnostate', a: '_baserecordid_value', c: 'organizationdatasyncfnostates', d: 'organizationdatasyncfnostate', r: true },
			baserecordid_organizationdatasyncstate: { b: 'baserecordid_organizationdatasyncstate', a: '_baserecordid_value', c: 'organizationdatasyncstates', d: 'organizationdatasyncstate', r: true },
			baserecordid_organizationdatasyncsubscription: { b: 'baserecordid_organizationdatasyncsubscription', a: '_baserecordid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription', r: true },
			baserecordid_organizationdatasyncsubscriptionentity: { b: 'baserecordid_organizationdatasyncsubscriptionentity', a: '_baserecordid_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity', r: true },
			baserecordid_organizationdatasyncsubscriptionfnotable: { b: 'baserecordid_organizationdatasyncsubscriptionfnotable', a: '_baserecordid_value', c: 'organizationdatasyncsubscriptionfnotables', d: 'organizationdatasyncsubscriptionfnotable', r: true },
			baserecordid_package: { b: 'baserecordid_package', a: '_baserecordid_value', c: 'packages', d: 'package', r: true },
			baserecordid_packagehistory: { b: 'baserecordid_packagehistory', a: '_baserecordid_value', c: 'packagehistories', d: 'packagehistory', r: true },
			baserecordid_phonecall: { b: 'baserecordid_phonecall', a: '_baserecordid_value', c: 'phonecalls', d: 'phonecall', r: true },
			baserecordid_powerbidataset: { b: 'baserecordid_powerbidataset', a: '_baserecordid_value', c: 'powerbidatasets', d: 'powerbidataset', r: true },
			baserecordid_powerbidatasetapdx: { b: 'baserecordid_powerbidatasetapdx', a: '_baserecordid_value', c: 'powerbidatasetapdxes', d: 'powerbidatasetapdx', r: true },
			baserecordid_powerbimashupparameter: { b: 'baserecordid_powerbimashupparameter', a: '_baserecordid_value', c: 'powerbimashupparameters', d: 'powerbimashupparameter', r: true },
			baserecordid_powerbireport: { b: 'baserecordid_powerbireport', a: '_baserecordid_value', c: 'powerbireports', d: 'powerbireport', r: true },
			baserecordid_powerbireportapdx: { b: 'baserecordid_powerbireportapdx', a: '_baserecordid_value', c: 'powerbireportapdxes', d: 'powerbireportapdx', r: true },
			baserecordid_powerfxrule: { b: 'baserecordid_powerfxrule', a: '_baserecordid_value', c: 'powerfxrules', d: 'powerfxrule', r: true },
			baserecordid_powerpagesscanreport: { b: 'baserecordid_powerpagesscanreport', a: '_baserecordid_value', c: 'powerpagesscanreports', d: 'powerpagesscanreport', r: true },
			baserecordid_privilegesremovalsetting: { b: 'baserecordid_privilegesremovalsetting', a: '_baserecordid_value', c: 'privilegesremovalsettings', d: 'privilegesremovalsetting', r: true },
			baserecordid_publisher: { b: 'baserecordid_publisher', a: '_baserecordid_value', c: 'publishers', d: 'publisher', r: true },
			baserecordid_queue: { b: 'baserecordid_queue', a: '_baserecordid_value', c: 'queues', d: 'queue', r: true },
			baserecordid_reconciliationinfo: { b: 'baserecordid_reconciliationinfo', a: '_baserecordid_value', c: 'reconciliationinfos', d: 'reconciliationinfo', r: true },
			baserecordid_recordfilter: { b: 'baserecordid_recordfilter', a: '_baserecordid_value', c: 'recordfilters', d: 'recordfilter', r: true },
			baserecordid_recurringappointmentmaster: { b: 'baserecordid_recurringappointmentmaster', a: '_baserecordid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster', r: true },
			baserecordid_reportparameter: { b: 'baserecordid_reportparameter', a: '_baserecordid_value', c: 'reportparameters', d: 'reportparameter', r: true },
			baserecordid_retaineddataexcel: { b: 'baserecordid_retaineddataexcel', a: '_baserecordid_value', c: 'retaineddataexcels', d: 'retaineddataexcel', r: true },
			baserecordid_retentioncleanupinfo: { b: 'baserecordid_retentioncleanupinfo', a: '_baserecordid_value', c: 'retentioncleanupinfos', d: 'retentioncleanupinfo', r: true },
			baserecordid_retentioncleanupoperation: { b: 'baserecordid_retentioncleanupoperation', a: '_baserecordid_value', c: 'retentioncleanupoperations', d: 'retentioncleanupoperation', r: true },
			baserecordid_retentionconfig: { b: 'baserecordid_retentionconfig', a: '_baserecordid_value', c: 'retentionconfigs', d: 'retentionconfig', r: true },
			baserecordid_retentionfailuredetail: { b: 'baserecordid_retentionfailuredetail', a: '_baserecordid_value', c: 'retentionfailuredetails', d: 'retentionfailuredetail', r: true },
			baserecordid_retentionoperation: { b: 'baserecordid_retentionoperation', a: '_baserecordid_value', c: 'retentionoperations', d: 'retentionoperation', r: true },
			baserecordid_revokeinheritedaccessrecordstracker: { b: 'baserecordid_revokeinheritedaccessrecordstracker', a: '_baserecordid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker', r: true },
			baserecordid_roleeditorlayout: { b: 'baserecordid_roleeditorlayout', a: '_baserecordid_value', c: 'roleeditorlayouts', d: 'roleeditorlayout', r: true },
			baserecordid_searchattributesettings: { b: 'baserecordid_searchattributesettings', a: '_baserecordid_value', c: 'searchattributesettingses', d: 'searchattributesettings', r: true },
			baserecordid_searchcustomanalyzer: { b: 'baserecordid_searchcustomanalyzer', a: '_baserecordid_value', c: 'searchcustomanalyzers', d: 'searchcustomanalyzer', r: true },
			baserecordid_searchrelationshipsettings: { b: 'baserecordid_searchrelationshipsettings', a: '_baserecordid_value', c: 'searchrelationshipsettingses', d: 'searchrelationshipsettings', r: true },
			baserecordid_serviceplan: { b: 'baserecordid_serviceplan', a: '_baserecordid_value', c: 'serviceplans', d: 'serviceplan', r: true },
			baserecordid_serviceplancustomcontrol: { b: 'baserecordid_serviceplancustomcontrol', a: '_baserecordid_value', c: '', d: 'serviceplancustomcontrol', r: true },
			baserecordid_serviceplanmapping: { b: 'baserecordid_serviceplanmapping', a: '_baserecordid_value', c: 'serviceplanmappings', d: 'serviceplanmapping', r: true },
			baserecordid_sharedlinksetting: { b: 'baserecordid_sharedlinksetting', a: '_baserecordid_value', c: 'sharedlinksettings', d: 'sharedlinksetting', r: true },
			baserecordid_sharepointdocumentlocation: { b: 'baserecordid_sharepointdocumentlocation', a: '_baserecordid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation', r: true },
			baserecordid_sharepointsite: { b: 'baserecordid_sharepointsite', a: '_baserecordid_value', c: 'sharepointsites', d: 'sharepointsite', r: true },
			baserecordid_socialactivity: { b: 'baserecordid_socialactivity', a: '_baserecordid_value', c: 'socialactivities', d: 'socialactivity', r: true },
			baserecordid_socialprofile: { b: 'baserecordid_socialprofile', a: '_baserecordid_value', c: 'socialprofiles', d: 'socialprofile', r: true },
			baserecordid_solutioncomponentattributeconfiguration: { b: 'baserecordid_solutioncomponentattributeconfiguration', a: '_baserecordid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration', r: true },
			baserecordid_solutioncomponentbatchconfiguration: { b: 'baserecordid_solutioncomponentbatchconfiguration', a: '_baserecordid_value', c: 'solutioncomponentbatchconfigurations', d: 'solutioncomponentbatchconfiguration', r: true },
			baserecordid_solutioncomponentconfiguration: { b: 'baserecordid_solutioncomponentconfiguration', a: '_baserecordid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration', r: true },
			baserecordid_solutioncomponentrelationshipconfiguration: { b: 'baserecordid_solutioncomponentrelationshipconfiguration', a: '_baserecordid_value', c: 'solutioncomponentrelationshipconfigurations', d: 'solutioncomponentrelationshipconfiguration', r: true },
			baserecordid_stagesolutionupload: { b: 'baserecordid_stagesolutionupload', a: '_baserecordid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload', r: true },
			baserecordid_supportusertable: { b: 'baserecordid_supportusertable', a: '_baserecordid_value', c: 'supportusertables', d: 'supportusertable', r: true },
			baserecordid_synapsedatabase: { b: 'baserecordid_synapsedatabase', a: '_baserecordid_value', c: 'synapsedatabases', d: 'synapsedatabase', r: true },
			baserecordid_synapselinkexternaltablestate: { b: 'baserecordid_synapselinkexternaltablestate', a: '_baserecordid_value', c: 'synapselinkexternaltablestates', d: 'synapselinkexternaltablestate', r: true },
			baserecordid_synapselinkprofile: { b: 'baserecordid_synapselinkprofile', a: '_baserecordid_value', c: 'synapselinkprofiles', d: 'synapselinkprofile', r: true },
			baserecordid_synapselinkprofileentity: { b: 'baserecordid_synapselinkprofileentity', a: '_baserecordid_value', c: 'synapselinkprofileentities', d: 'synapselinkprofileentity', r: true },
			baserecordid_synapselinkprofileentitystate: { b: 'baserecordid_synapselinkprofileentitystate', a: '_baserecordid_value', c: 'synapselinkprofileentitystates', d: 'synapselinkprofileentitystate', r: true },
			baserecordid_synapselinkschedule: { b: 'baserecordid_synapselinkschedule', a: '_baserecordid_value', c: 'synapselinkschedules', d: 'synapselinkschedule', r: true },
			baserecordid_systemuser: { b: 'baserecordid_systemuser', a: '_baserecordid_value', c: 'systemusers', d: 'systemuser', r: true },
			baserecordid_task: { b: 'baserecordid_task', a: '_baserecordid_value', c: 'tasks', d: 'task', r: true },
			baserecordid_tdsmetadata: { b: 'baserecordid_tdsmetadata', a: '_baserecordid_value', c: 'tdsmetadatas', d: 'tdsmetadata', r: true },
			baserecordid_team: { b: 'baserecordid_team', a: '_baserecordid_value', c: 'teams', d: 'team', r: true },
			baserecordid_transactioncurrency: { b: 'baserecordid_transactioncurrency', a: '_baserecordid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			baserecordid_userrating: { b: 'baserecordid_userrating', a: '_baserecordid_value', c: 'userratings', d: 'userrating', r: true },
			baserecordid_workqueue: { b: 'baserecordid_workqueue', a: '_baserecordid_value', c: 'workqueues', d: 'workqueue', r: true },
			baserecordid_workqueueitem: { b: 'baserecordid_workqueueitem', a: '_baserecordid_value', c: 'workqueueitems', d: 'workqueueitem', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			DuplicateId: { a: 'duplicateid' },
			duplicaterecordid_account: { b: 'duplicaterecordid_account', a: '_duplicaterecordid_value', c: 'accounts', d: 'account', r: true },
			duplicaterecordid_activityfileattachment: { b: 'duplicaterecordid_activityfileattachment', a: '_duplicaterecordid_value', c: 'activityfileattachments', d: 'activityfileattachment', r: true },
			duplicaterecordid_adx_invitation: { b: 'duplicaterecordid_adx_invitation', a: '_duplicaterecordid_value', c: 'adx_invitations', d: 'adx_invitation', r: true },
			duplicaterecordid_adx_inviteredemption: { b: 'duplicaterecordid_adx_inviteredemption', a: '_duplicaterecordid_value', c: 'adx_inviteredemptions', d: 'adx_inviteredemption', r: true },
			duplicaterecordid_aicopilot: { b: 'duplicaterecordid_aicopilot', a: '_duplicaterecordid_value', c: 'aicopilots', d: 'aicopilot', r: true },
			duplicaterecordid_aipluginauth: { b: 'duplicaterecordid_aipluginauth', a: '_duplicaterecordid_value', c: 'aipluginauths', d: 'aipluginauth', r: true },
			duplicaterecordid_aipluginoperationparameter: { b: 'duplicaterecordid_aipluginoperationparameter', a: '_duplicaterecordid_value', c: 'aipluginoperationparameters', d: 'aipluginoperationparameter', r: true },
			duplicaterecordid_aipluginoperationresponsetemplate: { b: 'duplicaterecordid_aipluginoperationresponsetemplate', a: '_duplicaterecordid_value', c: 'aipluginoperationresponsetemplates', d: 'aipluginoperationresponsetemplate', r: true },
			duplicaterecordid_aiplugintitle: { b: 'duplicaterecordid_aiplugintitle', a: '_duplicaterecordid_value', c: 'aiplugintitles', d: 'aiplugintitle', r: true },
			duplicaterecordid_aipluginusersetting: { b: 'duplicaterecordid_aipluginusersetting', a: '_duplicaterecordid_value', c: 'aipluginusersettings', d: 'aipluginusersetting', r: true },
			duplicaterecordid_applicationuser: { b: 'duplicaterecordid_applicationuser', a: '_duplicaterecordid_value', c: 'applicationusers', d: 'applicationuser', r: true },
			duplicaterecordid_appointment: { b: 'duplicaterecordid_appointment', a: '_duplicaterecordid_value', c: 'appointments', d: 'appointment', r: true },
			duplicaterecordid_archivecleanupinfo: { b: 'duplicaterecordid_archivecleanupinfo', a: '_duplicaterecordid_value', c: 'archivecleanupinfos', d: 'archivecleanupinfo', r: true },
			duplicaterecordid_archivecleanupoperation: { b: 'duplicaterecordid_archivecleanupoperation', a: '_duplicaterecordid_value', c: 'archivecleanupoperations', d: 'archivecleanupoperation', r: true },
			duplicaterecordid_bulkarchiveconfig: { b: 'duplicaterecordid_bulkarchiveconfig', a: '_duplicaterecordid_value', c: 'bulkarchiveconfigs', d: 'bulkarchiveconfig', r: true },
			duplicaterecordid_bulkarchivefailuredetail: { b: 'duplicaterecordid_bulkarchivefailuredetail', a: '_duplicaterecordid_value', c: 'bulkarchivefailuredetails', d: 'bulkarchivefailuredetail', r: true },
			duplicaterecordid_bulkarchiveoperation: { b: 'duplicaterecordid_bulkarchiveoperation', a: '_duplicaterecordid_value', c: 'bulkarchiveoperations', d: 'bulkarchiveoperation', r: true },
			duplicaterecordid_canvasappextendedmetadata: { b: 'duplicaterecordid_canvasappextendedmetadata', a: '_duplicaterecordid_value', c: 'canvasappextendedmetadatas', d: 'canvasappextendedmetadata', r: true },
			duplicaterecordid_card: { b: 'duplicaterecordid_card', a: '_duplicaterecordid_value', c: 'cards', d: 'card', r: true },
			duplicaterecordid_cascadegrantrevokeaccessrecordstracker: { b: 'duplicaterecordid_cascadegrantrevokeaccessrecordstracker', a: '_duplicaterecordid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker', r: true },
			duplicaterecordid_cascadegrantrevokeaccessversiontracker: { b: 'duplicaterecordid_cascadegrantrevokeaccessversiontracker', a: '_duplicaterecordid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker', r: true },
			duplicaterecordid_catalogassignment: { b: 'duplicaterecordid_catalogassignment', a: '_duplicaterecordid_value', c: 'catalogassignments', d: 'catalogassignment', r: true },
			channelaccessprofile_duplicatematchingrecord: { b: 'channelaccessprofile_duplicatematchingrecord', a: '_duplicaterecordid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile', r: true },
			duplicaterecordid_connectioninstance: { b: 'duplicaterecordid_connectioninstance', a: '_duplicaterecordid_value', c: 'connectioninstances', d: 'connectioninstance', r: true },
			duplicaterecordid_connector: { b: 'duplicaterecordid_connector', a: '_duplicaterecordid_value', c: 'connectors', d: 'connector', r: true },
			duplicaterecordid_contact: { b: 'duplicaterecordid_contact', a: '_duplicaterecordid_value', c: 'contacts', d: 'contact', r: true },
			duplicaterecordid_conversationtranscript: { b: 'duplicaterecordid_conversationtranscript', a: '_duplicaterecordid_value', c: 'conversationtranscripts', d: 'conversationtranscript', r: true },
			duplicaterecordid_credential: { b: 'duplicaterecordid_credential', a: '_duplicaterecordid_value', c: 'credentials', d: 'credential', r: true },
			duplicaterecordid_datalakefolder: { b: 'duplicaterecordid_datalakefolder', a: '_duplicaterecordid_value', c: 'datalakefolders', d: 'datalakefolder', r: true },
			duplicaterecordid_datalakefolderpermission: { b: 'duplicaterecordid_datalakefolderpermission', a: '_duplicaterecordid_value', c: 'datalakefolderpermissions', d: 'datalakefolderpermission', r: true },
			duplicaterecordid_datalakeworkspace: { b: 'duplicaterecordid_datalakeworkspace', a: '_duplicaterecordid_value', c: 'datalakeworkspaces', d: 'datalakeworkspace', r: true },
			duplicaterecordid_datalakeworkspacepermission: { b: 'duplicaterecordid_datalakeworkspacepermission', a: '_duplicaterecordid_value', c: 'datalakeworkspacepermissions', d: 'datalakeworkspacepermission', r: true },
			duplicaterecordid_dataprocessingconfiguration: { b: 'duplicaterecordid_dataprocessingconfiguration', a: '_duplicaterecordid_value', c: 'dataprocessingconfigurations', d: 'dataprocessingconfiguration', r: true },
			duplicaterecordid_deleteditemreference: { b: 'duplicaterecordid_deleteditemreference', a: '_duplicaterecordid_value', c: 'deleteditemreferences', d: 'deleteditemreference', r: true },
			duplicaterecordid_desktopflowmodule: { b: 'duplicaterecordid_desktopflowmodule', a: '_duplicaterecordid_value', c: 'desktopflowmodules', d: 'desktopflowmodule', r: true },
			duplicaterecordid_email: { b: 'duplicaterecordid_email', a: '_duplicaterecordid_value', c: 'emails', d: 'email', r: true },
			duplicaterecordid_emailserverprofile: { b: 'duplicaterecordid_emailserverprofile', a: '_duplicaterecordid_value', c: 'emailserverprofiles', d: 'emailserverprofile', r: true },
			duplicaterecordid_enablearchivalrequest: { b: 'duplicaterecordid_enablearchivalrequest', a: '_duplicaterecordid_value', c: 'enablearchivalrequests', d: 'enablearchivalrequest', r: true },
			duplicaterecordid_entityrecordfilter: { b: 'duplicaterecordid_entityrecordfilter', a: '_duplicaterecordid_value', c: 'entityrecordfilters', d: 'entityrecordfilter', r: true },
			duplicaterecordid_environmentvariabledefinition: { b: 'duplicaterecordid_environmentvariabledefinition', a: '_duplicaterecordid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition', r: true },
			duplicaterecordid_environmentvariablevalue: { b: 'duplicaterecordid_environmentvariablevalue', a: '_duplicaterecordid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue', r: true },
			duplicaterecordid_exportedexcel: { b: 'duplicaterecordid_exportedexcel', a: '_duplicaterecordid_value', c: 'exportedexcels', d: 'exportedexcel', r: true },
			duplicaterecordid_exportsolutionupload: { b: 'duplicaterecordid_exportsolutionupload', a: '_duplicaterecordid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload', r: true },
			duplicaterecordid_fax: { b: 'duplicaterecordid_fax', a: '_duplicaterecordid_value', c: 'faxes', d: 'fax', r: true },
			duplicaterecordid_featurecontrolsetting: { b: 'duplicaterecordid_featurecontrolsetting', a: '_duplicaterecordid_value', c: 'featurecontrolsettings', d: 'featurecontrolsetting', r: true },
			duplicaterecordid_feedback: { b: 'duplicaterecordid_feedback', a: '_duplicaterecordid_value', c: 'feedback', d: 'feedback', r: true },
			duplicaterecordid_flowcredentialapplication: { b: 'duplicaterecordid_flowcredentialapplication', a: '_duplicaterecordid_value', c: 'flowcredentialapplications', d: 'flowcredentialapplication', r: true },
			duplicaterecordid_flowevent: { b: 'duplicaterecordid_flowevent', a: '_duplicaterecordid_value', c: 'flowevents', d: 'flowevent', r: true },
			duplicaterecordid_flowmachinegroup: { b: 'duplicaterecordid_flowmachinegroup', a: '_duplicaterecordid_value', c: 'flowmachinegroups', d: 'flowmachinegroup', r: true },
			duplicaterecordid_flowmachineimage: { b: 'duplicaterecordid_flowmachineimage', a: '_duplicaterecordid_value', c: 'flowmachineimages', d: 'flowmachineimage', r: true },
			duplicaterecordid_flowmachineimageversion: { b: 'duplicaterecordid_flowmachineimageversion', a: '_duplicaterecordid_value', c: 'flowmachineimageversions', d: 'flowmachineimageversion', r: true },
			duplicaterecordid_flowmachinenetwork: { b: 'duplicaterecordid_flowmachinenetwork', a: '_duplicaterecordid_value', c: 'flowmachinenetworks', d: 'flowmachinenetwork', r: true },
			duplicaterecordid_fxexpression: { b: 'duplicaterecordid_fxexpression', a: '_duplicaterecordid_value', c: 'fxexpressions', d: 'fxexpression', r: true },
			duplicaterecordid_goal: { b: 'duplicaterecordid_goal', a: '_duplicaterecordid_value', c: 'goals', d: 'goal', r: true },
			duplicaterecordid_goalrollupquery: { b: 'duplicaterecordid_goalrollupquery', a: '_duplicaterecordid_value', c: 'goalrollupqueries', d: 'goalrollupquery', r: true },
			duplicaterecordid_kbarticle: { b: 'duplicaterecordid_kbarticle', a: '_duplicaterecordid_value', c: 'kbarticles', d: 'kbarticle', r: true },
			duplicaterecordid_keyvaultreference: { b: 'duplicaterecordid_keyvaultreference', a: '_duplicaterecordid_value', c: 'keyvaultreferences', d: 'keyvaultreference', r: true },
			duplicaterecordid_knowledgearticle: { b: 'duplicaterecordid_knowledgearticle', a: '_duplicaterecordid_value', c: 'knowledgearticles', d: 'knowledgearticle', r: true },
			duplicaterecordid_knowledgebaserecord: { b: 'duplicaterecordid_knowledgebaserecord', a: '_duplicaterecordid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord', r: true },
			duplicaterecordid_letter: { b: 'duplicaterecordid_letter', a: '_duplicaterecordid_value', c: 'letters', d: 'letter', r: true },
			duplicaterecordid_managedidentity: { b: 'duplicaterecordid_managedidentity', a: '_duplicaterecordid_value', c: 'managedidentities', d: 'managedidentity', r: true },
			duplicaterecordid_maskingrule: { b: 'duplicaterecordid_maskingrule', a: '_duplicaterecordid_value', c: 'maskingrules', d: 'maskingrule', r: true },
			duplicaterecordid_msdyn_aibdataset: { b: 'duplicaterecordid_msdyn_aibdataset', a: '_duplicaterecordid_value', c: 'msdyn_aibdatasets', d: 'msdyn_aibdataset', r: true },
			duplicaterecordid_msdyn_aibdatasetfile: { b: 'duplicaterecordid_msdyn_aibdatasetfile', a: '_duplicaterecordid_value', c: 'msdyn_aibdatasetfiles', d: 'msdyn_aibdatasetfile', r: true },
			duplicaterecordid_msdyn_aibdatasetrecord: { b: 'duplicaterecordid_msdyn_aibdatasetrecord', a: '_duplicaterecordid_value', c: 'msdyn_aibdatasetrecords', d: 'msdyn_aibdatasetrecord', r: true },
			duplicaterecordid_msdyn_aibdatasetscontainer: { b: 'duplicaterecordid_msdyn_aibdatasetscontainer', a: '_duplicaterecordid_value', c: 'msdyn_aibdatasetscontainers', d: 'msdyn_aibdatasetscontainer', r: true },
			duplicaterecordid_msdyn_aibfeedbackloop: { b: 'duplicaterecordid_msdyn_aibfeedbackloop', a: '_duplicaterecordid_value', c: 'msdyn_aibfeedbackloops', d: 'msdyn_aibfeedbackloop', r: true },
			duplicaterecordid_msdyn_aibfile: { b: 'duplicaterecordid_msdyn_aibfile', a: '_duplicaterecordid_value', c: 'msdyn_aibfiles', d: 'msdyn_aibfile', r: true },
			duplicaterecordid_msdyn_aibfileattacheddata: { b: 'duplicaterecordid_msdyn_aibfileattacheddata', a: '_duplicaterecordid_value', c: 'msdyn_aibfileattacheddatas', d: 'msdyn_aibfileattacheddata', r: true },
			duplicaterecordid_msdyn_aievent: { b: 'duplicaterecordid_msdyn_aievent', a: '_duplicaterecordid_value', c: 'msdyn_aievents', d: 'msdyn_aievent', r: true },
			duplicaterecordid_msdyn_aiodimage: { b: 'duplicaterecordid_msdyn_aiodimage', a: '_duplicaterecordid_value', c: 'msdyn_aiodimages', d: 'msdyn_aiodimage', r: true },
			duplicaterecordid_msdyn_aiodlabel: { b: 'duplicaterecordid_msdyn_aiodlabel', a: '_duplicaterecordid_value', c: 'msdyn_aiodlabels', d: 'msdyn_aiodlabel', r: true },
			duplicaterecordid_msdyn_aiodtrainingboundingbox: { b: 'duplicaterecordid_msdyn_aiodtrainingboundingbox', a: '_duplicaterecordid_value', c: 'msdyn_aiodtrainingboundingboxes', d: 'msdyn_aiodtrainingboundingbox', r: true },
			duplicaterecordid_msdyn_aiodtrainingimage: { b: 'duplicaterecordid_msdyn_aiodtrainingimage', a: '_duplicaterecordid_value', c: 'msdyn_aiodtrainingimages', d: 'msdyn_aiodtrainingimage', r: true },
			duplicaterecordid_msdyn_analysiscomponent: { b: 'duplicaterecordid_msdyn_analysiscomponent', a: '_duplicaterecordid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent', r: true },
			duplicaterecordid_msdyn_analysisjob: { b: 'duplicaterecordid_msdyn_analysisjob', a: '_duplicaterecordid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob', r: true },
			duplicaterecordid_msdyn_analysisoverride: { b: 'duplicaterecordid_msdyn_analysisoverride', a: '_duplicaterecordid_value', c: 'msdyn_analysisoverrides', d: 'msdyn_analysisoverride', r: true },
			duplicaterecordid_msdyn_analysisresult: { b: 'duplicaterecordid_msdyn_analysisresult', a: '_duplicaterecordid_value', c: 'msdyn_analysisresults', d: 'msdyn_analysisresult', r: true },
			duplicaterecordid_msdyn_analysisresultdetail: { b: 'duplicaterecordid_msdyn_analysisresultdetail', a: '_duplicaterecordid_value', c: 'msdyn_analysisresultdetails', d: 'msdyn_analysisresultdetail', r: true },
			duplicaterecordid_msdyn_appinsightsmetadata: { b: 'duplicaterecordid_msdyn_appinsightsmetadata', a: '_duplicaterecordid_value', c: 'msdyn_appinsightsmetadatas', d: 'msdyn_appinsightsmetadata', r: true },
			duplicaterecordid_msdyn_customcontrolextendedsettings: { b: 'duplicaterecordid_msdyn_customcontrolextendedsettings', a: '_duplicaterecordid_value', c: 'msdyn_customcontrolextendedsettingses', d: 'msdyn_customcontrolextendedsettings', r: true },
			duplicaterecordid_msdyn_dataflow: { b: 'duplicaterecordid_msdyn_dataflow', a: '_duplicaterecordid_value', c: 'msdyn_dataflows', d: 'msdyn_dataflow', r: true },
			duplicaterecordid_msdyn_dataflowconnectionreference: { b: 'duplicaterecordid_msdyn_dataflowconnectionreference', a: '_duplicaterecordid_value', c: 'msdyn_dataflowconnectionreferences', d: 'msdyn_dataflowconnectionreference', r: true },
			duplicaterecordid_msdyn_dataflowrefreshhistory: { b: 'duplicaterecordid_msdyn_dataflowrefreshhistory', a: '_duplicaterecordid_value', c: 'msdyn_dataflowrefreshhistories', d: 'msdyn_dataflowrefreshhistory', r: true },
			duplicaterecordid_msdyn_dataflow_datalakefolder: { b: 'duplicaterecordid_msdyn_dataflow_datalakefolder', a: '_duplicaterecordid_value', c: 'msdyn_dataflow_datalakefolders', d: 'msdyn_dataflow_datalakefolder', r: true },
			duplicaterecordid_msdyn_dmsrequest: { b: 'duplicaterecordid_msdyn_dmsrequest', a: '_duplicaterecordid_value', c: 'msdyn_dmsrequests', d: 'msdyn_dmsrequest', r: true },
			duplicaterecordid_msdyn_dmsrequeststatus: { b: 'duplicaterecordid_msdyn_dmsrequeststatus', a: '_duplicaterecordid_value', c: 'msdyn_dmsrequeststatuses', d: 'msdyn_dmsrequeststatus', r: true },
			duplicaterecordid_msdyn_entitylinkchatconfiguration: { b: 'duplicaterecordid_msdyn_entitylinkchatconfiguration', a: '_duplicaterecordid_value', c: 'msdyn_entitylinkchatconfigurations', d: 'msdyn_entitylinkchatconfiguration', r: true },
			duplicaterecordid_msdyn_entityrefreshhistory: { b: 'duplicaterecordid_msdyn_entityrefreshhistory', a: '_duplicaterecordid_value', c: 'msdyn_entityrefreshhistories', d: 'msdyn_entityrefreshhistory', r: true },
			duplicaterecordid_msdyn_favoriteknowledgearticle: { b: 'duplicaterecordid_msdyn_favoriteknowledgearticle', a: '_duplicaterecordid_value', c: 'msdyn_favoriteknowledgearticles', d: 'msdyn_favoriteknowledgearticle', r: true },
			duplicaterecordid_msdyn_federatedarticle: { b: 'duplicaterecordid_msdyn_federatedarticle', a: '_duplicaterecordid_value', c: 'msdyn_federatedarticles', d: 'msdyn_federatedarticle', r: true },
			duplicaterecordid_msdyn_federatedarticleincident: { b: 'duplicaterecordid_msdyn_federatedarticleincident', a: '_duplicaterecordid_value', c: 'msdyn_federatedarticleincidents', d: 'msdyn_federatedarticleincident', r: true },
			duplicaterecordid_msdyn_fileupload: { b: 'duplicaterecordid_msdyn_fileupload', a: '_duplicaterecordid_value', c: 'msdyn_fileuploads', d: 'msdyn_fileupload', r: true },
			duplicaterecordid_msdyn_flow_actionapprovalmodel: { b: 'duplicaterecordid_msdyn_flow_actionapprovalmodel', a: '_duplicaterecordid_value', c: 'msdyn_flow_actionapprovalmodels', d: 'msdyn_flow_actionapprovalmodel', r: true },
			duplicaterecordid_msdyn_flow_approval: { b: 'duplicaterecordid_msdyn_flow_approval', a: '_duplicaterecordid_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval', r: true },
			duplicaterecordid_msdyn_flow_approvalrequest: { b: 'duplicaterecordid_msdyn_flow_approvalrequest', a: '_duplicaterecordid_value', c: 'msdyn_flow_approvalrequests', d: 'msdyn_flow_approvalrequest', r: true },
			duplicaterecordid_msdyn_flow_approvalresponse: { b: 'duplicaterecordid_msdyn_flow_approvalresponse', a: '_duplicaterecordid_value', c: 'msdyn_flow_approvalresponses', d: 'msdyn_flow_approvalresponse', r: true },
			duplicaterecordid_msdyn_flow_approvalstep: { b: 'duplicaterecordid_msdyn_flow_approvalstep', a: '_duplicaterecordid_value', c: 'msdyn_flow_approvalsteps', d: 'msdyn_flow_approvalstep', r: true },
			duplicaterecordid_msdyn_flow_awaitallactionapprovalmodel: { b: 'duplicaterecordid_msdyn_flow_awaitallactionapprovalmodel', a: '_duplicaterecordid_value', c: 'msdyn_flow_awaitallactionapprovalmodels', d: 'msdyn_flow_awaitallactionapprovalmodel', r: true },
			duplicaterecordid_msdyn_flow_awaitallapprovalmodel: { b: 'duplicaterecordid_msdyn_flow_awaitallapprovalmodel', a: '_duplicaterecordid_value', c: 'msdyn_flow_awaitallapprovalmodels', d: 'msdyn_flow_awaitallapprovalmodel', r: true },
			duplicaterecordid_msdyn_flow_basicapprovalmodel: { b: 'duplicaterecordid_msdyn_flow_basicapprovalmodel', a: '_duplicaterecordid_value', c: 'msdyn_flow_basicapprovalmodels', d: 'msdyn_flow_basicapprovalmodel', r: true },
			duplicaterecordid_msdyn_flow_flowapproval: { b: 'duplicaterecordid_msdyn_flow_flowapproval', a: '_duplicaterecordid_value', c: 'msdyn_flow_flowapprovals', d: 'msdyn_flow_flowapproval', r: true },
			duplicaterecordid_msdyn_integratedsearchprovider: { b: 'duplicaterecordid_msdyn_integratedsearchprovider', a: '_duplicaterecordid_value', c: 'msdyn_integratedsearchproviders', d: 'msdyn_integratedsearchprovider', r: true },
			duplicaterecordid_msdyn_kalanguagesetting: { b: 'duplicaterecordid_msdyn_kalanguagesetting', a: '_duplicaterecordid_value', c: 'msdyn_kalanguagesettings', d: 'msdyn_kalanguagesetting', r: true },
			duplicaterecordid_msdyn_kbattachment: { b: 'duplicaterecordid_msdyn_kbattachment', a: '_duplicaterecordid_value', c: 'msdyn_kbattachments', d: 'msdyn_kbattachment', r: true },
			duplicaterecordid_msdyn_kmfederatedsearchconfig: { b: 'duplicaterecordid_msdyn_kmfederatedsearchconfig', a: '_duplicaterecordid_value', c: 'msdyn_kmfederatedsearchconfigs', d: 'msdyn_kmfederatedsearchconfig', r: true },
			duplicaterecordid_msdyn_knowledgearticleimage: { b: 'duplicaterecordid_msdyn_knowledgearticleimage', a: '_duplicaterecordid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage', r: true },
			duplicaterecordid_msdyn_knowledgearticletemplate: { b: 'duplicaterecordid_msdyn_knowledgearticletemplate', a: '_duplicaterecordid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate', r: true },
			duplicaterecordid_msdyn_knowledgeconfiguration: { b: 'duplicaterecordid_msdyn_knowledgeconfiguration', a: '_duplicaterecordid_value', c: 'msdyn_knowledgeconfigurations', d: 'msdyn_knowledgeconfiguration', r: true },
			duplicaterecordid_msdyn_knowledgeinteractioninsight: { b: 'duplicaterecordid_msdyn_knowledgeinteractioninsight', a: '_duplicaterecordid_value', c: 'msdyn_knowledgeinteractioninsights', d: 'msdyn_knowledgeinteractioninsight', r: true },
			duplicaterecordid_msdyn_knowledgemanagementsetting: { b: 'duplicaterecordid_msdyn_knowledgemanagementsetting', a: '_duplicaterecordid_value', c: 'msdyn_knowledgemanagementsettings', d: 'msdyn_knowledgemanagementsetting', r: true },
			duplicaterecordid_msdyn_knowledgepersonalfilter: { b: 'duplicaterecordid_msdyn_knowledgepersonalfilter', a: '_duplicaterecordid_value', c: 'msdyn_knowledgepersonalfilters', d: 'msdyn_knowledgepersonalfilter', r: true },
			duplicaterecordid_msdyn_knowledgesearchfilter: { b: 'duplicaterecordid_msdyn_knowledgesearchfilter', a: '_duplicaterecordid_value', c: 'msdyn_knowledgesearchfilters', d: 'msdyn_knowledgesearchfilter', r: true },
			duplicaterecordid_msdyn_knowledgesearchinsight: { b: 'duplicaterecordid_msdyn_knowledgesearchinsight', a: '_duplicaterecordid_value', c: 'msdyn_knowledgesearchinsights', d: 'msdyn_knowledgesearchinsight', r: true },
			duplicaterecordid_msdyn_mobileapp: { b: 'duplicaterecordid_msdyn_mobileapp', a: '_duplicaterecordid_value', c: 'msdyn_mobileapps', d: 'msdyn_mobileapp', r: true },
			duplicaterecordid_msdyn_modulerundetail: { b: 'duplicaterecordid_msdyn_modulerundetail', a: '_duplicaterecordid_value', c: 'msdyn_modulerundetails', d: 'msdyn_modulerundetail', r: true },
			duplicaterecordid_msdyn_pmanalysishistory: { b: 'duplicaterecordid_msdyn_pmanalysishistory', a: '_duplicaterecordid_value', c: 'msdyn_pmanalysishistories', d: 'msdyn_pmanalysishistory', r: true },
			duplicaterecordid_msdyn_pmbusinessruleautomationconfig: { b: 'duplicaterecordid_msdyn_pmbusinessruleautomationconfig', a: '_duplicaterecordid_value', c: 'msdyn_pmbusinessruleautomationconfigs', d: 'msdyn_pmbusinessruleautomationconfig', r: true },
			duplicaterecordid_msdyn_pmcalendar: { b: 'duplicaterecordid_msdyn_pmcalendar', a: '_duplicaterecordid_value', c: 'msdyn_pmcalendars', d: 'msdyn_pmcalendar', r: true },
			duplicaterecordid_msdyn_pmcalendarversion: { b: 'duplicaterecordid_msdyn_pmcalendarversion', a: '_duplicaterecordid_value', c: 'msdyn_pmcalendarversions', d: 'msdyn_pmcalendarversion', r: true },
			duplicaterecordid_msdyn_pminferredtask: { b: 'duplicaterecordid_msdyn_pminferredtask', a: '_duplicaterecordid_value', c: 'msdyn_pminferredtasks', d: 'msdyn_pminferredtask', r: true },
			duplicaterecordid_msdyn_pmprocessextendedmetadataversion: { b: 'duplicaterecordid_msdyn_pmprocessextendedmetadataversion', a: '_duplicaterecordid_value', c: 'msdyn_pmprocessextendedmetadataversions', d: 'msdyn_pmprocessextendedmetadataversion', r: true },
			duplicaterecordid_msdyn_pmprocesstemplate: { b: 'duplicaterecordid_msdyn_pmprocesstemplate', a: '_duplicaterecordid_value', c: 'msdyn_pmprocesstemplates', d: 'msdyn_pmprocesstemplate', r: true },
			duplicaterecordid_msdyn_pmprocessusersettings: { b: 'duplicaterecordid_msdyn_pmprocessusersettings', a: '_duplicaterecordid_value', c: 'msdyn_pmprocessusersettingses', d: 'msdyn_pmprocessusersettings', r: true },
			duplicaterecordid_msdyn_pmprocessversion: { b: 'duplicaterecordid_msdyn_pmprocessversion', a: '_duplicaterecordid_value', c: 'msdyn_pmprocessversions', d: 'msdyn_pmprocessversion', r: true },
			duplicaterecordid_msdyn_pmrecording: { b: 'duplicaterecordid_msdyn_pmrecording', a: '_duplicaterecordid_value', c: 'msdyn_pmrecordings', d: 'msdyn_pmrecording', r: true },
			duplicaterecordid_msdyn_pmsimulation: { b: 'duplicaterecordid_msdyn_pmsimulation', a: '_duplicaterecordid_value', c: 'msdyn_pmsimulations', d: 'msdyn_pmsimulation', r: true },
			duplicaterecordid_msdyn_pmtemplate: { b: 'duplicaterecordid_msdyn_pmtemplate', a: '_duplicaterecordid_value', c: 'msdyn_pmtemplates', d: 'msdyn_pmtemplate', r: true },
			duplicaterecordid_msdyn_pmview: { b: 'duplicaterecordid_msdyn_pmview', a: '_duplicaterecordid_value', c: 'msdyn_pmviews', d: 'msdyn_pmview', r: true },
			duplicaterecordid_msdyn_schedule: { b: 'duplicaterecordid_msdyn_schedule', a: '_duplicaterecordid_value', c: 'msdyn_schedules', d: 'msdyn_schedule', r: true },
			duplicaterecordid_msdyn_serviceconfiguration: { b: 'duplicaterecordid_msdyn_serviceconfiguration', a: '_duplicaterecordid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration', r: true },
			duplicaterecordid_msdyn_slakpi: { b: 'duplicaterecordid_msdyn_slakpi', a: '_duplicaterecordid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi', r: true },
			duplicaterecordid_msdyn_solutionhealthrule: { b: 'duplicaterecordid_msdyn_solutionhealthrule', a: '_duplicaterecordid_value', c: 'msdyn_solutionhealthrules', d: 'msdyn_solutionhealthrule', r: true },
			duplicaterecordid_msdyn_solutionhealthruleargument: { b: 'duplicaterecordid_msdyn_solutionhealthruleargument', a: '_duplicaterecordid_value', c: 'msdyn_solutionhealthrulearguments', d: 'msdyn_solutionhealthruleargument', r: true },
			duplicaterecordid_msdyn_solutionhealthruleset: { b: 'duplicaterecordid_msdyn_solutionhealthruleset', a: '_duplicaterecordid_value', c: 'msdyn_solutionhealthrulesets', d: 'msdyn_solutionhealthruleset', r: true },
			duplicaterecordid_msdyn_virtualtablecolumncandidate: { b: 'duplicaterecordid_msdyn_virtualtablecolumncandidate', a: '_duplicaterecordid_value', c: 'msdyn_virtualtablecolumncandidates', d: 'msdyn_virtualtablecolumncandidate', r: true },
			duplicaterecordid_mspcat_catalogsubmissionfiles: { b: 'duplicaterecordid_mspcat_catalogsubmissionfiles', a: '_duplicaterecordid_value', c: 'mspcat_catalogsubmissionfileses', d: 'mspcat_catalogsubmissionfiles', r: true },
			duplicaterecordid_mspcat_packagestore: { b: 'duplicaterecordid_mspcat_packagestore', a: '_duplicaterecordid_value', c: 'mspcat_packagestores', d: 'mspcat_packagestore', r: true },
			duplicaterecordid_organizationdatasyncfnostate: { b: 'duplicaterecordid_organizationdatasyncfnostate', a: '_duplicaterecordid_value', c: 'organizationdatasyncfnostates', d: 'organizationdatasyncfnostate', r: true },
			duplicaterecordid_organizationdatasyncstate: { b: 'duplicaterecordid_organizationdatasyncstate', a: '_duplicaterecordid_value', c: 'organizationdatasyncstates', d: 'organizationdatasyncstate', r: true },
			duplicaterecordid_organizationdatasyncsubscription: { b: 'duplicaterecordid_organizationdatasyncsubscription', a: '_duplicaterecordid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription', r: true },
			duplicaterecordid_organizationdatasyncsubscriptionentity: { b: 'duplicaterecordid_organizationdatasyncsubscriptionentity', a: '_duplicaterecordid_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity', r: true },
			duplicaterecordid_organizationdatasyncsubscriptionfnotable: { b: 'duplicaterecordid_organizationdatasyncsubscriptionfnotable', a: '_duplicaterecordid_value', c: 'organizationdatasyncsubscriptionfnotables', d: 'organizationdatasyncsubscriptionfnotable', r: true },
			duplicaterecordid_package: { b: 'duplicaterecordid_package', a: '_duplicaterecordid_value', c: 'packages', d: 'package', r: true },
			duplicaterecordid_packagehistory: { b: 'duplicaterecordid_packagehistory', a: '_duplicaterecordid_value', c: 'packagehistories', d: 'packagehistory', r: true },
			duplicaterecordid_phonecall: { b: 'duplicaterecordid_phonecall', a: '_duplicaterecordid_value', c: 'phonecalls', d: 'phonecall', r: true },
			duplicaterecordid_powerbidataset: { b: 'duplicaterecordid_powerbidataset', a: '_duplicaterecordid_value', c: 'powerbidatasets', d: 'powerbidataset', r: true },
			duplicaterecordid_powerbidatasetapdx: { b: 'duplicaterecordid_powerbidatasetapdx', a: '_duplicaterecordid_value', c: 'powerbidatasetapdxes', d: 'powerbidatasetapdx', r: true },
			duplicaterecordid_powerbimashupparameter: { b: 'duplicaterecordid_powerbimashupparameter', a: '_duplicaterecordid_value', c: 'powerbimashupparameters', d: 'powerbimashupparameter', r: true },
			duplicaterecordid_powerbireport: { b: 'duplicaterecordid_powerbireport', a: '_duplicaterecordid_value', c: 'powerbireports', d: 'powerbireport', r: true },
			duplicaterecordid_powerbireportapdx: { b: 'duplicaterecordid_powerbireportapdx', a: '_duplicaterecordid_value', c: 'powerbireportapdxes', d: 'powerbireportapdx', r: true },
			duplicaterecordid_powerfxrule: { b: 'duplicaterecordid_powerfxrule', a: '_duplicaterecordid_value', c: 'powerfxrules', d: 'powerfxrule', r: true },
			duplicaterecordid_powerpagesscanreport: { b: 'duplicaterecordid_powerpagesscanreport', a: '_duplicaterecordid_value', c: 'powerpagesscanreports', d: 'powerpagesscanreport', r: true },
			duplicaterecordid_privilegesremovalsetting: { b: 'duplicaterecordid_privilegesremovalsetting', a: '_duplicaterecordid_value', c: 'privilegesremovalsettings', d: 'privilegesremovalsetting', r: true },
			duplicaterecordid_publisher: { b: 'duplicaterecordid_publisher', a: '_duplicaterecordid_value', c: 'publishers', d: 'publisher', r: true },
			duplicaterecordid_queue: { b: 'duplicaterecordid_queue', a: '_duplicaterecordid_value', c: 'queues', d: 'queue', r: true },
			duplicaterecordid_reconciliationinfo: { b: 'duplicaterecordid_reconciliationinfo', a: '_duplicaterecordid_value', c: 'reconciliationinfos', d: 'reconciliationinfo', r: true },
			duplicaterecordid_recordfilter: { b: 'duplicaterecordid_recordfilter', a: '_duplicaterecordid_value', c: 'recordfilters', d: 'recordfilter', r: true },
			duplicaterecordid_recurringappointmentmaster: { b: 'duplicaterecordid_recurringappointmentmaster', a: '_duplicaterecordid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster', r: true },
			duplicaterecordid_reportparameter: { b: 'duplicaterecordid_reportparameter', a: '_duplicaterecordid_value', c: 'reportparameters', d: 'reportparameter', r: true },
			duplicaterecordid_retaineddataexcel: { b: 'duplicaterecordid_retaineddataexcel', a: '_duplicaterecordid_value', c: 'retaineddataexcels', d: 'retaineddataexcel', r: true },
			duplicaterecordid_retentioncleanupinfo: { b: 'duplicaterecordid_retentioncleanupinfo', a: '_duplicaterecordid_value', c: 'retentioncleanupinfos', d: 'retentioncleanupinfo', r: true },
			duplicaterecordid_retentioncleanupoperation: { b: 'duplicaterecordid_retentioncleanupoperation', a: '_duplicaterecordid_value', c: 'retentioncleanupoperations', d: 'retentioncleanupoperation', r: true },
			duplicaterecordid_retentionconfig: { b: 'duplicaterecordid_retentionconfig', a: '_duplicaterecordid_value', c: 'retentionconfigs', d: 'retentionconfig', r: true },
			duplicaterecordid_retentionfailuredetail: { b: 'duplicaterecordid_retentionfailuredetail', a: '_duplicaterecordid_value', c: 'retentionfailuredetails', d: 'retentionfailuredetail', r: true },
			duplicaterecordid_retentionoperation: { b: 'duplicaterecordid_retentionoperation', a: '_duplicaterecordid_value', c: 'retentionoperations', d: 'retentionoperation', r: true },
			duplicaterecordid_revokeinheritedaccessrecordstracker: { b: 'duplicaterecordid_revokeinheritedaccessrecordstracker', a: '_duplicaterecordid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker', r: true },
			duplicaterecordid_roleeditorlayout: { b: 'duplicaterecordid_roleeditorlayout', a: '_duplicaterecordid_value', c: 'roleeditorlayouts', d: 'roleeditorlayout', r: true },
			duplicaterecordid_searchattributesettings: { b: 'duplicaterecordid_searchattributesettings', a: '_duplicaterecordid_value', c: 'searchattributesettingses', d: 'searchattributesettings', r: true },
			duplicaterecordid_searchcustomanalyzer: { b: 'duplicaterecordid_searchcustomanalyzer', a: '_duplicaterecordid_value', c: 'searchcustomanalyzers', d: 'searchcustomanalyzer', r: true },
			duplicaterecordid_searchrelationshipsettings: { b: 'duplicaterecordid_searchrelationshipsettings', a: '_duplicaterecordid_value', c: 'searchrelationshipsettingses', d: 'searchrelationshipsettings', r: true },
			duplicaterecordid_serviceplan: { b: 'duplicaterecordid_serviceplan', a: '_duplicaterecordid_value', c: 'serviceplans', d: 'serviceplan', r: true },
			duplicaterecordid_serviceplancustomcontrol: { b: 'duplicaterecordid_serviceplancustomcontrol', a: '_duplicaterecordid_value', c: '', d: 'serviceplancustomcontrol', r: true },
			duplicaterecordid_serviceplanmapping: { b: 'duplicaterecordid_serviceplanmapping', a: '_duplicaterecordid_value', c: 'serviceplanmappings', d: 'serviceplanmapping', r: true },
			duplicaterecordid_sharedlinksetting: { b: 'duplicaterecordid_sharedlinksetting', a: '_duplicaterecordid_value', c: 'sharedlinksettings', d: 'sharedlinksetting', r: true },
			duplicaterecordid_sharepointdocumentlocation: { b: 'duplicaterecordid_sharepointdocumentlocation', a: '_duplicaterecordid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation', r: true },
			duplicaterecordid_sharepointsite: { b: 'duplicaterecordid_sharepointsite', a: '_duplicaterecordid_value', c: 'sharepointsites', d: 'sharepointsite', r: true },
			duplicaterecordid_socialactivity: { b: 'duplicaterecordid_socialactivity', a: '_duplicaterecordid_value', c: 'socialactivities', d: 'socialactivity', r: true },
			duplicaterecordid_socialprofile: { b: 'duplicaterecordid_socialprofile', a: '_duplicaterecordid_value', c: 'socialprofiles', d: 'socialprofile', r: true },
			duplicaterecordid_solutioncomponentattributeconfiguration: { b: 'duplicaterecordid_solutioncomponentattributeconfiguration', a: '_duplicaterecordid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration', r: true },
			duplicaterecordid_solutioncomponentbatchconfiguration: { b: 'duplicaterecordid_solutioncomponentbatchconfiguration', a: '_duplicaterecordid_value', c: 'solutioncomponentbatchconfigurations', d: 'solutioncomponentbatchconfiguration', r: true },
			duplicaterecordid_solutioncomponentconfiguration: { b: 'duplicaterecordid_solutioncomponentconfiguration', a: '_duplicaterecordid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration', r: true },
			duplicaterecordid_solutioncomponentrelationshipconfiguration: { b: 'duplicaterecordid_solutioncomponentrelationshipconfiguration', a: '_duplicaterecordid_value', c: 'solutioncomponentrelationshipconfigurations', d: 'solutioncomponentrelationshipconfiguration', r: true },
			duplicaterecordid_stagesolutionupload: { b: 'duplicaterecordid_stagesolutionupload', a: '_duplicaterecordid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload', r: true },
			duplicaterecordid_supportusertable: { b: 'duplicaterecordid_supportusertable', a: '_duplicaterecordid_value', c: 'supportusertables', d: 'supportusertable', r: true },
			duplicaterecordid_synapsedatabase: { b: 'duplicaterecordid_synapsedatabase', a: '_duplicaterecordid_value', c: 'synapsedatabases', d: 'synapsedatabase', r: true },
			duplicaterecordid_synapselinkexternaltablestate: { b: 'duplicaterecordid_synapselinkexternaltablestate', a: '_duplicaterecordid_value', c: 'synapselinkexternaltablestates', d: 'synapselinkexternaltablestate', r: true },
			duplicaterecordid_synapselinkprofile: { b: 'duplicaterecordid_synapselinkprofile', a: '_duplicaterecordid_value', c: 'synapselinkprofiles', d: 'synapselinkprofile', r: true },
			duplicaterecordid_synapselinkprofileentity: { b: 'duplicaterecordid_synapselinkprofileentity', a: '_duplicaterecordid_value', c: 'synapselinkprofileentities', d: 'synapselinkprofileentity', r: true },
			duplicaterecordid_synapselinkprofileentitystate: { b: 'duplicaterecordid_synapselinkprofileentitystate', a: '_duplicaterecordid_value', c: 'synapselinkprofileentitystates', d: 'synapselinkprofileentitystate', r: true },
			duplicaterecordid_synapselinkschedule: { b: 'duplicaterecordid_synapselinkschedule', a: '_duplicaterecordid_value', c: 'synapselinkschedules', d: 'synapselinkschedule', r: true },
			duplicaterecordid_systemuser: { b: 'duplicaterecordid_systemuser', a: '_duplicaterecordid_value', c: 'systemusers', d: 'systemuser', r: true },
			duplicaterecordid_task: { b: 'duplicaterecordid_task', a: '_duplicaterecordid_value', c: 'tasks', d: 'task', r: true },
			duplicaterecordid_tdsmetadata: { b: 'duplicaterecordid_tdsmetadata', a: '_duplicaterecordid_value', c: 'tdsmetadatas', d: 'tdsmetadata', r: true },
			duplicaterecordid_team: { b: 'duplicaterecordid_team', a: '_duplicaterecordid_value', c: 'teams', d: 'team', r: true },
			duplicaterecordid_transactioncurrency: { b: 'duplicaterecordid_transactioncurrency', a: '_duplicaterecordid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			duplicaterecordid_userrating: { b: 'duplicaterecordid_userrating', a: '_duplicaterecordid_value', c: 'userratings', d: 'userrating', r: true },
			duplicaterecordid_workqueue: { b: 'duplicaterecordid_workqueue', a: '_duplicaterecordid_value', c: 'workqueues', d: 'workqueue', r: true },
			duplicaterecordid_workqueueitem: { b: 'duplicaterecordid_workqueueitem', a: '_duplicaterecordid_value', c: 'workqueueitems', d: 'workqueueitem', r: true },
			DuplicateRuleId: { b: 'duplicateruleid', a: '_duplicateruleid_value', c: 'duplicaterules', d: 'duplicaterule', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			OwningUser: { a: 'owninguser', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var duplicaterecord = {};
		duplicaterecord.ODataEntity = e;
		duplicaterecord.FormattedValue = {};
		for (var field in _duplicaterecord) {
			var a = _duplicaterecord[field].a;
			var b = _duplicaterecord[field].b;
			var c = _duplicaterecord[field].c;
			var d = _duplicaterecord[field].d;
			var g = _duplicaterecord[field].g;
			var r = _duplicaterecord[field].r;
			webApiField(duplicaterecord, field, e, a, b, c, d, r, u, g);
		}
		duplicaterecord.Entity = u;
		duplicaterecord.EntityName = 'duplicaterecord';
		duplicaterecord.EntityCollectionName = 'duplicaterecords';
		duplicaterecord['@odata.etag'] = e['@odata.etag'];
		duplicaterecord.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		duplicaterecord.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return duplicaterecord;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.DuplicateRecord = {
		BaseRecordIdTypeCode : {
		},
		DuplicateRecordIdTypeCode : {
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));
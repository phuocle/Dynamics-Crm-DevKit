﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.UserEntityInstanceDataApi = function (e) {
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
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
		var _userentityinstancedata = {
			CommonEnd_UtcDateAndTime: { a: 'commonend' },
			CommonStart_UtcDateAndTime: { a: 'commonstart' },
			DueDate_UtcDateAndTime: { a: 'duedate' },
			FlagDueBy_UtcDateAndTime: { a: 'flagdueby' },
			FlagRequest: { a: 'flagrequest' },
			FlagStatus: { a: 'flagstatus' },
			objectid_account: { b: 'objectid_account', a: '_objectid_value', c: 'accounts', d: 'account' },
			objectid_activityfileattachment: { b: 'objectid_activityfileattachment', a: '_objectid_value', c: 'activityfileattachments', d: 'activityfileattachment' },
			objectid_activitymimeattachment: { b: 'objectid_activitymimeattachment', a: '_objectid_value', c: 'activitymimeattachments', d: 'activitymimeattachment' },
			objectid_activityparty: { b: 'objectid_activityparty', a: '_objectid_value', c: 'activityparties', d: 'activityparty' },
			objectid_adx_externalidentity: { b: 'objectid_adx_externalidentity', a: '_objectid_value', c: 'adx_externalidentities', d: 'adx_externalidentity' },
			objectid_adx_invitation: { b: 'objectid_adx_invitation', a: '_objectid_value', c: 'adx_invitations', d: 'adx_invitation' },
			objectid_adx_inviteredemption: { b: 'objectid_adx_inviteredemption', a: '_objectid_value', c: 'adx_inviteredemptions', d: 'adx_inviteredemption' },
			objectid_adx_portalcomment: { b: 'objectid_adx_portalcomment', a: '_objectid_value', c: 'adx_portalcomments', d: 'adx_portalcomment' },
			objectid_adx_setting: { b: 'objectid_adx_setting', a: '_objectid_value', c: 'adx_settings', d: 'adx_setting' },
			objectid_adx_webformsession: { b: 'objectid_adx_webformsession', a: '_objectid_value', c: 'adx_webformsessions', d: 'adx_webformsession' },
			objectid_aicopilot: { b: 'objectid_aicopilot', a: '_objectid_value', c: 'aicopilots', d: 'aicopilot' },
			objectid_aiplugin: { b: 'objectid_aiplugin', a: '_objectid_value', c: 'aiplugins', d: 'aiplugin' },
			objectid_aipluginauth: { b: 'objectid_aipluginauth', a: '_objectid_value', c: 'aipluginauths', d: 'aipluginauth' },
			objectid_aipluginconversationstarter: { b: 'objectid_aipluginconversationstarter', a: '_objectid_value', c: 'aipluginconversationstarters', d: 'aipluginconversationstarter' },
			objectid_aipluginconversationstartermapping: { b: 'objectid_aipluginconversationstartermapping', a: '_objectid_value', c: 'aipluginconversationstartermappings', d: 'aipluginconversationstartermapping' },
			objectid_aipluginexternalschema: { b: 'objectid_aipluginexternalschema', a: '_objectid_value', c: 'aipluginexternalschemas', d: 'aipluginexternalschema' },
			objectid_aipluginexternalschemaproperty: { b: 'objectid_aipluginexternalschemaproperty', a: '_objectid_value', c: 'aipluginexternalschemaproperties', d: 'aipluginexternalschemaproperty' },
			objectid_aiplugingovernance: { b: 'objectid_aiplugingovernance', a: '_objectid_value', c: 'aiplugingovernances', d: 'aiplugingovernance' },
			objectid_aiplugingovernanceext: { b: 'objectid_aiplugingovernanceext', a: '_objectid_value', c: 'aiplugingovernanceexts', d: 'aiplugingovernanceext' },
			objectid_aiplugininstance: { b: 'objectid_aiplugininstance', a: '_objectid_value', c: 'aiplugininstances', d: 'aiplugininstance' },
			objectid_aipluginoperation: { b: 'objectid_aipluginoperation', a: '_objectid_value', c: 'aipluginoperations', d: 'aipluginoperation' },
			objectid_aipluginoperationparameter: { b: 'objectid_aipluginoperationparameter', a: '_objectid_value', c: 'aipluginoperationparameters', d: 'aipluginoperationparameter' },
			objectid_aipluginoperationresponsetemplate: { b: 'objectid_aipluginoperationresponsetemplate', a: '_objectid_value', c: 'aipluginoperationresponsetemplates', d: 'aipluginoperationresponsetemplate' },
			objectid_aiplugintitle: { b: 'objectid_aiplugintitle', a: '_objectid_value', c: 'aiplugintitles', d: 'aiplugintitle' },
			objectid_aipluginusersetting: { b: 'objectid_aipluginusersetting', a: '_objectid_value', c: 'aipluginusersettings', d: 'aipluginusersetting' },
			objectid_annotation: { b: 'objectid_annotation', a: '_objectid_value', c: 'annotations', d: 'annotation' },
			objectid_appaction: { b: 'objectid_appaction', a: '_objectid_value', c: 'appactions', d: 'appaction' },
			objectid_appactionmigration: { b: 'objectid_appactionmigration', a: '_objectid_value', c: 'appactionmigrations', d: 'appactionmigration' },
			objectid_appactionrule: { b: 'objectid_appactionrule', a: '_objectid_value', c: 'appactionrules', d: 'appactionrule' },
			objectid_appelement: { b: 'objectid_appelement', a: '_objectid_value', c: 'appelements', d: 'appelement' },
			objectid_application: { b: 'objectid_application', a: '_objectid_value', c: 'applications', d: 'application' },
			objectid_applicationuser: { b: 'objectid_applicationuser', a: '_objectid_value', c: 'applicationusers', d: 'applicationuser' },
			objectid_appmodulecomponentedge: { b: 'objectid_appmodulecomponentedge', a: '_objectid_value', c: 'appmodulecomponentedges', d: 'appmodulecomponentedge' },
			objectid_appmodulecomponentnode: { b: 'objectid_appmodulecomponentnode', a: '_objectid_value', c: 'appmodulecomponentnodes', d: 'appmodulecomponentnode' },
			objectid_appointment: { b: 'objectid_appointment', a: '_objectid_value', c: 'appointments', d: 'appointment' },
			objectid_appsetting: { b: 'objectid_appsetting', a: '_objectid_value', c: 'appsettings', d: 'appsetting' },
			objectid_appusersetting: { b: 'objectid_appusersetting', a: '_objectid_value', c: 'appusersettings', d: 'appusersetting' },
			objectid_archivecleanupinfo: { b: 'objectid_archivecleanupinfo', a: '_objectid_value', c: 'archivecleanupinfos', d: 'archivecleanupinfo' },
			objectid_archivecleanupoperation: { b: 'objectid_archivecleanupoperation', a: '_objectid_value', c: 'archivecleanupoperations', d: 'archivecleanupoperation' },
			objectid_asyncoperation: { b: 'objectid_asyncoperation', a: '_objectid_value', c: 'asyncoperations', d: 'asyncoperation' },
			objectid_attachment: { b: 'objectid_attachment', a: '_objectid_value', c: 'attachments', d: 'attachment' },
			objectid_attributeimageconfig: { b: 'objectid_attributeimageconfig', a: '_objectid_value', c: 'attributeimageconfigs', d: 'attributeimageconfig' },
			objectid_attributemap: { b: 'objectid_attributemap', a: '_objectid_value', c: 'attributemaps', d: 'attributemap' },
			objectid_attributemaskingrule: { b: 'objectid_attributemaskingrule', a: '_objectid_value', c: 'attributemaskingrules', d: 'attributemaskingrule' },
			objectid_audit: { b: 'objectid_audit', a: '_objectid_value', c: 'audits', d: 'audit' },
			objectid_bot: { b: 'objectid_bot', a: '_objectid_value', c: 'bots', d: 'bot' },
			objectid_botcomponent: { b: 'objectid_botcomponent', a: '_objectid_value', c: 'botcomponents', d: 'botcomponent' },
			objectid_botcomponentcollection: { b: 'objectid_botcomponentcollection', a: '_objectid_value', c: 'botcomponentcollections', d: 'botcomponentcollection' },
			objectid_bulkarchiveconfig: { b: 'objectid_bulkarchiveconfig', a: '_objectid_value', c: 'bulkarchiveconfigs', d: 'bulkarchiveconfig' },
			objectid_bulkarchivefailuredetail: { b: 'objectid_bulkarchivefailuredetail', a: '_objectid_value', c: 'bulkarchivefailuredetails', d: 'bulkarchivefailuredetail' },
			objectid_bulkarchiveoperation: { b: 'objectid_bulkarchiveoperation', a: '_objectid_value', c: 'bulkarchiveoperations', d: 'bulkarchiveoperation' },
			objectid_bulkarchiveoperationdetail: { b: 'objectid_bulkarchiveoperationdetail', a: '_objectid_value', c: 'bulkarchiveoperationdetails', d: 'bulkarchiveoperationdetail' },
			objectid_bulkdeletefailure: { b: 'objectid_bulkdeletefailure', a: '_objectid_value', c: 'bulkdeletefailures', d: 'bulkdeletefailure' },
			objectid_bulkdeleteoperation: { b: 'objectid_bulkdeleteoperation', a: '_objectid_value', c: 'bulkdeleteoperations', d: 'bulkdeleteoperation' },
			objectid_businessunitmap: { b: 'objectid_businessunitmap', a: '_objectid_value', c: 'businessunitmaps', d: 'businessunitmap' },
			objectid_businessunitnewsarticle: { b: 'objectid_businessunitnewsarticle', a: '_objectid_value', c: 'businessunitnewsarticles', d: 'businessunitnewsarticle' },
			objectid_calendar: { b: 'objectid_calendar', a: '_objectid_value', c: 'calendars', d: 'calendar' },
			objectid_calendarrule: { b: 'objectid_calendarrule', a: '_objectid_value', c: 'calendarrules', d: 'calendarrule' },
			objectid_canvasappextendedmetadata: { b: 'objectid_canvasappextendedmetadata', a: '_objectid_value', c: 'canvasappextendedmetadatas', d: 'canvasappextendedmetadata' },
			objectid_card: { b: 'objectid_card', a: '_objectid_value', c: 'cards', d: 'card' },
			objectid_cascadegrantrevokeaccessrecordstracker: { b: 'objectid_cascadegrantrevokeaccessrecordstracker', a: '_objectid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker' },
			objectid_cascadegrantrevokeaccessversiontracker: { b: 'objectid_cascadegrantrevokeaccessversiontracker', a: '_objectid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker' },
			objectid_catalog: { b: 'objectid_catalog', a: '_objectid_value', c: 'catalogs', d: 'catalog' },
			objectid_catalogassignment: { b: 'objectid_catalogassignment', a: '_objectid_value', c: 'catalogassignments', d: 'catalogassignment' },
			channelaccessprofile_userentityinstancedatas: { b: 'channelaccessprofile_userentityinstancedatas', a: '_objectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_objectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			objectid_chat: { b: 'objectid_chat', a: '_objectid_value', c: 'chats', d: 'chat' },
			objectid_clientupdate: { b: 'objectid_clientupdate', a: '_objectid_value', c: 'clientupdates', d: 'clientupdate' },
			objectid_columnmapping: { b: 'objectid_columnmapping', a: '_objectid_value', c: 'columnmappings', d: 'columnmapping' },
			objectid_comment: { b: 'objectid_comment', a: '_objectid_value', c: 'comments', d: 'comment' },
			objectid_connection: { b: 'objectid_connection', a: '_objectid_value', c: 'connections', d: 'connection' },
			objectid_connectioninstance: { b: 'objectid_connectioninstance', a: '_objectid_value', c: 'connectioninstances', d: 'connectioninstance' },
			objectid_connectionreference: { b: 'objectid_connectionreference', a: '_objectid_value', c: 'connectionreferences', d: 'connectionreference' },
			objectid_connectionrole: { b: 'objectid_connectionrole', a: '_objectid_value', c: 'connectionroles', d: 'connectionrole' },
			objectid_connectionroleassociation: { b: 'objectid_connectionroleassociation', a: '_objectid_value', c: '', d: 'connectionroleassociation' },
			objectid_connectionroleobjecttypecode: { b: 'objectid_connectionroleobjecttypecode', a: '_objectid_value', c: 'connectionroleobjecttypecodes', d: 'connectionroleobjecttypecode' },
			objectid_connector: { b: 'objectid_connector', a: '_objectid_value', c: 'connectors', d: 'connector' },
			objectid_contact: { b: 'objectid_contact', a: '_objectid_value', c: 'contacts', d: 'contact' },
			objectid_conversationtranscript: { b: 'objectid_conversationtranscript', a: '_objectid_value', c: 'conversationtranscripts', d: 'conversationtranscript' },
			objectid_convertrule: { b: 'objectid_convertrule', a: '_objectid_value', c: 'convertrules', d: 'convertrule' },
			objectid_copilotexamplequestion: { b: 'objectid_copilotexamplequestion', a: '_objectid_value', c: 'copilotexamplequestions', d: 'copilotexamplequestion' },
			objectid_copilotglossaryterm: { b: 'objectid_copilotglossaryterm', a: '_objectid_value', c: 'copilotglossaryterms', d: 'copilotglossaryterm' },
			objectid_copilotsynonyms: { b: 'objectid_copilotsynonyms', a: '_objectid_value', c: 'copilotsynonyms', d: 'copilotsynonyms' },
			objectid_credential: { b: 'objectid_credential', a: '_objectid_value', c: 'credentials', d: 'credential' },
			objectid_customapi: { b: 'objectid_customapi', a: '_objectid_value', c: 'customapis', d: 'customapi' },
			objectid_customapirequestparameter: { b: 'objectid_customapirequestparameter', a: '_objectid_value', c: 'customapirequestparameters', d: 'customapirequestparameter' },
			objectid_customapiresponseproperty: { b: 'objectid_customapiresponseproperty', a: '_objectid_value', c: 'customapiresponseproperties', d: 'customapiresponseproperty' },
			objectid_customeraddress: { b: 'objectid_customeraddress', a: '_objectid_value', c: 'customeraddresses', d: 'customeraddress' },
			objectid_customerrelationship: { b: 'objectid_customerrelationship', a: '_objectid_value', c: 'customerrelationships', d: 'customerrelationship' },
			objectid_datalakefolder: { b: 'objectid_datalakefolder', a: '_objectid_value', c: 'datalakefolders', d: 'datalakefolder' },
			objectid_datalakefolderpermission: { b: 'objectid_datalakefolderpermission', a: '_objectid_value', c: 'datalakefolderpermissions', d: 'datalakefolderpermission' },
			objectid_datalakeworkspace: { b: 'objectid_datalakeworkspace', a: '_objectid_value', c: 'datalakeworkspaces', d: 'datalakeworkspace' },
			objectid_datalakeworkspacepermission: { b: 'objectid_datalakeworkspacepermission', a: '_objectid_value', c: 'datalakeworkspacepermissions', d: 'datalakeworkspacepermission' },
			objectid_dataprocessingconfiguration: { b: 'objectid_dataprocessingconfiguration', a: '_objectid_value', c: 'dataprocessingconfigurations', d: 'dataprocessingconfiguration' },
			objectid_delegatedauthorization: { b: 'objectid_delegatedauthorization', a: '_objectid_value', c: 'delegatedauthorizations', d: 'delegatedauthorization' },
			objectid_deleteditemreference: { b: 'objectid_deleteditemreference', a: '_objectid_value', c: 'deleteditemreferences', d: 'deleteditemreference' },
			objectid_dependency: { b: 'objectid_dependency', a: '_objectid_value', c: 'dependencies', d: 'dependency' },
			objectid_dependencynode: { b: 'objectid_dependencynode', a: '_objectid_value', c: 'dependencynodes', d: 'dependencynode' },
			objectid_desktopflowbinary: { b: 'objectid_desktopflowbinary', a: '_objectid_value', c: 'desktopflowbinaries', d: 'desktopflowbinary' },
			objectid_desktopflowmodule: { b: 'objectid_desktopflowmodule', a: '_objectid_value', c: 'desktopflowmodules', d: 'desktopflowmodule' },
			objectid_displaystring: { b: 'objectid_displaystring', a: '_objectid_value', c: 'displaystrings', d: 'displaystring' },
			objectid_displaystringmap: { b: 'objectid_displaystringmap', a: '_objectid_value', c: 'displaystringmaps', d: 'displaystringmap' },
			objectid_documentindex: { b: 'objectid_documentindex', a: '_objectid_value', c: 'documentindexes', d: 'documentindex' },
			objectid_duplicaterecord: { b: 'objectid_duplicaterecord', a: '_objectid_value', c: 'duplicaterecords', d: 'duplicaterecord' },
			objectid_duplicaterule: { b: 'objectid_duplicaterule', a: '_objectid_value', c: 'duplicaterules', d: 'duplicaterule' },
			objectid_duplicaterulecondition: { b: 'objectid_duplicaterulecondition', a: '_objectid_value', c: 'duplicateruleconditions', d: 'duplicaterulecondition' },
			objectid_dvfilesearch: { b: 'objectid_dvfilesearch', a: '_objectid_value', c: 'dvfilesearchs', d: 'dvfilesearch' },
			objectid_dvfilesearchattribute: { b: 'objectid_dvfilesearchattribute', a: '_objectid_value', c: 'dvfilesearchattributes', d: 'dvfilesearchattribute' },
			objectid_dvfilesearchentity: { b: 'objectid_dvfilesearchentity', a: '_objectid_value', c: 'dvfilesearchentities', d: 'dvfilesearchentity' },
			objectid_dvtablesearch: { b: 'objectid_dvtablesearch', a: '_objectid_value', c: 'dvtablesearchs', d: 'dvtablesearch' },
			objectid_dvtablesearchattribute: { b: 'objectid_dvtablesearchattribute', a: '_objectid_value', c: 'dvtablesearchattributes', d: 'dvtablesearchattribute' },
			objectid_dvtablesearchentity: { b: 'objectid_dvtablesearchentity', a: '_objectid_value', c: 'dvtablesearchentities', d: 'dvtablesearchentity' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_emailhash: { b: 'objectid_emailhash', a: '_objectid_value', c: 'emailhashs', d: 'emailhash' },
			objectid_emailsearch: { b: 'objectid_emailsearch', a: '_objectid_value', c: 'emailsearches', d: 'emailsearch' },
			objectid_enablearchivalrequest: { b: 'objectid_enablearchivalrequest', a: '_objectid_value', c: 'enablearchivalrequests', d: 'enablearchivalrequest' },
			objectid_entityanalyticsconfig: { b: 'objectid_entityanalyticsconfig', a: '_objectid_value', c: 'entityanalyticsconfigs', d: 'entityanalyticsconfig' },
			objectid_entityimageconfig: { b: 'objectid_entityimageconfig', a: '_objectid_value', c: 'entityimageconfigs', d: 'entityimageconfig' },
			objectid_entityindex: { b: 'objectid_entityindex', a: '_objectid_value', c: 'entityindexes', d: 'entityindex' },
			objectid_entitymap: { b: 'objectid_entitymap', a: '_objectid_value', c: 'entitymaps', d: 'entitymap' },
			objectid_entityrecordfilter: { b: 'objectid_entityrecordfilter', a: '_objectid_value', c: 'entityrecordfilters', d: 'entityrecordfilter' },
			objectid_environmentvariabledefinition: { b: 'objectid_environmentvariabledefinition', a: '_objectid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition' },
			objectid_environmentvariablevalue: { b: 'objectid_environmentvariablevalue', a: '_objectid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue' },
			objectid_exportedexcel: { b: 'objectid_exportedexcel', a: '_objectid_value', c: 'exportedexcels', d: 'exportedexcel' },
			objectid_exportsolutionupload: { b: 'objectid_exportsolutionupload', a: '_objectid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload' },
			externalparty_userentityinstancedatas: { b: 'externalparty_userentityinstancedatas', a: '_objectid_value', c: 'externalparties', d: 'externalparty' },
			objectid_fabricaiskill: { b: 'objectid_fabricaiskill', a: '_objectid_value', c: 'fabricaiskills', d: 'fabricaiskill' },
			objectid_fax: { b: 'objectid_fax', a: '_objectid_value', c: 'faxes', d: 'fax' },
			objectid_featurecontrolsetting: { b: 'objectid_featurecontrolsetting', a: '_objectid_value', c: 'featurecontrolsettings', d: 'featurecontrolsetting' },
			objectid_federatedknowledgeconfiguration: { b: 'objectid_federatedknowledgeconfiguration', a: '_objectid_value', c: 'federatedknowledgeconfigurations', d: 'federatedknowledgeconfiguration' },
			objectid_federatedknowledgeentityconfiguration: { b: 'objectid_federatedknowledgeentityconfiguration', a: '_objectid_value', c: 'federatedknowledgeentityconfigurations', d: 'federatedknowledgeentityconfiguration' },
			objectid_fieldpermission: { b: 'objectid_fieldpermission', a: '_objectid_value', c: 'fieldpermissions', d: 'fieldpermission' },
			objectid_fieldsecurityprofile: { b: 'objectid_fieldsecurityprofile', a: '_objectid_value', c: 'fieldsecurityprofiles', d: 'fieldsecurityprofile' },
			objectid_fileattachment: { b: 'objectid_fileattachment', a: '_objectid_value', c: 'fileattachments', d: 'fileattachment' },
			objectid_filtertemplate: { b: 'objectid_filtertemplate', a: '_objectid_value', c: 'filtertemplates', d: 'filtertemplate' },
			objectid_flowcapacityassignment: { b: 'objectid_flowcapacityassignment', a: '_objectid_value', c: 'flowcapacityassignments', d: 'flowcapacityassignment' },
			objectid_flowcredentialapplication: { b: 'objectid_flowcredentialapplication', a: '_objectid_value', c: 'flowcredentialapplications', d: 'flowcredentialapplication' },
			objectid_flowevent: { b: 'objectid_flowevent', a: '_objectid_value', c: 'flowevents', d: 'flowevent' },
			objectid_flowmachine: { b: 'objectid_flowmachine', a: '_objectid_value', c: 'flowmachines', d: 'flowmachine' },
			objectid_flowmachinegroup: { b: 'objectid_flowmachinegroup', a: '_objectid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			objectid_flowmachineimage: { b: 'objectid_flowmachineimage', a: '_objectid_value', c: 'flowmachineimages', d: 'flowmachineimage' },
			objectid_flowmachineimageversion: { b: 'objectid_flowmachineimageversion', a: '_objectid_value', c: 'flowmachineimageversions', d: 'flowmachineimageversion' },
			objectid_flowmachinenetwork: { b: 'objectid_flowmachinenetwork', a: '_objectid_value', c: 'flowmachinenetworks', d: 'flowmachinenetwork' },
			objectid_flowsession: { b: 'objectid_flowsession', a: '_objectid_value', c: 'flowsessions', d: 'flowsession' },
			objectid_fxexpression: { b: 'objectid_fxexpression', a: '_objectid_value', c: 'fxexpressions', d: 'fxexpression' },
			objectid_goal: { b: 'objectid_goal', a: '_objectid_value', c: 'goals', d: 'goal' },
			objectid_goalrollupquery: { b: 'objectid_goalrollupquery', a: '_objectid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			objectid_holidaywrapper: { b: 'objectid_holidaywrapper', a: '_objectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			objectid_import: { b: 'objectid_import', a: '_objectid_value', c: 'imports', d: 'import' },
			objectid_importdata: { b: 'objectid_importdata', a: '_objectid_value', c: 'importdatas', d: 'importdata' },
			objectid_importentitymapping: { b: 'objectid_importentitymapping', a: '_objectid_value', c: 'importentitymappings', d: 'importentitymapping' },
			objectid_importfile: { b: 'objectid_importfile', a: '_objectid_value', c: 'importfiles', d: 'importfile' },
			objectid_importjob: { b: 'objectid_importjob', a: '_objectid_value', c: 'importjobs', d: 'importjob' },
			objectid_importlog: { b: 'objectid_importlog', a: '_objectid_value', c: 'importlogs', d: 'importlog' },
			objectid_importmap: { b: 'objectid_importmap', a: '_objectid_value', c: 'importmaps', d: 'importmap' },
			objectid_indexattributes: { b: 'objectid_indexattributes', a: '_objectid_value', c: 'indexattributes', d: 'indexattributes' },
			objectid_internaladdress: { b: 'objectid_internaladdress', a: '_objectid_value', c: 'internaladdresses', d: 'internaladdress' },
			objectid_internalcatalogassignment: { b: 'objectid_internalcatalogassignment', a: '_objectid_value', c: 'internalcatalogassignments', d: 'internalcatalogassignment' },
			objectid_invaliddependency: { b: 'objectid_invaliddependency', a: '_objectid_value', c: 'invaliddependencies', d: 'invaliddependency' },
			objectid_isvconfig: { b: 'objectid_isvconfig', a: '_objectid_value', c: 'isvconfigs', d: 'isvconfig' },
			objectid_kbarticle: { b: 'objectid_kbarticle', a: '_objectid_value', c: 'kbarticles', d: 'kbarticle' },
			objectid_kbarticlecomment: { b: 'objectid_kbarticlecomment', a: '_objectid_value', c: 'kbarticlecomments', d: 'kbarticlecomment' },
			objectid_kbarticletemplate: { b: 'objectid_kbarticletemplate', a: '_objectid_value', c: 'kbarticletemplates', d: 'kbarticletemplate' },
			objectid_keyvaultreference: { b: 'objectid_keyvaultreference', a: '_objectid_value', c: 'keyvaultreferences', d: 'keyvaultreference' },
			objectid_knowledgearticle: { b: 'objectid_knowledgearticle', a: '_objectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			objectid_knowledgebaserecord: { b: 'objectid_knowledgebaserecord', a: '_objectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			objectid_letter: { b: 'objectid_letter', a: '_objectid_value', c: 'letters', d: 'letter' },
			objectid_license: { b: 'objectid_license', a: '_objectid_value', c: 'licenses', d: 'license' },
			objectid_lookupmapping: { b: 'objectid_lookupmapping', a: '_objectid_value', c: 'lookupmappings', d: 'lookupmapping' },
			objectid_mailbox: { b: 'objectid_mailbox', a: '_objectid_value', c: 'mailboxes', d: 'mailbox' },
			objectid_mailmergetemplate: { b: 'objectid_mailmergetemplate', a: '_objectid_value', c: 'mailmergetemplates', d: 'mailmergetemplate' },
			objectid_mainfewshot: { b: 'objectid_mainfewshot', a: '_objectid_value', c: 'mainfewshots', d: 'mainfewshot' },
			objectid_makerfewshot: { b: 'objectid_makerfewshot', a: '_objectid_value', c: 'makerfewshots', d: 'makerfewshot' },
			objectid_managedidentity: { b: 'objectid_managedidentity', a: '_objectid_value', c: 'managedidentities', d: 'managedidentity' },
			objectid_maskingrule: { b: 'objectid_maskingrule', a: '_objectid_value', c: 'maskingrules', d: 'maskingrule' },
			objectid_metadataforarchival: { b: 'objectid_metadataforarchival', a: '_objectid_value', c: 'metadataforarchivals', d: 'metadataforarchival' },
			objectid_metric: { b: 'objectid_metric', a: '_objectid_value', c: 'metrics', d: 'metric' },
			objectid_mobileofflineprofileextension: { b: 'objectid_mobileofflineprofileextension', a: '_objectid_value', c: 'mobileofflineprofileextensions', d: 'mobileofflineprofileextension' },
			objectid_msdynce_botcontent: { b: 'objectid_msdynce_botcontent', a: '_objectid_value', c: 'msdynce_botcontents', d: 'msdynce_botcontent' },
			objectid_msdyn_aibdataset: { b: 'objectid_msdyn_aibdataset', a: '_objectid_value', c: 'msdyn_aibdatasets', d: 'msdyn_aibdataset' },
			objectid_msdyn_aibdatasetfile: { b: 'objectid_msdyn_aibdatasetfile', a: '_objectid_value', c: 'msdyn_aibdatasetfiles', d: 'msdyn_aibdatasetfile' },
			objectid_msdyn_aibdatasetrecord: { b: 'objectid_msdyn_aibdatasetrecord', a: '_objectid_value', c: 'msdyn_aibdatasetrecords', d: 'msdyn_aibdatasetrecord' },
			objectid_msdyn_aibdatasetscontainer: { b: 'objectid_msdyn_aibdatasetscontainer', a: '_objectid_value', c: 'msdyn_aibdatasetscontainers', d: 'msdyn_aibdatasetscontainer' },
			objectid_msdyn_aibfeedbackloop: { b: 'objectid_msdyn_aibfeedbackloop', a: '_objectid_value', c: 'msdyn_aibfeedbackloops', d: 'msdyn_aibfeedbackloop' },
			objectid_msdyn_aibfile: { b: 'objectid_msdyn_aibfile', a: '_objectid_value', c: 'msdyn_aibfiles', d: 'msdyn_aibfile' },
			objectid_msdyn_aibfileattacheddata: { b: 'objectid_msdyn_aibfileattacheddata', a: '_objectid_value', c: 'msdyn_aibfileattacheddatas', d: 'msdyn_aibfileattacheddata' },
			objectid_msdyn_aiconfiguration: { b: 'objectid_msdyn_aiconfiguration', a: '_objectid_value', c: 'msdyn_aiconfigurations', d: 'msdyn_aiconfiguration' },
			objectid_msdyn_aievent: { b: 'objectid_msdyn_aievent', a: '_objectid_value', c: 'msdyn_aievents', d: 'msdyn_aievent' },
			objectid_msdyn_aifptrainingdocument: { b: 'objectid_msdyn_aifptrainingdocument', a: '_objectid_value', c: 'msdyn_aifptrainingdocuments', d: 'msdyn_aifptrainingdocument' },
			objectid_msdyn_aimodel: { b: 'objectid_msdyn_aimodel', a: '_objectid_value', c: 'msdyn_aimodels', d: 'msdyn_aimodel' },
			objectid_msdyn_aiodimage: { b: 'objectid_msdyn_aiodimage', a: '_objectid_value', c: 'msdyn_aiodimages', d: 'msdyn_aiodimage' },
			objectid_msdyn_aiodlabel: { b: 'objectid_msdyn_aiodlabel', a: '_objectid_value', c: 'msdyn_aiodlabels', d: 'msdyn_aiodlabel' },
			objectid_msdyn_aiodtrainingboundingbox: { b: 'objectid_msdyn_aiodtrainingboundingbox', a: '_objectid_value', c: 'msdyn_aiodtrainingboundingboxes', d: 'msdyn_aiodtrainingboundingbox' },
			objectid_msdyn_aiodtrainingimage: { b: 'objectid_msdyn_aiodtrainingimage', a: '_objectid_value', c: 'msdyn_aiodtrainingimages', d: 'msdyn_aiodtrainingimage' },
			objectid_msdyn_aitemplate: { b: 'objectid_msdyn_aitemplate', a: '_objectid_value', c: 'msdyn_aitemplates', d: 'msdyn_aitemplate' },
			objectid_msdyn_analysiscomponent: { b: 'objectid_msdyn_analysiscomponent', a: '_objectid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent' },
			objectid_msdyn_analysisjob: { b: 'objectid_msdyn_analysisjob', a: '_objectid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob' },
			objectid_msdyn_analysisoverride: { b: 'objectid_msdyn_analysisoverride', a: '_objectid_value', c: 'msdyn_analysisoverrides', d: 'msdyn_analysisoverride' },
			objectid_msdyn_analysisresult: { b: 'objectid_msdyn_analysisresult', a: '_objectid_value', c: 'msdyn_analysisresults', d: 'msdyn_analysisresult' },
			objectid_msdyn_analysisresultdetail: { b: 'objectid_msdyn_analysisresultdetail', a: '_objectid_value', c: 'msdyn_analysisresultdetails', d: 'msdyn_analysisresultdetail' },
			objectid_msdyn_appinsightsmetadata: { b: 'objectid_msdyn_appinsightsmetadata', a: '_objectid_value', c: 'msdyn_appinsightsmetadatas', d: 'msdyn_appinsightsmetadata' },
			objectid_msdyn_customcontrolextendedsettings: { b: 'objectid_msdyn_customcontrolextendedsettings', a: '_objectid_value', c: 'msdyn_customcontrolextendedsettingses', d: 'msdyn_customcontrolextendedsettings' },
			objectid_msdyn_dataflow: { b: 'objectid_msdyn_dataflow', a: '_objectid_value', c: 'msdyn_dataflows', d: 'msdyn_dataflow' },
			objectid_msdyn_dataflowconnectionreference: { b: 'objectid_msdyn_dataflowconnectionreference', a: '_objectid_value', c: 'msdyn_dataflowconnectionreferences', d: 'msdyn_dataflowconnectionreference' },
			objectid_msdyn_dataflowrefreshhistory: { b: 'objectid_msdyn_dataflowrefreshhistory', a: '_objectid_value', c: 'msdyn_dataflowrefreshhistories', d: 'msdyn_dataflowrefreshhistory' },
			objectid_msdyn_dataflowtemplate: { b: 'objectid_msdyn_dataflowtemplate', a: '_objectid_value', c: 'msdyn_dataflowtemplates', d: 'msdyn_dataflowtemplate' },
			objectid_msdyn_dataflow_datalakefolder: { b: 'objectid_msdyn_dataflow_datalakefolder', a: '_objectid_value', c: 'msdyn_dataflow_datalakefolders', d: 'msdyn_dataflow_datalakefolder' },
			objectid_msdyn_dmsrequest: { b: 'objectid_msdyn_dmsrequest', a: '_objectid_value', c: 'msdyn_dmsrequests', d: 'msdyn_dmsrequest' },
			objectid_msdyn_dmsrequeststatus: { b: 'objectid_msdyn_dmsrequeststatus', a: '_objectid_value', c: 'msdyn_dmsrequeststatuses', d: 'msdyn_dmsrequeststatus' },
			objectid_msdyn_dmssyncrequest: { b: 'objectid_msdyn_dmssyncrequest', a: '_objectid_value', c: 'msdyn_dmssyncrequests', d: 'msdyn_dmssyncrequest' },
			objectid_msdyn_dmssyncstatus: { b: 'objectid_msdyn_dmssyncstatus', a: '_objectid_value', c: 'msdyn_dmssyncstatuses', d: 'msdyn_dmssyncstatus' },
			objectid_msdyn_entitylinkchatconfiguration: { b: 'objectid_msdyn_entitylinkchatconfiguration', a: '_objectid_value', c: 'msdyn_entitylinkchatconfigurations', d: 'msdyn_entitylinkchatconfiguration' },
			objectid_msdyn_entityrefreshhistory: { b: 'objectid_msdyn_entityrefreshhistory', a: '_objectid_value', c: 'msdyn_entityrefreshhistories', d: 'msdyn_entityrefreshhistory' },
			objectid_msdyn_favoriteknowledgearticle: { b: 'objectid_msdyn_favoriteknowledgearticle', a: '_objectid_value', c: 'msdyn_favoriteknowledgearticles', d: 'msdyn_favoriteknowledgearticle' },
			objectid_msdyn_federatedarticle: { b: 'objectid_msdyn_federatedarticle', a: '_objectid_value', c: 'msdyn_federatedarticles', d: 'msdyn_federatedarticle' },
			objectid_msdyn_federatedarticleincident: { b: 'objectid_msdyn_federatedarticleincident', a: '_objectid_value', c: 'msdyn_federatedarticleincidents', d: 'msdyn_federatedarticleincident' },
			objectid_msdyn_fileupload: { b: 'objectid_msdyn_fileupload', a: '_objectid_value', c: 'msdyn_fileuploads', d: 'msdyn_fileupload' },
			objectid_msdyn_flow_actionapprovalmodel: { b: 'objectid_msdyn_flow_actionapprovalmodel', a: '_objectid_value', c: 'msdyn_flow_actionapprovalmodels', d: 'msdyn_flow_actionapprovalmodel' },
			objectid_msdyn_flow_approval: { b: 'objectid_msdyn_flow_approval', a: '_objectid_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval' },
			objectid_msdyn_flow_approvalrequest: { b: 'objectid_msdyn_flow_approvalrequest', a: '_objectid_value', c: 'msdyn_flow_approvalrequests', d: 'msdyn_flow_approvalrequest' },
			objectid_msdyn_flow_approvalresponse: { b: 'objectid_msdyn_flow_approvalresponse', a: '_objectid_value', c: 'msdyn_flow_approvalresponses', d: 'msdyn_flow_approvalresponse' },
			objectid_msdyn_flow_approvalstep: { b: 'objectid_msdyn_flow_approvalstep', a: '_objectid_value', c: 'msdyn_flow_approvalsteps', d: 'msdyn_flow_approvalstep' },
			objectid_msdyn_flow_awaitallactionapprovalmodel: { b: 'objectid_msdyn_flow_awaitallactionapprovalmodel', a: '_objectid_value', c: 'msdyn_flow_awaitallactionapprovalmodels', d: 'msdyn_flow_awaitallactionapprovalmodel' },
			objectid_msdyn_flow_awaitallapprovalmodel: { b: 'objectid_msdyn_flow_awaitallapprovalmodel', a: '_objectid_value', c: 'msdyn_flow_awaitallapprovalmodels', d: 'msdyn_flow_awaitallapprovalmodel' },
			objectid_msdyn_flow_basicapprovalmodel: { b: 'objectid_msdyn_flow_basicapprovalmodel', a: '_objectid_value', c: 'msdyn_flow_basicapprovalmodels', d: 'msdyn_flow_basicapprovalmodel' },
			objectid_msdyn_flow_flowapproval: { b: 'objectid_msdyn_flow_flowapproval', a: '_objectid_value', c: 'msdyn_flow_flowapprovals', d: 'msdyn_flow_flowapproval' },
			objectid_msdyn_helppage: { b: 'objectid_msdyn_helppage', a: '_objectid_value', c: 'msdyn_helppages', d: 'msdyn_helppage' },
			objectid_msdyn_insightsstorevirtualentity: { b: 'objectid_msdyn_insightsstorevirtualentity', a: '_objectid_value', c: 'msdyn_insightsstorevirtualentities', d: 'msdyn_insightsstorevirtualentity' },
			objectid_msdyn_integratedsearchprovider: { b: 'objectid_msdyn_integratedsearchprovider', a: '_objectid_value', c: 'msdyn_integratedsearchproviders', d: 'msdyn_integratedsearchprovider' },
			objectid_msdyn_kalanguagesetting: { b: 'objectid_msdyn_kalanguagesetting', a: '_objectid_value', c: 'msdyn_kalanguagesettings', d: 'msdyn_kalanguagesetting' },
			objectid_msdyn_kbattachment: { b: 'objectid_msdyn_kbattachment', a: '_objectid_value', c: 'msdyn_kbattachments', d: 'msdyn_kbattachment' },
			objectid_msdyn_kmfederatedsearchconfig: { b: 'objectid_msdyn_kmfederatedsearchconfig', a: '_objectid_value', c: 'msdyn_kmfederatedsearchconfigs', d: 'msdyn_kmfederatedsearchconfig' },
			objectid_msdyn_kmpersonalizationsetting: { b: 'objectid_msdyn_kmpersonalizationsetting', a: '_objectid_value', c: 'msdyn_kmpersonalizationsettings', d: 'msdyn_kmpersonalizationsetting' },
			objectid_msdyn_knowledgearticleimage: { b: 'objectid_msdyn_knowledgearticleimage', a: '_objectid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage' },
			objectid_msdyn_knowledgearticletemplate: { b: 'objectid_msdyn_knowledgearticletemplate', a: '_objectid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			objectid_msdyn_knowledgeassetconfiguration: { b: 'objectid_msdyn_knowledgeassetconfiguration', a: '_objectid_value', c: 'msdyn_knowledgeassetconfigurations', d: 'msdyn_knowledgeassetconfiguration' },
			objectid_msdyn_knowledgeconfiguration: { b: 'objectid_msdyn_knowledgeconfiguration', a: '_objectid_value', c: 'msdyn_knowledgeconfigurations', d: 'msdyn_knowledgeconfiguration' },
			objectid_msdyn_knowledgeinteractioninsight: { b: 'objectid_msdyn_knowledgeinteractioninsight', a: '_objectid_value', c: 'msdyn_knowledgeinteractioninsights', d: 'msdyn_knowledgeinteractioninsight' },
			objectid_msdyn_knowledgemanagementsetting: { b: 'objectid_msdyn_knowledgemanagementsetting', a: '_objectid_value', c: 'msdyn_knowledgemanagementsettings', d: 'msdyn_knowledgemanagementsetting' },
			objectid_msdyn_knowledgepersonalfilter: { b: 'objectid_msdyn_knowledgepersonalfilter', a: '_objectid_value', c: 'msdyn_knowledgepersonalfilters', d: 'msdyn_knowledgepersonalfilter' },
			objectid_msdyn_knowledgesearchfilter: { b: 'objectid_msdyn_knowledgesearchfilter', a: '_objectid_value', c: 'msdyn_knowledgesearchfilters', d: 'msdyn_knowledgesearchfilter' },
			objectid_msdyn_knowledgesearchinsight: { b: 'objectid_msdyn_knowledgesearchinsight', a: '_objectid_value', c: 'msdyn_knowledgesearchinsights', d: 'msdyn_knowledgesearchinsight' },
			objectid_msdyn_mobileapp: { b: 'objectid_msdyn_mobileapp', a: '_objectid_value', c: 'msdyn_mobileapps', d: 'msdyn_mobileapp' },
			objectid_msdyn_modulerundetail: { b: 'objectid_msdyn_modulerundetail', a: '_objectid_value', c: 'msdyn_modulerundetails', d: 'msdyn_modulerundetail' },
			objectid_msdyn_pmanalysishistory: { b: 'objectid_msdyn_pmanalysishistory', a: '_objectid_value', c: 'msdyn_pmanalysishistories', d: 'msdyn_pmanalysishistory' },
			objectid_msdyn_pmbusinessruleautomationconfig: { b: 'objectid_msdyn_pmbusinessruleautomationconfig', a: '_objectid_value', c: 'msdyn_pmbusinessruleautomationconfigs', d: 'msdyn_pmbusinessruleautomationconfig' },
			objectid_msdyn_pmcalendar: { b: 'objectid_msdyn_pmcalendar', a: '_objectid_value', c: 'msdyn_pmcalendars', d: 'msdyn_pmcalendar' },
			objectid_msdyn_pmcalendarversion: { b: 'objectid_msdyn_pmcalendarversion', a: '_objectid_value', c: 'msdyn_pmcalendarversions', d: 'msdyn_pmcalendarversion' },
			objectid_msdyn_pminferredtask: { b: 'objectid_msdyn_pminferredtask', a: '_objectid_value', c: 'msdyn_pminferredtasks', d: 'msdyn_pminferredtask' },
			objectid_msdyn_pmprocessextendedmetadataversion: { b: 'objectid_msdyn_pmprocessextendedmetadataversion', a: '_objectid_value', c: 'msdyn_pmprocessextendedmetadataversions', d: 'msdyn_pmprocessextendedmetadataversion' },
			objectid_msdyn_pmprocesstemplate: { b: 'objectid_msdyn_pmprocesstemplate', a: '_objectid_value', c: 'msdyn_pmprocesstemplates', d: 'msdyn_pmprocesstemplate' },
			objectid_msdyn_pmprocessusersettings: { b: 'objectid_msdyn_pmprocessusersettings', a: '_objectid_value', c: 'msdyn_pmprocessusersettingses', d: 'msdyn_pmprocessusersettings' },
			objectid_msdyn_pmprocessversion: { b: 'objectid_msdyn_pmprocessversion', a: '_objectid_value', c: 'msdyn_pmprocessversions', d: 'msdyn_pmprocessversion' },
			objectid_msdyn_pmrecording: { b: 'objectid_msdyn_pmrecording', a: '_objectid_value', c: 'msdyn_pmrecordings', d: 'msdyn_pmrecording' },
			objectid_msdyn_pmsimulation: { b: 'objectid_msdyn_pmsimulation', a: '_objectid_value', c: 'msdyn_pmsimulations', d: 'msdyn_pmsimulation' },
			objectid_msdyn_pmtemplate: { b: 'objectid_msdyn_pmtemplate', a: '_objectid_value', c: 'msdyn_pmtemplates', d: 'msdyn_pmtemplate' },
			objectid_msdyn_pmview: { b: 'objectid_msdyn_pmview', a: '_objectid_value', c: 'msdyn_pmviews', d: 'msdyn_pmview' },
			objectid_msdyn_richtextfile: { b: 'objectid_msdyn_richtextfile', a: '_objectid_value', c: 'msdyn_richtextfiles', d: 'msdyn_richtextfile' },
			objectid_msdyn_salesforcestructuredobject: { b: 'objectid_msdyn_salesforcestructuredobject', a: '_objectid_value', c: 'msdyn_salesforcestructuredobjects', d: 'msdyn_salesforcestructuredobject' },
			objectid_msdyn_salesforcestructuredqnaconfig: { b: 'objectid_msdyn_salesforcestructuredqnaconfig', a: '_objectid_value', c: 'msdyn_salesforcestructuredqnaconfigs', d: 'msdyn_salesforcestructuredqnaconfig' },
			objectid_msdyn_schedule: { b: 'objectid_msdyn_schedule', a: '_objectid_value', c: 'msdyn_schedules', d: 'msdyn_schedule' },
			objectid_msdyn_serviceconfiguration: { b: 'objectid_msdyn_serviceconfiguration', a: '_objectid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration' },
			objectid_msdyn_slakpi: { b: 'objectid_msdyn_slakpi', a: '_objectid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi' },
			objectid_msdyn_solutionhealthrule: { b: 'objectid_msdyn_solutionhealthrule', a: '_objectid_value', c: 'msdyn_solutionhealthrules', d: 'msdyn_solutionhealthrule' },
			objectid_msdyn_solutionhealthruleargument: { b: 'objectid_msdyn_solutionhealthruleargument', a: '_objectid_value', c: 'msdyn_solutionhealthrulearguments', d: 'msdyn_solutionhealthruleargument' },
			objectid_msdyn_solutionhealthruleset: { b: 'objectid_msdyn_solutionhealthruleset', a: '_objectid_value', c: 'msdyn_solutionhealthrulesets', d: 'msdyn_solutionhealthruleset' },
			objectid_msdyn_tour: { b: 'objectid_msdyn_tour', a: '_objectid_value', c: 'msdyn_tours', d: 'msdyn_tour' },
			objectid_msdyn_virtualtablecolumncandidate: { b: 'objectid_msdyn_virtualtablecolumncandidate', a: '_objectid_value', c: 'msdyn_virtualtablecolumncandidates', d: 'msdyn_virtualtablecolumncandidate' },
			objectid_msdyn_workflowactionstatus: { b: 'objectid_msdyn_workflowactionstatus', a: '_objectid_value', c: 'msdyn_workflowactionstatuses', d: 'msdyn_workflowactionstatus' },
			objectid_msgraphresourcetosubscription: { b: 'objectid_msgraphresourcetosubscription', a: '_objectid_value', c: 'msgraphresourcetosubscriptions', d: 'msgraphresourcetosubscription' },
			objectid_mspcat_catalogsubmissionfiles: { b: 'objectid_mspcat_catalogsubmissionfiles', a: '_objectid_value', c: 'mspcat_catalogsubmissionfileses', d: 'mspcat_catalogsubmissionfiles' },
			objectid_mspcat_packagestore: { b: 'objectid_mspcat_packagestore', a: '_objectid_value', c: 'mspcat_packagestores', d: 'mspcat_packagestore' },
			objectid_notification: { b: 'objectid_notification', a: '_objectid_value', c: 'notifications', d: 'notification' },
			objectid_organization: { b: 'objectid_organization', a: '_objectid_value', c: 'organizations', d: 'organization' },
			objectid_organizationdatasyncfnostate: { b: 'objectid_organizationdatasyncfnostate', a: '_objectid_value', c: 'organizationdatasyncfnostates', d: 'organizationdatasyncfnostate' },
			objectid_organizationdatasyncstate: { b: 'objectid_organizationdatasyncstate', a: '_objectid_value', c: 'organizationdatasyncstates', d: 'organizationdatasyncstate' },
			objectid_organizationdatasyncsubscription: { b: 'objectid_organizationdatasyncsubscription', a: '_objectid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription' },
			objectid_organizationdatasyncsubscriptionentity: { b: 'objectid_organizationdatasyncsubscriptionentity', a: '_objectid_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity' },
			objectid_organizationdatasyncsubscriptionfnotable: { b: 'objectid_organizationdatasyncsubscriptionfnotable', a: '_objectid_value', c: 'organizationdatasyncsubscriptionfnotables', d: 'organizationdatasyncsubscriptionfnotable' },
			objectid_organizationsetting: { b: 'objectid_organizationsetting', a: '_objectid_value', c: 'organizationsettings', d: 'organizationsetting' },
			objectid_organizationstatistic: { b: 'objectid_organizationstatistic', a: '_objectid_value', c: 'organizationstatistics', d: 'organizationstatistic' },
			objectid_ownermapping: { b: 'objectid_ownermapping', a: '_objectid_value', c: 'ownermappings', d: 'ownermapping' },
			objectid_package: { b: 'objectid_package', a: '_objectid_value', c: 'packages', d: 'package' },
			objectid_packagehistory: { b: 'objectid_packagehistory', a: '_objectid_value', c: 'packagehistories', d: 'packagehistory' },
			objectid_pdfsetting: { b: 'objectid_pdfsetting', a: '_objectid_value', c: 'pdfsettings', d: 'pdfsetting' },
			objectid_phonecall: { b: 'objectid_phonecall', a: '_objectid_value', c: 'phonecalls', d: 'phonecall' },
			objectid_picklistmapping: { b: 'objectid_picklistmapping', a: '_objectid_value', c: 'picklistmappings', d: 'picklistmapping' },
			objectid_plannerbusinessscenario: { b: 'objectid_plannerbusinessscenario', a: '_objectid_value', c: 'plannerbusinessscenarios', d: 'plannerbusinessscenario' },
			objectid_plannersyncaction: { b: 'objectid_plannersyncaction', a: '_objectid_value', c: 'plannersyncactions', d: 'plannersyncaction' },
			objectid_pluginassembly: { b: 'objectid_pluginassembly', a: '_objectid_value', c: 'pluginassemblies', d: 'pluginassembly' },
			objectid_pluginpackage: { b: 'objectid_pluginpackage', a: '_objectid_value', c: 'pluginpackages', d: 'pluginpackage' },
			objectid_plugintype: { b: 'objectid_plugintype', a: '_objectid_value', c: 'plugintypes', d: 'plugintype' },
			objectid_plugintypestatistic: { b: 'objectid_plugintypestatistic', a: '_objectid_value', c: 'plugintypestatistics', d: 'plugintypestatistic' },
			objectid_powerbidataset: { b: 'objectid_powerbidataset', a: '_objectid_value', c: 'powerbidatasets', d: 'powerbidataset' },
			objectid_powerbidatasetapdx: { b: 'objectid_powerbidatasetapdx', a: '_objectid_value', c: 'powerbidatasetapdxes', d: 'powerbidatasetapdx' },
			objectid_powerbimashupparameter: { b: 'objectid_powerbimashupparameter', a: '_objectid_value', c: 'powerbimashupparameters', d: 'powerbimashupparameter' },
			objectid_powerbireport: { b: 'objectid_powerbireport', a: '_objectid_value', c: 'powerbireports', d: 'powerbireport' },
			objectid_powerbireportapdx: { b: 'objectid_powerbireportapdx', a: '_objectid_value', c: 'powerbireportapdxes', d: 'powerbireportapdx' },
			objectid_powerfxrule: { b: 'objectid_powerfxrule', a: '_objectid_value', c: 'powerfxrules', d: 'powerfxrule' },
			objectid_powerpagecomponent: { b: 'objectid_powerpagecomponent', a: '_objectid_value', c: 'powerpagecomponents', d: 'powerpagecomponent' },
			objectid_powerpagesite: { b: 'objectid_powerpagesite', a: '_objectid_value', c: 'powerpagesites', d: 'powerpagesite' },
			objectid_powerpagesitelanguage: { b: 'objectid_powerpagesitelanguage', a: '_objectid_value', c: 'powerpagesitelanguages', d: 'powerpagesitelanguage' },
			objectid_powerpagesitepublished: { b: 'objectid_powerpagesitepublished', a: '_objectid_value', c: 'powerpagesitepublisheds', d: 'powerpagesitepublished' },
			objectid_powerpagesscanreport: { b: 'objectid_powerpagesscanreport', a: '_objectid_value', c: 'powerpagesscanreports', d: 'powerpagesscanreport' },
			objectid_principalattributeaccessmap: { b: 'objectid_principalattributeaccessmap', a: '_objectid_value', c: 'principalattributeaccessmaps', d: 'principalattributeaccessmap' },
			objectid_principalentitymap: { b: 'objectid_principalentitymap', a: '_objectid_value', c: '', d: 'principalentitymap' },
			objectid_principalobjectaccess: { b: 'objectid_principalobjectaccess', a: '_objectid_value', c: '', d: 'principalobjectaccess' },
			objectid_principalobjectattributeaccess: { b: 'objectid_principalobjectattributeaccess', a: '_objectid_value', c: 'principalobjectattributeaccesses', d: 'principalobjectattributeaccess' },
			objectid_privilege: { b: 'objectid_privilege', a: '_objectid_value', c: 'privileges', d: 'privilege' },
			objectid_privilegecheckerlog: { b: 'objectid_privilegecheckerlog', a: '_objectid_value', c: 'privilegecheckerlogs', d: 'privilegecheckerlog' },
			objectid_privilegecheckerrun: { b: 'objectid_privilegecheckerrun', a: '_objectid_value', c: 'privilegecheckerruns', d: 'privilegecheckerrun' },
			objectid_privilegesremovalsetting: { b: 'objectid_privilegesremovalsetting', a: '_objectid_value', c: 'privilegesremovalsettings', d: 'privilegesremovalsetting' },
			objectid_processsession: { b: 'objectid_processsession', a: '_objectid_value', c: 'processsessions', d: 'processsession' },
			objectid_processstageparameter: { b: 'objectid_processstageparameter', a: '_objectid_value', c: 'processstageparameters', d: 'processstageparameter' },
			objectid_provisionlanguageforuser: { b: 'objectid_provisionlanguageforuser', a: '_objectid_value', c: 'provisionlanguageforusers', d: 'provisionlanguageforuser' },
			objectid_publisher: { b: 'objectid_publisher', a: '_objectid_value', c: 'publishers', d: 'publisher' },
			objectid_publisheraddress: { b: 'objectid_publisheraddress', a: '_objectid_value', c: 'publisheraddresses', d: 'publisheraddress' },
			objectid_queue: { b: 'objectid_queue', a: '_objectid_value', c: 'queues', d: 'queue' },
			objectid_queueitem: { b: 'objectid_queueitem', a: '_objectid_value', c: 'queueitems', d: 'queueitem' },
			objectid_reconciliationentityinfo: { b: 'objectid_reconciliationentityinfo', a: '_objectid_value', c: 'reconciliationentityinfos', d: 'reconciliationentityinfo' },
			objectid_reconciliationentitystepinfo: { b: 'objectid_reconciliationentitystepinfo', a: '_objectid_value', c: 'reconciliationentitystepinfos', d: 'reconciliationentitystepinfo' },
			objectid_reconciliationinfo: { b: 'objectid_reconciliationinfo', a: '_objectid_value', c: 'reconciliationinfos', d: 'reconciliationinfo' },
			objectid_recordfilter: { b: 'objectid_recordfilter', a: '_objectid_value', c: 'recordfilters', d: 'recordfilter' },
			objectid_recurringappointmentmaster: { b: 'objectid_recurringappointmentmaster', a: '_objectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			objectid_recyclebinconfig: { b: 'objectid_recyclebinconfig', a: '_objectid_value', c: 'recyclebinconfigs', d: 'recyclebinconfig' },
			objectid_relationshipattribute: { b: 'objectid_relationshipattribute', a: '_objectid_value', c: 'relationshipattributes', d: 'relationshipattribute' },
			objectid_relationshiprole: { b: 'objectid_relationshiprole', a: '_objectid_value', c: 'relationshiproles', d: 'relationshiprole' },
			objectid_relationshiprolemap: { b: 'objectid_relationshiprolemap', a: '_objectid_value', c: 'relationshiprolemaps', d: 'relationshiprolemap' },
			objectid_report: { b: 'objectid_report', a: '_objectid_value', c: 'reports', d: 'report' },
			objectid_reportcategory: { b: 'objectid_reportcategory', a: '_objectid_value', c: 'reportcategories', d: 'reportcategory' },
			objectid_reportentity: { b: 'objectid_reportentity', a: '_objectid_value', c: 'reportentities', d: 'reportentity' },
			objectid_reportlink: { b: 'objectid_reportlink', a: '_objectid_value', c: 'reportlinks', d: 'reportlink' },
			objectid_reportparameter: { b: 'objectid_reportparameter', a: '_objectid_value', c: 'reportparameters', d: 'reportparameter' },
			objectid_reportvisibility: { b: 'objectid_reportvisibility', a: '_objectid_value', c: 'reportvisibilities', d: 'reportvisibility' },
			objectid_retaineddataexcel: { b: 'objectid_retaineddataexcel', a: '_objectid_value', c: 'retaineddataexcels', d: 'retaineddataexcel' },
			objectid_retentioncleanupinfo: { b: 'objectid_retentioncleanupinfo', a: '_objectid_value', c: 'retentioncleanupinfos', d: 'retentioncleanupinfo' },
			objectid_retentioncleanupoperation: { b: 'objectid_retentioncleanupoperation', a: '_objectid_value', c: 'retentioncleanupoperations', d: 'retentioncleanupoperation' },
			objectid_retentionconfig: { b: 'objectid_retentionconfig', a: '_objectid_value', c: 'retentionconfigs', d: 'retentionconfig' },
			objectid_retentionfailuredetail: { b: 'objectid_retentionfailuredetail', a: '_objectid_value', c: 'retentionfailuredetails', d: 'retentionfailuredetail' },
			objectid_retentionoperation: { b: 'objectid_retentionoperation', a: '_objectid_value', c: 'retentionoperations', d: 'retentionoperation' },
			objectid_retentionoperationdetail: { b: 'objectid_retentionoperationdetail', a: '_objectid_value', c: 'retentionoperationdetails', d: 'retentionoperationdetail' },
			objectid_revokeinheritedaccessrecordstracker: { b: 'objectid_revokeinheritedaccessrecordstracker', a: '_objectid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker' },
			objectid_ribboncommand: { b: 'objectid_ribboncommand', a: '_objectid_value', c: 'ribboncommands', d: 'ribboncommand' },
			objectid_ribboncontextgroup: { b: 'objectid_ribboncontextgroup', a: '_objectid_value', c: 'ribboncontextgroups', d: 'ribboncontextgroup' },
			objectid_ribboncustomization: { b: 'objectid_ribboncustomization', a: '_objectid_value', c: 'ribboncustomizations', d: 'ribboncustomization' },
			objectid_ribbondiff: { b: 'objectid_ribbondiff', a: '_objectid_value', c: 'ribbondiffs', d: 'ribbondiff' },
			objectid_ribbonrule: { b: 'objectid_ribbonrule', a: '_objectid_value', c: 'ribbonrules', d: 'ribbonrule' },
			objectid_ribbontabtocommandmap: { b: 'objectid_ribbontabtocommandmap', a: '_objectid_value', c: 'ribbontabtocommandmaps', d: 'ribbontabtocommandmap' },
			objectid_role: { b: 'objectid_role', a: '_objectid_value', c: 'roles', d: 'role' },
			objectid_roleeditorlayout: { b: 'objectid_roleeditorlayout', a: '_objectid_value', c: 'roleeditorlayouts', d: 'roleeditorlayout' },
			objectid_roletemplate: { b: 'objectid_roletemplate', a: '_objectid_value', c: 'roletemplates', d: 'roletemplate' },
			objectid_rollupfield: { b: 'objectid_rollupfield', a: '_objectid_value', c: 'rollupfields', d: 'rollupfield' },
			objectid_routingrule: { b: 'objectid_routingrule', a: '_objectid_value', c: 'routingrules', d: 'routingrule' },
			objectid_routingruleitem: { b: 'objectid_routingruleitem', a: '_objectid_value', c: 'routingruleitems', d: 'routingruleitem' },
			objectid_savedquery: { b: 'objectid_savedquery', a: '_objectid_value', c: 'savedqueries', d: 'savedquery' },
			objectid_savedqueryvisualization: { b: 'objectid_savedqueryvisualization', a: '_objectid_value', c: 'savedqueryvisualizations', d: 'savedqueryvisualization' },
			objectid_sdkmessage: { b: 'objectid_sdkmessage', a: '_objectid_value', c: 'sdkmessages', d: 'sdkmessage' },
			objectid_sdkmessagefilter: { b: 'objectid_sdkmessagefilter', a: '_objectid_value', c: 'sdkmessagefilters', d: 'sdkmessagefilter' },
			objectid_sdkmessagepair: { b: 'objectid_sdkmessagepair', a: '_objectid_value', c: 'sdkmessagepairs', d: 'sdkmessagepair' },
			objectid_sdkmessageprocessingstep: { b: 'objectid_sdkmessageprocessingstep', a: '_objectid_value', c: 'sdkmessageprocessingsteps', d: 'sdkmessageprocessingstep' },
			objectid_sdkmessageprocessingstepimage: { b: 'objectid_sdkmessageprocessingstepimage', a: '_objectid_value', c: 'sdkmessageprocessingstepimages', d: 'sdkmessageprocessingstepimage' },
			objectid_sdkmessageprocessingstepsecureconfig: { b: 'objectid_sdkmessageprocessingstepsecureconfig', a: '_objectid_value', c: 'sdkmessageprocessingstepsecureconfigs', d: 'sdkmessageprocessingstepsecureconfig' },
			objectid_sdkmessagerequest: { b: 'objectid_sdkmessagerequest', a: '_objectid_value', c: 'sdkmessagerequests', d: 'sdkmessagerequest' },
			objectid_sdkmessagerequestfield: { b: 'objectid_sdkmessagerequestfield', a: '_objectid_value', c: 'sdkmessagerequestfields', d: 'sdkmessagerequestfield' },
			objectid_sdkmessageresponse: { b: 'objectid_sdkmessageresponse', a: '_objectid_value', c: 'sdkmessageresponses', d: 'sdkmessageresponse' },
			objectid_sdkmessageresponsefield: { b: 'objectid_sdkmessageresponsefield', a: '_objectid_value', c: 'sdkmessageresponsefields', d: 'sdkmessageresponsefield' },
			objectid_searchattributesettings: { b: 'objectid_searchattributesettings', a: '_objectid_value', c: 'searchattributesettingses', d: 'searchattributesettings' },
			objectid_searchcustomanalyzer: { b: 'objectid_searchcustomanalyzer', a: '_objectid_value', c: 'searchcustomanalyzers', d: 'searchcustomanalyzer' },
			objectid_searchrelationshipsettings: { b: 'objectid_searchrelationshipsettings', a: '_objectid_value', c: 'searchrelationshipsettingses', d: 'searchrelationshipsettings' },
			objectid_serviceendpoint: { b: 'objectid_serviceendpoint', a: '_objectid_value', c: 'serviceendpoints', d: 'serviceendpoint' },
			objectid_serviceplan: { b: 'objectid_serviceplan', a: '_objectid_value', c: 'serviceplans', d: 'serviceplan' },
			objectid_serviceplancustomcontrol: { b: 'objectid_serviceplancustomcontrol', a: '_objectid_value', c: '', d: 'serviceplancustomcontrol' },
			objectid_serviceplanmapping: { b: 'objectid_serviceplanmapping', a: '_objectid_value', c: 'serviceplanmappings', d: 'serviceplanmapping' },
			objectid_settingdefinition: { b: 'objectid_settingdefinition', a: '_objectid_value', c: 'settingdefinitions', d: 'settingdefinition' },
			objectid_sharedlinksetting: { b: 'objectid_sharedlinksetting', a: '_objectid_value', c: 'sharedlinksettings', d: 'sharedlinksetting' },
			objectid_sharedobject: { b: 'objectid_sharedobject', a: '_objectid_value', c: 'sharedobjects', d: 'sharedobject' },
			objectid_sharedworkspace: { b: 'objectid_sharedworkspace', a: '_objectid_value', c: 'sharedworkspaces', d: 'sharedworkspace' },
			objectid_sharedworkspacepool: { b: 'objectid_sharedworkspacepool', a: '_objectid_value', c: 'sharedworkspacepools', d: 'sharedworkspacepool' },
			objectid_sharepointdocumentlocation: { b: 'objectid_sharepointdocumentlocation', a: '_objectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			objectid_sharepointsite: { b: 'objectid_sharepointsite', a: '_objectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			objectid_sideloadedaiplugin: { b: 'objectid_sideloadedaiplugin', a: '_objectid_value', c: 'sideloadedaiplugins', d: 'sideloadedaiplugin' },
			objectid_sitemap: { b: 'objectid_sitemap', a: '_objectid_value', c: 'sitemaps', d: 'sitemap' },
			objectid_sla: { b: 'objectid_sla', a: '_objectid_value', c: 'slas', d: 'sla' },
			objectid_socialactivity: { b: 'objectid_socialactivity', a: '_objectid_value', c: 'socialactivities', d: 'socialactivity' },
			objectid_solution: { b: 'objectid_solution', a: '_objectid_value', c: 'solutions', d: 'solution' },
			objectid_solutioncomponent: { b: 'objectid_solutioncomponent', a: '_objectid_value', c: 'solutioncomponentss', d: 'solutioncomponent' },
			objectid_solutioncomponentattributeconfiguration: { b: 'objectid_solutioncomponentattributeconfiguration', a: '_objectid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration' },
			objectid_solutioncomponentbatchconfiguration: { b: 'objectid_solutioncomponentbatchconfiguration', a: '_objectid_value', c: 'solutioncomponentbatchconfigurations', d: 'solutioncomponentbatchconfiguration' },
			objectid_solutioncomponentconfiguration: { b: 'objectid_solutioncomponentconfiguration', a: '_objectid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration' },
			objectid_solutioncomponentrelationshipconfiguration: { b: 'objectid_solutioncomponentrelationshipconfiguration', a: '_objectid_value', c: 'solutioncomponentrelationshipconfigurations', d: 'solutioncomponentrelationshipconfiguration' },
			objectid_stagedentity: { b: 'objectid_stagedentity', a: '_objectid_value', c: 'stagedentities', d: 'stagedentity' },
			objectid_stagedentityattribute: { b: 'objectid_stagedentityattribute', a: '_objectid_value', c: 'stagedentityattributes', d: 'stagedentityattribute' },
			objectid_stagedmetadataasyncoperation: { b: 'objectid_stagedmetadataasyncoperation', a: '_objectid_value', c: 'stagedmetadataasyncoperations', d: 'stagedmetadataasyncoperation' },
			objectid_stagesolutionupload: { b: 'objectid_stagesolutionupload', a: '_objectid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload' },
			objectid_statusmap: { b: 'objectid_statusmap', a: '_objectid_value', c: 'statusmaps', d: 'statusmap' },
			objectid_stringmap: { b: 'objectid_stringmap', a: '_objectid_value', c: 'stringmaps', d: 'stringmap' },
			objectid_subject: { b: 'objectid_subject', a: '_objectid_value', c: 'subjects', d: 'subject' },
			objectid_subscription: { b: 'objectid_subscription', a: '_objectid_value', c: 'subscriptions', d: 'subscription' },
			objectid_subscriptionmanuallytrackedobject: { b: 'objectid_subscriptionmanuallytrackedobject', a: '_objectid_value', c: 'subscriptionmanuallytrackedobjects', d: 'subscriptionmanuallytrackedobject' },
			objectid_subscriptionsyncinfo: { b: 'objectid_subscriptionsyncinfo', a: '_objectid_value', c: 'subscriptionsyncinfos', d: 'subscriptionsyncinfo' },
			objectid_supportusertable: { b: 'objectid_supportusertable', a: '_objectid_value', c: 'supportusertables', d: 'supportusertable' },
			objectid_synapsedatabase: { b: 'objectid_synapsedatabase', a: '_objectid_value', c: 'synapsedatabases', d: 'synapsedatabase' },
			objectid_synapselinkexternaltablestate: { b: 'objectid_synapselinkexternaltablestate', a: '_objectid_value', c: 'synapselinkexternaltablestates', d: 'synapselinkexternaltablestate' },
			objectid_synapselinkprofile: { b: 'objectid_synapselinkprofile', a: '_objectid_value', c: 'synapselinkprofiles', d: 'synapselinkprofile' },
			objectid_synapselinkprofileentity: { b: 'objectid_synapselinkprofileentity', a: '_objectid_value', c: 'synapselinkprofileentities', d: 'synapselinkprofileentity' },
			objectid_synapselinkprofileentitystate: { b: 'objectid_synapselinkprofileentitystate', a: '_objectid_value', c: 'synapselinkprofileentitystates', d: 'synapselinkprofileentitystate' },
			objectid_synapselinkschedule: { b: 'objectid_synapselinkschedule', a: '_objectid_value', c: 'synapselinkschedules', d: 'synapselinkschedule' },
			objectid_systemuser: { b: 'objectid_systemuser', a: '_objectid_value', c: 'systemusers', d: 'systemuser' },
			objectid_systemuserauthorizationchangetracker: { b: 'objectid_systemuserauthorizationchangetracker', a: '_objectid_value', c: 'systemuserauthorizationchangetrackers', d: 'systemuserauthorizationchangetracker' },
			objectid_systemuserbusinessunitentitymap: { b: 'objectid_systemuserbusinessunitentitymap', a: '_objectid_value', c: '', d: 'systemuserbusinessunitentitymap' },
			objectid_task: { b: 'objectid_task', a: '_objectid_value', c: 'tasks', d: 'task' },
			objectid_tdsmetadata: { b: 'objectid_tdsmetadata', a: '_objectid_value', c: 'tdsmetadatas', d: 'tdsmetadata' },
			objectid_team: { b: 'objectid_team', a: '_objectid_value', c: 'teams', d: 'team' },
			objectid_teammembership: { b: 'objectid_teammembership', a: '_objectid_value', c: '', d: 'teammembership' },
			objectid_teammobileofflineprofilemembership: { b: 'objectid_teammobileofflineprofilemembership', a: '_objectid_value', c: 'teammobileofflineprofilememberships', d: 'teammobileofflineprofilemembership' },
			objectid_template: { b: 'objectid_template', a: '_objectid_value', c: 'templates', d: 'template' },
			objectid_territory: { b: 'objectid_territory', a: '_objectid_value', c: 'territories', d: 'territory' },
			objectid_theme: { b: 'objectid_theme', a: '_objectid_value', c: 'themes', d: 'theme' },
			objectid_timezonedefinition: { b: 'objectid_timezonedefinition', a: '_objectid_value', c: 'timezonedefinitions', d: 'timezonedefinition' },
			objectid_timezonelocalizedname: { b: 'objectid_timezonelocalizedname', a: '_objectid_value', c: 'timezonelocalizednames', d: 'timezonelocalizedname' },
			objectid_timezonerule: { b: 'objectid_timezonerule', a: '_objectid_value', c: 'timezonerules', d: 'timezonerule' },
			objectid_transactioncurrency: { b: 'objectid_transactioncurrency', a: '_objectid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			objectid_transformationmapping: { b: 'objectid_transformationmapping', a: '_objectid_value', c: 'transformationmappings', d: 'transformationmapping' },
			objectid_transformationparametermapping: { b: 'objectid_transformationparametermapping', a: '_objectid_value', c: 'transformationparametermappings', d: 'transformationparametermapping' },
			objectid_unresolvedaddress: { b: 'objectid_unresolvedaddress', a: '_objectid_value', c: 'unresolvedaddresses', d: 'unresolvedaddress' },
			objectid_userentityuisettings: { b: 'objectid_userentityuisettings', a: '_objectid_value', c: 'userentityuisettingses', d: 'userentityuisettings' },
			objectid_userfiscalcalendar: { b: 'objectid_userfiscalcalendar', a: '_objectid_value', c: 'userfiscalcalendars', d: 'userfiscalcalendar' },
			objectid_userform: { b: 'objectid_userform', a: '_objectid_value', c: 'userforms', d: 'userform' },
			objectid_usermapping: { b: 'objectid_usermapping', a: '_objectid_value', c: 'usermappings', d: 'usermapping' },
			objectid_usermobileofflineprofilemembership: { b: 'objectid_usermobileofflineprofilemembership', a: '_objectid_value', c: 'usermobileofflineprofilememberships', d: 'usermobileofflineprofilemembership' },
			objectid_userquery: { b: 'objectid_userquery', a: '_objectid_value', c: 'userqueries', d: 'userquery' },
			objectid_userqueryvisualization: { b: 'objectid_userqueryvisualization', a: '_objectid_value', c: 'userqueryvisualizations', d: 'userqueryvisualization' },
			objectid_userrating: { b: 'objectid_userrating', a: '_objectid_value', c: 'userratings', d: 'userrating' },
			objectid_viewasexamplequestion: { b: 'objectid_viewasexamplequestion', a: '_objectid_value', c: 'viewasexamplequestions', d: 'viewasexamplequestion' },
			objectid_virtualentitymetadata: { b: 'objectid_virtualentitymetadata', a: '_objectid_value', c: 'virtualentitymetadatas', d: 'virtualentitymetadata' },
			objectid_webresource: { b: 'objectid_webresource', a: '_objectid_value', c: 'webresources', d: 'webresource' },
			objectid_webwizard: { b: 'objectid_webwizard', a: '_objectid_value', c: 'webwizards', d: 'webwizard' },
			objectid_wizardaccessprivilege: { b: 'objectid_wizardaccessprivilege', a: '_objectid_value', c: 'wizardaccessprivileges', d: 'wizardaccessprivilege' },
			objectid_wizardpage: { b: 'objectid_wizardpage', a: '_objectid_value', c: 'wizardpages', d: 'wizardpage' },
			objectid_workflow: { b: 'objectid_workflow', a: '_objectid_value', c: 'workflows', d: 'workflow' },
			objectid_workflowbinary: { b: 'objectid_workflowbinary', a: '_objectid_value', c: 'workflowbinaries', d: 'workflowbinary' },
			objectid_workflowdependency: { b: 'objectid_workflowdependency', a: '_objectid_value', c: 'workflowdependencies', d: 'workflowdependency' },
			objectid_workflowlog: { b: 'objectid_workflowlog', a: '_objectid_value', c: 'workflowlogs', d: 'workflowlog' },
			objectid_workflowwaitsubscription: { b: 'objectid_workflowwaitsubscription', a: '_objectid_value', c: 'workflowwaitsubscriptions', d: 'workflowwaitsubscription' },
			objectid_workqueue: { b: 'objectid_workqueue', a: '_objectid_value', c: 'workqueues', d: 'workqueue' },
			objectid_workqueueitem: { b: 'objectid_workqueueitem', a: '_objectid_value', c: 'workqueueitems', d: 'workqueueitem' },
			ObjectTypeCode: { a: 'objecttypecode' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PersonalCategories: { a: 'personalcategories' },
			ReminderSet: { a: 'reminderset' },
			ReminderTime_UtcDateAndTime: { a: 'remindertime' },
			StartTime_UtcDateAndTime: { a: 'starttime' },
			ToDoItemFlags: { a: 'todoitemflags' },
			ToDoOrdinalDate_UtcDateAndTime: { a: 'todoordinaldate' },
			ToDoSubOrdinal: { a: 'todosubordinal' },
			ToDoTitle: { a: 'todotitle' },
			UserEntityInstanceDataId: { a: 'userentityinstancedataid' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var userentityinstancedata = {};
		userentityinstancedata.ODataEntity = e;
		userentityinstancedata.FormattedValue = {};
		for (var field in _userentityinstancedata) {
			var a = _userentityinstancedata[field].a;
			var b = _userentityinstancedata[field].b;
			var c = _userentityinstancedata[field].c;
			var d = _userentityinstancedata[field].d;
			var g = _userentityinstancedata[field].g;
			var r = _userentityinstancedata[field].r;
			webApiField(userentityinstancedata, field, e, a, b, c, d, r, u, g);
		}
		userentityinstancedata.Entity = u;
		userentityinstancedata.EntityName = 'userentityinstancedata';
		userentityinstancedata.EntityCollectionName = 'userentityinstancedatas';
		userentityinstancedata['@odata.etag'] = e['@odata.etag'];
		userentityinstancedata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		userentityinstancedata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return userentityinstancedata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.UserEntityInstanceData = {
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SyncErrorApi = function (e) {
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
		var _syncerror = {
			Action: { a: 'action' },
			ActionData: { a: 'actiondata' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ErrorCode: { a: 'errorcode' },
			ErrorDetail: { a: 'errordetail' },
			ErrorMessage: { a: 'errormessage' },
			ErrorTime_UtcDateAndTime: { a: 'errortime' },
			ErrorType: { a: 'errortype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			regardingobjectid_account_syncerror: { b: 'regardingobjectid_account_syncerror', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_activityfileattachment: { b: 'regardingobjectid_activityfileattachment', a: '_regardingobjectid_value', c: 'activityfileattachments', d: 'activityfileattachment' },
			regardingobjectid_activitymimeattachment_syncerror: { b: 'regardingobjectid_activitymimeattachment_syncerror', a: '_regardingobjectid_value', c: 'activitymimeattachments', d: 'activitymimeattachment' },
			regardingobjectid_activityparty_syncerror: { b: 'regardingobjectid_activityparty_syncerror', a: '_regardingobjectid_value', c: 'activityparties', d: 'activityparty' },
			regardingobjectid_adx_externalidentity: { b: 'regardingobjectid_adx_externalidentity', a: '_regardingobjectid_value', c: 'adx_externalidentities', d: 'adx_externalidentity' },
			regardingobjectid_adx_invitation: { b: 'regardingobjectid_adx_invitation', a: '_regardingobjectid_value', c: 'adx_invitations', d: 'adx_invitation' },
			regardingobjectid_adx_inviteredemption: { b: 'regardingobjectid_adx_inviteredemption', a: '_regardingobjectid_value', c: 'adx_inviteredemptions', d: 'adx_inviteredemption' },
			regardingobjectid_adx_portalcomment: { b: 'regardingobjectid_adx_portalcomment', a: '_regardingobjectid_value', c: 'adx_portalcomments', d: 'adx_portalcomment' },
			regardingobjectid_adx_setting: { b: 'regardingobjectid_adx_setting', a: '_regardingobjectid_value', c: 'adx_settings', d: 'adx_setting' },
			regardingobjectid_adx_webformsession: { b: 'regardingobjectid_adx_webformsession', a: '_regardingobjectid_value', c: 'adx_webformsessions', d: 'adx_webformsession' },
			regardingobjectid_aicopilot: { b: 'regardingobjectid_aicopilot', a: '_regardingobjectid_value', c: 'aicopilots', d: 'aicopilot' },
			regardingobjectid_aiplugin: { b: 'regardingobjectid_aiplugin', a: '_regardingobjectid_value', c: 'aiplugins', d: 'aiplugin' },
			regardingobjectid_aipluginauth: { b: 'regardingobjectid_aipluginauth', a: '_regardingobjectid_value', c: 'aipluginauths', d: 'aipluginauth' },
			regardingobjectid_aipluginconversationstarter: { b: 'regardingobjectid_aipluginconversationstarter', a: '_regardingobjectid_value', c: 'aipluginconversationstarters', d: 'aipluginconversationstarter' },
			regardingobjectid_aipluginconversationstartermapping: { b: 'regardingobjectid_aipluginconversationstartermapping', a: '_regardingobjectid_value', c: 'aipluginconversationstartermappings', d: 'aipluginconversationstartermapping' },
			regardingobjectid_aipluginexternalschema: { b: 'regardingobjectid_aipluginexternalschema', a: '_regardingobjectid_value', c: 'aipluginexternalschemas', d: 'aipluginexternalschema' },
			regardingobjectid_aipluginexternalschemaproperty: { b: 'regardingobjectid_aipluginexternalschemaproperty', a: '_regardingobjectid_value', c: 'aipluginexternalschemaproperties', d: 'aipluginexternalschemaproperty' },
			regardingobjectid_aiplugingovernance: { b: 'regardingobjectid_aiplugingovernance', a: '_regardingobjectid_value', c: 'aiplugingovernances', d: 'aiplugingovernance' },
			regardingobjectid_aiplugingovernanceext: { b: 'regardingobjectid_aiplugingovernanceext', a: '_regardingobjectid_value', c: 'aiplugingovernanceexts', d: 'aiplugingovernanceext' },
			regardingobjectid_aiplugininstance: { b: 'regardingobjectid_aiplugininstance', a: '_regardingobjectid_value', c: 'aiplugininstances', d: 'aiplugininstance' },
			regardingobjectid_aipluginoperation: { b: 'regardingobjectid_aipluginoperation', a: '_regardingobjectid_value', c: 'aipluginoperations', d: 'aipluginoperation' },
			regardingobjectid_aipluginoperationparameter: { b: 'regardingobjectid_aipluginoperationparameter', a: '_regardingobjectid_value', c: 'aipluginoperationparameters', d: 'aipluginoperationparameter' },
			regardingobjectid_aipluginoperationresponsetemplate: { b: 'regardingobjectid_aipluginoperationresponsetemplate', a: '_regardingobjectid_value', c: 'aipluginoperationresponsetemplates', d: 'aipluginoperationresponsetemplate' },
			regardingobjectid_aiplugintitle: { b: 'regardingobjectid_aiplugintitle', a: '_regardingobjectid_value', c: 'aiplugintitles', d: 'aiplugintitle' },
			regardingobjectid_aipluginusersetting: { b: 'regardingobjectid_aipluginusersetting', a: '_regardingobjectid_value', c: 'aipluginusersettings', d: 'aipluginusersetting' },
			regardingobjectid_annotation_syncerror: { b: 'regardingobjectid_annotation_syncerror', a: '_regardingobjectid_value', c: 'annotations', d: 'annotation' },
			regardingobjectid_appaction: { b: 'regardingobjectid_appaction', a: '_regardingobjectid_value', c: 'appactions', d: 'appaction' },
			regardingobjectid_appactionmigration: { b: 'regardingobjectid_appactionmigration', a: '_regardingobjectid_value', c: 'appactionmigrations', d: 'appactionmigration' },
			regardingobjectid_appactionrule: { b: 'regardingobjectid_appactionrule', a: '_regardingobjectid_value', c: 'appactionrules', d: 'appactionrule' },
			regardingobjectid_appelement: { b: 'regardingobjectid_appelement', a: '_regardingobjectid_value', c: 'appelements', d: 'appelement' },
			regardingobjectid_application: { b: 'regardingobjectid_application', a: '_regardingobjectid_value', c: 'applications', d: 'application' },
			regardingobjectid_applicationuser: { b: 'regardingobjectid_applicationuser', a: '_regardingobjectid_value', c: 'applicationusers', d: 'applicationuser' },
			regardingobjectid_appmodulecomponentedge: { b: 'regardingobjectid_appmodulecomponentedge', a: '_regardingobjectid_value', c: 'appmodulecomponentedges', d: 'appmodulecomponentedge' },
			regardingobjectid_appmodulecomponentnode: { b: 'regardingobjectid_appmodulecomponentnode', a: '_regardingobjectid_value', c: 'appmodulecomponentnodes', d: 'appmodulecomponentnode' },
			regardingobjectid_appointment_syncerror: { b: 'regardingobjectid_appointment_syncerror', a: '_regardingobjectid_value', c: 'appointments', d: 'appointment' },
			regardingobjectid_appsetting: { b: 'regardingobjectid_appsetting', a: '_regardingobjectid_value', c: 'appsettings', d: 'appsetting' },
			regardingobjectid_appusersetting: { b: 'regardingobjectid_appusersetting', a: '_regardingobjectid_value', c: 'appusersettings', d: 'appusersetting' },
			regardingobjectid_archivecleanupinfo: { b: 'regardingobjectid_archivecleanupinfo', a: '_regardingobjectid_value', c: 'archivecleanupinfos', d: 'archivecleanupinfo' },
			regardingobjectid_archivecleanupoperation: { b: 'regardingobjectid_archivecleanupoperation', a: '_regardingobjectid_value', c: 'archivecleanupoperations', d: 'archivecleanupoperation' },
			regardingobjectid_attachment_syncerror: { b: 'regardingobjectid_attachment_syncerror', a: '_regardingobjectid_value', c: 'attachments', d: 'attachment' },
			regardingobjectid_attributeimageconfig: { b: 'regardingobjectid_attributeimageconfig', a: '_regardingobjectid_value', c: 'attributeimageconfigs', d: 'attributeimageconfig' },
			regardingobjectid_attributemaskingrule: { b: 'regardingobjectid_attributemaskingrule', a: '_regardingobjectid_value', c: 'attributemaskingrules', d: 'attributemaskingrule' },
			regardingobjectid_bot: { b: 'regardingobjectid_bot', a: '_regardingobjectid_value', c: 'bots', d: 'bot' },
			regardingobjectid_botcomponent: { b: 'regardingobjectid_botcomponent', a: '_regardingobjectid_value', c: 'botcomponents', d: 'botcomponent' },
			regardingobjectid_botcomponentcollection: { b: 'regardingobjectid_botcomponentcollection', a: '_regardingobjectid_value', c: 'botcomponentcollections', d: 'botcomponentcollection' },
			regardingobjectid_bulkarchiveconfig: { b: 'regardingobjectid_bulkarchiveconfig', a: '_regardingobjectid_value', c: 'bulkarchiveconfigs', d: 'bulkarchiveconfig' },
			regardingobjectid_bulkarchivefailuredetail: { b: 'regardingobjectid_bulkarchivefailuredetail', a: '_regardingobjectid_value', c: 'bulkarchivefailuredetails', d: 'bulkarchivefailuredetail' },
			regardingobjectid_bulkarchiveoperation: { b: 'regardingobjectid_bulkarchiveoperation', a: '_regardingobjectid_value', c: 'bulkarchiveoperations', d: 'bulkarchiveoperation' },
			regardingobjectid_bulkarchiveoperationdetail: { b: 'regardingobjectid_bulkarchiveoperationdetail', a: '_regardingobjectid_value', c: 'bulkarchiveoperationdetails', d: 'bulkarchiveoperationdetail' },
			regardingobjectid_businessdatalocalizedlabel_syncerror: { b: 'regardingobjectid_businessdatalocalizedlabel_syncerror', a: '_regardingobjectid_value', c: 'businessdatalocalizedlabels', d: 'businessdatalocalizedlabel' },
			regardingobjectid_businessunit_syncerror: { b: 'regardingobjectid_businessunit_syncerror', a: '_regardingobjectid_value', c: 'businessunits', d: 'businessunit' },
			regardingobjectid_canvasappextendedmetadata: { b: 'regardingobjectid_canvasappextendedmetadata', a: '_regardingobjectid_value', c: 'canvasappextendedmetadatas', d: 'canvasappextendedmetadata' },
			regardingobjectid_card: { b: 'regardingobjectid_card', a: '_regardingobjectid_value', c: 'cards', d: 'card' },
			regardingobjectid_cascadegrantrevokeaccessrecordstracker: { b: 'regardingobjectid_cascadegrantrevokeaccessrecordstracker', a: '_regardingobjectid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker' },
			regardingobjectid_cascadegrantrevokeaccessversiontracker: { b: 'regardingobjectid_cascadegrantrevokeaccessversiontracker', a: '_regardingobjectid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker' },
			regardingobjectid_catalog: { b: 'regardingobjectid_catalog', a: '_regardingobjectid_value', c: 'catalogs', d: 'catalog' },
			regardingobjectid_catalogassignment: { b: 'regardingobjectid_catalogassignment', a: '_regardingobjectid_value', c: 'catalogassignments', d: 'catalogassignment' },
			regardingobjectid_category_syncerror: { b: 'regardingobjectid_category_syncerror', a: '_regardingobjectid_value', c: 'categories ', d: 'category' },
			regardingobjectid_channelaccessprofile_syncerror: { b: 'regardingobjectid_channelaccessprofile_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			regardingobjectid_channelaccessprofilerule_syncerror: { b: 'regardingobjectid_channelaccessprofilerule_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			regardingobjectid_channelaccessprofileruleitem_syncerror: { b: 'regardingobjectid_channelaccessprofileruleitem_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofileruleitems', d: 'channelaccessprofileruleitem' },
			regardingobjectid_chat: { b: 'regardingobjectid_chat', a: '_regardingobjectid_value', c: 'chats', d: 'chat' },
			regardingobjectid_comment: { b: 'regardingobjectid_comment', a: '_regardingobjectid_value', c: 'comments', d: 'comment' },
			regardingobjectid_connection_syncerror: { b: 'regardingobjectid_connection_syncerror', a: '_regardingobjectid_value', c: 'connections', d: 'connection' },
			regardingobjectid_connectioninstance: { b: 'regardingobjectid_connectioninstance', a: '_regardingobjectid_value', c: 'connectioninstances', d: 'connectioninstance' },
			regardingobjectid_connectionreference: { b: 'regardingobjectid_connectionreference', a: '_regardingobjectid_value', c: 'connectionreferences', d: 'connectionreference' },
			regardingobjectid_connectionrole_syncerror: { b: 'regardingobjectid_connectionrole_syncerror', a: '_regardingobjectid_value', c: 'connectionroles', d: 'connectionrole' },
			regardingobjectid_connector: { b: 'regardingobjectid_connector', a: '_regardingobjectid_value', c: 'connectors', d: 'connector' },
			regardingobjectid_contact_syncerror: { b: 'regardingobjectid_contact_syncerror', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_conversationtranscript: { b: 'regardingobjectid_conversationtranscript', a: '_regardingobjectid_value', c: 'conversationtranscripts', d: 'conversationtranscript' },
			regardingobjectid_copilotexamplequestion: { b: 'regardingobjectid_copilotexamplequestion', a: '_regardingobjectid_value', c: 'copilotexamplequestions', d: 'copilotexamplequestion' },
			regardingobjectid_copilotglossaryterm: { b: 'regardingobjectid_copilotglossaryterm', a: '_regardingobjectid_value', c: 'copilotglossaryterms', d: 'copilotglossaryterm' },
			regardingobjectid_copilotsynonyms: { b: 'regardingobjectid_copilotsynonyms', a: '_regardingobjectid_value', c: 'copilotsynonyms', d: 'copilotsynonyms' },
			regardingobjectid_credential: { b: 'regardingobjectid_credential', a: '_regardingobjectid_value', c: 'credentials', d: 'credential' },
			regardingobjectid_customapi: { b: 'regardingobjectid_customapi', a: '_regardingobjectid_value', c: 'customapis', d: 'customapi' },
			regardingobjectid_customapirequestparameter: { b: 'regardingobjectid_customapirequestparameter', a: '_regardingobjectid_value', c: 'customapirequestparameters', d: 'customapirequestparameter' },
			regardingobjectid_customapiresponseproperty: { b: 'regardingobjectid_customapiresponseproperty', a: '_regardingobjectid_value', c: 'customapiresponseproperties', d: 'customapiresponseproperty' },
			regardingobjectid_customeraddress_syncerror: { b: 'regardingobjectid_customeraddress_syncerror', a: '_regardingobjectid_value', c: 'customeraddresses', d: 'customeraddress' },
			regardingobjectid_datalakefolder: { b: 'regardingobjectid_datalakefolder', a: '_regardingobjectid_value', c: 'datalakefolders', d: 'datalakefolder' },
			regardingobjectid_datalakefolderpermission: { b: 'regardingobjectid_datalakefolderpermission', a: '_regardingobjectid_value', c: 'datalakefolderpermissions', d: 'datalakefolderpermission' },
			regardingobjectid_datalakeworkspace: { b: 'regardingobjectid_datalakeworkspace', a: '_regardingobjectid_value', c: 'datalakeworkspaces', d: 'datalakeworkspace' },
			regardingobjectid_datalakeworkspacepermission: { b: 'regardingobjectid_datalakeworkspacepermission', a: '_regardingobjectid_value', c: 'datalakeworkspacepermissions', d: 'datalakeworkspacepermission' },
			regardingobjectid_dataprocessingconfiguration: { b: 'regardingobjectid_dataprocessingconfiguration', a: '_regardingobjectid_value', c: 'dataprocessingconfigurations', d: 'dataprocessingconfiguration' },
			regardingobjectid_delegatedauthorization: { b: 'regardingobjectid_delegatedauthorization', a: '_regardingobjectid_value', c: 'delegatedauthorizations', d: 'delegatedauthorization' },
			regardingobjectid_deleteditemreference: { b: 'regardingobjectid_deleteditemreference', a: '_regardingobjectid_value', c: 'deleteditemreferences', d: 'deleteditemreference' },
			regardingobjectid_desktopflowbinary: { b: 'regardingobjectid_desktopflowbinary', a: '_regardingobjectid_value', c: 'desktopflowbinaries', d: 'desktopflowbinary' },
			regardingobjectid_desktopflowmodule: { b: 'regardingobjectid_desktopflowmodule', a: '_regardingobjectid_value', c: 'desktopflowmodules', d: 'desktopflowmodule' },
			regardingobjectid_duplicaterule_syncerror: { b: 'regardingobjectid_duplicaterule_syncerror', a: '_regardingobjectid_value', c: 'duplicaterules', d: 'duplicaterule' },
			regardingobjectid_duplicaterulecondition_syncerror: { b: 'regardingobjectid_duplicaterulecondition_syncerror', a: '_regardingobjectid_value', c: 'duplicateruleconditions', d: 'duplicaterulecondition' },
			regardingobjectid_dvfilesearch: { b: 'regardingobjectid_dvfilesearch', a: '_regardingobjectid_value', c: 'dvfilesearchs', d: 'dvfilesearch' },
			regardingobjectid_dvfilesearchattribute: { b: 'regardingobjectid_dvfilesearchattribute', a: '_regardingobjectid_value', c: 'dvfilesearchattributes', d: 'dvfilesearchattribute' },
			regardingobjectid_dvfilesearchentity: { b: 'regardingobjectid_dvfilesearchentity', a: '_regardingobjectid_value', c: 'dvfilesearchentities', d: 'dvfilesearchentity' },
			regardingobjectid_dvtablesearch: { b: 'regardingobjectid_dvtablesearch', a: '_regardingobjectid_value', c: 'dvtablesearchs', d: 'dvtablesearch' },
			regardingobjectid_dvtablesearchattribute: { b: 'regardingobjectid_dvtablesearchattribute', a: '_regardingobjectid_value', c: 'dvtablesearchattributes', d: 'dvtablesearchattribute' },
			regardingobjectid_dvtablesearchentity: { b: 'regardingobjectid_dvtablesearchentity', a: '_regardingobjectid_value', c: 'dvtablesearchentities', d: 'dvtablesearchentity' },
			regardingobjectid_email_syncerror: { b: 'regardingobjectid_email_syncerror', a: '_regardingobjectid_value', c: 'emails', d: 'email' },
			regardingobjectid_emailserverprofile_syncerror: { b: 'regardingobjectid_emailserverprofile_syncerror', a: '_regardingobjectid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			regardingobjectid_enablearchivalrequest: { b: 'regardingobjectid_enablearchivalrequest', a: '_regardingobjectid_value', c: 'enablearchivalrequests', d: 'enablearchivalrequest' },
			regardingobjectid_entityanalyticsconfig: { b: 'regardingobjectid_entityanalyticsconfig', a: '_regardingobjectid_value', c: 'entityanalyticsconfigs', d: 'entityanalyticsconfig' },
			regardingobjectid_entityimageconfig: { b: 'regardingobjectid_entityimageconfig', a: '_regardingobjectid_value', c: 'entityimageconfigs', d: 'entityimageconfig' },
			regardingobjectid_entityindex: { b: 'regardingobjectid_entityindex', a: '_regardingobjectid_value', c: 'entityindexes', d: 'entityindex' },
			regardingobjectid_entityrecordfilter: { b: 'regardingobjectid_entityrecordfilter', a: '_regardingobjectid_value', c: 'entityrecordfilters', d: 'entityrecordfilter' },
			regardingobjectid_environmentvariabledefinition: { b: 'regardingobjectid_environmentvariabledefinition', a: '_regardingobjectid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition' },
			regardingobjectid_environmentvariablevalue: { b: 'regardingobjectid_environmentvariablevalue', a: '_regardingobjectid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue' },
			regardingobjectid_ExpiredProcess_syncerror: { b: 'regardingobjectid_ExpiredProcess_syncerror', a: '_regardingobjectid_value', c: 'expiredprocesses', d: 'expiredprocess' },
			regardingobjectid_exportedexcel: { b: 'regardingobjectid_exportedexcel', a: '_regardingobjectid_value', c: 'exportedexcels', d: 'exportedexcel' },
			regardingobjectid_exportsolutionupload: { b: 'regardingobjectid_exportsolutionupload', a: '_regardingobjectid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload' },
			regardingobjectid_externalparty_syncerror: { b: 'regardingobjectid_externalparty_syncerror', a: '_regardingobjectid_value', c: 'externalparties', d: 'externalparty' },
			regardingobjectid_externalpartyitem_syncerror: { b: 'regardingobjectid_externalpartyitem_syncerror', a: '_regardingobjectid_value', c: 'externalpartyitems', d: 'externalpartyitem' },
			regardingobjectid_fabricaiskill: { b: 'regardingobjectid_fabricaiskill', a: '_regardingobjectid_value', c: 'fabricaiskills', d: 'fabricaiskill' },
			regardingobjectid_fax_syncerror: { b: 'regardingobjectid_fax_syncerror', a: '_regardingobjectid_value', c: 'faxes', d: 'fax' },
			regardingobjectid_featurecontrolsetting: { b: 'regardingobjectid_featurecontrolsetting', a: '_regardingobjectid_value', c: 'featurecontrolsettings', d: 'featurecontrolsetting' },
			regardingobjectid_federatedknowledgeconfiguration: { b: 'regardingobjectid_federatedknowledgeconfiguration', a: '_regardingobjectid_value', c: 'federatedknowledgeconfigurations', d: 'federatedknowledgeconfiguration' },
			regardingobjectid_federatedknowledgeentityconfiguration: { b: 'regardingobjectid_federatedknowledgeentityconfiguration', a: '_regardingobjectid_value', c: 'federatedknowledgeentityconfigurations', d: 'federatedknowledgeentityconfiguration' },
			regardingobjectid_feedback_syncerror: { b: 'regardingobjectid_feedback_syncerror', a: '_regardingobjectid_value', c: 'feedback', d: 'feedback' },
			regardingobjectid_fieldpermission_syncerror: { b: 'regardingobjectid_fieldpermission_syncerror', a: '_regardingobjectid_value', c: 'fieldpermissions', d: 'fieldpermission' },
			regardingobjectid_fieldsecurityprofile_syncerror: { b: 'regardingobjectid_fieldsecurityprofile_syncerror', a: '_regardingobjectid_value', c: 'fieldsecurityprofiles', d: 'fieldsecurityprofile' },
			regardingobjectid_fileattachment_syncerror: { b: 'regardingobjectid_fileattachment_syncerror', a: '_regardingobjectid_value', c: 'fileattachments', d: 'fileattachment' },
			regardingobjectid_flowcapacityassignment: { b: 'regardingobjectid_flowcapacityassignment', a: '_regardingobjectid_value', c: 'flowcapacityassignments', d: 'flowcapacityassignment' },
			regardingobjectid_flowcredentialapplication: { b: 'regardingobjectid_flowcredentialapplication', a: '_regardingobjectid_value', c: 'flowcredentialapplications', d: 'flowcredentialapplication' },
			regardingobjectid_flowevent: { b: 'regardingobjectid_flowevent', a: '_regardingobjectid_value', c: 'flowevents', d: 'flowevent' },
			regardingobjectid_flowmachine: { b: 'regardingobjectid_flowmachine', a: '_regardingobjectid_value', c: 'flowmachines', d: 'flowmachine' },
			regardingobjectid_flowmachinegroup: { b: 'regardingobjectid_flowmachinegroup', a: '_regardingobjectid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			regardingobjectid_flowmachineimage: { b: 'regardingobjectid_flowmachineimage', a: '_regardingobjectid_value', c: 'flowmachineimages', d: 'flowmachineimage' },
			regardingobjectid_flowmachineimageversion: { b: 'regardingobjectid_flowmachineimageversion', a: '_regardingobjectid_value', c: 'flowmachineimageversions', d: 'flowmachineimageversion' },
			regardingobjectid_flowmachinenetwork: { b: 'regardingobjectid_flowmachinenetwork', a: '_regardingobjectid_value', c: 'flowmachinenetworks', d: 'flowmachinenetwork' },
			regardingobjectid_flowsession: { b: 'regardingobjectid_flowsession', a: '_regardingobjectid_value', c: 'flowsessions', d: 'flowsession' },
			regardingobjectid_fxexpression: { b: 'regardingobjectid_fxexpression', a: '_regardingobjectid_value', c: 'fxexpressions', d: 'fxexpression' },
			regardingobjectid_goal_syncerror: { b: 'regardingobjectid_goal_syncerror', a: '_regardingobjectid_value', c: 'goals', d: 'goal' },
			regardingobjectid_goalrollupquery_syncerror: { b: 'regardingobjectid_goalrollupquery_syncerror', a: '_regardingobjectid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			regardingobjectid_holidaywrapper: { b: 'regardingobjectid_holidaywrapper', a: '_regardingobjectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			regardingobjectid_importmap_syncerror: { b: 'regardingobjectid_importmap_syncerror', a: '_regardingobjectid_value', c: 'importmaps', d: 'importmap' },
			regardingobjectid_indexattributes: { b: 'regardingobjectid_indexattributes', a: '_regardingobjectid_value', c: 'indexattributes', d: 'indexattributes' },
			regardingobjectid_internaladdress_syncerror: { b: 'regardingobjectid_internaladdress_syncerror', a: '_regardingobjectid_value', c: 'internaladdresses', d: 'internaladdress' },
			regardingobjectid_internalcatalogassignment: { b: 'regardingobjectid_internalcatalogassignment', a: '_regardingobjectid_value', c: 'internalcatalogassignments', d: 'internalcatalogassignment' },
			regardingobjectid_kbarticle_syncerror: { b: 'regardingobjectid_kbarticle_syncerror', a: '_regardingobjectid_value', c: 'kbarticles', d: 'kbarticle' },
			regardingobjectid_kbarticletemplate_syncerror: { b: 'regardingobjectid_kbarticletemplate_syncerror', a: '_regardingobjectid_value', c: 'kbarticletemplates', d: 'kbarticletemplate' },
			regardingobjectid_keyvaultreference: { b: 'regardingobjectid_keyvaultreference', a: '_regardingobjectid_value', c: 'keyvaultreferences', d: 'keyvaultreference' },
			regardingobjectid_knowledgearticle_syncerror: { b: 'regardingobjectid_knowledgearticle_syncerror', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgearticleviews_syncerror: { b: 'regardingobjectid_knowledgearticleviews_syncerror', a: '_regardingobjectid_value', c: 'knowledgearticleviews', d: 'knowledgearticleviews' },
			regardingobjectid_knowledgebaserecord_syncerror: { b: 'regardingobjectid_knowledgebaserecord_syncerror', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_letter_syncerror: { b: 'regardingobjectid_letter_syncerror', a: '_regardingobjectid_value', c: 'letters', d: 'letter' },
			regardingobjectid_mailbox_syncerror: { b: 'regardingobjectid_mailbox_syncerror', a: '_regardingobjectid_value', c: 'mailboxes', d: 'mailbox' },
			regardingobjectid_mailmergetemplate_syncerror: { b: 'regardingobjectid_mailmergetemplate_syncerror', a: '_regardingobjectid_value', c: 'mailmergetemplates', d: 'mailmergetemplate' },
			regardingobjectid_mainfewshot: { b: 'regardingobjectid_mainfewshot', a: '_regardingobjectid_value', c: 'mainfewshots', d: 'mainfewshot' },
			regardingobjectid_makerfewshot: { b: 'regardingobjectid_makerfewshot', a: '_regardingobjectid_value', c: 'makerfewshots', d: 'makerfewshot' },
			regardingobjectid_managedidentity: { b: 'regardingobjectid_managedidentity', a: '_regardingobjectid_value', c: 'managedidentities', d: 'managedidentity' },
			regardingobjectid_maskingrule: { b: 'regardingobjectid_maskingrule', a: '_regardingobjectid_value', c: 'maskingrules', d: 'maskingrule' },
			regardingobjectid_metadataforarchival: { b: 'regardingobjectid_metadataforarchival', a: '_regardingobjectid_value', c: 'metadataforarchivals', d: 'metadataforarchival' },
			regardingobjectid_metric_syncerror: { b: 'regardingobjectid_metric_syncerror', a: '_regardingobjectid_value', c: 'metrics', d: 'metric' },
			regardingobjectid_mobileofflineprofileextension: { b: 'regardingobjectid_mobileofflineprofileextension', a: '_regardingobjectid_value', c: 'mobileofflineprofileextensions', d: 'mobileofflineprofileextension' },
			regardingobjectid_msdynce_botcontent: { b: 'regardingobjectid_msdynce_botcontent', a: '_regardingobjectid_value', c: 'msdynce_botcontents', d: 'msdynce_botcontent' },
			regardingobjectid_msdyn_aibdataset: { b: 'regardingobjectid_msdyn_aibdataset', a: '_regardingobjectid_value', c: 'msdyn_aibdatasets', d: 'msdyn_aibdataset' },
			regardingobjectid_msdyn_aibdatasetfile: { b: 'regardingobjectid_msdyn_aibdatasetfile', a: '_regardingobjectid_value', c: 'msdyn_aibdatasetfiles', d: 'msdyn_aibdatasetfile' },
			regardingobjectid_msdyn_aibdatasetrecord: { b: 'regardingobjectid_msdyn_aibdatasetrecord', a: '_regardingobjectid_value', c: 'msdyn_aibdatasetrecords', d: 'msdyn_aibdatasetrecord' },
			regardingobjectid_msdyn_aibdatasetscontainer: { b: 'regardingobjectid_msdyn_aibdatasetscontainer', a: '_regardingobjectid_value', c: 'msdyn_aibdatasetscontainers', d: 'msdyn_aibdatasetscontainer' },
			regardingobjectid_msdyn_aibfeedbackloop: { b: 'regardingobjectid_msdyn_aibfeedbackloop', a: '_regardingobjectid_value', c: 'msdyn_aibfeedbackloops', d: 'msdyn_aibfeedbackloop' },
			regardingobjectid_msdyn_aibfile: { b: 'regardingobjectid_msdyn_aibfile', a: '_regardingobjectid_value', c: 'msdyn_aibfiles', d: 'msdyn_aibfile' },
			regardingobjectid_msdyn_aibfileattacheddata: { b: 'regardingobjectid_msdyn_aibfileattacheddata', a: '_regardingobjectid_value', c: 'msdyn_aibfileattacheddatas', d: 'msdyn_aibfileattacheddata' },
			regardingobjectid_msdyn_aiconfiguration: { b: 'regardingobjectid_msdyn_aiconfiguration', a: '_regardingobjectid_value', c: 'msdyn_aiconfigurations', d: 'msdyn_aiconfiguration' },
			regardingobjectid_msdyn_aievent: { b: 'regardingobjectid_msdyn_aievent', a: '_regardingobjectid_value', c: 'msdyn_aievents', d: 'msdyn_aievent' },
			regardingobjectid_msdyn_aifptrainingdocument: { b: 'regardingobjectid_msdyn_aifptrainingdocument', a: '_regardingobjectid_value', c: 'msdyn_aifptrainingdocuments', d: 'msdyn_aifptrainingdocument' },
			regardingobjectid_msdyn_aimodel: { b: 'regardingobjectid_msdyn_aimodel', a: '_regardingobjectid_value', c: 'msdyn_aimodels', d: 'msdyn_aimodel' },
			regardingobjectid_msdyn_aiodimage: { b: 'regardingobjectid_msdyn_aiodimage', a: '_regardingobjectid_value', c: 'msdyn_aiodimages', d: 'msdyn_aiodimage' },
			regardingobjectid_msdyn_aiodlabel: { b: 'regardingobjectid_msdyn_aiodlabel', a: '_regardingobjectid_value', c: 'msdyn_aiodlabels', d: 'msdyn_aiodlabel' },
			regardingobjectid_msdyn_aiodtrainingboundingbox: { b: 'regardingobjectid_msdyn_aiodtrainingboundingbox', a: '_regardingobjectid_value', c: 'msdyn_aiodtrainingboundingboxes', d: 'msdyn_aiodtrainingboundingbox' },
			regardingobjectid_msdyn_aiodtrainingimage: { b: 'regardingobjectid_msdyn_aiodtrainingimage', a: '_regardingobjectid_value', c: 'msdyn_aiodtrainingimages', d: 'msdyn_aiodtrainingimage' },
			regardingobjectid_msdyn_aitemplate: { b: 'regardingobjectid_msdyn_aitemplate', a: '_regardingobjectid_value', c: 'msdyn_aitemplates', d: 'msdyn_aitemplate' },
			regardingobjectid_msdyn_analysiscomponent: { b: 'regardingobjectid_msdyn_analysiscomponent', a: '_regardingobjectid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent' },
			regardingobjectid_msdyn_analysisjob: { b: 'regardingobjectid_msdyn_analysisjob', a: '_regardingobjectid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob' },
			regardingobjectid_msdyn_analysisoverride: { b: 'regardingobjectid_msdyn_analysisoverride', a: '_regardingobjectid_value', c: 'msdyn_analysisoverrides', d: 'msdyn_analysisoverride' },
			regardingobjectid_msdyn_analysisresult: { b: 'regardingobjectid_msdyn_analysisresult', a: '_regardingobjectid_value', c: 'msdyn_analysisresults', d: 'msdyn_analysisresult' },
			regardingobjectid_msdyn_analysisresultdetail: { b: 'regardingobjectid_msdyn_analysisresultdetail', a: '_regardingobjectid_value', c: 'msdyn_analysisresultdetails', d: 'msdyn_analysisresultdetail' },
			regardingobjectid_msdyn_appinsightsmetadata: { b: 'regardingobjectid_msdyn_appinsightsmetadata', a: '_regardingobjectid_value', c: 'msdyn_appinsightsmetadatas', d: 'msdyn_appinsightsmetadata' },
			regardingobjectid_msdyn_customcontrolextendedsettings: { b: 'regardingobjectid_msdyn_customcontrolextendedsettings', a: '_regardingobjectid_value', c: 'msdyn_customcontrolextendedsettingses', d: 'msdyn_customcontrolextendedsettings' },
			regardingobjectid_msdyn_dataflow: { b: 'regardingobjectid_msdyn_dataflow', a: '_regardingobjectid_value', c: 'msdyn_dataflows', d: 'msdyn_dataflow' },
			regardingobjectid_msdyn_dataflowconnectionreference: { b: 'regardingobjectid_msdyn_dataflowconnectionreference', a: '_regardingobjectid_value', c: 'msdyn_dataflowconnectionreferences', d: 'msdyn_dataflowconnectionreference' },
			regardingobjectid_msdyn_dataflowrefreshhistory: { b: 'regardingobjectid_msdyn_dataflowrefreshhistory', a: '_regardingobjectid_value', c: 'msdyn_dataflowrefreshhistories', d: 'msdyn_dataflowrefreshhistory' },
			regardingobjectid_msdyn_dataflowtemplate: { b: 'regardingobjectid_msdyn_dataflowtemplate', a: '_regardingobjectid_value', c: 'msdyn_dataflowtemplates', d: 'msdyn_dataflowtemplate' },
			regardingobjectid_msdyn_dataflow_datalakefolder: { b: 'regardingobjectid_msdyn_dataflow_datalakefolder', a: '_regardingobjectid_value', c: 'msdyn_dataflow_datalakefolders', d: 'msdyn_dataflow_datalakefolder' },
			regardingobjectid_msdyn_dmsrequest: { b: 'regardingobjectid_msdyn_dmsrequest', a: '_regardingobjectid_value', c: 'msdyn_dmsrequests', d: 'msdyn_dmsrequest' },
			regardingobjectid_msdyn_dmsrequeststatus: { b: 'regardingobjectid_msdyn_dmsrequeststatus', a: '_regardingobjectid_value', c: 'msdyn_dmsrequeststatuses', d: 'msdyn_dmsrequeststatus' },
			regardingobjectid_msdyn_dmssyncrequest: { b: 'regardingobjectid_msdyn_dmssyncrequest', a: '_regardingobjectid_value', c: 'msdyn_dmssyncrequests', d: 'msdyn_dmssyncrequest' },
			regardingobjectid_msdyn_dmssyncstatus: { b: 'regardingobjectid_msdyn_dmssyncstatus', a: '_regardingobjectid_value', c: 'msdyn_dmssyncstatuses', d: 'msdyn_dmssyncstatus' },
			regardingobjectid_msdyn_entitylinkchatconfiguration: { b: 'regardingobjectid_msdyn_entitylinkchatconfiguration', a: '_regardingobjectid_value', c: 'msdyn_entitylinkchatconfigurations', d: 'msdyn_entitylinkchatconfiguration' },
			regardingobjectid_msdyn_entityrefreshhistory: { b: 'regardingobjectid_msdyn_entityrefreshhistory', a: '_regardingobjectid_value', c: 'msdyn_entityrefreshhistories', d: 'msdyn_entityrefreshhistory' },
			regardingobjectid_msdyn_favoriteknowledgearticle: { b: 'regardingobjectid_msdyn_favoriteknowledgearticle', a: '_regardingobjectid_value', c: 'msdyn_favoriteknowledgearticles', d: 'msdyn_favoriteknowledgearticle' },
			regardingobjectid_msdyn_federatedarticle: { b: 'regardingobjectid_msdyn_federatedarticle', a: '_regardingobjectid_value', c: 'msdyn_federatedarticles', d: 'msdyn_federatedarticle' },
			regardingobjectid_msdyn_federatedarticleincident: { b: 'regardingobjectid_msdyn_federatedarticleincident', a: '_regardingobjectid_value', c: 'msdyn_federatedarticleincidents', d: 'msdyn_federatedarticleincident' },
			regardingobjectid_msdyn_fileupload: { b: 'regardingobjectid_msdyn_fileupload', a: '_regardingobjectid_value', c: 'msdyn_fileuploads', d: 'msdyn_fileupload' },
			regardingobjectid_msdyn_flow_actionapprovalmodel: { b: 'regardingobjectid_msdyn_flow_actionapprovalmodel', a: '_regardingobjectid_value', c: 'msdyn_flow_actionapprovalmodels', d: 'msdyn_flow_actionapprovalmodel' },
			regardingobjectid_msdyn_flow_approval: { b: 'regardingobjectid_msdyn_flow_approval', a: '_regardingobjectid_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval' },
			regardingobjectid_msdyn_flow_approvalrequest: { b: 'regardingobjectid_msdyn_flow_approvalrequest', a: '_regardingobjectid_value', c: 'msdyn_flow_approvalrequests', d: 'msdyn_flow_approvalrequest' },
			regardingobjectid_msdyn_flow_approvalresponse: { b: 'regardingobjectid_msdyn_flow_approvalresponse', a: '_regardingobjectid_value', c: 'msdyn_flow_approvalresponses', d: 'msdyn_flow_approvalresponse' },
			regardingobjectid_msdyn_flow_approvalstep: { b: 'regardingobjectid_msdyn_flow_approvalstep', a: '_regardingobjectid_value', c: 'msdyn_flow_approvalsteps', d: 'msdyn_flow_approvalstep' },
			regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: { b: 'regardingobjectid_msdyn_flow_awaitallactionapprovalmodel', a: '_regardingobjectid_value', c: 'msdyn_flow_awaitallactionapprovalmodels', d: 'msdyn_flow_awaitallactionapprovalmodel' },
			regardingobjectid_msdyn_flow_awaitallapprovalmodel: { b: 'regardingobjectid_msdyn_flow_awaitallapprovalmodel', a: '_regardingobjectid_value', c: 'msdyn_flow_awaitallapprovalmodels', d: 'msdyn_flow_awaitallapprovalmodel' },
			regardingobjectid_msdyn_flow_basicapprovalmodel: { b: 'regardingobjectid_msdyn_flow_basicapprovalmodel', a: '_regardingobjectid_value', c: 'msdyn_flow_basicapprovalmodels', d: 'msdyn_flow_basicapprovalmodel' },
			regardingobjectid_msdyn_flow_flowapproval: { b: 'regardingobjectid_msdyn_flow_flowapproval', a: '_regardingobjectid_value', c: 'msdyn_flow_flowapprovals', d: 'msdyn_flow_flowapproval' },
			regardingobjectid_msdyn_helppage: { b: 'regardingobjectid_msdyn_helppage', a: '_regardingobjectid_value', c: 'msdyn_helppages', d: 'msdyn_helppage' },
			regardingobjectid_msdyn_insightsstorevirtualentity: { b: 'regardingobjectid_msdyn_insightsstorevirtualentity', a: '_regardingobjectid_value', c: 'msdyn_insightsstorevirtualentities', d: 'msdyn_insightsstorevirtualentity' },
			regardingobjectid_msdyn_integratedsearchprovider: { b: 'regardingobjectid_msdyn_integratedsearchprovider', a: '_regardingobjectid_value', c: 'msdyn_integratedsearchproviders', d: 'msdyn_integratedsearchprovider' },
			regardingobjectid_msdyn_kalanguagesetting: { b: 'regardingobjectid_msdyn_kalanguagesetting', a: '_regardingobjectid_value', c: 'msdyn_kalanguagesettings', d: 'msdyn_kalanguagesetting' },
			regardingobjectid_msdyn_kbattachment: { b: 'regardingobjectid_msdyn_kbattachment', a: '_regardingobjectid_value', c: 'msdyn_kbattachments', d: 'msdyn_kbattachment' },
			regardingobjectid_msdyn_kmfederatedsearchconfig: { b: 'regardingobjectid_msdyn_kmfederatedsearchconfig', a: '_regardingobjectid_value', c: 'msdyn_kmfederatedsearchconfigs', d: 'msdyn_kmfederatedsearchconfig' },
			regardingobjectid_msdyn_kmpersonalizationsetting: { b: 'regardingobjectid_msdyn_kmpersonalizationsetting', a: '_regardingobjectid_value', c: 'msdyn_kmpersonalizationsettings', d: 'msdyn_kmpersonalizationsetting' },
			regardingobjectid_msdyn_knowledgearticleimage: { b: 'regardingobjectid_msdyn_knowledgearticleimage', a: '_regardingobjectid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage' },
			regardingobjectid_msdyn_knowledgearticletemplate: { b: 'regardingobjectid_msdyn_knowledgearticletemplate', a: '_regardingobjectid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			regardingobjectid_msdyn_knowledgeassetconfiguration: { b: 'regardingobjectid_msdyn_knowledgeassetconfiguration', a: '_regardingobjectid_value', c: 'msdyn_knowledgeassetconfigurations', d: 'msdyn_knowledgeassetconfiguration' },
			regardingobjectid_msdyn_knowledgeconfiguration: { b: 'regardingobjectid_msdyn_knowledgeconfiguration', a: '_regardingobjectid_value', c: 'msdyn_knowledgeconfigurations', d: 'msdyn_knowledgeconfiguration' },
			regardingobjectid_msdyn_knowledgeinteractioninsight: { b: 'regardingobjectid_msdyn_knowledgeinteractioninsight', a: '_regardingobjectid_value', c: 'msdyn_knowledgeinteractioninsights', d: 'msdyn_knowledgeinteractioninsight' },
			regardingobjectid_msdyn_knowledgemanagementsetting: { b: 'regardingobjectid_msdyn_knowledgemanagementsetting', a: '_regardingobjectid_value', c: 'msdyn_knowledgemanagementsettings', d: 'msdyn_knowledgemanagementsetting' },
			regardingobjectid_msdyn_knowledgepersonalfilter: { b: 'regardingobjectid_msdyn_knowledgepersonalfilter', a: '_regardingobjectid_value', c: 'msdyn_knowledgepersonalfilters', d: 'msdyn_knowledgepersonalfilter' },
			regardingobjectid_msdyn_knowledgesearchfilter: { b: 'regardingobjectid_msdyn_knowledgesearchfilter', a: '_regardingobjectid_value', c: 'msdyn_knowledgesearchfilters', d: 'msdyn_knowledgesearchfilter' },
			regardingobjectid_msdyn_knowledgesearchinsight: { b: 'regardingobjectid_msdyn_knowledgesearchinsight', a: '_regardingobjectid_value', c: 'msdyn_knowledgesearchinsights', d: 'msdyn_knowledgesearchinsight' },
			regardingobjectid_msdyn_mobileapp: { b: 'regardingobjectid_msdyn_mobileapp', a: '_regardingobjectid_value', c: 'msdyn_mobileapps', d: 'msdyn_mobileapp' },
			regardingobjectid_msdyn_modulerundetail: { b: 'regardingobjectid_msdyn_modulerundetail', a: '_regardingobjectid_value', c: 'msdyn_modulerundetails', d: 'msdyn_modulerundetail' },
			regardingobjectid_msdyn_pmanalysishistory: { b: 'regardingobjectid_msdyn_pmanalysishistory', a: '_regardingobjectid_value', c: 'msdyn_pmanalysishistories', d: 'msdyn_pmanalysishistory' },
			regardingobjectid_msdyn_pmbusinessruleautomationconfig: { b: 'regardingobjectid_msdyn_pmbusinessruleautomationconfig', a: '_regardingobjectid_value', c: 'msdyn_pmbusinessruleautomationconfigs', d: 'msdyn_pmbusinessruleautomationconfig' },
			regardingobjectid_msdyn_pmcalendar: { b: 'regardingobjectid_msdyn_pmcalendar', a: '_regardingobjectid_value', c: 'msdyn_pmcalendars', d: 'msdyn_pmcalendar' },
			regardingobjectid_msdyn_pmcalendarversion: { b: 'regardingobjectid_msdyn_pmcalendarversion', a: '_regardingobjectid_value', c: 'msdyn_pmcalendarversions', d: 'msdyn_pmcalendarversion' },
			regardingobjectid_msdyn_pminferredtask: { b: 'regardingobjectid_msdyn_pminferredtask', a: '_regardingobjectid_value', c: 'msdyn_pminferredtasks', d: 'msdyn_pminferredtask' },
			regardingobjectid_msdyn_pmprocessextendedmetadataversion: { b: 'regardingobjectid_msdyn_pmprocessextendedmetadataversion', a: '_regardingobjectid_value', c: 'msdyn_pmprocessextendedmetadataversions', d: 'msdyn_pmprocessextendedmetadataversion' },
			regardingobjectid_msdyn_pmprocesstemplate: { b: 'regardingobjectid_msdyn_pmprocesstemplate', a: '_regardingobjectid_value', c: 'msdyn_pmprocesstemplates', d: 'msdyn_pmprocesstemplate' },
			regardingobjectid_msdyn_pmprocessusersettings: { b: 'regardingobjectid_msdyn_pmprocessusersettings', a: '_regardingobjectid_value', c: 'msdyn_pmprocessusersettingses', d: 'msdyn_pmprocessusersettings' },
			regardingobjectid_msdyn_pmprocessversion: { b: 'regardingobjectid_msdyn_pmprocessversion', a: '_regardingobjectid_value', c: 'msdyn_pmprocessversions', d: 'msdyn_pmprocessversion' },
			regardingobjectid_msdyn_pmrecording: { b: 'regardingobjectid_msdyn_pmrecording', a: '_regardingobjectid_value', c: 'msdyn_pmrecordings', d: 'msdyn_pmrecording' },
			regardingobjectid_msdyn_pmsimulation: { b: 'regardingobjectid_msdyn_pmsimulation', a: '_regardingobjectid_value', c: 'msdyn_pmsimulations', d: 'msdyn_pmsimulation' },
			regardingobjectid_msdyn_pmtemplate: { b: 'regardingobjectid_msdyn_pmtemplate', a: '_regardingobjectid_value', c: 'msdyn_pmtemplates', d: 'msdyn_pmtemplate' },
			regardingobjectid_msdyn_pmview: { b: 'regardingobjectid_msdyn_pmview', a: '_regardingobjectid_value', c: 'msdyn_pmviews', d: 'msdyn_pmview' },
			regardingobjectid_msdyn_richtextfile: { b: 'regardingobjectid_msdyn_richtextfile', a: '_regardingobjectid_value', c: 'msdyn_richtextfiles', d: 'msdyn_richtextfile' },
			regardingobjectid_msdyn_salesforcestructuredobject: { b: 'regardingobjectid_msdyn_salesforcestructuredobject', a: '_regardingobjectid_value', c: 'msdyn_salesforcestructuredobjects', d: 'msdyn_salesforcestructuredobject' },
			regardingobjectid_msdyn_salesforcestructuredqnaconfig: { b: 'regardingobjectid_msdyn_salesforcestructuredqnaconfig', a: '_regardingobjectid_value', c: 'msdyn_salesforcestructuredqnaconfigs', d: 'msdyn_salesforcestructuredqnaconfig' },
			regardingobjectid_msdyn_schedule: { b: 'regardingobjectid_msdyn_schedule', a: '_regardingobjectid_value', c: 'msdyn_schedules', d: 'msdyn_schedule' },
			regardingobjectid_msdyn_serviceconfiguration: { b: 'regardingobjectid_msdyn_serviceconfiguration', a: '_regardingobjectid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration' },
			regardingobjectid_msdyn_slakpi: { b: 'regardingobjectid_msdyn_slakpi', a: '_regardingobjectid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi' },
			regardingobjectid_msdyn_solutionhealthrule: { b: 'regardingobjectid_msdyn_solutionhealthrule', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrules', d: 'msdyn_solutionhealthrule' },
			regardingobjectid_msdyn_solutionhealthruleargument: { b: 'regardingobjectid_msdyn_solutionhealthruleargument', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrulearguments', d: 'msdyn_solutionhealthruleargument' },
			regardingobjectid_msdyn_solutionhealthruleset: { b: 'regardingobjectid_msdyn_solutionhealthruleset', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrulesets', d: 'msdyn_solutionhealthruleset' },
			regardingobjectid_msdyn_tour: { b: 'regardingobjectid_msdyn_tour', a: '_regardingobjectid_value', c: 'msdyn_tours', d: 'msdyn_tour' },
			regardingobjectid_msdyn_virtualtablecolumncandidate: { b: 'regardingobjectid_msdyn_virtualtablecolumncandidate', a: '_regardingobjectid_value', c: 'msdyn_virtualtablecolumncandidates', d: 'msdyn_virtualtablecolumncandidate' },
			regardingobjectid_msdyn_workflowactionstatus: { b: 'regardingobjectid_msdyn_workflowactionstatus', a: '_regardingobjectid_value', c: 'msdyn_workflowactionstatuses', d: 'msdyn_workflowactionstatus' },
			regardingobjectid_msgraphresourcetosubscription: { b: 'regardingobjectid_msgraphresourcetosubscription', a: '_regardingobjectid_value', c: 'msgraphresourcetosubscriptions', d: 'msgraphresourcetosubscription' },
			regardingobjectid_mspcat_catalogsubmissionfiles: { b: 'regardingobjectid_mspcat_catalogsubmissionfiles', a: '_regardingobjectid_value', c: 'mspcat_catalogsubmissionfileses', d: 'mspcat_catalogsubmissionfiles' },
			regardingobjectid_mspcat_packagestore: { b: 'regardingobjectid_mspcat_packagestore', a: '_regardingobjectid_value', c: 'mspcat_packagestores', d: 'mspcat_packagestore' },
			regardingobjectid_NewProcess_syncerror: { b: 'regardingobjectid_NewProcess_syncerror', a: '_regardingobjectid_value', c: 'newprocesses', d: 'newprocess' },
			regardingobjectid_offlinecommanddefinition_syncerror: { b: 'regardingobjectid_offlinecommanddefinition_syncerror', a: '_regardingobjectid_value', c: 'offlinecommanddefinitions', d: 'offlinecommanddefinition' },
			regardingobjectid_organization_syncerror: { b: 'regardingobjectid_organization_syncerror', a: '_regardingobjectid_value', c: 'organizations', d: 'organization' },
			regardingobjectid_organizationdatasyncfnostate: { b: 'regardingobjectid_organizationdatasyncfnostate', a: '_regardingobjectid_value', c: 'organizationdatasyncfnostates', d: 'organizationdatasyncfnostate' },
			regardingobjectid_organizationdatasyncstate: { b: 'regardingobjectid_organizationdatasyncstate', a: '_regardingobjectid_value', c: 'organizationdatasyncstates', d: 'organizationdatasyncstate' },
			regardingobjectid_organizationdatasyncsubscription: { b: 'regardingobjectid_organizationdatasyncsubscription', a: '_regardingobjectid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription' },
			regardingobjectid_organizationdatasyncsubscriptionentity: { b: 'regardingobjectid_organizationdatasyncsubscriptionentity', a: '_regardingobjectid_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity' },
			regardingobjectid_organizationdatasyncsubscriptionfnotable: { b: 'regardingobjectid_organizationdatasyncsubscriptionfnotable', a: '_regardingobjectid_value', c: 'organizationdatasyncsubscriptionfnotables', d: 'organizationdatasyncsubscriptionfnotable' },
			regardingobjectid_organizationsetting: { b: 'regardingobjectid_organizationsetting', a: '_regardingobjectid_value', c: 'organizationsettings', d: 'organizationsetting' },
			regardingobjectid_package: { b: 'regardingobjectid_package', a: '_regardingobjectid_value', c: 'packages', d: 'package' },
			regardingobjectid_packagehistory: { b: 'regardingobjectid_packagehistory', a: '_regardingobjectid_value', c: 'packagehistories', d: 'packagehistory' },
			regardingobjectid_pdfsetting: { b: 'regardingobjectid_pdfsetting', a: '_regardingobjectid_value', c: 'pdfsettings', d: 'pdfsetting' },
			regardingobjectid_phonecall_syncerror: { b: 'regardingobjectid_phonecall_syncerror', a: '_regardingobjectid_value', c: 'phonecalls', d: 'phonecall' },
			regardingobjectid_plannerbusinessscenario: { b: 'regardingobjectid_plannerbusinessscenario', a: '_regardingobjectid_value', c: 'plannerbusinessscenarios', d: 'plannerbusinessscenario' },
			regardingobjectid_plannersyncaction: { b: 'regardingobjectid_plannersyncaction', a: '_regardingobjectid_value', c: 'plannersyncactions', d: 'plannersyncaction' },
			regardingobjectid_pluginpackage: { b: 'regardingobjectid_pluginpackage', a: '_regardingobjectid_value', c: 'pluginpackages', d: 'pluginpackage' },
			regardingobjectid_position_syncerror: { b: 'regardingobjectid_position_syncerror', a: '_regardingobjectid_value', c: 'positions', d: 'position' },
			regardingobjectid_postfollow_syncerror: { b: 'regardingobjectid_postfollow_syncerror', a: '_regardingobjectid_value', c: 'postfollows', d: 'postfollow' },
			regardingobjectid_powerbidataset: { b: 'regardingobjectid_powerbidataset', a: '_regardingobjectid_value', c: 'powerbidatasets', d: 'powerbidataset' },
			regardingobjectid_powerbidatasetapdx: { b: 'regardingobjectid_powerbidatasetapdx', a: '_regardingobjectid_value', c: 'powerbidatasetapdxes', d: 'powerbidatasetapdx' },
			regardingobjectid_powerbimashupparameter: { b: 'regardingobjectid_powerbimashupparameter', a: '_regardingobjectid_value', c: 'powerbimashupparameters', d: 'powerbimashupparameter' },
			regardingobjectid_powerbireport: { b: 'regardingobjectid_powerbireport', a: '_regardingobjectid_value', c: 'powerbireports', d: 'powerbireport' },
			regardingobjectid_powerbireportapdx: { b: 'regardingobjectid_powerbireportapdx', a: '_regardingobjectid_value', c: 'powerbireportapdxes', d: 'powerbireportapdx' },
			regardingobjectid_powerfxrule: { b: 'regardingobjectid_powerfxrule', a: '_regardingobjectid_value', c: 'powerfxrules', d: 'powerfxrule' },
			regardingobjectid_powerpagecomponent: { b: 'regardingobjectid_powerpagecomponent', a: '_regardingobjectid_value', c: 'powerpagecomponents', d: 'powerpagecomponent' },
			regardingobjectid_powerpagesite: { b: 'regardingobjectid_powerpagesite', a: '_regardingobjectid_value', c: 'powerpagesites', d: 'powerpagesite' },
			regardingobjectid_powerpagesitelanguage: { b: 'regardingobjectid_powerpagesitelanguage', a: '_regardingobjectid_value', c: 'powerpagesitelanguages', d: 'powerpagesitelanguage' },
			regardingobjectid_powerpagesitepublished: { b: 'regardingobjectid_powerpagesitepublished', a: '_regardingobjectid_value', c: 'powerpagesitepublisheds', d: 'powerpagesitepublished' },
			regardingobjectid_powerpagesscanreport: { b: 'regardingobjectid_powerpagesscanreport', a: '_regardingobjectid_value', c: 'powerpagesscanreports', d: 'powerpagesscanreport' },
			regardingobjectid_privilegecheckerlog: { b: 'regardingobjectid_privilegecheckerlog', a: '_regardingobjectid_value', c: 'privilegecheckerlogs', d: 'privilegecheckerlog' },
			regardingobjectid_privilegecheckerrun: { b: 'regardingobjectid_privilegecheckerrun', a: '_regardingobjectid_value', c: 'privilegecheckerruns', d: 'privilegecheckerrun' },
			regardingobjectid_privilegesremovalsetting: { b: 'regardingobjectid_privilegesremovalsetting', a: '_regardingobjectid_value', c: 'privilegesremovalsettings', d: 'privilegesremovalsetting' },
			regardingobjectid_processsession_syncerror: { b: 'regardingobjectid_processsession_syncerror', a: '_regardingobjectid_value', c: 'processsessions', d: 'processsession' },
			regardingobjectid_processstage_syncerror: { b: 'regardingobjectid_processstage_syncerror', a: '_regardingobjectid_value', c: 'processstages', d: 'processstage' },
			regardingobjectid_processstageparameter: { b: 'regardingobjectid_processstageparameter', a: '_regardingobjectid_value', c: 'processstageparameters', d: 'processstageparameter' },
			regardingobjectid_processtrigger_syncerror: { b: 'regardingobjectid_processtrigger_syncerror', a: '_regardingobjectid_value', c: 'processtriggers', d: 'processtrigger' },
			regardingobjectid_provisionlanguageforuser: { b: 'regardingobjectid_provisionlanguageforuser', a: '_regardingobjectid_value', c: 'provisionlanguageforusers', d: 'provisionlanguageforuser' },
			regardingobjectid_publisher_syncerror: { b: 'regardingobjectid_publisher_syncerror', a: '_regardingobjectid_value', c: 'publishers', d: 'publisher' },
			regardingobjectid_queue_syncerror: { b: 'regardingobjectid_queue_syncerror', a: '_regardingobjectid_value', c: 'queues', d: 'queue' },
			regardingobjectid_queueitem_syncerror: { b: 'regardingobjectid_queueitem_syncerror', a: '_regardingobjectid_value', c: 'queueitems', d: 'queueitem' },
			regardingobjectid_reconciliationentityinfo: { b: 'regardingobjectid_reconciliationentityinfo', a: '_regardingobjectid_value', c: 'reconciliationentityinfos', d: 'reconciliationentityinfo' },
			regardingobjectid_reconciliationentitystepinfo: { b: 'regardingobjectid_reconciliationentitystepinfo', a: '_regardingobjectid_value', c: 'reconciliationentitystepinfos', d: 'reconciliationentitystepinfo' },
			regardingobjectid_reconciliationinfo: { b: 'regardingobjectid_reconciliationinfo', a: '_regardingobjectid_value', c: 'reconciliationinfos', d: 'reconciliationinfo' },
			regardingobjectid_recordfilter: { b: 'regardingobjectid_recordfilter', a: '_regardingobjectid_value', c: 'recordfilters', d: 'recordfilter' },
			regardingobjectid_recurringappointmentmaster_syncerror: { b: 'regardingobjectid_recurringappointmentmaster_syncerror', a: '_regardingobjectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			regardingobjectid_recyclebinconfig: { b: 'regardingobjectid_recyclebinconfig', a: '_regardingobjectid_value', c: 'recyclebinconfigs', d: 'recyclebinconfig' },
			regardingobjectid_relationshipattribute: { b: 'regardingobjectid_relationshipattribute', a: '_regardingobjectid_value', c: 'relationshipattributes', d: 'relationshipattribute' },
			regardingobjectid_report_syncerror: { b: 'regardingobjectid_report_syncerror', a: '_regardingobjectid_value', c: 'reports', d: 'report' },
			regardingobjectid_reportcategory_syncerror: { b: 'regardingobjectid_reportcategory_syncerror', a: '_regardingobjectid_value', c: 'reportcategories', d: 'reportcategory' },
			regardingobjectid_reportparameter: { b: 'regardingobjectid_reportparameter', a: '_regardingobjectid_value', c: 'reportparameters', d: 'reportparameter' },
			regardingobjectid_retaineddataexcel: { b: 'regardingobjectid_retaineddataexcel', a: '_regardingobjectid_value', c: 'retaineddataexcels', d: 'retaineddataexcel' },
			regardingobjectid_retentioncleanupinfo: { b: 'regardingobjectid_retentioncleanupinfo', a: '_regardingobjectid_value', c: 'retentioncleanupinfos', d: 'retentioncleanupinfo' },
			regardingobjectid_retentioncleanupoperation: { b: 'regardingobjectid_retentioncleanupoperation', a: '_regardingobjectid_value', c: 'retentioncleanupoperations', d: 'retentioncleanupoperation' },
			regardingobjectid_retentionconfig: { b: 'regardingobjectid_retentionconfig', a: '_regardingobjectid_value', c: 'retentionconfigs', d: 'retentionconfig' },
			regardingobjectid_retentionfailuredetail: { b: 'regardingobjectid_retentionfailuredetail', a: '_regardingobjectid_value', c: 'retentionfailuredetails', d: 'retentionfailuredetail' },
			regardingobjectid_retentionoperation: { b: 'regardingobjectid_retentionoperation', a: '_regardingobjectid_value', c: 'retentionoperations', d: 'retentionoperation' },
			regardingobjectid_retentionoperationdetail: { b: 'regardingobjectid_retentionoperationdetail', a: '_regardingobjectid_value', c: 'retentionoperationdetails', d: 'retentionoperationdetail' },
			regardingobjectid_revokeinheritedaccessrecordstracker: { b: 'regardingobjectid_revokeinheritedaccessrecordstracker', a: '_regardingobjectid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker' },
			regardingobjectid_role_syncerror: { b: 'regardingobjectid_role_syncerror', a: '_regardingobjectid_value', c: 'roles', d: 'role' },
			regardingobjectid_roleeditorlayout: { b: 'regardingobjectid_roleeditorlayout', a: '_regardingobjectid_value', c: 'roleeditorlayouts', d: 'roleeditorlayout' },
			regardingobjectid_rollupfield_syncerror: { b: 'regardingobjectid_rollupfield_syncerror', a: '_regardingobjectid_value', c: 'rollupfields', d: 'rollupfield' },
			regardingobjectid_savedquery_syncerror: { b: 'regardingobjectid_savedquery_syncerror', a: '_regardingobjectid_value', c: 'savedqueries', d: 'savedquery' },
			regardingobjectid_savedqueryvisualization_syncerror: { b: 'regardingobjectid_savedqueryvisualization_syncerror', a: '_regardingobjectid_value', c: 'savedqueryvisualizations', d: 'savedqueryvisualization' },
			regardingobjectid_searchattributesettings: { b: 'regardingobjectid_searchattributesettings', a: '_regardingobjectid_value', c: 'searchattributesettingses', d: 'searchattributesettings' },
			regardingobjectid_searchcustomanalyzer: { b: 'regardingobjectid_searchcustomanalyzer', a: '_regardingobjectid_value', c: 'searchcustomanalyzers', d: 'searchcustomanalyzer' },
			regardingobjectid_searchrelationshipsettings: { b: 'regardingobjectid_searchrelationshipsettings', a: '_regardingobjectid_value', c: 'searchrelationshipsettingses', d: 'searchrelationshipsettings' },
			regardingobjectid_serviceplan: { b: 'regardingobjectid_serviceplan', a: '_regardingobjectid_value', c: 'serviceplans', d: 'serviceplan' },
			regardingobjectid_serviceplanmapping: { b: 'regardingobjectid_serviceplanmapping', a: '_regardingobjectid_value', c: 'serviceplanmappings', d: 'serviceplanmapping' },
			regardingobjectid_settingdefinition: { b: 'regardingobjectid_settingdefinition', a: '_regardingobjectid_value', c: 'settingdefinitions', d: 'settingdefinition' },
			regardingobjectid_sharedlinksetting: { b: 'regardingobjectid_sharedlinksetting', a: '_regardingobjectid_value', c: 'sharedlinksettings', d: 'sharedlinksetting' },
			regardingobjectid_sharedobject: { b: 'regardingobjectid_sharedobject', a: '_regardingobjectid_value', c: 'sharedobjects', d: 'sharedobject' },
			regardingobjectid_sharedworkspace: { b: 'regardingobjectid_sharedworkspace', a: '_regardingobjectid_value', c: 'sharedworkspaces', d: 'sharedworkspace' },
			regardingobjectid_sharedworkspacepool: { b: 'regardingobjectid_sharedworkspacepool', a: '_regardingobjectid_value', c: 'sharedworkspacepools', d: 'sharedworkspacepool' },
			regardingobjectid_sharepointdocumentlocation_syncerror: { b: 'regardingobjectid_sharepointdocumentlocation_syncerror', a: '_regardingobjectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			regardingobjectid_sharepointsite_syncerror: { b: 'regardingobjectid_sharepointsite_syncerror', a: '_regardingobjectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			regardingobjectid_sideloadedaiplugin: { b: 'regardingobjectid_sideloadedaiplugin', a: '_regardingobjectid_value', c: 'sideloadedaiplugins', d: 'sideloadedaiplugin' },
			regardingobjectid_sla_syncerror: { b: 'regardingobjectid_sla_syncerror', a: '_regardingobjectid_value', c: 'slas', d: 'sla' },
			regardingobjectid_slaitem_syncerror: { b: 'regardingobjectid_slaitem_syncerror', a: '_regardingobjectid_value', c: 'slaitems', d: 'slaitem' },
			regardingobjectid_slakpiinstance_syncerror: { b: 'regardingobjectid_slakpiinstance_syncerror', a: '_regardingobjectid_value', c: 'slakpiinstances', d: 'slakpiinstance' },
			regardingobjectid_socialactivity_syncerror: { b: 'regardingobjectid_socialactivity_syncerror', a: '_regardingobjectid_value', c: 'socialactivities', d: 'socialactivity' },
			regardingobjectid_socialprofile_syncerror: { b: 'regardingobjectid_socialprofile_syncerror', a: '_regardingobjectid_value', c: 'socialprofiles', d: 'socialprofile' },
			regardingobjectid_solution_syncerror: { b: 'regardingobjectid_solution_syncerror', a: '_regardingobjectid_value', c: 'solutions', d: 'solution' },
			regardingobjectid_solutioncomponentattributeconfiguration: { b: 'regardingobjectid_solutioncomponentattributeconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration' },
			regardingobjectid_solutioncomponentbatchconfiguration: { b: 'regardingobjectid_solutioncomponentbatchconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentbatchconfigurations', d: 'solutioncomponentbatchconfiguration' },
			regardingobjectid_solutioncomponentconfiguration: { b: 'regardingobjectid_solutioncomponentconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration' },
			regardingobjectid_solutioncomponentrelationshipconfiguration: { b: 'regardingobjectid_solutioncomponentrelationshipconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentrelationshipconfigurations', d: 'solutioncomponentrelationshipconfiguration' },
			regardingobjectid_stagedentity: { b: 'regardingobjectid_stagedentity', a: '_regardingobjectid_value', c: 'stagedentities', d: 'stagedentity' },
			regardingobjectid_stagedentityattribute: { b: 'regardingobjectid_stagedentityattribute', a: '_regardingobjectid_value', c: 'stagedentityattributes', d: 'stagedentityattribute' },
			regardingobjectid_stagedmetadataasyncoperation: { b: 'regardingobjectid_stagedmetadataasyncoperation', a: '_regardingobjectid_value', c: 'stagedmetadataasyncoperations', d: 'stagedmetadataasyncoperation' },
			regardingobjectid_stagesolutionupload: { b: 'regardingobjectid_stagesolutionupload', a: '_regardingobjectid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload' },
			regardingobjectid_subject_syncerror: { b: 'regardingobjectid_subject_syncerror', a: '_regardingobjectid_value', c: 'subjects', d: 'subject' },
			regardingobjectid_supportusertable: { b: 'regardingobjectid_supportusertable', a: '_regardingobjectid_value', c: 'supportusertables', d: 'supportusertable' },
			regardingobjectid_synapsedatabase: { b: 'regardingobjectid_synapsedatabase', a: '_regardingobjectid_value', c: 'synapsedatabases', d: 'synapsedatabase' },
			regardingobjectid_synapselinkexternaltablestate: { b: 'regardingobjectid_synapselinkexternaltablestate', a: '_regardingobjectid_value', c: 'synapselinkexternaltablestates', d: 'synapselinkexternaltablestate' },
			regardingobjectid_synapselinkprofile: { b: 'regardingobjectid_synapselinkprofile', a: '_regardingobjectid_value', c: 'synapselinkprofiles', d: 'synapselinkprofile' },
			regardingobjectid_synapselinkprofileentity: { b: 'regardingobjectid_synapselinkprofileentity', a: '_regardingobjectid_value', c: 'synapselinkprofileentities', d: 'synapselinkprofileentity' },
			regardingobjectid_synapselinkprofileentitystate: { b: 'regardingobjectid_synapselinkprofileentitystate', a: '_regardingobjectid_value', c: 'synapselinkprofileentitystates', d: 'synapselinkprofileentitystate' },
			regardingobjectid_synapselinkschedule: { b: 'regardingobjectid_synapselinkschedule', a: '_regardingobjectid_value', c: 'synapselinkschedules', d: 'synapselinkschedule' },
			regardingobjectid_syncerror_syncerror: { b: 'regardingobjectid_syncerror_syncerror', a: '_regardingobjectid_value', c: 'syncerrors', d: 'syncerror' },
			regardingobjectid_systemuser_syncerror: { b: 'regardingobjectid_systemuser_syncerror', a: '_regardingobjectid_value', c: 'systemusers', d: 'systemuser' },
			regardingobjectid_systemuserauthorizationchangetracker: { b: 'regardingobjectid_systemuserauthorizationchangetracker', a: '_regardingobjectid_value', c: 'systemuserauthorizationchangetrackers', d: 'systemuserauthorizationchangetracker' },
			regardingobjectid_task_syncerror: { b: 'regardingobjectid_task_syncerror', a: '_regardingobjectid_value', c: 'tasks', d: 'task' },
			regardingobjectid_tdsmetadata: { b: 'regardingobjectid_tdsmetadata', a: '_regardingobjectid_value', c: 'tdsmetadatas', d: 'tdsmetadata' },
			regardingobjectid_team_syncerror: { b: 'regardingobjectid_team_syncerror', a: '_regardingobjectid_value', c: 'teams', d: 'team' },
			regardingobjectid_teammobileofflineprofilemembership: { b: 'regardingobjectid_teammobileofflineprofilemembership', a: '_regardingobjectid_value', c: 'teammobileofflineprofilememberships', d: 'teammobileofflineprofilemembership' },
			regardingobjectid_teamtemplate_syncerror: { b: 'regardingobjectid_teamtemplate_syncerror', a: '_regardingobjectid_value', c: 'teamtemplates', d: 'teamtemplate' },
			regardingobjectid_template_syncerror: { b: 'regardingobjectid_template_syncerror', a: '_regardingobjectid_value', c: 'templates', d: 'template' },
			regardingobjectid_territory_syncerror: { b: 'regardingobjectid_territory_syncerror', a: '_regardingobjectid_value', c: 'territories', d: 'territory' },
			regardingobjectid_transactioncurrency_syncerror: { b: 'regardingobjectid_transactioncurrency_syncerror', a: '_regardingobjectid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			regardingobjectid_TranslationProcess_syncerror: { b: 'regardingobjectid_TranslationProcess_syncerror', a: '_regardingobjectid_value', c: 'translationprocesses', d: 'translationprocess' },
			regardingobjectid_usermobileofflineprofilemembership: { b: 'regardingobjectid_usermobileofflineprofilemembership', a: '_regardingobjectid_value', c: 'usermobileofflineprofilememberships', d: 'usermobileofflineprofilemembership' },
			regardingobjectid_userquery_syncerror: { b: 'regardingobjectid_userquery_syncerror', a: '_regardingobjectid_value', c: 'userqueries', d: 'userquery' },
			regardingobjectid_userqueryvisualization_syncerror: { b: 'regardingobjectid_userqueryvisualization_syncerror', a: '_regardingobjectid_value', c: 'userqueryvisualizations', d: 'userqueryvisualization' },
			regardingobjectid_userrating: { b: 'regardingobjectid_userrating', a: '_regardingobjectid_value', c: 'userratings', d: 'userrating' },
			regardingobjectid_viewasexamplequestion: { b: 'regardingobjectid_viewasexamplequestion', a: '_regardingobjectid_value', c: 'viewasexamplequestions', d: 'viewasexamplequestion' },
			regardingobjectid_virtualentitymetadata: { b: 'regardingobjectid_virtualentitymetadata', a: '_regardingobjectid_value', c: 'virtualentitymetadatas', d: 'virtualentitymetadata' },
			regardingobjectid_workflow_syncerror: { b: 'regardingobjectid_workflow_syncerror', a: '_regardingobjectid_value', c: 'workflows', d: 'workflow' },
			regardingobjectid_workflowbinary: { b: 'regardingobjectid_workflowbinary', a: '_regardingobjectid_value', c: 'workflowbinaries', d: 'workflowbinary' },
			regardingobjectid_workqueue: { b: 'regardingobjectid_workqueue', a: '_regardingobjectid_value', c: 'workqueues', d: 'workqueue' },
			regardingobjectid_workqueueitem: { b: 'regardingobjectid_workqueueitem', a: '_regardingobjectid_value', c: 'workqueueitems', d: 'workqueueitem' },
			RequestData: { a: 'requestdata' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SyncErrorId: { a: 'syncerrorid' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var syncerror = {};
		syncerror.ODataEntity = e;
		syncerror.FormattedValue = {};
		for (var field in _syncerror) {
			var a = _syncerror[field].a;
			var b = _syncerror[field].b;
			var c = _syncerror[field].c;
			var d = _syncerror[field].d;
			var g = _syncerror[field].g;
			var r = _syncerror[field].r;
			webApiField(syncerror, field, e, a, b, c, d, r, u, g);
		}
		syncerror.Entity = u;
		syncerror.EntityName = 'syncerror';
		syncerror.EntityCollectionName = 'syncerrors';
		syncerror['@odata.etag'] = e['@odata.etag'];
		syncerror.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		syncerror.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return syncerror;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SyncError = {
		ErrorType : {
			Ban_ghi_da_ton_tai: 2,
			Khong_tim_thay_ban_ghi: 1,
			Loai_khac: 3,
			Xung_dot: 0
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Da_giai_quyet: 1,
			Hien_hoat: 0
		},
		StatusCode : {
			Da_khac_phuc: 1,
			Hien_hoat: 0
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
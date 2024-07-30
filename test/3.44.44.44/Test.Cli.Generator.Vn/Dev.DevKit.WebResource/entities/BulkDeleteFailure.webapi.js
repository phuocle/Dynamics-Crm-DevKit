'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.BulkDeleteFailureApi = function (e) {
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
		var _bulkdeletefailure = {
			AsyncOperationId: { b: 'asyncoperationid', a: '_asyncoperationid_value', c: 'asyncoperations', d: 'asyncoperation', r: true },
			BulkDeleteFailureId: { a: 'bulkdeletefailureid', r: true },
			BulkDeleteOperationId: { b: 'bulkdeleteoperationid', a: '_bulkdeleteoperationid_value', c: 'bulkdeleteoperations', d: 'bulkdeleteoperation', r: true },
			ErrorDescription: { a: 'errordescription', r: true },
			ErrorNumber: { a: 'errornumber', r: true },
			OrderedQueryIndex: { a: 'orderedqueryindex', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			OwningUser: { a: 'owninguser', r: true },
			regardingobjectid_account: { b: 'regardingobjectid_account', a: '_regardingobjectid_value', c: 'accounts', d: 'account', r: true },
			regardingobjectid_activityfileattachment: { b: 'regardingobjectid_activityfileattachment', a: '_regardingobjectid_value', c: 'activityfileattachments', d: 'activityfileattachment', r: true },
			regardingobjectid_activitymimeattachment: { b: 'regardingobjectid_activitymimeattachment', a: '_regardingobjectid_value', c: 'activitymimeattachments', d: 'activitymimeattachment', r: true },
			regardingobjectid_activitypointer: { b: 'regardingobjectid_activitypointer', a: '_regardingobjectid_value', c: 'activitypointers', d: 'activitypointer', r: true },
			regardingobjectid_adx_externalidentity: { b: 'regardingobjectid_adx_externalidentity', a: '_regardingobjectid_value', c: 'adx_externalidentities', d: 'adx_externalidentity', r: true },
			regardingobjectid_adx_invitation: { b: 'regardingobjectid_adx_invitation', a: '_regardingobjectid_value', c: 'adx_invitations', d: 'adx_invitation', r: true },
			regardingobjectid_adx_inviteredemption: { b: 'regardingobjectid_adx_inviteredemption', a: '_regardingobjectid_value', c: 'adx_inviteredemptions', d: 'adx_inviteredemption', r: true },
			regardingobjectid_adx_portalcomment: { b: 'regardingobjectid_adx_portalcomment', a: '_regardingobjectid_value', c: 'adx_portalcomments', d: 'adx_portalcomment', r: true },
			regardingobjectid_adx_setting: { b: 'regardingobjectid_adx_setting', a: '_regardingobjectid_value', c: 'adx_settings', d: 'adx_setting', r: true },
			regardingobjectid_adx_webformsession: { b: 'regardingobjectid_adx_webformsession', a: '_regardingobjectid_value', c: 'adx_webformsessions', d: 'adx_webformsession', r: true },
			regardingobjectid_aicopilot: { b: 'regardingobjectid_aicopilot', a: '_regardingobjectid_value', c: 'aicopilots', d: 'aicopilot', r: true },
			regardingobjectid_aiplugin: { b: 'regardingobjectid_aiplugin', a: '_regardingobjectid_value', c: 'aiplugins', d: 'aiplugin', r: true },
			regardingobjectid_aipluginauth: { b: 'regardingobjectid_aipluginauth', a: '_regardingobjectid_value', c: 'aipluginauths', d: 'aipluginauth', r: true },
			regardingobjectid_aipluginconversationstarter: { b: 'regardingobjectid_aipluginconversationstarter', a: '_regardingobjectid_value', c: 'aipluginconversationstarters', d: 'aipluginconversationstarter', r: true },
			regardingobjectid_aipluginconversationstartermapping: { b: 'regardingobjectid_aipluginconversationstartermapping', a: '_regardingobjectid_value', c: 'aipluginconversationstartermappings', d: 'aipluginconversationstartermapping', r: true },
			regardingobjectid_aipluginexternalschema: { b: 'regardingobjectid_aipluginexternalschema', a: '_regardingobjectid_value', c: 'aipluginexternalschemas', d: 'aipluginexternalschema', r: true },
			regardingobjectid_aipluginexternalschemaproperty: { b: 'regardingobjectid_aipluginexternalschemaproperty', a: '_regardingobjectid_value', c: 'aipluginexternalschemaproperties', d: 'aipluginexternalschemaproperty', r: true },
			regardingobjectid_aiplugingovernance: { b: 'regardingobjectid_aiplugingovernance', a: '_regardingobjectid_value', c: 'aiplugingovernances', d: 'aiplugingovernance', r: true },
			regardingobjectid_aiplugingovernanceext: { b: 'regardingobjectid_aiplugingovernanceext', a: '_regardingobjectid_value', c: 'aiplugingovernanceexts', d: 'aiplugingovernanceext', r: true },
			regardingobjectid_aiplugininstance: { b: 'regardingobjectid_aiplugininstance', a: '_regardingobjectid_value', c: 'aiplugininstances', d: 'aiplugininstance', r: true },
			regardingobjectid_aipluginoperation: { b: 'regardingobjectid_aipluginoperation', a: '_regardingobjectid_value', c: 'aipluginoperations', d: 'aipluginoperation', r: true },
			regardingobjectid_aipluginoperationparameter: { b: 'regardingobjectid_aipluginoperationparameter', a: '_regardingobjectid_value', c: 'aipluginoperationparameters', d: 'aipluginoperationparameter', r: true },
			regardingobjectid_aipluginoperationresponsetemplate: { b: 'regardingobjectid_aipluginoperationresponsetemplate', a: '_regardingobjectid_value', c: 'aipluginoperationresponsetemplates', d: 'aipluginoperationresponsetemplate', r: true },
			regardingobjectid_aiplugintitle: { b: 'regardingobjectid_aiplugintitle', a: '_regardingobjectid_value', c: 'aiplugintitles', d: 'aiplugintitle', r: true },
			regardingobjectid_aipluginusersetting: { b: 'regardingobjectid_aipluginusersetting', a: '_regardingobjectid_value', c: 'aipluginusersettings', d: 'aipluginusersetting', r: true },
			regardingobjectid_annotation: { b: 'regardingobjectid_annotation', a: '_regardingobjectid_value', c: 'annotations', d: 'annotation', r: true },
			regardingobjectid_annualfiscalcalendar: { b: 'regardingobjectid_annualfiscalcalendar', a: '_regardingobjectid_value', c: 'annualfiscalcalendars', d: 'annualfiscalcalendar', r: true },
			regardingobjectid_appaction: { b: 'regardingobjectid_appaction', a: '_regardingobjectid_value', c: 'appactions', d: 'appaction', r: true },
			regardingobjectid_appactionmigration: { b: 'regardingobjectid_appactionmigration', a: '_regardingobjectid_value', c: 'appactionmigrations', d: 'appactionmigration', r: true },
			regardingobjectid_appactionrule: { b: 'regardingobjectid_appactionrule', a: '_regardingobjectid_value', c: 'appactionrules', d: 'appactionrule', r: true },
			regardingobjectid_appelement: { b: 'regardingobjectid_appelement', a: '_regardingobjectid_value', c: 'appelements', d: 'appelement', r: true },
			regardingobjectid_application: { b: 'regardingobjectid_application', a: '_regardingobjectid_value', c: 'applications', d: 'application', r: true },
			regardingobjectid_applicationuser: { b: 'regardingobjectid_applicationuser', a: '_regardingobjectid_value', c: 'applicationusers', d: 'applicationuser', r: true },
			regardingobjectid_appmodulecomponentedge: { b: 'regardingobjectid_appmodulecomponentedge', a: '_regardingobjectid_value', c: 'appmodulecomponentedges', d: 'appmodulecomponentedge', r: true },
			regardingobjectid_appmodulecomponentnode: { b: 'regardingobjectid_appmodulecomponentnode', a: '_regardingobjectid_value', c: 'appmodulecomponentnodes', d: 'appmodulecomponentnode', r: true },
			regardingobjectid_appointment: { b: 'regardingobjectid_appointment', a: '_regardingobjectid_value', c: 'appointments', d: 'appointment', r: true },
			regardingobjectid_appsetting: { b: 'regardingobjectid_appsetting', a: '_regardingobjectid_value', c: 'appsettings', d: 'appsetting', r: true },
			regardingobjectid_appusersetting: { b: 'regardingobjectid_appusersetting', a: '_regardingobjectid_value', c: 'appusersettings', d: 'appusersetting', r: true },
			regardingobjectid_archivecleanupinfo: { b: 'regardingobjectid_archivecleanupinfo', a: '_regardingobjectid_value', c: 'archivecleanupinfos', d: 'archivecleanupinfo', r: true },
			regardingobjectid_archivecleanupoperation: { b: 'regardingobjectid_archivecleanupoperation', a: '_regardingobjectid_value', c: 'archivecleanupoperations', d: 'archivecleanupoperation', r: true },
			regardingobjectid_attributeimageconfig: { b: 'regardingobjectid_attributeimageconfig', a: '_regardingobjectid_value', c: 'attributeimageconfigs', d: 'attributeimageconfig', r: true },
			regardingobjectid_attributemap: { b: 'regardingobjectid_attributemap', a: '_regardingobjectid_value', c: 'attributemaps', d: 'attributemap', r: true },
			regardingobjectid_attributemaskingrule: { b: 'regardingobjectid_attributemaskingrule', a: '_regardingobjectid_value', c: 'attributemaskingrules', d: 'attributemaskingrule', r: true },
			regardingobjectid_bot: { b: 'regardingobjectid_bot', a: '_regardingobjectid_value', c: 'bots', d: 'bot', r: true },
			regardingobjectid_botcomponent: { b: 'regardingobjectid_botcomponent', a: '_regardingobjectid_value', c: 'botcomponents', d: 'botcomponent', r: true },
			regardingobjectid_botcomponentcollection: { b: 'regardingobjectid_botcomponentcollection', a: '_regardingobjectid_value', c: 'botcomponentcollections', d: 'botcomponentcollection', r: true },
			regardingobjectid_bulkarchiveconfig: { b: 'regardingobjectid_bulkarchiveconfig', a: '_regardingobjectid_value', c: 'bulkarchiveconfigs', d: 'bulkarchiveconfig', r: true },
			regardingobjectid_bulkarchivefailuredetail: { b: 'regardingobjectid_bulkarchivefailuredetail', a: '_regardingobjectid_value', c: 'bulkarchivefailuredetails', d: 'bulkarchivefailuredetail', r: true },
			regardingobjectid_bulkarchiveoperation: { b: 'regardingobjectid_bulkarchiveoperation', a: '_regardingobjectid_value', c: 'bulkarchiveoperations', d: 'bulkarchiveoperation', r: true },
			regardingobjectid_bulkarchiveoperationdetail: { b: 'regardingobjectid_bulkarchiveoperationdetail', a: '_regardingobjectid_value', c: 'bulkarchiveoperationdetails', d: 'bulkarchiveoperationdetail', r: true },
			regardingobjectid_businessunit: { b: 'regardingobjectid_businessunit', a: '_regardingobjectid_value', c: 'businessunits', d: 'businessunit', r: true },
			regardingobjectid_businessunitnewsarticle: { b: 'regardingobjectid_businessunitnewsarticle', a: '_regardingobjectid_value', c: 'businessunitnewsarticles', d: 'businessunitnewsarticle', r: true },
			regardingobjectid_calendar: { b: 'regardingobjectid_calendar', a: '_regardingobjectid_value', c: 'calendars', d: 'calendar', r: true },
			regardingobjectid_canvasappextendedmetadata: { b: 'regardingobjectid_canvasappextendedmetadata', a: '_regardingobjectid_value', c: 'canvasappextendedmetadatas', d: 'canvasappextendedmetadata', r: true },
			regardingobjectid_card: { b: 'regardingobjectid_card', a: '_regardingobjectid_value', c: 'cards', d: 'card', r: true },
			regardingobjectid_cascadegrantrevokeaccessrecordstracker: { b: 'regardingobjectid_cascadegrantrevokeaccessrecordstracker', a: '_regardingobjectid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker', r: true },
			regardingobjectid_cascadegrantrevokeaccessversiontracker: { b: 'regardingobjectid_cascadegrantrevokeaccessversiontracker', a: '_regardingobjectid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker', r: true },
			regardingobjectid_catalog: { b: 'regardingobjectid_catalog', a: '_regardingobjectid_value', c: 'catalogs', d: 'catalog', r: true },
			regardingobjectid_catalogassignment: { b: 'regardingobjectid_catalogassignment', a: '_regardingobjectid_value', c: 'catalogassignments', d: 'catalogassignment', r: true },
			channelaccessprofile_bulkdeletefailures: { b: 'channelaccessprofile_bulkdeletefailures', a: '_regardingobjectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile', r: true },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_regardingobjectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule', r: true },
			regardingobjectid_chat: { b: 'regardingobjectid_chat', a: '_regardingobjectid_value', c: 'chats', d: 'chat', r: true },
			regardingobjectid_comment: { b: 'regardingobjectid_comment', a: '_regardingobjectid_value', c: 'comments', d: 'comment', r: true },
			regardingobjectid_connectioninstance: { b: 'regardingobjectid_connectioninstance', a: '_regardingobjectid_value', c: 'connectioninstances', d: 'connectioninstance', r: true },
			regardingobjectid_connectionreference: { b: 'regardingobjectid_connectionreference', a: '_regardingobjectid_value', c: 'connectionreferences', d: 'connectionreference', r: true },
			regardingobjectid_connector: { b: 'regardingobjectid_connector', a: '_regardingobjectid_value', c: 'connectors', d: 'connector', r: true },
			regardingobjectid_contact: { b: 'regardingobjectid_contact', a: '_regardingobjectid_value', c: 'contacts', d: 'contact', r: true },
			regardingobjectid_conversationtranscript: { b: 'regardingobjectid_conversationtranscript', a: '_regardingobjectid_value', c: 'conversationtranscripts', d: 'conversationtranscript', r: true },
			regardingobjectid_copilotexamplequestion: { b: 'regardingobjectid_copilotexamplequestion', a: '_regardingobjectid_value', c: 'copilotexamplequestions', d: 'copilotexamplequestion', r: true },
			regardingobjectid_copilotglossaryterm: { b: 'regardingobjectid_copilotglossaryterm', a: '_regardingobjectid_value', c: 'copilotglossaryterms', d: 'copilotglossaryterm', r: true },
			regardingobjectid_copilotsynonyms: { b: 'regardingobjectid_copilotsynonyms', a: '_regardingobjectid_value', c: 'copilotsynonyms', d: 'copilotsynonyms', r: true },
			regardingobjectid_credential: { b: 'regardingobjectid_credential', a: '_regardingobjectid_value', c: 'credentials', d: 'credential', r: true },
			regardingobjectid_customapi: { b: 'regardingobjectid_customapi', a: '_regardingobjectid_value', c: 'customapis', d: 'customapi', r: true },
			regardingobjectid_customapirequestparameter: { b: 'regardingobjectid_customapirequestparameter', a: '_regardingobjectid_value', c: 'customapirequestparameters', d: 'customapirequestparameter', r: true },
			regardingobjectid_customapiresponseproperty: { b: 'regardingobjectid_customapiresponseproperty', a: '_regardingobjectid_value', c: 'customapiresponseproperties', d: 'customapiresponseproperty', r: true },
			regardingobjectid_customeraddress: { b: 'regardingobjectid_customeraddress', a: '_regardingobjectid_value', c: 'customeraddresses', d: 'customeraddress', r: true },
			regardingobjectid_customerrelationship: { b: 'regardingobjectid_customerrelationship', a: '_regardingobjectid_value', c: 'customerrelationships', d: 'customerrelationship', r: true },
			regardingobjectid_datalakefolder: { b: 'regardingobjectid_datalakefolder', a: '_regardingobjectid_value', c: 'datalakefolders', d: 'datalakefolder', r: true },
			regardingobjectid_datalakefolderpermission: { b: 'regardingobjectid_datalakefolderpermission', a: '_regardingobjectid_value', c: 'datalakefolderpermissions', d: 'datalakefolderpermission', r: true },
			regardingobjectid_datalakeworkspace: { b: 'regardingobjectid_datalakeworkspace', a: '_regardingobjectid_value', c: 'datalakeworkspaces', d: 'datalakeworkspace', r: true },
			regardingobjectid_datalakeworkspacepermission: { b: 'regardingobjectid_datalakeworkspacepermission', a: '_regardingobjectid_value', c: 'datalakeworkspacepermissions', d: 'datalakeworkspacepermission', r: true },
			regardingobjectid_dataprocessingconfiguration: { b: 'regardingobjectid_dataprocessingconfiguration', a: '_regardingobjectid_value', c: 'dataprocessingconfigurations', d: 'dataprocessingconfiguration', r: true },
			regardingobjectid_delegatedauthorization: { b: 'regardingobjectid_delegatedauthorization', a: '_regardingobjectid_value', c: 'delegatedauthorizations', d: 'delegatedauthorization', r: true },
			regardingobjectid_deleteditemreference: { b: 'regardingobjectid_deleteditemreference', a: '_regardingobjectid_value', c: 'deleteditemreferences', d: 'deleteditemreference', r: true },
			regardingobjectid_desktopflowbinary: { b: 'regardingobjectid_desktopflowbinary', a: '_regardingobjectid_value', c: 'desktopflowbinaries', d: 'desktopflowbinary', r: true },
			regardingobjectid_desktopflowmodule: { b: 'regardingobjectid_desktopflowmodule', a: '_regardingobjectid_value', c: 'desktopflowmodules', d: 'desktopflowmodule', r: true },
			regardingobjectid_displaystring: { b: 'regardingobjectid_displaystring', a: '_regardingobjectid_value', c: 'displaystrings', d: 'displaystring', r: true },
			regardingobjectid_dvfilesearch: { b: 'regardingobjectid_dvfilesearch', a: '_regardingobjectid_value', c: 'dvfilesearchs', d: 'dvfilesearch', r: true },
			regardingobjectid_dvfilesearchattribute: { b: 'regardingobjectid_dvfilesearchattribute', a: '_regardingobjectid_value', c: 'dvfilesearchattributes', d: 'dvfilesearchattribute', r: true },
			regardingobjectid_dvfilesearchentity: { b: 'regardingobjectid_dvfilesearchentity', a: '_regardingobjectid_value', c: 'dvfilesearchentities', d: 'dvfilesearchentity', r: true },
			regardingobjectid_dvtablesearch: { b: 'regardingobjectid_dvtablesearch', a: '_regardingobjectid_value', c: 'dvtablesearchs', d: 'dvtablesearch', r: true },
			regardingobjectid_dvtablesearchattribute: { b: 'regardingobjectid_dvtablesearchattribute', a: '_regardingobjectid_value', c: 'dvtablesearchattributes', d: 'dvtablesearchattribute', r: true },
			regardingobjectid_dvtablesearchentity: { b: 'regardingobjectid_dvtablesearchentity', a: '_regardingobjectid_value', c: 'dvtablesearchentities', d: 'dvtablesearchentity', r: true },
			regardingobjectid_email: { b: 'regardingobjectid_email', a: '_regardingobjectid_value', c: 'emails', d: 'email', r: true },
			regardingobjectid_emailserverprofile: { b: 'regardingobjectid_emailserverprofile', a: '_regardingobjectid_value', c: 'emailserverprofiles', d: 'emailserverprofile', r: true },
			regardingobjectid_enablearchivalrequest: { b: 'regardingobjectid_enablearchivalrequest', a: '_regardingobjectid_value', c: 'enablearchivalrequests', d: 'enablearchivalrequest', r: true },
			regardingobjectid_entityanalyticsconfig: { b: 'regardingobjectid_entityanalyticsconfig', a: '_regardingobjectid_value', c: 'entityanalyticsconfigs', d: 'entityanalyticsconfig', r: true },
			regardingobjectid_entityimageconfig: { b: 'regardingobjectid_entityimageconfig', a: '_regardingobjectid_value', c: 'entityimageconfigs', d: 'entityimageconfig', r: true },
			regardingobjectid_entityindex: { b: 'regardingobjectid_entityindex', a: '_regardingobjectid_value', c: 'entityindexes', d: 'entityindex', r: true },
			regardingobjectid_entitymap: { b: 'regardingobjectid_entitymap', a: '_regardingobjectid_value', c: 'entitymaps', d: 'entitymap', r: true },
			regardingobjectid_entityrecordfilter: { b: 'regardingobjectid_entityrecordfilter', a: '_regardingobjectid_value', c: 'entityrecordfilters', d: 'entityrecordfilter', r: true },
			regardingobjectid_environmentvariabledefinition: { b: 'regardingobjectid_environmentvariabledefinition', a: '_regardingobjectid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition', r: true },
			regardingobjectid_environmentvariablevalue: { b: 'regardingobjectid_environmentvariablevalue', a: '_regardingobjectid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue', r: true },
			regardingobjectid_exportedexcel: { b: 'regardingobjectid_exportedexcel', a: '_regardingobjectid_value', c: 'exportedexcels', d: 'exportedexcel', r: true },
			regardingobjectid_exportsolutionupload: { b: 'regardingobjectid_exportsolutionupload', a: '_regardingobjectid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload', r: true },
			externalparty_bulkdeletefailures: { b: 'externalparty_bulkdeletefailures', a: '_regardingobjectid_value', c: 'externalparties', d: 'externalparty', r: true },
			externalpartyitem_bulkdeletefailures: { b: 'externalpartyitem_bulkdeletefailures', a: '_regardingobjectid_value', c: 'externalpartyitems', d: 'externalpartyitem', r: true },
			regardingobjectid_fabricaiskill: { b: 'regardingobjectid_fabricaiskill', a: '_regardingobjectid_value', c: 'fabricaiskills', d: 'fabricaiskill', r: true },
			regardingobjectid_fax: { b: 'regardingobjectid_fax', a: '_regardingobjectid_value', c: 'faxes', d: 'fax', r: true },
			regardingobjectid_featurecontrolsetting: { b: 'regardingobjectid_featurecontrolsetting', a: '_regardingobjectid_value', c: 'featurecontrolsettings', d: 'featurecontrolsetting', r: true },
			regardingobjectid_federatedknowledgeconfiguration: { b: 'regardingobjectid_federatedknowledgeconfiguration', a: '_regardingobjectid_value', c: 'federatedknowledgeconfigurations', d: 'federatedknowledgeconfiguration', r: true },
			regardingobjectid_federatedknowledgeentityconfiguration: { b: 'regardingobjectid_federatedknowledgeentityconfiguration', a: '_regardingobjectid_value', c: 'federatedknowledgeentityconfigurations', d: 'federatedknowledgeentityconfiguration', r: true },
			regardingobjectid_fixedmonthlyfiscalcalendar: { b: 'regardingobjectid_fixedmonthlyfiscalcalendar', a: '_regardingobjectid_value', c: 'fixedmonthlyfiscalcalendars', d: 'fixedmonthlyfiscalcalendar', r: true },
			regardingobjectid_flowcapacityassignment: { b: 'regardingobjectid_flowcapacityassignment', a: '_regardingobjectid_value', c: 'flowcapacityassignments', d: 'flowcapacityassignment', r: true },
			regardingobjectid_flowcredentialapplication: { b: 'regardingobjectid_flowcredentialapplication', a: '_regardingobjectid_value', c: 'flowcredentialapplications', d: 'flowcredentialapplication', r: true },
			regardingobjectid_flowevent: { b: 'regardingobjectid_flowevent', a: '_regardingobjectid_value', c: 'flowevents', d: 'flowevent', r: true },
			regardingobjectid_flowmachine: { b: 'regardingobjectid_flowmachine', a: '_regardingobjectid_value', c: 'flowmachines', d: 'flowmachine', r: true },
			regardingobjectid_flowmachinegroup: { b: 'regardingobjectid_flowmachinegroup', a: '_regardingobjectid_value', c: 'flowmachinegroups', d: 'flowmachinegroup', r: true },
			regardingobjectid_flowmachineimage: { b: 'regardingobjectid_flowmachineimage', a: '_regardingobjectid_value', c: 'flowmachineimages', d: 'flowmachineimage', r: true },
			regardingobjectid_flowmachineimageversion: { b: 'regardingobjectid_flowmachineimageversion', a: '_regardingobjectid_value', c: 'flowmachineimageversions', d: 'flowmachineimageversion', r: true },
			regardingobjectid_flowmachinenetwork: { b: 'regardingobjectid_flowmachinenetwork', a: '_regardingobjectid_value', c: 'flowmachinenetworks', d: 'flowmachinenetwork', r: true },
			regardingobjectid_flowsession: { b: 'regardingobjectid_flowsession', a: '_regardingobjectid_value', c: 'flowsessions', d: 'flowsession', r: true },
			regardingobjectid_fxexpression: { b: 'regardingobjectid_fxexpression', a: '_regardingobjectid_value', c: 'fxexpressions', d: 'fxexpression', r: true },
			regardingobjectid_holidaywrapper: { b: 'regardingobjectid_holidaywrapper', a: '_regardingobjectid_value', c: 'holidaywrappers', d: 'holidaywrapper', r: true },
			regardingobjectid_import: { b: 'regardingobjectid_import', a: '_regardingobjectid_value', c: 'imports', d: 'import', r: true },
			regardingobjectid_importdata: { b: 'regardingobjectid_importdata', a: '_regardingobjectid_value', c: 'importdatas', d: 'importdata', r: true },
			regardingobjectid_importfile: { b: 'regardingobjectid_importfile', a: '_regardingobjectid_value', c: 'importfiles', d: 'importfile', r: true },
			regardingobjectid_importlog: { b: 'regardingobjectid_importlog', a: '_regardingobjectid_value', c: 'importlogs', d: 'importlog', r: true },
			regardingobjectid_importmap: { b: 'regardingobjectid_importmap', a: '_regardingobjectid_value', c: 'importmaps', d: 'importmap', r: true },
			regardingobjectid_indexattributes: { b: 'regardingobjectid_indexattributes', a: '_regardingobjectid_value', c: 'indexattributes', d: 'indexattributes', r: true },
			regardingobjectid_internalcatalogassignment: { b: 'regardingobjectid_internalcatalogassignment', a: '_regardingobjectid_value', c: 'internalcatalogassignments', d: 'internalcatalogassignment', r: true },
			regardingobjectid_isvconfig: { b: 'regardingobjectid_isvconfig', a: '_regardingobjectid_value', c: 'isvconfigs', d: 'isvconfig', r: true },
			regardingobjectid_kbarticle: { b: 'regardingobjectid_kbarticle', a: '_regardingobjectid_value', c: 'kbarticles', d: 'kbarticle', r: true },
			regardingobjectid_kbarticlecomment: { b: 'regardingobjectid_kbarticlecomment', a: '_regardingobjectid_value', c: 'kbarticlecomments', d: 'kbarticlecomment', r: true },
			regardingobjectid_kbarticletemplate: { b: 'regardingobjectid_kbarticletemplate', a: '_regardingobjectid_value', c: 'kbarticletemplates', d: 'kbarticletemplate', r: true },
			regardingobjectid_keyvaultreference: { b: 'regardingobjectid_keyvaultreference', a: '_regardingobjectid_value', c: 'keyvaultreferences', d: 'keyvaultreference', r: true },
			regardingobjectid_knowledgearticle: { b: 'regardingobjectid_knowledgearticle', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle', r: true },
			regardingobjectid_knowledgebaserecord: { b: 'regardingobjectid_knowledgebaserecord', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord', r: true },
			regardingobjectid_letter: { b: 'regardingobjectid_letter', a: '_regardingobjectid_value', c: 'letters', d: 'letter', r: true },
			regardingobjectid_mainfewshot: { b: 'regardingobjectid_mainfewshot', a: '_regardingobjectid_value', c: 'mainfewshots', d: 'mainfewshot', r: true },
			regardingobjectid_makerfewshot: { b: 'regardingobjectid_makerfewshot', a: '_regardingobjectid_value', c: 'makerfewshots', d: 'makerfewshot', r: true },
			regardingobjectid_managedidentity: { b: 'regardingobjectid_managedidentity', a: '_regardingobjectid_value', c: 'managedidentities', d: 'managedidentity', r: true },
			regardingobjectid_maskingrule: { b: 'regardingobjectid_maskingrule', a: '_regardingobjectid_value', c: 'maskingrules', d: 'maskingrule', r: true },
			regardingobjectid_metadataforarchival: { b: 'regardingobjectid_metadataforarchival', a: '_regardingobjectid_value', c: 'metadataforarchivals', d: 'metadataforarchival', r: true },
			regardingobjectid_mobileofflineprofileextension: { b: 'regardingobjectid_mobileofflineprofileextension', a: '_regardingobjectid_value', c: 'mobileofflineprofileextensions', d: 'mobileofflineprofileextension', r: true },
			regardingobjectid_monthlyfiscalcalendar: { b: 'regardingobjectid_monthlyfiscalcalendar', a: '_regardingobjectid_value', c: 'monthlyfiscalcalendars', d: 'monthlyfiscalcalendar', r: true },
			regardingobjectid_msdynce_botcontent: { b: 'regardingobjectid_msdynce_botcontent', a: '_regardingobjectid_value', c: 'msdynce_botcontents', d: 'msdynce_botcontent', r: true },
			regardingobjectid_msdyn_aibdataset: { b: 'regardingobjectid_msdyn_aibdataset', a: '_regardingobjectid_value', c: 'msdyn_aibdatasets', d: 'msdyn_aibdataset', r: true },
			regardingobjectid_msdyn_aibdatasetfile: { b: 'regardingobjectid_msdyn_aibdatasetfile', a: '_regardingobjectid_value', c: 'msdyn_aibdatasetfiles', d: 'msdyn_aibdatasetfile', r: true },
			regardingobjectid_msdyn_aibdatasetrecord: { b: 'regardingobjectid_msdyn_aibdatasetrecord', a: '_regardingobjectid_value', c: 'msdyn_aibdatasetrecords', d: 'msdyn_aibdatasetrecord', r: true },
			regardingobjectid_msdyn_aibdatasetscontainer: { b: 'regardingobjectid_msdyn_aibdatasetscontainer', a: '_regardingobjectid_value', c: 'msdyn_aibdatasetscontainers', d: 'msdyn_aibdatasetscontainer', r: true },
			regardingobjectid_msdyn_aibfeedbackloop: { b: 'regardingobjectid_msdyn_aibfeedbackloop', a: '_regardingobjectid_value', c: 'msdyn_aibfeedbackloops', d: 'msdyn_aibfeedbackloop', r: true },
			regardingobjectid_msdyn_aibfile: { b: 'regardingobjectid_msdyn_aibfile', a: '_regardingobjectid_value', c: 'msdyn_aibfiles', d: 'msdyn_aibfile', r: true },
			regardingobjectid_msdyn_aibfileattacheddata: { b: 'regardingobjectid_msdyn_aibfileattacheddata', a: '_regardingobjectid_value', c: 'msdyn_aibfileattacheddatas', d: 'msdyn_aibfileattacheddata', r: true },
			regardingobjectid_msdyn_aiconfiguration: { b: 'regardingobjectid_msdyn_aiconfiguration', a: '_regardingobjectid_value', c: 'msdyn_aiconfigurations', d: 'msdyn_aiconfiguration', r: true },
			regardingobjectid_msdyn_aievent: { b: 'regardingobjectid_msdyn_aievent', a: '_regardingobjectid_value', c: 'msdyn_aievents', d: 'msdyn_aievent', r: true },
			regardingobjectid_msdyn_aifptrainingdocument: { b: 'regardingobjectid_msdyn_aifptrainingdocument', a: '_regardingobjectid_value', c: 'msdyn_aifptrainingdocuments', d: 'msdyn_aifptrainingdocument', r: true },
			regardingobjectid_msdyn_aimodel: { b: 'regardingobjectid_msdyn_aimodel', a: '_regardingobjectid_value', c: 'msdyn_aimodels', d: 'msdyn_aimodel', r: true },
			regardingobjectid_msdyn_aiodimage: { b: 'regardingobjectid_msdyn_aiodimage', a: '_regardingobjectid_value', c: 'msdyn_aiodimages', d: 'msdyn_aiodimage', r: true },
			regardingobjectid_msdyn_aiodlabel: { b: 'regardingobjectid_msdyn_aiodlabel', a: '_regardingobjectid_value', c: 'msdyn_aiodlabels', d: 'msdyn_aiodlabel', r: true },
			regardingobjectid_msdyn_aiodtrainingboundingbox: { b: 'regardingobjectid_msdyn_aiodtrainingboundingbox', a: '_regardingobjectid_value', c: 'msdyn_aiodtrainingboundingboxes', d: 'msdyn_aiodtrainingboundingbox', r: true },
			regardingobjectid_msdyn_aiodtrainingimage: { b: 'regardingobjectid_msdyn_aiodtrainingimage', a: '_regardingobjectid_value', c: 'msdyn_aiodtrainingimages', d: 'msdyn_aiodtrainingimage', r: true },
			regardingobjectid_msdyn_aitemplate: { b: 'regardingobjectid_msdyn_aitemplate', a: '_regardingobjectid_value', c: 'msdyn_aitemplates', d: 'msdyn_aitemplate', r: true },
			regardingobjectid_msdyn_analysiscomponent: { b: 'regardingobjectid_msdyn_analysiscomponent', a: '_regardingobjectid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent', r: true },
			regardingobjectid_msdyn_analysisjob: { b: 'regardingobjectid_msdyn_analysisjob', a: '_regardingobjectid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob', r: true },
			regardingobjectid_msdyn_analysisoverride: { b: 'regardingobjectid_msdyn_analysisoverride', a: '_regardingobjectid_value', c: 'msdyn_analysisoverrides', d: 'msdyn_analysisoverride', r: true },
			regardingobjectid_msdyn_analysisresult: { b: 'regardingobjectid_msdyn_analysisresult', a: '_regardingobjectid_value', c: 'msdyn_analysisresults', d: 'msdyn_analysisresult', r: true },
			regardingobjectid_msdyn_analysisresultdetail: { b: 'regardingobjectid_msdyn_analysisresultdetail', a: '_regardingobjectid_value', c: 'msdyn_analysisresultdetails', d: 'msdyn_analysisresultdetail', r: true },
			regardingobjectid_msdyn_appinsightsmetadata: { b: 'regardingobjectid_msdyn_appinsightsmetadata', a: '_regardingobjectid_value', c: 'msdyn_appinsightsmetadatas', d: 'msdyn_appinsightsmetadata', r: true },
			regardingobjectid_msdyn_customcontrolextendedsettings: { b: 'regardingobjectid_msdyn_customcontrolextendedsettings', a: '_regardingobjectid_value', c: 'msdyn_customcontrolextendedsettingses', d: 'msdyn_customcontrolextendedsettings', r: true },
			regardingobjectid_msdyn_dataflow: { b: 'regardingobjectid_msdyn_dataflow', a: '_regardingobjectid_value', c: 'msdyn_dataflows', d: 'msdyn_dataflow', r: true },
			regardingobjectid_msdyn_dataflowconnectionreference: { b: 'regardingobjectid_msdyn_dataflowconnectionreference', a: '_regardingobjectid_value', c: 'msdyn_dataflowconnectionreferences', d: 'msdyn_dataflowconnectionreference', r: true },
			regardingobjectid_msdyn_dataflowrefreshhistory: { b: 'regardingobjectid_msdyn_dataflowrefreshhistory', a: '_regardingobjectid_value', c: 'msdyn_dataflowrefreshhistories', d: 'msdyn_dataflowrefreshhistory', r: true },
			regardingobjectid_msdyn_dataflowtemplate: { b: 'regardingobjectid_msdyn_dataflowtemplate', a: '_regardingobjectid_value', c: 'msdyn_dataflowtemplates', d: 'msdyn_dataflowtemplate', r: true },
			regardingobjectid_msdyn_dataflow_datalakefolder: { b: 'regardingobjectid_msdyn_dataflow_datalakefolder', a: '_regardingobjectid_value', c: 'msdyn_dataflow_datalakefolders', d: 'msdyn_dataflow_datalakefolder', r: true },
			regardingobjectid_msdyn_dmsrequest: { b: 'regardingobjectid_msdyn_dmsrequest', a: '_regardingobjectid_value', c: 'msdyn_dmsrequests', d: 'msdyn_dmsrequest', r: true },
			regardingobjectid_msdyn_dmsrequeststatus: { b: 'regardingobjectid_msdyn_dmsrequeststatus', a: '_regardingobjectid_value', c: 'msdyn_dmsrequeststatuses', d: 'msdyn_dmsrequeststatus', r: true },
			regardingobjectid_msdyn_dmssyncrequest: { b: 'regardingobjectid_msdyn_dmssyncrequest', a: '_regardingobjectid_value', c: 'msdyn_dmssyncrequests', d: 'msdyn_dmssyncrequest', r: true },
			regardingobjectid_msdyn_dmssyncstatus: { b: 'regardingobjectid_msdyn_dmssyncstatus', a: '_regardingobjectid_value', c: 'msdyn_dmssyncstatuses', d: 'msdyn_dmssyncstatus', r: true },
			regardingobjectid_msdyn_entitylinkchatconfiguration: { b: 'regardingobjectid_msdyn_entitylinkchatconfiguration', a: '_regardingobjectid_value', c: 'msdyn_entitylinkchatconfigurations', d: 'msdyn_entitylinkchatconfiguration', r: true },
			regardingobjectid_msdyn_entityrefreshhistory: { b: 'regardingobjectid_msdyn_entityrefreshhistory', a: '_regardingobjectid_value', c: 'msdyn_entityrefreshhistories', d: 'msdyn_entityrefreshhistory', r: true },
			regardingobjectid_msdyn_favoriteknowledgearticle: { b: 'regardingobjectid_msdyn_favoriteknowledgearticle', a: '_regardingobjectid_value', c: 'msdyn_favoriteknowledgearticles', d: 'msdyn_favoriteknowledgearticle', r: true },
			regardingobjectid_msdyn_federatedarticle: { b: 'regardingobjectid_msdyn_federatedarticle', a: '_regardingobjectid_value', c: 'msdyn_federatedarticles', d: 'msdyn_federatedarticle', r: true },
			regardingobjectid_msdyn_federatedarticleincident: { b: 'regardingobjectid_msdyn_federatedarticleincident', a: '_regardingobjectid_value', c: 'msdyn_federatedarticleincidents', d: 'msdyn_federatedarticleincident', r: true },
			regardingobjectid_msdyn_fileupload: { b: 'regardingobjectid_msdyn_fileupload', a: '_regardingobjectid_value', c: 'msdyn_fileuploads', d: 'msdyn_fileupload', r: true },
			regardingobjectid_msdyn_flow_actionapprovalmodel: { b: 'regardingobjectid_msdyn_flow_actionapprovalmodel', a: '_regardingobjectid_value', c: 'msdyn_flow_actionapprovalmodels', d: 'msdyn_flow_actionapprovalmodel', r: true },
			regardingobjectid_msdyn_flow_approval: { b: 'regardingobjectid_msdyn_flow_approval', a: '_regardingobjectid_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval', r: true },
			regardingobjectid_msdyn_flow_approvalrequest: { b: 'regardingobjectid_msdyn_flow_approvalrequest', a: '_regardingobjectid_value', c: 'msdyn_flow_approvalrequests', d: 'msdyn_flow_approvalrequest', r: true },
			regardingobjectid_msdyn_flow_approvalresponse: { b: 'regardingobjectid_msdyn_flow_approvalresponse', a: '_regardingobjectid_value', c: 'msdyn_flow_approvalresponses', d: 'msdyn_flow_approvalresponse', r: true },
			regardingobjectid_msdyn_flow_approvalstep: { b: 'regardingobjectid_msdyn_flow_approvalstep', a: '_regardingobjectid_value', c: 'msdyn_flow_approvalsteps', d: 'msdyn_flow_approvalstep', r: true },
			regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: { b: 'regardingobjectid_msdyn_flow_awaitallactionapprovalmodel', a: '_regardingobjectid_value', c: 'msdyn_flow_awaitallactionapprovalmodels', d: 'msdyn_flow_awaitallactionapprovalmodel', r: true },
			regardingobjectid_msdyn_flow_awaitallapprovalmodel: { b: 'regardingobjectid_msdyn_flow_awaitallapprovalmodel', a: '_regardingobjectid_value', c: 'msdyn_flow_awaitallapprovalmodels', d: 'msdyn_flow_awaitallapprovalmodel', r: true },
			regardingobjectid_msdyn_flow_basicapprovalmodel: { b: 'regardingobjectid_msdyn_flow_basicapprovalmodel', a: '_regardingobjectid_value', c: 'msdyn_flow_basicapprovalmodels', d: 'msdyn_flow_basicapprovalmodel', r: true },
			regardingobjectid_msdyn_flow_flowapproval: { b: 'regardingobjectid_msdyn_flow_flowapproval', a: '_regardingobjectid_value', c: 'msdyn_flow_flowapprovals', d: 'msdyn_flow_flowapproval', r: true },
			regardingobjectid_msdyn_helppage: { b: 'regardingobjectid_msdyn_helppage', a: '_regardingobjectid_value', c: 'msdyn_helppages', d: 'msdyn_helppage', r: true },
			regardingobjectid_msdyn_insightsstorevirtualentity: { b: 'regardingobjectid_msdyn_insightsstorevirtualentity', a: '_regardingobjectid_value', c: 'msdyn_insightsstorevirtualentities', d: 'msdyn_insightsstorevirtualentity', r: true },
			regardingobjectid_msdyn_integratedsearchprovider: { b: 'regardingobjectid_msdyn_integratedsearchprovider', a: '_regardingobjectid_value', c: 'msdyn_integratedsearchproviders', d: 'msdyn_integratedsearchprovider', r: true },
			regardingobjectid_msdyn_kalanguagesetting: { b: 'regardingobjectid_msdyn_kalanguagesetting', a: '_regardingobjectid_value', c: 'msdyn_kalanguagesettings', d: 'msdyn_kalanguagesetting', r: true },
			regardingobjectid_msdyn_kbattachment: { b: 'regardingobjectid_msdyn_kbattachment', a: '_regardingobjectid_value', c: 'msdyn_kbattachments', d: 'msdyn_kbattachment', r: true },
			regardingobjectid_msdyn_kmfederatedsearchconfig: { b: 'regardingobjectid_msdyn_kmfederatedsearchconfig', a: '_regardingobjectid_value', c: 'msdyn_kmfederatedsearchconfigs', d: 'msdyn_kmfederatedsearchconfig', r: true },
			regardingobjectid_msdyn_kmpersonalizationsetting: { b: 'regardingobjectid_msdyn_kmpersonalizationsetting', a: '_regardingobjectid_value', c: 'msdyn_kmpersonalizationsettings', d: 'msdyn_kmpersonalizationsetting', r: true },
			regardingobjectid_msdyn_knowledgearticleimage: { b: 'regardingobjectid_msdyn_knowledgearticleimage', a: '_regardingobjectid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage', r: true },
			regardingobjectid_msdyn_knowledgearticletemplate: { b: 'regardingobjectid_msdyn_knowledgearticletemplate', a: '_regardingobjectid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate', r: true },
			regardingobjectid_msdyn_knowledgeassetconfiguration: { b: 'regardingobjectid_msdyn_knowledgeassetconfiguration', a: '_regardingobjectid_value', c: 'msdyn_knowledgeassetconfigurations', d: 'msdyn_knowledgeassetconfiguration', r: true },
			regardingobjectid_msdyn_knowledgeconfiguration: { b: 'regardingobjectid_msdyn_knowledgeconfiguration', a: '_regardingobjectid_value', c: 'msdyn_knowledgeconfigurations', d: 'msdyn_knowledgeconfiguration', r: true },
			regardingobjectid_msdyn_knowledgeinteractioninsight: { b: 'regardingobjectid_msdyn_knowledgeinteractioninsight', a: '_regardingobjectid_value', c: 'msdyn_knowledgeinteractioninsights', d: 'msdyn_knowledgeinteractioninsight', r: true },
			regardingobjectid_msdyn_knowledgemanagementsetting: { b: 'regardingobjectid_msdyn_knowledgemanagementsetting', a: '_regardingobjectid_value', c: 'msdyn_knowledgemanagementsettings', d: 'msdyn_knowledgemanagementsetting', r: true },
			regardingobjectid_msdyn_knowledgepersonalfilter: { b: 'regardingobjectid_msdyn_knowledgepersonalfilter', a: '_regardingobjectid_value', c: 'msdyn_knowledgepersonalfilters', d: 'msdyn_knowledgepersonalfilter', r: true },
			regardingobjectid_msdyn_knowledgesearchfilter: { b: 'regardingobjectid_msdyn_knowledgesearchfilter', a: '_regardingobjectid_value', c: 'msdyn_knowledgesearchfilters', d: 'msdyn_knowledgesearchfilter', r: true },
			regardingobjectid_msdyn_knowledgesearchinsight: { b: 'regardingobjectid_msdyn_knowledgesearchinsight', a: '_regardingobjectid_value', c: 'msdyn_knowledgesearchinsights', d: 'msdyn_knowledgesearchinsight', r: true },
			regardingobjectid_msdyn_mobileapp: { b: 'regardingobjectid_msdyn_mobileapp', a: '_regardingobjectid_value', c: 'msdyn_mobileapps', d: 'msdyn_mobileapp', r: true },
			regardingobjectid_msdyn_modulerundetail: { b: 'regardingobjectid_msdyn_modulerundetail', a: '_regardingobjectid_value', c: 'msdyn_modulerundetails', d: 'msdyn_modulerundetail', r: true },
			regardingobjectid_msdyn_pmanalysishistory: { b: 'regardingobjectid_msdyn_pmanalysishistory', a: '_regardingobjectid_value', c: 'msdyn_pmanalysishistories', d: 'msdyn_pmanalysishistory', r: true },
			regardingobjectid_msdyn_pmbusinessruleautomationconfig: { b: 'regardingobjectid_msdyn_pmbusinessruleautomationconfig', a: '_regardingobjectid_value', c: 'msdyn_pmbusinessruleautomationconfigs', d: 'msdyn_pmbusinessruleautomationconfig', r: true },
			regardingobjectid_msdyn_pmcalendar: { b: 'regardingobjectid_msdyn_pmcalendar', a: '_regardingobjectid_value', c: 'msdyn_pmcalendars', d: 'msdyn_pmcalendar', r: true },
			regardingobjectid_msdyn_pmcalendarversion: { b: 'regardingobjectid_msdyn_pmcalendarversion', a: '_regardingobjectid_value', c: 'msdyn_pmcalendarversions', d: 'msdyn_pmcalendarversion', r: true },
			regardingobjectid_msdyn_pminferredtask: { b: 'regardingobjectid_msdyn_pminferredtask', a: '_regardingobjectid_value', c: 'msdyn_pminferredtasks', d: 'msdyn_pminferredtask', r: true },
			regardingobjectid_msdyn_pmprocessextendedmetadataversion: { b: 'regardingobjectid_msdyn_pmprocessextendedmetadataversion', a: '_regardingobjectid_value', c: 'msdyn_pmprocessextendedmetadataversions', d: 'msdyn_pmprocessextendedmetadataversion', r: true },
			regardingobjectid_msdyn_pmprocesstemplate: { b: 'regardingobjectid_msdyn_pmprocesstemplate', a: '_regardingobjectid_value', c: 'msdyn_pmprocesstemplates', d: 'msdyn_pmprocesstemplate', r: true },
			regardingobjectid_msdyn_pmprocessusersettings: { b: 'regardingobjectid_msdyn_pmprocessusersettings', a: '_regardingobjectid_value', c: 'msdyn_pmprocessusersettingses', d: 'msdyn_pmprocessusersettings', r: true },
			regardingobjectid_msdyn_pmprocessversion: { b: 'regardingobjectid_msdyn_pmprocessversion', a: '_regardingobjectid_value', c: 'msdyn_pmprocessversions', d: 'msdyn_pmprocessversion', r: true },
			regardingobjectid_msdyn_pmrecording: { b: 'regardingobjectid_msdyn_pmrecording', a: '_regardingobjectid_value', c: 'msdyn_pmrecordings', d: 'msdyn_pmrecording', r: true },
			regardingobjectid_msdyn_pmsimulation: { b: 'regardingobjectid_msdyn_pmsimulation', a: '_regardingobjectid_value', c: 'msdyn_pmsimulations', d: 'msdyn_pmsimulation', r: true },
			regardingobjectid_msdyn_pmtemplate: { b: 'regardingobjectid_msdyn_pmtemplate', a: '_regardingobjectid_value', c: 'msdyn_pmtemplates', d: 'msdyn_pmtemplate', r: true },
			regardingobjectid_msdyn_pmview: { b: 'regardingobjectid_msdyn_pmview', a: '_regardingobjectid_value', c: 'msdyn_pmviews', d: 'msdyn_pmview', r: true },
			regardingobjectid_msdyn_richtextfile: { b: 'regardingobjectid_msdyn_richtextfile', a: '_regardingobjectid_value', c: 'msdyn_richtextfiles', d: 'msdyn_richtextfile', r: true },
			regardingobjectid_msdyn_salesforcestructuredobject: { b: 'regardingobjectid_msdyn_salesforcestructuredobject', a: '_regardingobjectid_value', c: 'msdyn_salesforcestructuredobjects', d: 'msdyn_salesforcestructuredobject', r: true },
			regardingobjectid_msdyn_salesforcestructuredqnaconfig: { b: 'regardingobjectid_msdyn_salesforcestructuredqnaconfig', a: '_regardingobjectid_value', c: 'msdyn_salesforcestructuredqnaconfigs', d: 'msdyn_salesforcestructuredqnaconfig', r: true },
			regardingobjectid_msdyn_schedule: { b: 'regardingobjectid_msdyn_schedule', a: '_regardingobjectid_value', c: 'msdyn_schedules', d: 'msdyn_schedule', r: true },
			regardingobjectid_msdyn_serviceconfiguration: { b: 'regardingobjectid_msdyn_serviceconfiguration', a: '_regardingobjectid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration', r: true },
			regardingobjectid_msdyn_slakpi: { b: 'regardingobjectid_msdyn_slakpi', a: '_regardingobjectid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi', r: true },
			regardingobjectid_msdyn_solutionhealthrule: { b: 'regardingobjectid_msdyn_solutionhealthrule', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrules', d: 'msdyn_solutionhealthrule', r: true },
			regardingobjectid_msdyn_solutionhealthruleargument: { b: 'regardingobjectid_msdyn_solutionhealthruleargument', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrulearguments', d: 'msdyn_solutionhealthruleargument', r: true },
			regardingobjectid_msdyn_solutionhealthruleset: { b: 'regardingobjectid_msdyn_solutionhealthruleset', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrulesets', d: 'msdyn_solutionhealthruleset', r: true },
			regardingobjectid_msdyn_tour: { b: 'regardingobjectid_msdyn_tour', a: '_regardingobjectid_value', c: 'msdyn_tours', d: 'msdyn_tour', r: true },
			regardingobjectid_msdyn_virtualtablecolumncandidate: { b: 'regardingobjectid_msdyn_virtualtablecolumncandidate', a: '_regardingobjectid_value', c: 'msdyn_virtualtablecolumncandidates', d: 'msdyn_virtualtablecolumncandidate', r: true },
			regardingobjectid_msdyn_workflowactionstatus: { b: 'regardingobjectid_msdyn_workflowactionstatus', a: '_regardingobjectid_value', c: 'msdyn_workflowactionstatuses', d: 'msdyn_workflowactionstatus', r: true },
			regardingobjectid_msgraphresourcetosubscription: { b: 'regardingobjectid_msgraphresourcetosubscription', a: '_regardingobjectid_value', c: 'msgraphresourcetosubscriptions', d: 'msgraphresourcetosubscription', r: true },
			regardingobjectid_mspcat_catalogsubmissionfiles: { b: 'regardingobjectid_mspcat_catalogsubmissionfiles', a: '_regardingobjectid_value', c: 'mspcat_catalogsubmissionfileses', d: 'mspcat_catalogsubmissionfiles', r: true },
			regardingobjectid_mspcat_packagestore: { b: 'regardingobjectid_mspcat_packagestore', a: '_regardingobjectid_value', c: 'mspcat_packagestores', d: 'mspcat_packagestore', r: true },
			regardingobjectid_organization: { b: 'regardingobjectid_organization', a: '_regardingobjectid_value', c: 'organizations', d: 'organization', r: true },
			regardingobjectid_organizationdatasyncfnostate: { b: 'regardingobjectid_organizationdatasyncfnostate', a: '_regardingobjectid_value', c: 'organizationdatasyncfnostates', d: 'organizationdatasyncfnostate', r: true },
			regardingobjectid_organizationdatasyncstate: { b: 'regardingobjectid_organizationdatasyncstate', a: '_regardingobjectid_value', c: 'organizationdatasyncstates', d: 'organizationdatasyncstate', r: true },
			regardingobjectid_organizationdatasyncsubscription: { b: 'regardingobjectid_organizationdatasyncsubscription', a: '_regardingobjectid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription', r: true },
			regardingobjectid_organizationdatasyncsubscriptionentity: { b: 'regardingobjectid_organizationdatasyncsubscriptionentity', a: '_regardingobjectid_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity', r: true },
			regardingobjectid_organizationdatasyncsubscriptionfnotable: { b: 'regardingobjectid_organizationdatasyncsubscriptionfnotable', a: '_regardingobjectid_value', c: 'organizationdatasyncsubscriptionfnotables', d: 'organizationdatasyncsubscriptionfnotable', r: true },
			regardingobjectid_organizationsetting: { b: 'regardingobjectid_organizationsetting', a: '_regardingobjectid_value', c: 'organizationsettings', d: 'organizationsetting', r: true },
			regardingobjectid_package: { b: 'regardingobjectid_package', a: '_regardingobjectid_value', c: 'packages', d: 'package', r: true },
			regardingobjectid_packagehistory: { b: 'regardingobjectid_packagehistory', a: '_regardingobjectid_value', c: 'packagehistories', d: 'packagehistory', r: true },
			regardingobjectid_pdfsetting: { b: 'regardingobjectid_pdfsetting', a: '_regardingobjectid_value', c: 'pdfsettings', d: 'pdfsetting', r: true },
			regardingobjectid_phonecall: { b: 'regardingobjectid_phonecall', a: '_regardingobjectid_value', c: 'phonecalls', d: 'phonecall', r: true },
			regardingobjectid_plannerbusinessscenario: { b: 'regardingobjectid_plannerbusinessscenario', a: '_regardingobjectid_value', c: 'plannerbusinessscenarios', d: 'plannerbusinessscenario', r: true },
			regardingobjectid_plannersyncaction: { b: 'regardingobjectid_plannersyncaction', a: '_regardingobjectid_value', c: 'plannersyncactions', d: 'plannersyncaction', r: true },
			regardingobjectid_pluginpackage: { b: 'regardingobjectid_pluginpackage', a: '_regardingobjectid_value', c: 'pluginpackages', d: 'pluginpackage', r: true },
			regardingobjectid_post: { b: 'regardingobjectid_post', a: '_regardingobjectid_value', c: 'posts', d: 'post', r: true },
			regardingobjectid_powerbidataset: { b: 'regardingobjectid_powerbidataset', a: '_regardingobjectid_value', c: 'powerbidatasets', d: 'powerbidataset', r: true },
			regardingobjectid_powerbidatasetapdx: { b: 'regardingobjectid_powerbidatasetapdx', a: '_regardingobjectid_value', c: 'powerbidatasetapdxes', d: 'powerbidatasetapdx', r: true },
			regardingobjectid_powerbimashupparameter: { b: 'regardingobjectid_powerbimashupparameter', a: '_regardingobjectid_value', c: 'powerbimashupparameters', d: 'powerbimashupparameter', r: true },
			regardingobjectid_powerbireport: { b: 'regardingobjectid_powerbireport', a: '_regardingobjectid_value', c: 'powerbireports', d: 'powerbireport', r: true },
			regardingobjectid_powerbireportapdx: { b: 'regardingobjectid_powerbireportapdx', a: '_regardingobjectid_value', c: 'powerbireportapdxes', d: 'powerbireportapdx', r: true },
			regardingobjectid_powerfxrule: { b: 'regardingobjectid_powerfxrule', a: '_regardingobjectid_value', c: 'powerfxrules', d: 'powerfxrule', r: true },
			regardingobjectid_powerpagecomponent: { b: 'regardingobjectid_powerpagecomponent', a: '_regardingobjectid_value', c: 'powerpagecomponents', d: 'powerpagecomponent', r: true },
			regardingobjectid_powerpagesite: { b: 'regardingobjectid_powerpagesite', a: '_regardingobjectid_value', c: 'powerpagesites', d: 'powerpagesite', r: true },
			regardingobjectid_powerpagesitelanguage: { b: 'regardingobjectid_powerpagesitelanguage', a: '_regardingobjectid_value', c: 'powerpagesitelanguages', d: 'powerpagesitelanguage', r: true },
			regardingobjectid_powerpagesitepublished: { b: 'regardingobjectid_powerpagesitepublished', a: '_regardingobjectid_value', c: 'powerpagesitepublisheds', d: 'powerpagesitepublished', r: true },
			regardingobjectid_powerpagesscanreport: { b: 'regardingobjectid_powerpagesscanreport', a: '_regardingobjectid_value', c: 'powerpagesscanreports', d: 'powerpagesscanreport', r: true },
			regardingobjectid_privilege: { b: 'regardingobjectid_privilege', a: '_regardingobjectid_value', c: 'privileges', d: 'privilege', r: true },
			regardingobjectid_privilegecheckerlog: { b: 'regardingobjectid_privilegecheckerlog', a: '_regardingobjectid_value', c: 'privilegecheckerlogs', d: 'privilegecheckerlog', r: true },
			regardingobjectid_privilegecheckerrun: { b: 'regardingobjectid_privilegecheckerrun', a: '_regardingobjectid_value', c: 'privilegecheckerruns', d: 'privilegecheckerrun', r: true },
			regardingobjectid_privilegesremovalsetting: { b: 'regardingobjectid_privilegesremovalsetting', a: '_regardingobjectid_value', c: 'privilegesremovalsettings', d: 'privilegesremovalsetting', r: true },
			regardingobjectid_processstageparameter: { b: 'regardingobjectid_processstageparameter', a: '_regardingobjectid_value', c: 'processstageparameters', d: 'processstageparameter', r: true },
			regardingobjectid_provisionlanguageforuser: { b: 'regardingobjectid_provisionlanguageforuser', a: '_regardingobjectid_value', c: 'provisionlanguageforusers', d: 'provisionlanguageforuser', r: true },
			regardingobjectid_quarterlyfiscalcalendar: { b: 'regardingobjectid_quarterlyfiscalcalendar', a: '_regardingobjectid_value', c: 'quarterlyfiscalcalendars', d: 'quarterlyfiscalcalendar', r: true },
			regardingobjectid_queue: { b: 'regardingobjectid_queue', a: '_regardingobjectid_value', c: 'queues', d: 'queue', r: true },
			regardingobjectid_queueitem: { b: 'regardingobjectid_queueitem', a: '_regardingobjectid_value', c: 'queueitems', d: 'queueitem', r: true },
			regardingobjectid_reconciliationentityinfo: { b: 'regardingobjectid_reconciliationentityinfo', a: '_regardingobjectid_value', c: 'reconciliationentityinfos', d: 'reconciliationentityinfo', r: true },
			regardingobjectid_reconciliationentitystepinfo: { b: 'regardingobjectid_reconciliationentitystepinfo', a: '_regardingobjectid_value', c: 'reconciliationentitystepinfos', d: 'reconciliationentitystepinfo', r: true },
			regardingobjectid_reconciliationinfo: { b: 'regardingobjectid_reconciliationinfo', a: '_regardingobjectid_value', c: 'reconciliationinfos', d: 'reconciliationinfo', r: true },
			regardingobjectid_recordfilter: { b: 'regardingobjectid_recordfilter', a: '_regardingobjectid_value', c: 'recordfilters', d: 'recordfilter', r: true },
			regardingobjectid_recurringappointmentmaster: { b: 'regardingobjectid_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster', r: true },
			regardingobjectid_recyclebinconfig: { b: 'regardingobjectid_recyclebinconfig', a: '_regardingobjectid_value', c: 'recyclebinconfigs', d: 'recyclebinconfig', r: true },
			regardingobjectid_relationshipattribute: { b: 'regardingobjectid_relationshipattribute', a: '_regardingobjectid_value', c: 'relationshipattributes', d: 'relationshipattribute', r: true },
			regardingobjectid_relationshiprole: { b: 'regardingobjectid_relationshiprole', a: '_regardingobjectid_value', c: 'relationshiproles', d: 'relationshiprole', r: true },
			regardingobjectid_relationshiprolemap: { b: 'regardingobjectid_relationshiprolemap', a: '_regardingobjectid_value', c: 'relationshiprolemaps', d: 'relationshiprolemap', r: true },
			regardingobjectid_reportparameter: { b: 'regardingobjectid_reportparameter', a: '_regardingobjectid_value', c: 'reportparameters', d: 'reportparameter', r: true },
			regardingobjectid_retaineddataexcel: { b: 'regardingobjectid_retaineddataexcel', a: '_regardingobjectid_value', c: 'retaineddataexcels', d: 'retaineddataexcel', r: true },
			regardingobjectid_retentioncleanupinfo: { b: 'regardingobjectid_retentioncleanupinfo', a: '_regardingobjectid_value', c: 'retentioncleanupinfos', d: 'retentioncleanupinfo', r: true },
			regardingobjectid_retentioncleanupoperation: { b: 'regardingobjectid_retentioncleanupoperation', a: '_regardingobjectid_value', c: 'retentioncleanupoperations', d: 'retentioncleanupoperation', r: true },
			regardingobjectid_retentionconfig: { b: 'regardingobjectid_retentionconfig', a: '_regardingobjectid_value', c: 'retentionconfigs', d: 'retentionconfig', r: true },
			regardingobjectid_retentionfailuredetail: { b: 'regardingobjectid_retentionfailuredetail', a: '_regardingobjectid_value', c: 'retentionfailuredetails', d: 'retentionfailuredetail', r: true },
			regardingobjectid_retentionoperation: { b: 'regardingobjectid_retentionoperation', a: '_regardingobjectid_value', c: 'retentionoperations', d: 'retentionoperation', r: true },
			regardingobjectid_retentionoperationdetail: { b: 'regardingobjectid_retentionoperationdetail', a: '_regardingobjectid_value', c: 'retentionoperationdetails', d: 'retentionoperationdetail', r: true },
			regardingobjectid_revokeinheritedaccessrecordstracker: { b: 'regardingobjectid_revokeinheritedaccessrecordstracker', a: '_regardingobjectid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker', r: true },
			regardingobjectid_role: { b: 'regardingobjectid_role', a: '_regardingobjectid_value', c: 'roles', d: 'role', r: true },
			regardingobjectid_roleeditorlayout: { b: 'regardingobjectid_roleeditorlayout', a: '_regardingobjectid_value', c: 'roleeditorlayouts', d: 'roleeditorlayout', r: true },
			regardingobjectid_routingrule: { b: 'regardingobjectid_routingrule', a: '_regardingobjectid_value', c: 'routingrules', d: 'routingrule', r: true },
			regardingobjectid_routingruleitem: { b: 'regardingobjectid_routingruleitem', a: '_regardingobjectid_value', c: 'routingruleitems', d: 'routingruleitem', r: true },
			regardingobjectid_savedquery: { b: 'regardingobjectid_savedquery', a: '_regardingobjectid_value', c: 'savedqueries', d: 'savedquery', r: true },
			regardingobjectid_searchattributesettings: { b: 'regardingobjectid_searchattributesettings', a: '_regardingobjectid_value', c: 'searchattributesettingses', d: 'searchattributesettings', r: true },
			regardingobjectid_searchcustomanalyzer: { b: 'regardingobjectid_searchcustomanalyzer', a: '_regardingobjectid_value', c: 'searchcustomanalyzers', d: 'searchcustomanalyzer', r: true },
			regardingobjectid_searchrelationshipsettings: { b: 'regardingobjectid_searchrelationshipsettings', a: '_regardingobjectid_value', c: 'searchrelationshipsettingses', d: 'searchrelationshipsettings', r: true },
			regardingobjectid_semiannualfiscalcalendar: { b: 'regardingobjectid_semiannualfiscalcalendar', a: '_regardingobjectid_value', c: 'semiannualfiscalcalendars', d: 'semiannualfiscalcalendar', r: true },
			regardingobjectid_serviceplan: { b: 'regardingobjectid_serviceplan', a: '_regardingobjectid_value', c: 'serviceplans', d: 'serviceplan', r: true },
			regardingobjectid_serviceplancustomcontrol: { b: 'regardingobjectid_serviceplancustomcontrol', a: '_regardingobjectid_value', c: '', d: 'serviceplancustomcontrol', r: true },
			regardingobjectid_serviceplanmapping: { b: 'regardingobjectid_serviceplanmapping', a: '_regardingobjectid_value', c: 'serviceplanmappings', d: 'serviceplanmapping', r: true },
			regardingobjectid_settingdefinition: { b: 'regardingobjectid_settingdefinition', a: '_regardingobjectid_value', c: 'settingdefinitions', d: 'settingdefinition', r: true },
			regardingobjectid_sharedlinksetting: { b: 'regardingobjectid_sharedlinksetting', a: '_regardingobjectid_value', c: 'sharedlinksettings', d: 'sharedlinksetting', r: true },
			regardingobjectid_sharedobject: { b: 'regardingobjectid_sharedobject', a: '_regardingobjectid_value', c: 'sharedobjects', d: 'sharedobject', r: true },
			regardingobjectid_sharedworkspace: { b: 'regardingobjectid_sharedworkspace', a: '_regardingobjectid_value', c: 'sharedworkspaces', d: 'sharedworkspace', r: true },
			regardingobjectid_sharedworkspacepool: { b: 'regardingobjectid_sharedworkspacepool', a: '_regardingobjectid_value', c: 'sharedworkspacepools', d: 'sharedworkspacepool', r: true },
			regardingobjectid_sideloadedaiplugin: { b: 'regardingobjectid_sideloadedaiplugin', a: '_regardingobjectid_value', c: 'sideloadedaiplugins', d: 'sideloadedaiplugin', r: true },
			regardingobjectid_sla: { b: 'regardingobjectid_sla', a: '_regardingobjectid_value', c: 'slas', d: 'sla', r: true },
			regardingobjectid_socialactivity: { b: 'regardingobjectid_socialactivity', a: '_regardingobjectid_value', c: 'socialactivities', d: 'socialactivity', r: true },
			regardingobjectid_solutioncomponentattributeconfiguration: { b: 'regardingobjectid_solutioncomponentattributeconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration', r: true },
			regardingobjectid_solutioncomponentbatchconfiguration: { b: 'regardingobjectid_solutioncomponentbatchconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentbatchconfigurations', d: 'solutioncomponentbatchconfiguration', r: true },
			regardingobjectid_solutioncomponentconfiguration: { b: 'regardingobjectid_solutioncomponentconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration', r: true },
			regardingobjectid_solutioncomponentrelationshipconfiguration: { b: 'regardingobjectid_solutioncomponentrelationshipconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentrelationshipconfigurations', d: 'solutioncomponentrelationshipconfiguration', r: true },
			regardingobjectid_stagedentity: { b: 'regardingobjectid_stagedentity', a: '_regardingobjectid_value', c: 'stagedentities', d: 'stagedentity', r: true },
			regardingobjectid_stagedentityattribute: { b: 'regardingobjectid_stagedentityattribute', a: '_regardingobjectid_value', c: 'stagedentityattributes', d: 'stagedentityattribute', r: true },
			regardingobjectid_stagedmetadataasyncoperation: { b: 'regardingobjectid_stagedmetadataasyncoperation', a: '_regardingobjectid_value', c: 'stagedmetadataasyncoperations', d: 'stagedmetadataasyncoperation', r: true },
			regardingobjectid_stagesolutionupload: { b: 'regardingobjectid_stagesolutionupload', a: '_regardingobjectid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload', r: true },
			regardingobjectid_subject: { b: 'regardingobjectid_subject', a: '_regardingobjectid_value', c: 'subjects', d: 'subject', r: true },
			regardingobjectid_supportusertable: { b: 'regardingobjectid_supportusertable', a: '_regardingobjectid_value', c: 'supportusertables', d: 'supportusertable', r: true },
			regardingobjectid_synapsedatabase: { b: 'regardingobjectid_synapsedatabase', a: '_regardingobjectid_value', c: 'synapsedatabases', d: 'synapsedatabase', r: true },
			regardingobjectid_synapselinkexternaltablestate: { b: 'regardingobjectid_synapselinkexternaltablestate', a: '_regardingobjectid_value', c: 'synapselinkexternaltablestates', d: 'synapselinkexternaltablestate', r: true },
			regardingobjectid_synapselinkprofile: { b: 'regardingobjectid_synapselinkprofile', a: '_regardingobjectid_value', c: 'synapselinkprofiles', d: 'synapselinkprofile', r: true },
			regardingobjectid_synapselinkprofileentity: { b: 'regardingobjectid_synapselinkprofileentity', a: '_regardingobjectid_value', c: 'synapselinkprofileentities', d: 'synapselinkprofileentity', r: true },
			regardingobjectid_synapselinkprofileentitystate: { b: 'regardingobjectid_synapselinkprofileentitystate', a: '_regardingobjectid_value', c: 'synapselinkprofileentitystates', d: 'synapselinkprofileentitystate', r: true },
			regardingobjectid_synapselinkschedule: { b: 'regardingobjectid_synapselinkschedule', a: '_regardingobjectid_value', c: 'synapselinkschedules', d: 'synapselinkschedule', r: true },
			regardingobjectid_systemform: { b: 'regardingobjectid_systemform', a: '_regardingobjectid_value', c: 'systemforms', d: 'systemform', r: true },
			regardingobjectid_systemuser: { b: 'regardingobjectid_systemuser', a: '_regardingobjectid_value', c: 'systemusers', d: 'systemuser', r: true },
			regardingobjectid_systemuserauthorizationchangetracker: { b: 'regardingobjectid_systemuserauthorizationchangetracker', a: '_regardingobjectid_value', c: 'systemuserauthorizationchangetrackers', d: 'systemuserauthorizationchangetracker', r: true },
			regardingobjectid_task: { b: 'regardingobjectid_task', a: '_regardingobjectid_value', c: 'tasks', d: 'task', r: true },
			regardingobjectid_tdsmetadata: { b: 'regardingobjectid_tdsmetadata', a: '_regardingobjectid_value', c: 'tdsmetadatas', d: 'tdsmetadata', r: true },
			regardingobjectid_team: { b: 'regardingobjectid_team', a: '_regardingobjectid_value', c: 'teams', d: 'team', r: true },
			regardingobjectid_teammobileofflineprofilemembership: { b: 'regardingobjectid_teammobileofflineprofilemembership', a: '_regardingobjectid_value', c: 'teammobileofflineprofilememberships', d: 'teammobileofflineprofilemembership', r: true },
			regardingobjectid_template: { b: 'regardingobjectid_template', a: '_regardingobjectid_value', c: 'templates', d: 'template', r: true },
			regardingobjectid_territory: { b: 'regardingobjectid_territory', a: '_regardingobjectid_value', c: 'territories', d: 'territory', r: true },
			regardingobjectid_theme: { b: 'regardingobjectid_theme', a: '_regardingobjectid_value', c: 'themes', d: 'theme', r: true },
			regardingobjectid_userform: { b: 'regardingobjectid_userform', a: '_regardingobjectid_value', c: 'userforms', d: 'userform', r: true },
			regardingobjectid_usermapping: { b: 'regardingobjectid_usermapping', a: '_regardingobjectid_value', c: 'usermappings', d: 'usermapping', r: true },
			regardingobjectid_usermobileofflineprofilemembership: { b: 'regardingobjectid_usermobileofflineprofilemembership', a: '_regardingobjectid_value', c: 'usermobileofflineprofilememberships', d: 'usermobileofflineprofilemembership', r: true },
			regardingobjectid_userquery: { b: 'regardingobjectid_userquery', a: '_regardingobjectid_value', c: 'userqueries', d: 'userquery', r: true },
			regardingobjectid_userrating: { b: 'regardingobjectid_userrating', a: '_regardingobjectid_value', c: 'userratings', d: 'userrating', r: true },
			regardingobjectid_viewasexamplequestion: { b: 'regardingobjectid_viewasexamplequestion', a: '_regardingobjectid_value', c: 'viewasexamplequestions', d: 'viewasexamplequestion', r: true },
			regardingobjectid_virtualentitymetadata: { b: 'regardingobjectid_virtualentitymetadata', a: '_regardingobjectid_value', c: 'virtualentitymetadatas', d: 'virtualentitymetadata', r: true },
			regardingobjectid_workflowbinary: { b: 'regardingobjectid_workflowbinary', a: '_regardingobjectid_value', c: 'workflowbinaries', d: 'workflowbinary', r: true },
			regardingobjectid_workqueue: { b: 'regardingobjectid_workqueue', a: '_regardingobjectid_value', c: 'workqueues', d: 'workqueue', r: true },
			regardingobjectid_workqueueitem: { b: 'regardingobjectid_workqueueitem', a: '_regardingobjectid_value', c: 'workqueueitems', d: 'workqueueitem', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var bulkdeletefailure = {};
		bulkdeletefailure.ODataEntity = e;
		bulkdeletefailure.FormattedValue = {};
		for (var field in _bulkdeletefailure) {
			var a = _bulkdeletefailure[field].a;
			var b = _bulkdeletefailure[field].b;
			var c = _bulkdeletefailure[field].c;
			var d = _bulkdeletefailure[field].d;
			var g = _bulkdeletefailure[field].g;
			var r = _bulkdeletefailure[field].r;
			webApiField(bulkdeletefailure, field, e, a, b, c, d, r, u, g);
		}
		bulkdeletefailure.Entity = u;
		bulkdeletefailure.EntityName = 'bulkdeletefailure';
		bulkdeletefailure.EntityCollectionName = 'bulkdeletefailures';
		bulkdeletefailure['@odata.etag'] = e['@odata.etag'];
		bulkdeletefailure.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		bulkdeletefailure.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return bulkdeletefailure;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BulkDeleteFailure = {
		RegardingObjectTypeCode : {
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
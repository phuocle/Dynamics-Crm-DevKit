'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.UserEntityInstanceDataApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
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
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var userentityinstancedata = {
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
			objectid_annotation: { b: 'objectid_annotation', a: '_objectid_value', c: 'annotations', d: 'annotation' },
			objectid_apisettings: { b: 'objectid_apisettings', a: '_objectid_value', c: 'apisettingscollection', d: 'apisettings' },
			objectid_appelement: { b: 'objectid_appelement', a: '_objectid_value', c: 'appelements', d: 'appelement' },
			objectid_applicationuser: { b: 'objectid_applicationuser', a: '_objectid_value', c: 'applicationusers', d: 'applicationuser' },
			objectid_appmodulecomponentedge: { b: 'objectid_appmodulecomponentedge', a: '_objectid_value', c: 'appmodulecomponentedges', d: 'appmodulecomponentedge' },
			objectid_appmodulecomponentnode: { b: 'objectid_appmodulecomponentnode', a: '_objectid_value', c: 'appmodulecomponentnodes', d: 'appmodulecomponentnode' },
			objectid_appnotification: { b: 'objectid_appnotification', a: '_objectid_value', c: 'appnotifications', d: 'appnotification' },
			objectid_appointment: { b: 'objectid_appointment', a: '_objectid_value', c: 'appointments', d: 'appointment' },
			objectid_appsetting: { b: 'objectid_appsetting', a: '_objectid_value', c: 'appsettings', d: 'appsetting' },
			objectid_appusersetting: { b: 'objectid_appusersetting', a: '_objectid_value', c: 'appusersettings', d: 'appusersetting' },
			objectid_asyncoperation: { b: 'objectid_asyncoperation', a: '_objectid_value', c: 'asyncoperations', d: 'asyncoperation' },
			objectid_attachment: { b: 'objectid_attachment', a: '_objectid_value', c: 'attachments', d: 'attachment' },
			objectid_attributeimageconfig: { b: 'objectid_attributeimageconfig', a: '_objectid_value', c: 'attributeimageconfigs', d: 'attributeimageconfig' },
			objectid_attributemap: { b: 'objectid_attributemap', a: '_objectid_value', c: 'attributemaps', d: 'attributemap' },
			objectid_audit: { b: 'objectid_audit', a: '_objectid_value', c: 'audits', d: 'audit' },
			objectid_bot: { b: 'objectid_bot', a: '_objectid_value', c: 'bots', d: 'bot' },
			objectid_botcomponent: { b: 'objectid_botcomponent', a: '_objectid_value', c: 'botcomponents', d: 'botcomponent' },
			objectid_bulkdeletefailure: { b: 'objectid_bulkdeletefailure', a: '_objectid_value', c: 'bulkdeletefailures', d: 'bulkdeletefailure' },
			objectid_bulkdeleteoperation: { b: 'objectid_bulkdeleteoperation', a: '_objectid_value', c: 'bulkdeleteoperations', d: 'bulkdeleteoperation' },
			objectid_businessunitmap: { b: 'objectid_businessunitmap', a: '_objectid_value', c: 'businessunitmaps', d: 'businessunitmap' },
			objectid_businessunitnewsarticle: { b: 'objectid_businessunitnewsarticle', a: '_objectid_value', c: 'businessunitnewsarticles', d: 'businessunitnewsarticle' },
			objectid_calendar: { b: 'objectid_calendar', a: '_objectid_value', c: 'calendars', d: 'calendar' },
			objectid_calendarrule: { b: 'objectid_calendarrule', a: '_objectid_value', c: 'calendarrules', d: 'calendarrule' },
			objectid_canvasappextendedmetadata: { b: 'objectid_canvasappextendedmetadata', a: '_objectid_value', c: 'canvasappextendedmetadatas', d: 'canvasappextendedmetadata' },
			objectid_cascadegrantrevokeaccessrecordstracker: { b: 'objectid_cascadegrantrevokeaccessrecordstracker', a: '_objectid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker' },
			objectid_cascadegrantrevokeaccessversiontracker: { b: 'objectid_cascadegrantrevokeaccessversiontracker', a: '_objectid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker' },
			objectid_catalog: { b: 'objectid_catalog', a: '_objectid_value', c: 'catalogs', d: 'catalog' },
			objectid_catalogassignment: { b: 'objectid_catalogassignment', a: '_objectid_value', c: 'catalogassignments', d: 'catalogassignment' },
			channelaccessprofile_userentityinstancedatas: { b: 'channelaccessprofile_userentityinstancedatas', a: '_objectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_objectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			objectid_clientupdate: { b: 'objectid_clientupdate', a: '_objectid_value', c: 'clientupdates', d: 'clientupdate' },
			objectid_columnmapping: { b: 'objectid_columnmapping', a: '_objectid_value', c: 'columnmappings', d: 'columnmapping' },
			objectid_connection: { b: 'objectid_connection', a: '_objectid_value', c: 'connections', d: 'connection' },
			objectid_connectionreference: { b: 'objectid_connectionreference', a: '_objectid_value', c: 'connectionreferences', d: 'connectionreference' },
			objectid_connectionrole: { b: 'objectid_connectionrole', a: '_objectid_value', c: 'connectionroles', d: 'connectionrole' },
			objectid_connectionroleassociation: { b: 'objectid_connectionroleassociation', a: '_objectid_value', c: '', d: 'connectionroleassociation' },
			objectid_connectionroleobjecttypecode: { b: 'objectid_connectionroleobjecttypecode', a: '_objectid_value', c: 'connectionroleobjecttypecodes', d: 'connectionroleobjecttypecode' },
			objectid_connector: { b: 'objectid_connector', a: '_objectid_value', c: 'connectors', d: 'connector' },
			objectid_contact: { b: 'objectid_contact', a: '_objectid_value', c: 'contacts', d: 'contact' },
			objectid_conversationtranscript: { b: 'objectid_conversationtranscript', a: '_objectid_value', c: 'conversationtranscripts', d: 'conversationtranscript' },
			objectid_convertrule: { b: 'objectid_convertrule', a: '_objectid_value', c: 'convertrules', d: 'convertrule' },
			objectid_customapi: { b: 'objectid_customapi', a: '_objectid_value', c: 'customapis', d: 'customapi' },
			objectid_customapirequestparameter: { b: 'objectid_customapirequestparameter', a: '_objectid_value', c: 'customapirequestparameters', d: 'customapirequestparameter' },
			objectid_customapiresponseproperty: { b: 'objectid_customapiresponseproperty', a: '_objectid_value', c: 'customapiresponseproperties', d: 'customapiresponseproperty' },
			objectid_customeraddress: { b: 'objectid_customeraddress', a: '_objectid_value', c: 'customeraddresses', d: 'customeraddress' },
			objectid_customerrelationship: { b: 'objectid_customerrelationship', a: '_objectid_value', c: 'customerrelationships', d: 'customerrelationship' },
			objectid_datalakefolder: { b: 'objectid_datalakefolder', a: '_objectid_value', c: 'datalakefolders', d: 'datalakefolder' },
			objectid_datalakefolderpermission: { b: 'objectid_datalakefolderpermission', a: '_objectid_value', c: 'datalakefolderpermissions', d: 'datalakefolderpermission' },
			objectid_datalakeworkspace: { b: 'objectid_datalakeworkspace', a: '_objectid_value', c: 'datalakeworkspaces', d: 'datalakeworkspace' },
			objectid_datalakeworkspacepermission: { b: 'objectid_datalakeworkspacepermission', a: '_objectid_value', c: 'datalakeworkspacepermissions', d: 'datalakeworkspacepermission' },
			objectid_dependency: { b: 'objectid_dependency', a: '_objectid_value', c: 'dependencies', d: 'dependency' },
			objectid_dependencynode: { b: 'objectid_dependencynode', a: '_objectid_value', c: 'dependencynodes', d: 'dependencynode' },
			objectid_devkit_bpfaccount1: { b: 'objectid_devkit_bpfaccount1', a: '_objectid_value', c: 'devkit_bpfaccount1s', d: 'devkit_bpfaccount1' },
			objectid_devkit_bpfaccount3: { b: 'objectid_devkit_bpfaccount3', a: '_objectid_value', c: 'devkit_bpfaccount3s', d: 'devkit_bpfaccount3' },
			objectid_devkit_bpf_location_1: { b: 'objectid_devkit_bpf_location_1', a: '_objectid_value', c: 'devkit_bpf_location_1s', d: 'devkit_bpf_location_1' },
			objectid_devkit_customactivity: { b: 'objectid_devkit_customactivity', a: '_objectid_value', c: 'devkit_customactivities', d: 'devkit_customactivity' },
			objectid_devkit_location: { b: 'objectid_devkit_location', a: '_objectid_value', c: 'devkit_locations', d: 'devkit_location' },
			objectid_devkit_processwebapi1: { b: 'objectid_devkit_processwebapi1', a: '_objectid_value', c: 'devkit_processwebapi1s', d: 'devkit_processwebapi1' },
			objectid_devkit_webapi: { b: 'objectid_devkit_webapi', a: '_objectid_value', c: 'devkit_webapis', d: 'devkit_webapi' },
			objectid_displaystring: { b: 'objectid_displaystring', a: '_objectid_value', c: 'displaystrings', d: 'displaystring' },
			objectid_displaystringmap: { b: 'objectid_displaystringmap', a: '_objectid_value', c: 'displaystringmaps', d: 'displaystringmap' },
			objectid_documentindex: { b: 'objectid_documentindex', a: '_objectid_value', c: 'documentindexes', d: 'documentindex' },
			objectid_duplicaterecord: { b: 'objectid_duplicaterecord', a: '_objectid_value', c: 'duplicaterecords', d: 'duplicaterecord' },
			objectid_duplicaterule: { b: 'objectid_duplicaterule', a: '_objectid_value', c: 'duplicaterules', d: 'duplicaterule' },
			objectid_duplicaterulecondition: { b: 'objectid_duplicaterulecondition', a: '_objectid_value', c: 'duplicateruleconditions', d: 'duplicaterulecondition' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_emailhash: { b: 'objectid_emailhash', a: '_objectid_value', c: 'emailhashs', d: 'emailhash' },
			objectid_emailsearch: { b: 'objectid_emailsearch', a: '_objectid_value', c: 'emailsearches', d: 'emailsearch' },
			objectid_entityanalyticsconfig: { b: 'objectid_entityanalyticsconfig', a: '_objectid_value', c: 'entityanalyticsconfigs', d: 'entityanalyticsconfig' },
			objectid_entityimageconfig: { b: 'objectid_entityimageconfig', a: '_objectid_value', c: 'entityimageconfigs', d: 'entityimageconfig' },
			objectid_entitymap: { b: 'objectid_entitymap', a: '_objectid_value', c: 'entitymaps', d: 'entitymap' },
			objectid_environmentvariabledefinition: { b: 'objectid_environmentvariabledefinition', a: '_objectid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition' },
			objectid_environmentvariablevalue: { b: 'objectid_environmentvariablevalue', a: '_objectid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue' },
			objectid_exportsolutionupload: { b: 'objectid_exportsolutionupload', a: '_objectid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload' },
			externalparty_userentityinstancedatas: { b: 'externalparty_userentityinstancedatas', a: '_objectid_value', c: 'externalparties', d: 'externalparty' },
			objectid_fax: { b: 'objectid_fax', a: '_objectid_value', c: 'faxes', d: 'fax' },
			objectid_fieldpermission: { b: 'objectid_fieldpermission', a: '_objectid_value', c: 'fieldpermissions', d: 'fieldpermission' },
			objectid_fieldsecurityprofile: { b: 'objectid_fieldsecurityprofile', a: '_objectid_value', c: 'fieldsecurityprofiles', d: 'fieldsecurityprofile' },
			objectid_fileattachment: { b: 'objectid_fileattachment', a: '_objectid_value', c: 'fileattachments', d: 'fileattachment' },
			objectid_filtertemplate: { b: 'objectid_filtertemplate', a: '_objectid_value', c: 'filtertemplates', d: 'filtertemplate' },
			objectid_flowmachine: { b: 'objectid_flowmachine', a: '_objectid_value', c: 'flowmachines', d: 'flowmachine' },
			objectid_flowmachinegroup: { b: 'objectid_flowmachinegroup', a: '_objectid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			objectid_flowsession: { b: 'objectid_flowsession', a: '_objectid_value', c: 'flowsessions', d: 'flowsession' },
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
			objectid_managedidentity: { b: 'objectid_managedidentity', a: '_objectid_value', c: 'managedidentities', d: 'managedidentity' },
			objectid_metric: { b: 'objectid_metric', a: '_objectid_value', c: 'metrics', d: 'metric' },
			objectid_msdynce_botcontent: { b: 'objectid_msdynce_botcontent', a: '_objectid_value', c: 'msdynce_botcontents', d: 'msdynce_botcontent' },
			objectid_msdyn_aibdataset: { b: 'objectid_msdyn_aibdataset', a: '_objectid_value', c: 'msdyn_aibdatasets', d: 'msdyn_aibdataset' },
			objectid_msdyn_aibdatasetfile: { b: 'objectid_msdyn_aibdatasetfile', a: '_objectid_value', c: 'msdyn_aibdatasetfiles', d: 'msdyn_aibdatasetfile' },
			objectid_msdyn_aibdatasetrecord: { b: 'objectid_msdyn_aibdatasetrecord', a: '_objectid_value', c: 'msdyn_aibdatasetrecords', d: 'msdyn_aibdatasetrecord' },
			objectid_msdyn_aibdatasetscontainer: { b: 'objectid_msdyn_aibdatasetscontainer', a: '_objectid_value', c: 'msdyn_aibdatasetscontainers', d: 'msdyn_aibdatasetscontainer' },
			objectid_msdyn_aibfile: { b: 'objectid_msdyn_aibfile', a: '_objectid_value', c: 'msdyn_aibfiles', d: 'msdyn_aibfile' },
			objectid_msdyn_aibfileattacheddata: { b: 'objectid_msdyn_aibfileattacheddata', a: '_objectid_value', c: 'msdyn_aibfileattacheddatas', d: 'msdyn_aibfileattacheddata' },
			objectid_msdyn_aiconfiguration: { b: 'objectid_msdyn_aiconfiguration', a: '_objectid_value', c: 'msdyn_aiconfigurations', d: 'msdyn_aiconfiguration' },
			objectid_msdyn_aifptrainingdocument: { b: 'objectid_msdyn_aifptrainingdocument', a: '_objectid_value', c: 'msdyn_aifptrainingdocuments', d: 'msdyn_aifptrainingdocument' },
			objectid_msdyn_aimodel: { b: 'objectid_msdyn_aimodel', a: '_objectid_value', c: 'msdyn_aimodels', d: 'msdyn_aimodel' },
			objectid_msdyn_aiodimage: { b: 'objectid_msdyn_aiodimage', a: '_objectid_value', c: 'msdyn_aiodimages', d: 'msdyn_aiodimage' },
			objectid_msdyn_aiodlabel: { b: 'objectid_msdyn_aiodlabel', a: '_objectid_value', c: 'msdyn_aiodlabels', d: 'msdyn_aiodlabel' },
			objectid_msdyn_aiodtrainingboundingbox: { b: 'objectid_msdyn_aiodtrainingboundingbox', a: '_objectid_value', c: 'msdyn_aiodtrainingboundingboxes', d: 'msdyn_aiodtrainingboundingbox' },
			objectid_msdyn_aiodtrainingimage: { b: 'objectid_msdyn_aiodtrainingimage', a: '_objectid_value', c: 'msdyn_aiodtrainingimages', d: 'msdyn_aiodtrainingimage' },
			objectid_msdyn_aitemplate: { b: 'objectid_msdyn_aitemplate', a: '_objectid_value', c: 'msdyn_aitemplates', d: 'msdyn_aitemplate' },
			objectid_msdyn_analysiscomponent: { b: 'objectid_msdyn_analysiscomponent', a: '_objectid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent' },
			objectid_msdyn_analysisjob: { b: 'objectid_msdyn_analysisjob', a: '_objectid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob' },
			objectid_msdyn_analysisresult: { b: 'objectid_msdyn_analysisresult', a: '_objectid_value', c: 'msdyn_analysisresults', d: 'msdyn_analysisresult' },
			objectid_msdyn_analysisresultdetail: { b: 'objectid_msdyn_analysisresultdetail', a: '_objectid_value', c: 'msdyn_analysisresultdetails', d: 'msdyn_analysisresultdetail' },
			objectid_msdyn_dataflow: { b: 'objectid_msdyn_dataflow', a: '_objectid_value', c: 'msdyn_dataflows', d: 'msdyn_dataflow' },
			objectid_msdyn_federatedarticle: { b: 'objectid_msdyn_federatedarticle', a: '_objectid_value', c: 'msdyn_federatedarticles', d: 'msdyn_federatedarticle' },
			objectid_msdyn_federatedarticleincident: { b: 'objectid_msdyn_federatedarticleincident', a: '_objectid_value', c: 'msdyn_federatedarticleincidents', d: 'msdyn_federatedarticleincident' },
			objectid_msdyn_helppage: { b: 'objectid_msdyn_helppage', a: '_objectid_value', c: 'msdyn_helppages', d: 'msdyn_helppage' },
			objectid_msdyn_kalanguagesetting: { b: 'objectid_msdyn_kalanguagesetting', a: '_objectid_value', c: 'msdyn_kalanguagesettings', d: 'msdyn_kalanguagesetting' },
			objectid_msdyn_kmfederatedsearchconfig: { b: 'objectid_msdyn_kmfederatedsearchconfig', a: '_objectid_value', c: 'msdyn_kmfederatedsearchconfigs', d: 'msdyn_kmfederatedsearchconfig' },
			objectid_msdyn_kmpersonalizationsetting: { b: 'objectid_msdyn_kmpersonalizationsetting', a: '_objectid_value', c: 'msdyn_kmpersonalizationsettings', d: 'msdyn_kmpersonalizationsetting' },
			objectid_msdyn_knowledgearticleimage: { b: 'objectid_msdyn_knowledgearticleimage', a: '_objectid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage' },
			objectid_msdyn_knowledgearticletemplate: { b: 'objectid_msdyn_knowledgearticletemplate', a: '_objectid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			objectid_msdyn_knowledgeinteractioninsight: { b: 'objectid_msdyn_knowledgeinteractioninsight', a: '_objectid_value', c: 'msdyn_knowledgeinteractioninsights', d: 'msdyn_knowledgeinteractioninsight' },
			objectid_msdyn_knowledgepersonalfilter: { b: 'objectid_msdyn_knowledgepersonalfilter', a: '_objectid_value', c: 'msdyn_knowledgepersonalfilters', d: 'msdyn_knowledgepersonalfilter' },
			objectid_msdyn_knowledgesearchfilter: { b: 'objectid_msdyn_knowledgesearchfilter', a: '_objectid_value', c: 'msdyn_knowledgesearchfilters', d: 'msdyn_knowledgesearchfilter' },
			objectid_msdyn_knowledgesearchinsight: { b: 'objectid_msdyn_knowledgesearchinsight', a: '_objectid_value', c: 'msdyn_knowledgesearchinsights', d: 'msdyn_knowledgesearchinsight' },
			objectid_msdyn_richtextfile: { b: 'objectid_msdyn_richtextfile', a: '_objectid_value', c: 'msdyn_richtextfiles', d: 'msdyn_richtextfile' },
			objectid_msdyn_serviceconfiguration: { b: 'objectid_msdyn_serviceconfiguration', a: '_objectid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration' },
			objectid_msdyn_slakpi: { b: 'objectid_msdyn_slakpi', a: '_objectid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi' },
			objectid_msdyn_solutionhealthrule: { b: 'objectid_msdyn_solutionhealthrule', a: '_objectid_value', c: 'msdyn_solutionhealthrules', d: 'msdyn_solutionhealthrule' },
			objectid_msdyn_solutionhealthruleargument: { b: 'objectid_msdyn_solutionhealthruleargument', a: '_objectid_value', c: 'msdyn_solutionhealthrulearguments', d: 'msdyn_solutionhealthruleargument' },
			objectid_msdyn_solutionhealthruleset: { b: 'objectid_msdyn_solutionhealthruleset', a: '_objectid_value', c: 'msdyn_solutionhealthrulesets', d: 'msdyn_solutionhealthruleset' },
			objectid_new_bpf_301232cf016d4faebcee80f57b143c69: { b: 'objectid_new_bpf_301232cf016d4faebcee80f57b143c69', a: '_objectid_value', c: 'new_bpf_301232cf016d4faebcee80f57b143c69s', d: 'new_bpf_301232cf016d4faebcee80f57b143c69' },
			objectid_notification: { b: 'objectid_notification', a: '_objectid_value', c: 'notifications', d: 'notification' },
			objectid_organization: { b: 'objectid_organization', a: '_objectid_value', c: 'organizations', d: 'organization' },
			objectid_organizationdatasyncsubscription: { b: 'objectid_organizationdatasyncsubscription', a: '_objectid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription' },
			objectid_organizationdatasyncsubscriptionentity: { b: 'objectid_organizationdatasyncsubscriptionentity', a: '_objectid_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity' },
			objectid_organizationsetting: { b: 'objectid_organizationsetting', a: '_objectid_value', c: 'organizationsettings', d: 'organizationsetting' },
			objectid_organizationstatistic: { b: 'objectid_organizationstatistic', a: '_objectid_value', c: 'organizationstatistics', d: 'organizationstatistic' },
			objectid_ownermapping: { b: 'objectid_ownermapping', a: '_objectid_value', c: 'ownermappings', d: 'ownermapping' },
			objectid_package: { b: 'objectid_package', a: '_objectid_value', c: 'packages', d: 'package' },
			objectid_pdfsetting: { b: 'objectid_pdfsetting', a: '_objectid_value', c: 'pdfsettings', d: 'pdfsetting' },
			objectid_phonecall: { b: 'objectid_phonecall', a: '_objectid_value', c: 'phonecalls', d: 'phonecall' },
			objectid_picklistmapping: { b: 'objectid_picklistmapping', a: '_objectid_value', c: 'picklistmappings', d: 'picklistmapping' },
			objectid_pluginassembly: { b: 'objectid_pluginassembly', a: '_objectid_value', c: 'pluginassemblies', d: 'pluginassembly' },
			objectid_plugintype: { b: 'objectid_plugintype', a: '_objectid_value', c: 'plugintypes', d: 'plugintype' },
			objectid_plugintypestatistic: { b: 'objectid_plugintypestatistic', a: '_objectid_value', c: 'plugintypestatistics', d: 'plugintypestatistic' },
			objectid_principalattributeaccessmap: { b: 'objectid_principalattributeaccessmap', a: '_objectid_value', c: 'principalattributeaccessmaps', d: 'principalattributeaccessmap' },
			objectid_principalentitymap: { b: 'objectid_principalentitymap', a: '_objectid_value', c: '', d: 'principalentitymap' },
			objectid_principalobjectaccess: { b: 'objectid_principalobjectaccess', a: '_objectid_value', c: '', d: 'principalobjectaccess' },
			objectid_principalobjectattributeaccess: { b: 'objectid_principalobjectattributeaccess', a: '_objectid_value', c: 'principalobjectattributeaccesses', d: 'principalobjectattributeaccess' },
			objectid_privilege: { b: 'objectid_privilege', a: '_objectid_value', c: 'privileges', d: 'privilege' },
			objectid_processsession: { b: 'objectid_processsession', a: '_objectid_value', c: 'processsessions', d: 'processsession' },
			objectid_processstageparameter: { b: 'objectid_processstageparameter', a: '_objectid_value', c: 'processstageparameters', d: 'processstageparameter' },
			objectid_provisionlanguageforuser: { b: 'objectid_provisionlanguageforuser', a: '_objectid_value', c: 'provisionlanguageforusers', d: 'provisionlanguageforuser' },
			objectid_publisher: { b: 'objectid_publisher', a: '_objectid_value', c: 'publishers', d: 'publisher' },
			objectid_publisheraddress: { b: 'objectid_publisheraddress', a: '_objectid_value', c: 'publisheraddresses', d: 'publisheraddress' },
			objectid_queue: { b: 'objectid_queue', a: '_objectid_value', c: 'queues', d: 'queue' },
			objectid_queueitem: { b: 'objectid_queueitem', a: '_objectid_value', c: 'queueitems', d: 'queueitem' },
			objectid_recurringappointmentmaster: { b: 'objectid_recurringappointmentmaster', a: '_objectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			objectid_relationshipattribute: { b: 'objectid_relationshipattribute', a: '_objectid_value', c: 'relationshipattributes', d: 'relationshipattribute' },
			objectid_relationshiprole: { b: 'objectid_relationshiprole', a: '_objectid_value', c: 'relationshiproles', d: 'relationshiprole' },
			objectid_relationshiprolemap: { b: 'objectid_relationshiprolemap', a: '_objectid_value', c: 'relationshiprolemaps', d: 'relationshiprolemap' },
			objectid_report: { b: 'objectid_report', a: '_objectid_value', c: 'reports', d: 'report' },
			objectid_reportcategory: { b: 'objectid_reportcategory', a: '_objectid_value', c: 'reportcategories', d: 'reportcategory' },
			objectid_reportentity: { b: 'objectid_reportentity', a: '_objectid_value', c: 'reportentities', d: 'reportentity' },
			objectid_reportlink: { b: 'objectid_reportlink', a: '_objectid_value', c: 'reportlinks', d: 'reportlink' },
			objectid_reportvisibility: { b: 'objectid_reportvisibility', a: '_objectid_value', c: 'reportvisibilities', d: 'reportvisibility' },
			objectid_revokeinheritedaccessrecordstracker: { b: 'objectid_revokeinheritedaccessrecordstracker', a: '_objectid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker' },
			objectid_ribboncommand: { b: 'objectid_ribboncommand', a: '_objectid_value', c: 'ribboncommands', d: 'ribboncommand' },
			objectid_ribboncontextgroup: { b: 'objectid_ribboncontextgroup', a: '_objectid_value', c: 'ribboncontextgroups', d: 'ribboncontextgroup' },
			objectid_ribboncustomization: { b: 'objectid_ribboncustomization', a: '_objectid_value', c: 'ribboncustomizations', d: 'ribboncustomization' },
			objectid_ribbondiff: { b: 'objectid_ribbondiff', a: '_objectid_value', c: 'ribbondiffs', d: 'ribbondiff' },
			objectid_ribbonrule: { b: 'objectid_ribbonrule', a: '_objectid_value', c: 'ribbonrules', d: 'ribbonrule' },
			objectid_ribbontabtocommandmap: { b: 'objectid_ribbontabtocommandmap', a: '_objectid_value', c: 'ribbontabtocommandmaps', d: 'ribbontabtocommandmap' },
			objectid_role: { b: 'objectid_role', a: '_objectid_value', c: 'roles', d: 'role' },
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
			objectid_serviceendpoint: { b: 'objectid_serviceendpoint', a: '_objectid_value', c: 'serviceendpoints', d: 'serviceendpoint' },
			objectid_serviceplan: { b: 'objectid_serviceplan', a: '_objectid_value', c: 'serviceplans', d: 'serviceplan' },
			objectid_settingdefinition: { b: 'objectid_settingdefinition', a: '_objectid_value', c: 'settingdefinitions', d: 'settingdefinition' },
			objectid_sharepointdocumentlocation: { b: 'objectid_sharepointdocumentlocation', a: '_objectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			objectid_sharepointsite: { b: 'objectid_sharepointsite', a: '_objectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			objectid_sitemap: { b: 'objectid_sitemap', a: '_objectid_value', c: 'sitemaps', d: 'sitemap' },
			objectid_sla: { b: 'objectid_sla', a: '_objectid_value', c: 'slas', d: 'sla' },
			objectid_socialactivity: { b: 'objectid_socialactivity', a: '_objectid_value', c: 'socialactivities', d: 'socialactivity' },
			objectid_solution: { b: 'objectid_solution', a: '_objectid_value', c: 'solutions', d: 'solution' },
			objectid_solutioncomponent: { b: 'objectid_solutioncomponent', a: '_objectid_value', c: 'solutioncomponentss', d: 'solutioncomponent' },
			objectid_solutioncomponentattributeconfiguration: { b: 'objectid_solutioncomponentattributeconfiguration', a: '_objectid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration' },
			objectid_solutioncomponentconfiguration: { b: 'objectid_solutioncomponentconfiguration', a: '_objectid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration' },
			objectid_solutioncomponentrelationshipconfiguration: { b: 'objectid_solutioncomponentrelationshipconfiguration', a: '_objectid_value', c: 'solutioncomponentrelationshipconfigurations', d: 'solutioncomponentrelationshipconfiguration' },
			objectid_stagesolutionupload: { b: 'objectid_stagesolutionupload', a: '_objectid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload' },
			objectid_statusmap: { b: 'objectid_statusmap', a: '_objectid_value', c: 'statusmaps', d: 'statusmap' },
			objectid_stringmap: { b: 'objectid_stringmap', a: '_objectid_value', c: 'stringmaps', d: 'stringmap' },
			objectid_subject: { b: 'objectid_subject', a: '_objectid_value', c: 'subjects', d: 'subject' },
			objectid_subscription: { b: 'objectid_subscription', a: '_objectid_value', c: 'subscriptions', d: 'subscription' },
			objectid_subscriptionmanuallytrackedobject: { b: 'objectid_subscriptionmanuallytrackedobject', a: '_objectid_value', c: 'subscriptionmanuallytrackedobjects', d: 'subscriptionmanuallytrackedobject' },
			objectid_subscriptionsyncinfo: { b: 'objectid_subscriptionsyncinfo', a: '_objectid_value', c: 'subscriptionsyncinfos', d: 'subscriptionsyncinfo' },
			objectid_systemuser: { b: 'objectid_systemuser', a: '_objectid_value', c: 'systemusers', d: 'systemuser' },
			objectid_systemuserauthorizationchangetracker: { b: 'objectid_systemuserauthorizationchangetracker', a: '_objectid_value', c: 'systemuserauthorizationchangetrackers', d: 'systemuserauthorizationchangetracker' },
			objectid_systemuserbusinessunitentitymap: { b: 'objectid_systemuserbusinessunitentitymap', a: '_objectid_value', c: '', d: 'systemuserbusinessunitentitymap' },
			objectid_task: { b: 'objectid_task', a: '_objectid_value', c: 'tasks', d: 'task' },
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
			objectid_webresource: { b: 'objectid_webresource', a: '_objectid_value', c: 'webresources', d: 'webresource' },
			objectid_webwizard: { b: 'objectid_webwizard', a: '_objectid_value', c: 'webwizards', d: 'webwizard' },
			objectid_wizardaccessprivilege: { b: 'objectid_wizardaccessprivilege', a: '_objectid_value', c: 'wizardaccessprivileges', d: 'wizardaccessprivilege' },
			objectid_wizardpage: { b: 'objectid_wizardpage', a: '_objectid_value', c: 'wizardpages', d: 'wizardpage' },
			objectid_workflow: { b: 'objectid_workflow', a: '_objectid_value', c: 'workflows', d: 'workflow' },
			objectid_workflowbinary: { b: 'objectid_workflowbinary', a: '_objectid_value', c: 'workflowbinaries', d: 'workflowbinary' },
			objectid_workflowdependency: { b: 'objectid_workflowdependency', a: '_objectid_value', c: 'workflowdependencies', d: 'workflowdependency' },
			objectid_workflowlog: { b: 'objectid_workflowlog', a: '_objectid_value', c: 'workflowlogs', d: 'workflowlog' },
			objectid_workflowwaitsubscription: { b: 'objectid_workflowwaitsubscription', a: '_objectid_value', c: 'workflowwaitsubscriptions', d: 'workflowwaitsubscription' },
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
		for (var field in userentityinstancedata) {
			var a = userentityinstancedata[field].a;
			var b = userentityinstancedata[field].b;
			var c = userentityinstancedata[field].c;
			var d = userentityinstancedata[field].d;
			var g = userentityinstancedata[field].g;
			var r = userentityinstancedata[field].r;
			userentityinstancedata[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		userentityinstancedata.Entity = u;
		userentityinstancedata.EntityName = 'userentityinstancedata';
		userentityinstancedata.EntityCollectionName = 'userentityinstancedatas';
		userentityinstancedata['@odata.etag'] = e['@odata.etag'];
		userentityinstancedata.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		userentityinstancedata.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return userentityinstancedata;
	};
})(MyDog || (MyDog = {}));
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
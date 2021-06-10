'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.DuplicateRecordApi = function (e) {
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
		var duplicaterecord = {
			AsyncOperationId: { b: 'asyncoperationid', a: '_asyncoperationid_value', c: 'asyncoperations', d: 'asyncoperation', r: true },
			baserecordid_account: { b: 'baserecordid_account', a: '_baserecordid_value', c: 'accounts', d: 'account' },
			baserecordid_activityfileattachment: { b: 'baserecordid_activityfileattachment', a: '_baserecordid_value', c: 'activityfileattachments', d: 'activityfileattachment' },
			baserecordid_applicationuser: { b: 'baserecordid_applicationuser', a: '_baserecordid_value', c: 'applicationusers', d: 'applicationuser' },
			baserecordid_appnotification: { b: 'baserecordid_appnotification', a: '_baserecordid_value', c: 'appnotifications', d: 'appnotification' },
			baserecordid_appointment: { b: 'baserecordid_appointment', a: '_baserecordid_value', c: 'appointments', d: 'appointment' },
			baserecordid_canvasappextendedmetadata: { b: 'baserecordid_canvasappextendedmetadata', a: '_baserecordid_value', c: 'canvasappextendedmetadatas', d: 'canvasappextendedmetadata' },
			baserecordid_cascadegrantrevokeaccessrecordstracker: { b: 'baserecordid_cascadegrantrevokeaccessrecordstracker', a: '_baserecordid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker' },
			baserecordid_cascadegrantrevokeaccessversiontracker: { b: 'baserecordid_cascadegrantrevokeaccessversiontracker', a: '_baserecordid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker' },
			baserecordid_catalogassignment: { b: 'baserecordid_catalogassignment', a: '_baserecordid_value', c: 'catalogassignments', d: 'catalogassignment' },
			channelaccessprofile_duplicatebaserecord: { b: 'channelaccessprofile_duplicatebaserecord', a: '_baserecordid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			baserecordid_connector: { b: 'baserecordid_connector', a: '_baserecordid_value', c: 'connectors', d: 'connector' },
			baserecordid_contact: { b: 'baserecordid_contact', a: '_baserecordid_value', c: 'contacts', d: 'contact' },
			baserecordid_conversationtranscript: { b: 'baserecordid_conversationtranscript', a: '_baserecordid_value', c: 'conversationtranscripts', d: 'conversationtranscript' },
			baserecordid_datalakefolder: { b: 'baserecordid_datalakefolder', a: '_baserecordid_value', c: 'datalakefolders', d: 'datalakefolder' },
			baserecordid_datalakefolderpermission: { b: 'baserecordid_datalakefolderpermission', a: '_baserecordid_value', c: 'datalakefolderpermissions', d: 'datalakefolderpermission' },
			baserecordid_datalakeworkspace: { b: 'baserecordid_datalakeworkspace', a: '_baserecordid_value', c: 'datalakeworkspaces', d: 'datalakeworkspace' },
			baserecordid_datalakeworkspacepermission: { b: 'baserecordid_datalakeworkspacepermission', a: '_baserecordid_value', c: 'datalakeworkspacepermissions', d: 'datalakeworkspacepermission' },
			baserecordid_email: { b: 'baserecordid_email', a: '_baserecordid_value', c: 'emails', d: 'email' },
			baserecordid_emailserverprofile: { b: 'baserecordid_emailserverprofile', a: '_baserecordid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			baserecordid_environmentvariabledefinition: { b: 'baserecordid_environmentvariabledefinition', a: '_baserecordid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition' },
			baserecordid_environmentvariablevalue: { b: 'baserecordid_environmentvariablevalue', a: '_baserecordid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue' },
			baserecordid_exportsolutionupload: { b: 'baserecordid_exportsolutionupload', a: '_baserecordid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload' },
			baserecordid_fax: { b: 'baserecordid_fax', a: '_baserecordid_value', c: 'faxes', d: 'fax' },
			baserecordid_featurecontrolsetting: { b: 'baserecordid_featurecontrolsetting', a: '_baserecordid_value', c: 'featurecontrolsettings', d: 'featurecontrolsetting' },
			baserecordid_feedback: { b: 'baserecordid_feedback', a: '_baserecordid_value', c: 'feedback', d: 'feedback' },
			baserecordid_flowmachinegroup: { b: 'baserecordid_flowmachinegroup', a: '_baserecordid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			baserecordid_goal: { b: 'baserecordid_goal', a: '_baserecordid_value', c: 'goals', d: 'goal' },
			baserecordid_goalrollupquery: { b: 'baserecordid_goalrollupquery', a: '_baserecordid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			baserecordid_kbarticle: { b: 'baserecordid_kbarticle', a: '_baserecordid_value', c: 'kbarticles', d: 'kbarticle' },
			baserecordid_keyvaultreference: { b: 'baserecordid_keyvaultreference', a: '_baserecordid_value', c: 'keyvaultreferences', d: 'keyvaultreference' },
			baserecordid_knowledgearticle: { b: 'baserecordid_knowledgearticle', a: '_baserecordid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			baserecordid_knowledgebaserecord: { b: 'baserecordid_knowledgebaserecord', a: '_baserecordid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			baserecordid_letter: { b: 'baserecordid_letter', a: '_baserecordid_value', c: 'letters', d: 'letter' },
			baserecordid_managedidentity: { b: 'baserecordid_managedidentity', a: '_baserecordid_value', c: 'managedidentities', d: 'managedidentity' },
			baserecordid_msdyn_aibdataset: { b: 'baserecordid_msdyn_aibdataset', a: '_baserecordid_value', c: 'msdyn_aibdatasets', d: 'msdyn_aibdataset' },
			baserecordid_msdyn_aibdatasetfile: { b: 'baserecordid_msdyn_aibdatasetfile', a: '_baserecordid_value', c: 'msdyn_aibdatasetfiles', d: 'msdyn_aibdatasetfile' },
			baserecordid_msdyn_aibdatasetrecord: { b: 'baserecordid_msdyn_aibdatasetrecord', a: '_baserecordid_value', c: 'msdyn_aibdatasetrecords', d: 'msdyn_aibdatasetrecord' },
			baserecordid_msdyn_aibdatasetscontainer: { b: 'baserecordid_msdyn_aibdatasetscontainer', a: '_baserecordid_value', c: 'msdyn_aibdatasetscontainers', d: 'msdyn_aibdatasetscontainer' },
			baserecordid_msdyn_aibfile: { b: 'baserecordid_msdyn_aibfile', a: '_baserecordid_value', c: 'msdyn_aibfiles', d: 'msdyn_aibfile' },
			baserecordid_msdyn_aibfileattacheddata: { b: 'baserecordid_msdyn_aibfileattacheddata', a: '_baserecordid_value', c: 'msdyn_aibfileattacheddatas', d: 'msdyn_aibfileattacheddata' },
			baserecordid_msdyn_aiodimage: { b: 'baserecordid_msdyn_aiodimage', a: '_baserecordid_value', c: 'msdyn_aiodimages', d: 'msdyn_aiodimage' },
			baserecordid_msdyn_aiodlabel: { b: 'baserecordid_msdyn_aiodlabel', a: '_baserecordid_value', c: 'msdyn_aiodlabels', d: 'msdyn_aiodlabel' },
			baserecordid_msdyn_aiodtrainingboundingbox: { b: 'baserecordid_msdyn_aiodtrainingboundingbox', a: '_baserecordid_value', c: 'msdyn_aiodtrainingboundingboxes', d: 'msdyn_aiodtrainingboundingbox' },
			baserecordid_msdyn_aiodtrainingimage: { b: 'baserecordid_msdyn_aiodtrainingimage', a: '_baserecordid_value', c: 'msdyn_aiodtrainingimages', d: 'msdyn_aiodtrainingimage' },
			baserecordid_msdyn_dataflow: { b: 'baserecordid_msdyn_dataflow', a: '_baserecordid_value', c: 'msdyn_dataflows', d: 'msdyn_dataflow' },
			baserecordid_msdyn_federatedarticle: { b: 'baserecordid_msdyn_federatedarticle', a: '_baserecordid_value', c: 'msdyn_federatedarticles', d: 'msdyn_federatedarticle' },
			baserecordid_msdyn_federatedarticleincident: { b: 'baserecordid_msdyn_federatedarticleincident', a: '_baserecordid_value', c: 'msdyn_federatedarticleincidents', d: 'msdyn_federatedarticleincident' },
			baserecordid_msdyn_kalanguagesetting: { b: 'baserecordid_msdyn_kalanguagesetting', a: '_baserecordid_value', c: 'msdyn_kalanguagesettings', d: 'msdyn_kalanguagesetting' },
			baserecordid_msdyn_kmfederatedsearchconfig: { b: 'baserecordid_msdyn_kmfederatedsearchconfig', a: '_baserecordid_value', c: 'msdyn_kmfederatedsearchconfigs', d: 'msdyn_kmfederatedsearchconfig' },
			baserecordid_msdyn_knowledgearticleimage: { b: 'baserecordid_msdyn_knowledgearticleimage', a: '_baserecordid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage' },
			baserecordid_msdyn_knowledgearticletemplate: { b: 'baserecordid_msdyn_knowledgearticletemplate', a: '_baserecordid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			baserecordid_msdyn_knowledgeinteractioninsight: { b: 'baserecordid_msdyn_knowledgeinteractioninsight', a: '_baserecordid_value', c: 'msdyn_knowledgeinteractioninsights', d: 'msdyn_knowledgeinteractioninsight' },
			baserecordid_msdyn_knowledgepersonalfilter: { b: 'baserecordid_msdyn_knowledgepersonalfilter', a: '_baserecordid_value', c: 'msdyn_knowledgepersonalfilters', d: 'msdyn_knowledgepersonalfilter' },
			baserecordid_msdyn_knowledgesearchfilter: { b: 'baserecordid_msdyn_knowledgesearchfilter', a: '_baserecordid_value', c: 'msdyn_knowledgesearchfilters', d: 'msdyn_knowledgesearchfilter' },
			baserecordid_msdyn_knowledgesearchinsight: { b: 'baserecordid_msdyn_knowledgesearchinsight', a: '_baserecordid_value', c: 'msdyn_knowledgesearchinsights', d: 'msdyn_knowledgesearchinsight' },
			baserecordid_msdyn_pminferredtask: { b: 'baserecordid_msdyn_pminferredtask', a: '_baserecordid_value', c: 'msdyn_pminferredtasks', d: 'msdyn_pminferredtask' },
			baserecordid_msdyn_pmrecording: { b: 'baserecordid_msdyn_pmrecording', a: '_baserecordid_value', c: 'msdyn_pmrecordings', d: 'msdyn_pmrecording' },
			baserecordid_msdyn_serviceconfiguration: { b: 'baserecordid_msdyn_serviceconfiguration', a: '_baserecordid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration' },
			baserecordid_msdyn_slakpi: { b: 'baserecordid_msdyn_slakpi', a: '_baserecordid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi' },
			baserecordid_organizationdatasyncsubscription: { b: 'baserecordid_organizationdatasyncsubscription', a: '_baserecordid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription' },
			baserecordid_organizationdatasyncsubscriptionentity: { b: 'baserecordid_organizationdatasyncsubscriptionentity', a: '_baserecordid_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity' },
			baserecordid_package: { b: 'baserecordid_package', a: '_baserecordid_value', c: 'packages', d: 'package' },
			baserecordid_phonecall: { b: 'baserecordid_phonecall', a: '_baserecordid_value', c: 'phonecalls', d: 'phonecall' },
			baserecordid_publisher: { b: 'baserecordid_publisher', a: '_baserecordid_value', c: 'publishers', d: 'publisher' },
			baserecordid_queue: { b: 'baserecordid_queue', a: '_baserecordid_value', c: 'queues', d: 'queue' },
			baserecordid_recurringappointmentmaster: { b: 'baserecordid_recurringappointmentmaster', a: '_baserecordid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			baserecordid_revokeinheritedaccessrecordstracker: { b: 'baserecordid_revokeinheritedaccessrecordstracker', a: '_baserecordid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker' },
			baserecordid_serviceplan: { b: 'baserecordid_serviceplan', a: '_baserecordid_value', c: 'serviceplans', d: 'serviceplan' },
			baserecordid_sharepointdocumentlocation: { b: 'baserecordid_sharepointdocumentlocation', a: '_baserecordid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			baserecordid_sharepointsite: { b: 'baserecordid_sharepointsite', a: '_baserecordid_value', c: 'sharepointsites', d: 'sharepointsite' },
			baserecordid_socialactivity: { b: 'baserecordid_socialactivity', a: '_baserecordid_value', c: 'socialactivities', d: 'socialactivity' },
			baserecordid_socialprofile: { b: 'baserecordid_socialprofile', a: '_baserecordid_value', c: 'socialprofiles', d: 'socialprofile' },
			baserecordid_solutioncomponentattributeconfiguration: { b: 'baserecordid_solutioncomponentattributeconfiguration', a: '_baserecordid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration' },
			baserecordid_solutioncomponentbatchconfiguration: { b: 'baserecordid_solutioncomponentbatchconfiguration', a: '_baserecordid_value', c: 'solutioncomponentbatchconfigurations', d: 'solutioncomponentbatchconfiguration' },
			baserecordid_solutioncomponentconfiguration: { b: 'baserecordid_solutioncomponentconfiguration', a: '_baserecordid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration' },
			baserecordid_solutioncomponentrelationshipconfiguration: { b: 'baserecordid_solutioncomponentrelationshipconfiguration', a: '_baserecordid_value', c: 'solutioncomponentrelationshipconfigurations', d: 'solutioncomponentrelationshipconfiguration' },
			baserecordid_stagesolutionupload: { b: 'baserecordid_stagesolutionupload', a: '_baserecordid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload' },
			baserecordid_systemuser: { b: 'baserecordid_systemuser', a: '_baserecordid_value', c: 'systemusers', d: 'systemuser' },
			baserecordid_task: { b: 'baserecordid_task', a: '_baserecordid_value', c: 'tasks', d: 'task' },
			baserecordid_team: { b: 'baserecordid_team', a: '_baserecordid_value', c: 'teams', d: 'team' },
			baserecordid_transactioncurrency: { b: 'baserecordid_transactioncurrency', a: '_baserecordid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			DuplicateId: { a: 'duplicateid' },
			duplicaterecordid_account: { b: 'duplicaterecordid_account', a: '_duplicaterecordid_value', c: 'accounts', d: 'account' },
			duplicaterecordid_activityfileattachment: { b: 'duplicaterecordid_activityfileattachment', a: '_duplicaterecordid_value', c: 'activityfileattachments', d: 'activityfileattachment' },
			duplicaterecordid_applicationuser: { b: 'duplicaterecordid_applicationuser', a: '_duplicaterecordid_value', c: 'applicationusers', d: 'applicationuser' },
			duplicaterecordid_appnotification: { b: 'duplicaterecordid_appnotification', a: '_duplicaterecordid_value', c: 'appnotifications', d: 'appnotification' },
			duplicaterecordid_appointment: { b: 'duplicaterecordid_appointment', a: '_duplicaterecordid_value', c: 'appointments', d: 'appointment' },
			duplicaterecordid_canvasappextendedmetadata: { b: 'duplicaterecordid_canvasappextendedmetadata', a: '_duplicaterecordid_value', c: 'canvasappextendedmetadatas', d: 'canvasappextendedmetadata' },
			duplicaterecordid_cascadegrantrevokeaccessrecordstracker: { b: 'duplicaterecordid_cascadegrantrevokeaccessrecordstracker', a: '_duplicaterecordid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker' },
			duplicaterecordid_cascadegrantrevokeaccessversiontracker: { b: 'duplicaterecordid_cascadegrantrevokeaccessversiontracker', a: '_duplicaterecordid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker' },
			duplicaterecordid_catalogassignment: { b: 'duplicaterecordid_catalogassignment', a: '_duplicaterecordid_value', c: 'catalogassignments', d: 'catalogassignment' },
			channelaccessprofile_duplicatematchingrecord: { b: 'channelaccessprofile_duplicatematchingrecord', a: '_duplicaterecordid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			duplicaterecordid_connector: { b: 'duplicaterecordid_connector', a: '_duplicaterecordid_value', c: 'connectors', d: 'connector' },
			duplicaterecordid_contact: { b: 'duplicaterecordid_contact', a: '_duplicaterecordid_value', c: 'contacts', d: 'contact' },
			duplicaterecordid_conversationtranscript: { b: 'duplicaterecordid_conversationtranscript', a: '_duplicaterecordid_value', c: 'conversationtranscripts', d: 'conversationtranscript' },
			duplicaterecordid_datalakefolder: { b: 'duplicaterecordid_datalakefolder', a: '_duplicaterecordid_value', c: 'datalakefolders', d: 'datalakefolder' },
			duplicaterecordid_datalakefolderpermission: { b: 'duplicaterecordid_datalakefolderpermission', a: '_duplicaterecordid_value', c: 'datalakefolderpermissions', d: 'datalakefolderpermission' },
			duplicaterecordid_datalakeworkspace: { b: 'duplicaterecordid_datalakeworkspace', a: '_duplicaterecordid_value', c: 'datalakeworkspaces', d: 'datalakeworkspace' },
			duplicaterecordid_datalakeworkspacepermission: { b: 'duplicaterecordid_datalakeworkspacepermission', a: '_duplicaterecordid_value', c: 'datalakeworkspacepermissions', d: 'datalakeworkspacepermission' },
			duplicaterecordid_email: { b: 'duplicaterecordid_email', a: '_duplicaterecordid_value', c: 'emails', d: 'email' },
			duplicaterecordid_emailserverprofile: { b: 'duplicaterecordid_emailserverprofile', a: '_duplicaterecordid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			duplicaterecordid_environmentvariabledefinition: { b: 'duplicaterecordid_environmentvariabledefinition', a: '_duplicaterecordid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition' },
			duplicaterecordid_environmentvariablevalue: { b: 'duplicaterecordid_environmentvariablevalue', a: '_duplicaterecordid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue' },
			duplicaterecordid_exportsolutionupload: { b: 'duplicaterecordid_exportsolutionupload', a: '_duplicaterecordid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload' },
			duplicaterecordid_fax: { b: 'duplicaterecordid_fax', a: '_duplicaterecordid_value', c: 'faxes', d: 'fax' },
			duplicaterecordid_featurecontrolsetting: { b: 'duplicaterecordid_featurecontrolsetting', a: '_duplicaterecordid_value', c: 'featurecontrolsettings', d: 'featurecontrolsetting' },
			duplicaterecordid_feedback: { b: 'duplicaterecordid_feedback', a: '_duplicaterecordid_value', c: 'feedback', d: 'feedback' },
			duplicaterecordid_flowmachinegroup: { b: 'duplicaterecordid_flowmachinegroup', a: '_duplicaterecordid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			duplicaterecordid_goal: { b: 'duplicaterecordid_goal', a: '_duplicaterecordid_value', c: 'goals', d: 'goal' },
			duplicaterecordid_goalrollupquery: { b: 'duplicaterecordid_goalrollupquery', a: '_duplicaterecordid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			duplicaterecordid_kbarticle: { b: 'duplicaterecordid_kbarticle', a: '_duplicaterecordid_value', c: 'kbarticles', d: 'kbarticle' },
			duplicaterecordid_keyvaultreference: { b: 'duplicaterecordid_keyvaultreference', a: '_duplicaterecordid_value', c: 'keyvaultreferences', d: 'keyvaultreference' },
			duplicaterecordid_knowledgearticle: { b: 'duplicaterecordid_knowledgearticle', a: '_duplicaterecordid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			duplicaterecordid_knowledgebaserecord: { b: 'duplicaterecordid_knowledgebaserecord', a: '_duplicaterecordid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			duplicaterecordid_letter: { b: 'duplicaterecordid_letter', a: '_duplicaterecordid_value', c: 'letters', d: 'letter' },
			duplicaterecordid_managedidentity: { b: 'duplicaterecordid_managedidentity', a: '_duplicaterecordid_value', c: 'managedidentities', d: 'managedidentity' },
			duplicaterecordid_msdyn_aibdataset: { b: 'duplicaterecordid_msdyn_aibdataset', a: '_duplicaterecordid_value', c: 'msdyn_aibdatasets', d: 'msdyn_aibdataset' },
			duplicaterecordid_msdyn_aibdatasetfile: { b: 'duplicaterecordid_msdyn_aibdatasetfile', a: '_duplicaterecordid_value', c: 'msdyn_aibdatasetfiles', d: 'msdyn_aibdatasetfile' },
			duplicaterecordid_msdyn_aibdatasetrecord: { b: 'duplicaterecordid_msdyn_aibdatasetrecord', a: '_duplicaterecordid_value', c: 'msdyn_aibdatasetrecords', d: 'msdyn_aibdatasetrecord' },
			duplicaterecordid_msdyn_aibdatasetscontainer: { b: 'duplicaterecordid_msdyn_aibdatasetscontainer', a: '_duplicaterecordid_value', c: 'msdyn_aibdatasetscontainers', d: 'msdyn_aibdatasetscontainer' },
			duplicaterecordid_msdyn_aibfile: { b: 'duplicaterecordid_msdyn_aibfile', a: '_duplicaterecordid_value', c: 'msdyn_aibfiles', d: 'msdyn_aibfile' },
			duplicaterecordid_msdyn_aibfileattacheddata: { b: 'duplicaterecordid_msdyn_aibfileattacheddata', a: '_duplicaterecordid_value', c: 'msdyn_aibfileattacheddatas', d: 'msdyn_aibfileattacheddata' },
			duplicaterecordid_msdyn_aiodimage: { b: 'duplicaterecordid_msdyn_aiodimage', a: '_duplicaterecordid_value', c: 'msdyn_aiodimages', d: 'msdyn_aiodimage' },
			duplicaterecordid_msdyn_aiodlabel: { b: 'duplicaterecordid_msdyn_aiodlabel', a: '_duplicaterecordid_value', c: 'msdyn_aiodlabels', d: 'msdyn_aiodlabel' },
			duplicaterecordid_msdyn_aiodtrainingboundingbox: { b: 'duplicaterecordid_msdyn_aiodtrainingboundingbox', a: '_duplicaterecordid_value', c: 'msdyn_aiodtrainingboundingboxes', d: 'msdyn_aiodtrainingboundingbox' },
			duplicaterecordid_msdyn_aiodtrainingimage: { b: 'duplicaterecordid_msdyn_aiodtrainingimage', a: '_duplicaterecordid_value', c: 'msdyn_aiodtrainingimages', d: 'msdyn_aiodtrainingimage' },
			duplicaterecordid_msdyn_dataflow: { b: 'duplicaterecordid_msdyn_dataflow', a: '_duplicaterecordid_value', c: 'msdyn_dataflows', d: 'msdyn_dataflow' },
			duplicaterecordid_msdyn_federatedarticle: { b: 'duplicaterecordid_msdyn_federatedarticle', a: '_duplicaterecordid_value', c: 'msdyn_federatedarticles', d: 'msdyn_federatedarticle' },
			duplicaterecordid_msdyn_federatedarticleincident: { b: 'duplicaterecordid_msdyn_federatedarticleincident', a: '_duplicaterecordid_value', c: 'msdyn_federatedarticleincidents', d: 'msdyn_federatedarticleincident' },
			duplicaterecordid_msdyn_kalanguagesetting: { b: 'duplicaterecordid_msdyn_kalanguagesetting', a: '_duplicaterecordid_value', c: 'msdyn_kalanguagesettings', d: 'msdyn_kalanguagesetting' },
			duplicaterecordid_msdyn_kmfederatedsearchconfig: { b: 'duplicaterecordid_msdyn_kmfederatedsearchconfig', a: '_duplicaterecordid_value', c: 'msdyn_kmfederatedsearchconfigs', d: 'msdyn_kmfederatedsearchconfig' },
			duplicaterecordid_msdyn_knowledgearticleimage: { b: 'duplicaterecordid_msdyn_knowledgearticleimage', a: '_duplicaterecordid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage' },
			duplicaterecordid_msdyn_knowledgearticletemplate: { b: 'duplicaterecordid_msdyn_knowledgearticletemplate', a: '_duplicaterecordid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			duplicaterecordid_msdyn_knowledgeinteractioninsight: { b: 'duplicaterecordid_msdyn_knowledgeinteractioninsight', a: '_duplicaterecordid_value', c: 'msdyn_knowledgeinteractioninsights', d: 'msdyn_knowledgeinteractioninsight' },
			duplicaterecordid_msdyn_knowledgepersonalfilter: { b: 'duplicaterecordid_msdyn_knowledgepersonalfilter', a: '_duplicaterecordid_value', c: 'msdyn_knowledgepersonalfilters', d: 'msdyn_knowledgepersonalfilter' },
			duplicaterecordid_msdyn_knowledgesearchfilter: { b: 'duplicaterecordid_msdyn_knowledgesearchfilter', a: '_duplicaterecordid_value', c: 'msdyn_knowledgesearchfilters', d: 'msdyn_knowledgesearchfilter' },
			duplicaterecordid_msdyn_knowledgesearchinsight: { b: 'duplicaterecordid_msdyn_knowledgesearchinsight', a: '_duplicaterecordid_value', c: 'msdyn_knowledgesearchinsights', d: 'msdyn_knowledgesearchinsight' },
			duplicaterecordid_msdyn_pminferredtask: { b: 'duplicaterecordid_msdyn_pminferredtask', a: '_duplicaterecordid_value', c: 'msdyn_pminferredtasks', d: 'msdyn_pminferredtask' },
			duplicaterecordid_msdyn_pmrecording: { b: 'duplicaterecordid_msdyn_pmrecording', a: '_duplicaterecordid_value', c: 'msdyn_pmrecordings', d: 'msdyn_pmrecording' },
			duplicaterecordid_msdyn_serviceconfiguration: { b: 'duplicaterecordid_msdyn_serviceconfiguration', a: '_duplicaterecordid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration' },
			duplicaterecordid_msdyn_slakpi: { b: 'duplicaterecordid_msdyn_slakpi', a: '_duplicaterecordid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi' },
			duplicaterecordid_organizationdatasyncsubscription: { b: 'duplicaterecordid_organizationdatasyncsubscription', a: '_duplicaterecordid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription' },
			duplicaterecordid_organizationdatasyncsubscriptionentity: { b: 'duplicaterecordid_organizationdatasyncsubscriptionentity', a: '_duplicaterecordid_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity' },
			duplicaterecordid_package: { b: 'duplicaterecordid_package', a: '_duplicaterecordid_value', c: 'packages', d: 'package' },
			duplicaterecordid_phonecall: { b: 'duplicaterecordid_phonecall', a: '_duplicaterecordid_value', c: 'phonecalls', d: 'phonecall' },
			duplicaterecordid_publisher: { b: 'duplicaterecordid_publisher', a: '_duplicaterecordid_value', c: 'publishers', d: 'publisher' },
			duplicaterecordid_queue: { b: 'duplicaterecordid_queue', a: '_duplicaterecordid_value', c: 'queues', d: 'queue' },
			duplicaterecordid_recurringappointmentmaster: { b: 'duplicaterecordid_recurringappointmentmaster', a: '_duplicaterecordid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			duplicaterecordid_revokeinheritedaccessrecordstracker: { b: 'duplicaterecordid_revokeinheritedaccessrecordstracker', a: '_duplicaterecordid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker' },
			duplicaterecordid_serviceplan: { b: 'duplicaterecordid_serviceplan', a: '_duplicaterecordid_value', c: 'serviceplans', d: 'serviceplan' },
			duplicaterecordid_sharepointdocumentlocation: { b: 'duplicaterecordid_sharepointdocumentlocation', a: '_duplicaterecordid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			duplicaterecordid_sharepointsite: { b: 'duplicaterecordid_sharepointsite', a: '_duplicaterecordid_value', c: 'sharepointsites', d: 'sharepointsite' },
			duplicaterecordid_socialactivity: { b: 'duplicaterecordid_socialactivity', a: '_duplicaterecordid_value', c: 'socialactivities', d: 'socialactivity' },
			duplicaterecordid_socialprofile: { b: 'duplicaterecordid_socialprofile', a: '_duplicaterecordid_value', c: 'socialprofiles', d: 'socialprofile' },
			duplicaterecordid_solutioncomponentattributeconfiguration: { b: 'duplicaterecordid_solutioncomponentattributeconfiguration', a: '_duplicaterecordid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration' },
			duplicaterecordid_solutioncomponentbatchconfiguration: { b: 'duplicaterecordid_solutioncomponentbatchconfiguration', a: '_duplicaterecordid_value', c: 'solutioncomponentbatchconfigurations', d: 'solutioncomponentbatchconfiguration' },
			duplicaterecordid_solutioncomponentconfiguration: { b: 'duplicaterecordid_solutioncomponentconfiguration', a: '_duplicaterecordid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration' },
			duplicaterecordid_solutioncomponentrelationshipconfiguration: { b: 'duplicaterecordid_solutioncomponentrelationshipconfiguration', a: '_duplicaterecordid_value', c: 'solutioncomponentrelationshipconfigurations', d: 'solutioncomponentrelationshipconfiguration' },
			duplicaterecordid_stagesolutionupload: { b: 'duplicaterecordid_stagesolutionupload', a: '_duplicaterecordid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload' },
			duplicaterecordid_systemuser: { b: 'duplicaterecordid_systemuser', a: '_duplicaterecordid_value', c: 'systemusers', d: 'systemuser' },
			duplicaterecordid_task: { b: 'duplicaterecordid_task', a: '_duplicaterecordid_value', c: 'tasks', d: 'task' },
			duplicaterecordid_team: { b: 'duplicaterecordid_team', a: '_duplicaterecordid_value', c: 'teams', d: 'team' },
			duplicaterecordid_transactioncurrency: { b: 'duplicaterecordid_transactioncurrency', a: '_duplicaterecordid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			DuplicateRuleId: { b: 'duplicateruleid', a: '_duplicateruleid_value', c: 'duplicaterules', d: 'duplicaterule', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			OwningUser: { a: 'owninguser', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in duplicaterecord) {
			var a = duplicaterecord[field].a;
			var b = duplicaterecord[field].b;
			var c = duplicaterecord[field].c;
			var d = duplicaterecord[field].d;
			var g = duplicaterecord[field].g;
			var r = duplicaterecord[field].r;
			duplicaterecord[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		duplicaterecord.Entity = u;
		duplicaterecord.EntityName = 'duplicaterecord';
		duplicaterecord.EntityCollectionName = 'duplicaterecords';
		duplicaterecord['@odata.etag'] = e['@odata.etag'];
		duplicaterecord.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		duplicaterecord.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
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
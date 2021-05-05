'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PrincipalObjectAttributeAccessApi = function (e) {
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
		var principalobjectattributeaccess = {
			AttributeId: { a: 'attributeid' },
			objectid_account: { b: 'objectid_account', a: '_objectid_value', c: 'accounts', d: 'account' },
			objectid_activityfileattachment: { b: 'objectid_activityfileattachment', a: '_objectid_value', c: 'activityfileattachments', d: 'activityfileattachment' },
			objectid_apisettings: { b: 'objectid_apisettings', a: '_objectid_value', c: 'apisettingscollection', d: 'apisettings' },
			objectid_appelement: { b: 'objectid_appelement', a: '_objectid_value', c: 'appelements', d: 'appelement' },
			objectid_applicationuser: { b: 'objectid_applicationuser', a: '_objectid_value', c: 'applicationusers', d: 'applicationuser' },
			objectid_appmodulecomponentedge: { b: 'objectid_appmodulecomponentedge', a: '_objectid_value', c: 'appmodulecomponentedges', d: 'appmodulecomponentedge' },
			objectid_appmodulecomponentnode: { b: 'objectid_appmodulecomponentnode', a: '_objectid_value', c: 'appmodulecomponentnodes', d: 'appmodulecomponentnode' },
			objectid_appnotification: { b: 'objectid_appnotification', a: '_objectid_value', c: 'appnotifications', d: 'appnotification' },
			objectid_appointment: { b: 'objectid_appointment', a: '_objectid_value', c: 'appointments', d: 'appointment' },
			objectid_appsetting: { b: 'objectid_appsetting', a: '_objectid_value', c: 'appsettings', d: 'appsetting' },
			objectid_appusersetting: { b: 'objectid_appusersetting', a: '_objectid_value', c: 'appusersettings', d: 'appusersetting' },
			objectid_attributeimageconfig: { b: 'objectid_attributeimageconfig', a: '_objectid_value', c: 'attributeimageconfigs', d: 'attributeimageconfig' },
			objectid_bot: { b: 'objectid_bot', a: '_objectid_value', c: 'bots', d: 'bot' },
			objectid_botcomponent: { b: 'objectid_botcomponent', a: '_objectid_value', c: 'botcomponents', d: 'botcomponent' },
			objectid_businessunit: { b: 'objectid_businessunit', a: '_objectid_value', c: 'businessunits', d: 'businessunit' },
			objectid_canvasappextendedmetadata: { b: 'objectid_canvasappextendedmetadata', a: '_objectid_value', c: 'canvasappextendedmetadatas', d: 'canvasappextendedmetadata' },
			objectid_cascadegrantrevokeaccessrecordstracker: { b: 'objectid_cascadegrantrevokeaccessrecordstracker', a: '_objectid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker' },
			objectid_cascadegrantrevokeaccessversiontracker: { b: 'objectid_cascadegrantrevokeaccessversiontracker', a: '_objectid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker' },
			objectid_catalog: { b: 'objectid_catalog', a: '_objectid_value', c: 'catalogs', d: 'catalog' },
			objectid_catalogassignment: { b: 'objectid_catalogassignment', a: '_objectid_value', c: 'catalogassignments', d: 'catalogassignment' },
			channelaccessprofile_principalobjectattributeaccess: { b: 'channelaccessprofile_principalobjectattributeaccess', a: '_objectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			objectid_connection: { b: 'objectid_connection', a: '_objectid_value', c: 'connections', d: 'connection' },
			objectid_connectionreference: { b: 'objectid_connectionreference', a: '_objectid_value', c: 'connectionreferences', d: 'connectionreference' },
			objectid_connector: { b: 'objectid_connector', a: '_objectid_value', c: 'connectors', d: 'connector' },
			objectid_contact: { b: 'objectid_contact', a: '_objectid_value', c: 'contacts', d: 'contact' },
			objectid_conversationtranscript: { b: 'objectid_conversationtranscript', a: '_objectid_value', c: 'conversationtranscripts', d: 'conversationtranscript' },
			objectid_customapi: { b: 'objectid_customapi', a: '_objectid_value', c: 'customapis', d: 'customapi' },
			objectid_customapirequestparameter: { b: 'objectid_customapirequestparameter', a: '_objectid_value', c: 'customapirequestparameters', d: 'customapirequestparameter' },
			objectid_customapiresponseproperty: { b: 'objectid_customapiresponseproperty', a: '_objectid_value', c: 'customapiresponseproperties', d: 'customapiresponseproperty' },
			objectid_customeraddress: { b: 'objectid_customeraddress', a: '_objectid_value', c: 'customeraddresses', d: 'customeraddress' },
			objectid_datalakefolder: { b: 'objectid_datalakefolder', a: '_objectid_value', c: 'datalakefolders', d: 'datalakefolder' },
			objectid_datalakefolderpermission: { b: 'objectid_datalakefolderpermission', a: '_objectid_value', c: 'datalakefolderpermissions', d: 'datalakefolderpermission' },
			objectid_datalakeworkspace: { b: 'objectid_datalakeworkspace', a: '_objectid_value', c: 'datalakeworkspaces', d: 'datalakeworkspace' },
			objectid_datalakeworkspacepermission: { b: 'objectid_datalakeworkspacepermission', a: '_objectid_value', c: 'datalakeworkspacepermissions', d: 'datalakeworkspacepermission' },
			objectid_devkit_bpfaccount1: { b: 'objectid_devkit_bpfaccount1', a: '_objectid_value', c: 'devkit_bpfaccount1s', d: 'devkit_bpfaccount1' },
			objectid_devkit_bpfaccount3: { b: 'objectid_devkit_bpfaccount3', a: '_objectid_value', c: 'devkit_bpfaccount3s', d: 'devkit_bpfaccount3' },
			objectid_devkit_bpf_location_1: { b: 'objectid_devkit_bpf_location_1', a: '_objectid_value', c: 'devkit_bpf_location_1s', d: 'devkit_bpf_location_1' },
			objectid_devkit_customactivity: { b: 'objectid_devkit_customactivity', a: '_objectid_value', c: 'devkit_customactivities', d: 'devkit_customactivity' },
			objectid_devkit_location: { b: 'objectid_devkit_location', a: '_objectid_value', c: 'devkit_locations', d: 'devkit_location' },
			objectid_devkit_processwebapi1: { b: 'objectid_devkit_processwebapi1', a: '_objectid_value', c: 'devkit_processwebapi1s', d: 'devkit_processwebapi1' },
			objectid_devkit_webapi: { b: 'objectid_devkit_webapi', a: '_objectid_value', c: 'devkit_webapis', d: 'devkit_webapi' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_entityanalyticsconfig: { b: 'objectid_entityanalyticsconfig', a: '_objectid_value', c: 'entityanalyticsconfigs', d: 'entityanalyticsconfig' },
			objectid_entityimageconfig: { b: 'objectid_entityimageconfig', a: '_objectid_value', c: 'entityimageconfigs', d: 'entityimageconfig' },
			objectid_environmentvariabledefinition: { b: 'objectid_environmentvariabledefinition', a: '_objectid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition' },
			objectid_environmentvariablevalue: { b: 'objectid_environmentvariablevalue', a: '_objectid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue' },
			objectid_exportsolutionupload: { b: 'objectid_exportsolutionupload', a: '_objectid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload' },
			objectid_fax: { b: 'objectid_fax', a: '_objectid_value', c: 'faxes', d: 'fax' },
			objectid_feedback: { b: 'objectid_feedback', a: '_objectid_value', c: 'feedback', d: 'feedback' },
			objectid_flowmachine: { b: 'objectid_flowmachine', a: '_objectid_value', c: 'flowmachines', d: 'flowmachine' },
			objectid_flowmachinegroup: { b: 'objectid_flowmachinegroup', a: '_objectid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			objectid_flowsession: { b: 'objectid_flowsession', a: '_objectid_value', c: 'flowsessions', d: 'flowsession' },
			objectid_goal: { b: 'objectid_goal', a: '_objectid_value', c: 'goals', d: 'goal' },
			objectid_holidaywrapper: { b: 'objectid_holidaywrapper', a: '_objectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			objectid_internalcatalogassignment: { b: 'objectid_internalcatalogassignment', a: '_objectid_value', c: 'internalcatalogassignments', d: 'internalcatalogassignment' },
			objectid_kbarticle: { b: 'objectid_kbarticle', a: '_objectid_value', c: 'kbarticles', d: 'kbarticle' },
			objectid_keyvaultreference: { b: 'objectid_keyvaultreference', a: '_objectid_value', c: 'keyvaultreferences', d: 'keyvaultreference' },
			objectid_knowledgearticle: { b: 'objectid_knowledgearticle', a: '_objectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			objectid_knowledgearticleviews: { b: 'objectid_knowledgearticleviews', a: '_objectid_value', c: 'knowledgearticleviews', d: 'knowledgearticleviews' },
			objectid_knowledgebaserecord: { b: 'objectid_knowledgebaserecord', a: '_objectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			objectid_letter: { b: 'objectid_letter', a: '_objectid_value', c: 'letters', d: 'letter' },
			objectid_mailmergetemplate: { b: 'objectid_mailmergetemplate', a: '_objectid_value', c: 'mailmergetemplates', d: 'mailmergetemplate' },
			objectid_managedidentity: { b: 'objectid_managedidentity', a: '_objectid_value', c: 'managedidentities', d: 'managedidentity' },
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
			objectid_organizationdatasyncsubscription: { b: 'objectid_organizationdatasyncsubscription', a: '_objectid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription' },
			objectid_organizationdatasyncsubscriptionentity: { b: 'objectid_organizationdatasyncsubscriptionentity', a: '_objectid_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity' },
			objectid_organizationsetting: { b: 'objectid_organizationsetting', a: '_objectid_value', c: 'organizationsettings', d: 'organizationsetting' },
			objectid_package: { b: 'objectid_package', a: '_objectid_value', c: 'packages', d: 'package' },
			objectid_pdfsetting: { b: 'objectid_pdfsetting', a: '_objectid_value', c: 'pdfsettings', d: 'pdfsetting' },
			objectid_phonecall: { b: 'objectid_phonecall', a: '_objectid_value', c: 'phonecalls', d: 'phonecall' },
			objectid_position: { b: 'objectid_position', a: '_objectid_value', c: 'positions', d: 'position' },
			objectid_processstageparameter: { b: 'objectid_processstageparameter', a: '_objectid_value', c: 'processstageparameters', d: 'processstageparameter' },
			objectid_provisionlanguageforuser: { b: 'objectid_provisionlanguageforuser', a: '_objectid_value', c: 'provisionlanguageforusers', d: 'provisionlanguageforuser' },
			objectid_queue: { b: 'objectid_queue', a: '_objectid_value', c: 'queues', d: 'queue' },
			objectid_queueitem: { b: 'objectid_queueitem', a: '_objectid_value', c: 'queueitems', d: 'queueitem' },
			objectid_recurringappointmentmaster: { b: 'objectid_recurringappointmentmaster', a: '_objectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			objectid_relationshipattribute: { b: 'objectid_relationshipattribute', a: '_objectid_value', c: 'relationshipattributes', d: 'relationshipattribute' },
			objectid_reportcategory: { b: 'objectid_reportcategory', a: '_objectid_value', c: 'reportcategories', d: 'reportcategory' },
			objectid_revokeinheritedaccessrecordstracker: { b: 'objectid_revokeinheritedaccessrecordstracker', a: '_objectid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker' },
			objectid_serviceplan: { b: 'objectid_serviceplan', a: '_objectid_value', c: 'serviceplans', d: 'serviceplan' },
			objectid_settingdefinition: { b: 'objectid_settingdefinition', a: '_objectid_value', c: 'settingdefinitions', d: 'settingdefinition' },
			objectid_sharepointdocumentlocation: { b: 'objectid_sharepointdocumentlocation', a: '_objectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			objectid_sharepointsite: { b: 'objectid_sharepointsite', a: '_objectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			objectid_socialactivity: { b: 'objectid_socialactivity', a: '_objectid_value', c: 'socialactivities', d: 'socialactivity' },
			objectid_socialprofile: { b: 'objectid_socialprofile', a: '_objectid_value', c: 'socialprofiles', d: 'socialprofile' },
			objectid_solutioncomponentattributeconfiguration: { b: 'objectid_solutioncomponentattributeconfiguration', a: '_objectid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration' },
			objectid_solutioncomponentconfiguration: { b: 'objectid_solutioncomponentconfiguration', a: '_objectid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration' },
			objectid_solutioncomponentrelationshipconfiguration: { b: 'objectid_solutioncomponentrelationshipconfiguration', a: '_objectid_value', c: 'solutioncomponentrelationshipconfigurations', d: 'solutioncomponentrelationshipconfiguration' },
			objectid_stagesolutionupload: { b: 'objectid_stagesolutionupload', a: '_objectid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload' },
			objectid_systemuser: { b: 'objectid_systemuser', a: '_objectid_value', c: 'systemusers', d: 'systemuser' },
			objectid_systemuserauthorizationchangetracker: { b: 'objectid_systemuserauthorizationchangetracker', a: '_objectid_value', c: 'systemuserauthorizationchangetrackers', d: 'systemuserauthorizationchangetracker' },
			objectid_task: { b: 'objectid_task', a: '_objectid_value', c: 'tasks', d: 'task' },
			objectid_team: { b: 'objectid_team', a: '_objectid_value', c: 'teams', d: 'team' },
			objectid_teammobileofflineprofilemembership: { b: 'objectid_teammobileofflineprofilemembership', a: '_objectid_value', c: 'teammobileofflineprofilememberships', d: 'teammobileofflineprofilemembership' },
			objectid_territory: { b: 'objectid_territory', a: '_objectid_value', c: 'territories', d: 'territory' },
			objectid_usermobileofflineprofilemembership: { b: 'objectid_usermobileofflineprofilemembership', a: '_objectid_value', c: 'usermobileofflineprofilememberships', d: 'usermobileofflineprofilemembership' },
			objectid_workflowbinary: { b: 'objectid_workflowbinary', a: '_objectid_value', c: 'workflowbinaries', d: 'workflowbinary' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			principalid_systemuser: { b: 'principalid_systemuser', a: '_principalid_value', c: 'systemusers', d: 'systemuser' },
			principalid_team: { b: 'principalid_team', a: '_principalid_value', c: 'teams', d: 'team' },
			PrincipalObjectAttributeAccessId: { a: 'principalobjectattributeaccessid' },
			ReadAccess: { a: 'readaccess' },
			UpdateAccess: { a: 'updateaccess' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in principalobjectattributeaccess) {
			var a = principalobjectattributeaccess[field].a;
			var b = principalobjectattributeaccess[field].b;
			var c = principalobjectattributeaccess[field].c;
			var d = principalobjectattributeaccess[field].d;
			var g = principalobjectattributeaccess[field].g;
			var r = principalobjectattributeaccess[field].r;
			principalobjectattributeaccess[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		principalobjectattributeaccess.Entity = u;
		principalobjectattributeaccess.EntityName = 'principalobjectattributeaccess';
		principalobjectattributeaccess.EntityCollectionName = 'principalobjectattributeaccesses';
		principalobjectattributeaccess['@odata.etag'] = e['@odata.etag'];
		principalobjectattributeaccess.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		principalobjectattributeaccess.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return principalobjectattributeaccess;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PrincipalObjectAttributeAccess = {
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
'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.DuplicateRecordApi = function (e) {
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
			baserecordid_apisettings: { b: 'baserecordid_apisettings', a: '_baserecordid_value', c: 'apisettingscollection', d: 'apisettings' },
			baserecordid_appointment: { b: 'baserecordid_appointment', a: '_baserecordid_value', c: 'appointments', d: 'appointment' },
			channelaccessprofile_duplicatebaserecord: { b: 'channelaccessprofile_duplicatebaserecord', a: '_baserecordid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			baserecordid_connector: { b: 'baserecordid_connector', a: '_baserecordid_value', c: 'connectors', d: 'connector' },
			baserecordid_contact: { b: 'baserecordid_contact', a: '_baserecordid_value', c: 'contacts', d: 'contact' },
			baserecordid_email: { b: 'baserecordid_email', a: '_baserecordid_value', c: 'emails', d: 'email' },
			baserecordid_emailserverprofile: { b: 'baserecordid_emailserverprofile', a: '_baserecordid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			baserecordid_environmentvariabledefinition: { b: 'baserecordid_environmentvariabledefinition', a: '_baserecordid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition' },
			baserecordid_environmentvariablevalue: { b: 'baserecordid_environmentvariablevalue', a: '_baserecordid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue' },
			baserecordid_fax: { b: 'baserecordid_fax', a: '_baserecordid_value', c: 'faxes', d: 'fax' },
			baserecordid_feedback: { b: 'baserecordid_feedback', a: '_baserecordid_value', c: 'feedback', d: 'feedback' },
			baserecordid_goal: { b: 'baserecordid_goal', a: '_baserecordid_value', c: 'goals', d: 'goal' },
			baserecordid_goalrollupquery: { b: 'baserecordid_goalrollupquery', a: '_baserecordid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			baserecordid_kbarticle: { b: 'baserecordid_kbarticle', a: '_baserecordid_value', c: 'kbarticles', d: 'kbarticle' },
			baserecordid_knowledgearticle: { b: 'baserecordid_knowledgearticle', a: '_baserecordid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			baserecordid_knowledgebaserecord: { b: 'baserecordid_knowledgebaserecord', a: '_baserecordid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			baserecordid_letter: { b: 'baserecordid_letter', a: '_baserecordid_value', c: 'letters', d: 'letter' },
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
			baserecordid_msdyn_analysiscomponent: { b: 'baserecordid_msdyn_analysiscomponent', a: '_baserecordid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent' },
			baserecordid_msdyn_analysisjob: { b: 'baserecordid_msdyn_analysisjob', a: '_baserecordid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob' },
			baserecordid_msdyn_analysisresult: { b: 'baserecordid_msdyn_analysisresult', a: '_baserecordid_value', c: 'msdyn_analysisresults', d: 'msdyn_analysisresult' },
			baserecordid_msdyn_analysisresultdetail: { b: 'baserecordid_msdyn_analysisresultdetail', a: '_baserecordid_value', c: 'msdyn_analysisresultdetails', d: 'msdyn_analysisresultdetail' },
			baserecordid_msdyn_dataflow: { b: 'baserecordid_msdyn_dataflow', a: '_baserecordid_value', c: 'msdyn_dataflows', d: 'msdyn_dataflow' },
			baserecordid_msdyn_knowledgearticleimage: { b: 'baserecordid_msdyn_knowledgearticleimage', a: '_baserecordid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage' },
			baserecordid_msdyn_knowledgearticletemplate: { b: 'baserecordid_msdyn_knowledgearticletemplate', a: '_baserecordid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			baserecordid_msdyn_serviceconfiguration: { b: 'baserecordid_msdyn_serviceconfiguration', a: '_baserecordid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration' },
			baserecordid_msdyn_slakpi: { b: 'baserecordid_msdyn_slakpi', a: '_baserecordid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi' },
			baserecordid_msdyn_solutionhealthrule: { b: 'baserecordid_msdyn_solutionhealthrule', a: '_baserecordid_value', c: 'msdyn_solutionhealthrules', d: 'msdyn_solutionhealthrule' },
			baserecordid_msdyn_solutionhealthruleargument: { b: 'baserecordid_msdyn_solutionhealthruleargument', a: '_baserecordid_value', c: 'msdyn_solutionhealthrulearguments', d: 'msdyn_solutionhealthruleargument' },
			baserecordid_msdyn_solutionhealthruleset: { b: 'baserecordid_msdyn_solutionhealthruleset', a: '_baserecordid_value', c: 'msdyn_solutionhealthrulesets', d: 'msdyn_solutionhealthruleset' },
			baserecordid_phonecall: { b: 'baserecordid_phonecall', a: '_baserecordid_value', c: 'phonecalls', d: 'phonecall' },
			baserecordid_publisher: { b: 'baserecordid_publisher', a: '_baserecordid_value', c: 'publishers', d: 'publisher' },
			baserecordid_queue: { b: 'baserecordid_queue', a: '_baserecordid_value', c: 'queues', d: 'queue' },
			baserecordid_recurringappointmentmaster: { b: 'baserecordid_recurringappointmentmaster', a: '_baserecordid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			baserecordid_serviceplan: { b: 'baserecordid_serviceplan', a: '_baserecordid_value', c: 'serviceplans', d: 'serviceplan' },
			baserecordid_sharepointdocumentlocation: { b: 'baserecordid_sharepointdocumentlocation', a: '_baserecordid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			baserecordid_sharepointsite: { b: 'baserecordid_sharepointsite', a: '_baserecordid_value', c: 'sharepointsites', d: 'sharepointsite' },
			baserecordid_socialactivity: { b: 'baserecordid_socialactivity', a: '_baserecordid_value', c: 'socialactivities', d: 'socialactivity' },
			baserecordid_socialprofile: { b: 'baserecordid_socialprofile', a: '_baserecordid_value', c: 'socialprofiles', d: 'socialprofile' },
			baserecordid_solutioncomponentattributeconfiguration: { b: 'baserecordid_solutioncomponentattributeconfiguration', a: '_baserecordid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration' },
			baserecordid_solutioncomponentconfiguration: { b: 'baserecordid_solutioncomponentconfiguration', a: '_baserecordid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration' },
			baserecordid_stagesolutionupload: { b: 'baserecordid_stagesolutionupload', a: '_baserecordid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload' },
			baserecordid_systemuser: { b: 'baserecordid_systemuser', a: '_baserecordid_value', c: 'systemusers', d: 'systemuser' },
			baserecordid_task: { b: 'baserecordid_task', a: '_baserecordid_value', c: 'tasks', d: 'task' },
			baserecordid_team: { b: 'baserecordid_team', a: '_baserecordid_value', c: 'teams', d: 'team' },
			baserecordid_transactioncurrency: { b: 'baserecordid_transactioncurrency', a: '_baserecordid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			DuplicateId: { a: 'duplicateid' },
			duplicaterecordid_account: { b: 'duplicaterecordid_account', a: '_duplicaterecordid_value', c: 'accounts', d: 'account' },
			duplicaterecordid_apisettings: { b: 'duplicaterecordid_apisettings', a: '_duplicaterecordid_value', c: 'apisettingscollection', d: 'apisettings' },
			duplicaterecordid_appointment: { b: 'duplicaterecordid_appointment', a: '_duplicaterecordid_value', c: 'appointments', d: 'appointment' },
			channelaccessprofile_duplicatematchingrecord: { b: 'channelaccessprofile_duplicatematchingrecord', a: '_duplicaterecordid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			duplicaterecordid_connector: { b: 'duplicaterecordid_connector', a: '_duplicaterecordid_value', c: 'connectors', d: 'connector' },
			duplicaterecordid_contact: { b: 'duplicaterecordid_contact', a: '_duplicaterecordid_value', c: 'contacts', d: 'contact' },
			duplicaterecordid_email: { b: 'duplicaterecordid_email', a: '_duplicaterecordid_value', c: 'emails', d: 'email' },
			duplicaterecordid_emailserverprofile: { b: 'duplicaterecordid_emailserverprofile', a: '_duplicaterecordid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			duplicaterecordid_environmentvariabledefinition: { b: 'duplicaterecordid_environmentvariabledefinition', a: '_duplicaterecordid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition' },
			duplicaterecordid_environmentvariablevalue: { b: 'duplicaterecordid_environmentvariablevalue', a: '_duplicaterecordid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue' },
			duplicaterecordid_fax: { b: 'duplicaterecordid_fax', a: '_duplicaterecordid_value', c: 'faxes', d: 'fax' },
			duplicaterecordid_feedback: { b: 'duplicaterecordid_feedback', a: '_duplicaterecordid_value', c: 'feedback', d: 'feedback' },
			duplicaterecordid_goal: { b: 'duplicaterecordid_goal', a: '_duplicaterecordid_value', c: 'goals', d: 'goal' },
			duplicaterecordid_goalrollupquery: { b: 'duplicaterecordid_goalrollupquery', a: '_duplicaterecordid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			duplicaterecordid_kbarticle: { b: 'duplicaterecordid_kbarticle', a: '_duplicaterecordid_value', c: 'kbarticles', d: 'kbarticle' },
			duplicaterecordid_knowledgearticle: { b: 'duplicaterecordid_knowledgearticle', a: '_duplicaterecordid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			duplicaterecordid_knowledgebaserecord: { b: 'duplicaterecordid_knowledgebaserecord', a: '_duplicaterecordid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			duplicaterecordid_letter: { b: 'duplicaterecordid_letter', a: '_duplicaterecordid_value', c: 'letters', d: 'letter' },
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
			duplicaterecordid_msdyn_analysiscomponent: { b: 'duplicaterecordid_msdyn_analysiscomponent', a: '_duplicaterecordid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent' },
			duplicaterecordid_msdyn_analysisjob: { b: 'duplicaterecordid_msdyn_analysisjob', a: '_duplicaterecordid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob' },
			duplicaterecordid_msdyn_analysisresult: { b: 'duplicaterecordid_msdyn_analysisresult', a: '_duplicaterecordid_value', c: 'msdyn_analysisresults', d: 'msdyn_analysisresult' },
			duplicaterecordid_msdyn_analysisresultdetail: { b: 'duplicaterecordid_msdyn_analysisresultdetail', a: '_duplicaterecordid_value', c: 'msdyn_analysisresultdetails', d: 'msdyn_analysisresultdetail' },
			duplicaterecordid_msdyn_dataflow: { b: 'duplicaterecordid_msdyn_dataflow', a: '_duplicaterecordid_value', c: 'msdyn_dataflows', d: 'msdyn_dataflow' },
			duplicaterecordid_msdyn_knowledgearticleimage: { b: 'duplicaterecordid_msdyn_knowledgearticleimage', a: '_duplicaterecordid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage' },
			duplicaterecordid_msdyn_knowledgearticletemplate: { b: 'duplicaterecordid_msdyn_knowledgearticletemplate', a: '_duplicaterecordid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			duplicaterecordid_msdyn_serviceconfiguration: { b: 'duplicaterecordid_msdyn_serviceconfiguration', a: '_duplicaterecordid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration' },
			duplicaterecordid_msdyn_slakpi: { b: 'duplicaterecordid_msdyn_slakpi', a: '_duplicaterecordid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi' },
			duplicaterecordid_msdyn_solutionhealthrule: { b: 'duplicaterecordid_msdyn_solutionhealthrule', a: '_duplicaterecordid_value', c: 'msdyn_solutionhealthrules', d: 'msdyn_solutionhealthrule' },
			duplicaterecordid_msdyn_solutionhealthruleargument: { b: 'duplicaterecordid_msdyn_solutionhealthruleargument', a: '_duplicaterecordid_value', c: 'msdyn_solutionhealthrulearguments', d: 'msdyn_solutionhealthruleargument' },
			duplicaterecordid_msdyn_solutionhealthruleset: { b: 'duplicaterecordid_msdyn_solutionhealthruleset', a: '_duplicaterecordid_value', c: 'msdyn_solutionhealthrulesets', d: 'msdyn_solutionhealthruleset' },
			duplicaterecordid_phonecall: { b: 'duplicaterecordid_phonecall', a: '_duplicaterecordid_value', c: 'phonecalls', d: 'phonecall' },
			duplicaterecordid_publisher: { b: 'duplicaterecordid_publisher', a: '_duplicaterecordid_value', c: 'publishers', d: 'publisher' },
			duplicaterecordid_queue: { b: 'duplicaterecordid_queue', a: '_duplicaterecordid_value', c: 'queues', d: 'queue' },
			duplicaterecordid_recurringappointmentmaster: { b: 'duplicaterecordid_recurringappointmentmaster', a: '_duplicaterecordid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			duplicaterecordid_serviceplan: { b: 'duplicaterecordid_serviceplan', a: '_duplicaterecordid_value', c: 'serviceplans', d: 'serviceplan' },
			duplicaterecordid_sharepointdocumentlocation: { b: 'duplicaterecordid_sharepointdocumentlocation', a: '_duplicaterecordid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			duplicaterecordid_sharepointsite: { b: 'duplicaterecordid_sharepointsite', a: '_duplicaterecordid_value', c: 'sharepointsites', d: 'sharepointsite' },
			duplicaterecordid_socialactivity: { b: 'duplicaterecordid_socialactivity', a: '_duplicaterecordid_value', c: 'socialactivities', d: 'socialactivity' },
			duplicaterecordid_socialprofile: { b: 'duplicaterecordid_socialprofile', a: '_duplicaterecordid_value', c: 'socialprofiles', d: 'socialprofile' },
			duplicaterecordid_solutioncomponentattributeconfiguration: { b: 'duplicaterecordid_solutioncomponentattributeconfiguration', a: '_duplicaterecordid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration' },
			duplicaterecordid_solutioncomponentconfiguration: { b: 'duplicaterecordid_solutioncomponentconfiguration', a: '_duplicaterecordid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration' },
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
})(LuckyStar || (LuckyStar = {}));
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
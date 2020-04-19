'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.ProcessSessionApi = function (e) {
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
		var processsession = {
			ActivityName: { a: 'activityname' },
			CanceledBy: { b: 'canceledby', a: '_canceledby_value', c: 'systemusers', d: 'systemuser', r: true },
			CanceledOn_UtcDateAndTime: { a: 'canceledon' },
			Comments: { a: 'comments' },
			CompletedBy: { b: 'completedby', a: '_completedby_value', c: 'systemusers', d: 'systemuser', r: true },
			CompletedOn_UtcDateAndTime: { a: 'completedon' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ErrorCode: { a: 'errorcode' },
			ExecutedBy: { b: 'executedby', a: '_executedby_value', c: 'systemusers', d: 'systemuser' },
			ExecutedOn_UtcDateAndTime: { a: 'executedon', r: true },
			InputArguments: { a: 'inputarguments' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NextLinkedSessionId: { b: 'nextlinkedsessionid', a: '_nextlinkedsessionid_value', c: 'processsessions', d: 'processsession' },
			OriginatingSessionId: { b: 'originatingsessionid', a: '_originatingsessionid_value', c: 'processsessions', d: 'processsession' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PreviousLinkedSessionId: { b: 'previouslinkedsessionid', a: '_previouslinkedsessionid_value', c: 'processsessions', d: 'processsession' },
			ProcessId: { b: 'processid', a: '_processid_value', c: 'workflows', d: 'workflow' },
			ProcessSessionId: { a: 'processsessionid' },
			ProcessStageName: { a: 'processstagename' },
			ProcessState: { a: 'processstate' },
			ProtectionKey: { a: 'protectionkey', r: true },
			regardingobjectid_account: { b: 'regardingobjectid_account', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_annotation: { b: 'regardingobjectid_annotation', a: '_regardingobjectid_value', c: 'annotations', d: 'annotation' },
			regardingobjectid_apisettings: { b: 'regardingobjectid_apisettings', a: '_regardingobjectid_value', c: 'apisettingscollection', d: 'apisettings' },
			regardingobjectid_appointment: { b: 'regardingobjectid_appointment', a: '_regardingobjectid_value', c: 'appointments', d: 'appointment' },
			regardingobjectid_businessunit: { b: 'regardingobjectid_businessunit', a: '_regardingobjectid_value', c: 'businessunits', d: 'businessunit' },
			regardingobjectid_businessunitnewsarticle: { b: 'regardingobjectid_businessunitnewsarticle', a: '_regardingobjectid_value', c: 'businessunitnewsarticles', d: 'businessunitnewsarticle' },
			channelaccessprofile_processsession: { b: 'channelaccessprofile_processsession', a: '_regardingobjectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			profileid: { b: 'profileid', a: '_regardingobjectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			regardingobjectid_connection: { b: 'regardingobjectid_connection', a: '_regardingobjectid_value', c: 'connections', d: 'connection' },
			regardingobjectid_connectionrole: { b: 'regardingobjectid_connectionrole', a: '_regardingobjectid_value', c: 'connectionroles', d: 'connectionrole' },
			regardingobjectid_connector: { b: 'regardingobjectid_connector', a: '_regardingobjectid_value', c: 'connectors', d: 'connector' },
			regardingobjectid_contact: { b: 'regardingobjectid_contact', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_convertrule: { b: 'regardingobjectid_convertrule', a: '_regardingobjectid_value', c: 'convertrules', d: 'convertrule' },
			regardingobjectid_customeraddress: { b: 'regardingobjectid_customeraddress', a: '_regardingobjectid_value', c: 'customeraddresses', d: 'customeraddress' },
			regardingobjectid_customerrelationship: { b: 'regardingobjectid_customerrelationship', a: '_regardingobjectid_value', c: 'customerrelationships', d: 'customerrelationship' },
			regardingobjectid_devkit_customactivity: { b: 'regardingobjectid_devkit_customactivity', a: '_regardingobjectid_value', c: 'devkit_customactivities', d: 'devkit_customactivity' },
			regardingobjectid_devkit_processwebapi1: { b: 'regardingobjectid_devkit_processwebapi1', a: '_regardingobjectid_value', c: 'devkit_processwebapi1s', d: 'devkit_processwebapi1' },
			regardingobjectid_devkit_webapi: { b: 'regardingobjectid_devkit_webapi', a: '_regardingobjectid_value', c: 'devkit_webapis', d: 'devkit_webapi' },
			regardingobjectid_email: { b: 'regardingobjectid_email', a: '_regardingobjectid_value', c: 'emails', d: 'email' },
			regardingobjectid_environmentvariabledefinition: { b: 'regardingobjectid_environmentvariabledefinition', a: '_regardingobjectid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition' },
			regardingobjectid_environmentvariablevalue: { b: 'regardingobjectid_environmentvariablevalue', a: '_regardingobjectid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue' },
			regardingobjectid_expiredprocess: { b: 'regardingobjectid_expiredprocess', a: '_regardingobjectid_value', c: 'expiredprocesses', d: 'expiredprocess' },
			externalparty_processsession: { b: 'externalparty_processsession', a: '_regardingobjectid_value', c: 'externalparties', d: 'externalparty' },
			externalpartyitem_processsession: { b: 'externalpartyitem_processsession', a: '_regardingobjectid_value', c: 'externalpartyitems', d: 'externalpartyitem' },
			regardingobjectid_fax: { b: 'regardingobjectid_fax', a: '_regardingobjectid_value', c: 'faxes', d: 'fax' },
			regardingobjectid_goal: { b: 'regardingobjectid_goal', a: '_regardingobjectid_value', c: 'goals', d: 'goal' },
			regardingobjectid_goalrollupquery: { b: 'regardingobjectid_goalrollupquery', a: '_regardingobjectid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			regardingobjectid_holidaywrapper: { b: 'regardingobjectid_holidaywrapper', a: '_regardingobjectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			regardingobjectid_kbarticle: { b: 'regardingobjectid_kbarticle', a: '_regardingobjectid_value', c: 'kbarticles', d: 'kbarticle' },
			regardingobjectid_kbarticlecomment: { b: 'regardingobjectid_kbarticlecomment', a: '_regardingobjectid_value', c: 'kbarticlecomments', d: 'kbarticlecomment' },
			regardingobjectid_kbarticletemplate: { b: 'regardingobjectid_kbarticletemplate', a: '_regardingobjectid_value', c: 'kbarticletemplates', d: 'kbarticletemplate' },
			regardingobjectid_knowledgearticle: { b: 'regardingobjectid_knowledgearticle', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord: { b: 'regardingobjectid_knowledgebaserecord', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_letter: { b: 'regardingobjectid_letter', a: '_regardingobjectid_value', c: 'letters', d: 'letter' },
			regardingobjectid_mailbox: { b: 'regardingobjectid_mailbox', a: '_regardingobjectid_value', c: 'mailboxes', d: 'mailbox' },
			regardingobjectid_mailmergetemplate: { b: 'regardingobjectid_mailmergetemplate', a: '_regardingobjectid_value', c: 'mailmergetemplates', d: 'mailmergetemplate' },
			regardingobjectid_metric: { b: 'regardingobjectid_metric', a: '_regardingobjectid_value', c: 'metrics', d: 'metric' },
			regardingobjectid_msdyn_aibdataset: { b: 'regardingobjectid_msdyn_aibdataset', a: '_regardingobjectid_value', c: 'msdyn_aibdatasets', d: 'msdyn_aibdataset' },
			regardingobjectid_msdyn_aibdatasetfile: { b: 'regardingobjectid_msdyn_aibdatasetfile', a: '_regardingobjectid_value', c: 'msdyn_aibdatasetfiles', d: 'msdyn_aibdatasetfile' },
			regardingobjectid_msdyn_aibdatasetrecord: { b: 'regardingobjectid_msdyn_aibdatasetrecord', a: '_regardingobjectid_value', c: 'msdyn_aibdatasetrecords', d: 'msdyn_aibdatasetrecord' },
			regardingobjectid_msdyn_aibdatasetscontainer: { b: 'regardingobjectid_msdyn_aibdatasetscontainer', a: '_regardingobjectid_value', c: 'msdyn_aibdatasetscontainers', d: 'msdyn_aibdatasetscontainer' },
			regardingobjectid_msdyn_aibfile: { b: 'regardingobjectid_msdyn_aibfile', a: '_regardingobjectid_value', c: 'msdyn_aibfiles', d: 'msdyn_aibfile' },
			regardingobjectid_msdyn_aibfileattacheddata: { b: 'regardingobjectid_msdyn_aibfileattacheddata', a: '_regardingobjectid_value', c: 'msdyn_aibfileattacheddatas', d: 'msdyn_aibfileattacheddata' },
			regardingobjectid_msdyn_aiconfiguration: { b: 'regardingobjectid_msdyn_aiconfiguration', a: '_regardingobjectid_value', c: 'msdyn_aiconfigurations', d: 'msdyn_aiconfiguration' },
			regardingobjectid_msdyn_aifptrainingdocument: { b: 'regardingobjectid_msdyn_aifptrainingdocument', a: '_regardingobjectid_value', c: 'msdyn_aifptrainingdocuments', d: 'msdyn_aifptrainingdocument' },
			regardingobjectid_msdyn_aimodel: { b: 'regardingobjectid_msdyn_aimodel', a: '_regardingobjectid_value', c: 'msdyn_aimodels', d: 'msdyn_aimodel' },
			regardingobjectid_msdyn_aiodimage: { b: 'regardingobjectid_msdyn_aiodimage', a: '_regardingobjectid_value', c: 'msdyn_aiodimages', d: 'msdyn_aiodimage' },
			regardingobjectid_msdyn_aiodlabel: { b: 'regardingobjectid_msdyn_aiodlabel', a: '_regardingobjectid_value', c: 'msdyn_aiodlabels', d: 'msdyn_aiodlabel' },
			regardingobjectid_msdyn_aiodtrainingboundingbox: { b: 'regardingobjectid_msdyn_aiodtrainingboundingbox', a: '_regardingobjectid_value', c: 'msdyn_aiodtrainingboundingboxes', d: 'msdyn_aiodtrainingboundingbox' },
			regardingobjectid_msdyn_aiodtrainingimage: { b: 'regardingobjectid_msdyn_aiodtrainingimage', a: '_regardingobjectid_value', c: 'msdyn_aiodtrainingimages', d: 'msdyn_aiodtrainingimage' },
			regardingobjectid_msdyn_aitemplate: { b: 'regardingobjectid_msdyn_aitemplate', a: '_regardingobjectid_value', c: 'msdyn_aitemplates', d: 'msdyn_aitemplate' },
			regardingobjectid_msdyn_analysiscomponent: { b: 'regardingobjectid_msdyn_analysiscomponent', a: '_regardingobjectid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent' },
			regardingobjectid_msdyn_analysisjob: { b: 'regardingobjectid_msdyn_analysisjob', a: '_regardingobjectid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob' },
			regardingobjectid_msdyn_analysisresult: { b: 'regardingobjectid_msdyn_analysisresult', a: '_regardingobjectid_value', c: 'msdyn_analysisresults', d: 'msdyn_analysisresult' },
			regardingobjectid_msdyn_analysisresultdetail: { b: 'regardingobjectid_msdyn_analysisresultdetail', a: '_regardingobjectid_value', c: 'msdyn_analysisresultdetails', d: 'msdyn_analysisresultdetail' },
			regardingobjectid_msdyn_dataflow: { b: 'regardingobjectid_msdyn_dataflow', a: '_regardingobjectid_value', c: 'msdyn_dataflows', d: 'msdyn_dataflow' },
			regardingobjectid_msdyn_helppage: { b: 'regardingobjectid_msdyn_helppage', a: '_regardingobjectid_value', c: 'msdyn_helppages', d: 'msdyn_helppage' },
			regardingobjectid_msdyn_knowledgearticleimage: { b: 'regardingobjectid_msdyn_knowledgearticleimage', a: '_regardingobjectid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage' },
			regardingobjectid_msdyn_knowledgearticletemplate: { b: 'regardingobjectid_msdyn_knowledgearticletemplate', a: '_regardingobjectid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			regardingobjectid_msdyn_serviceconfiguration: { b: 'regardingobjectid_msdyn_serviceconfiguration', a: '_regardingobjectid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration' },
			regardingobjectid_msdyn_slakpi: { b: 'regardingobjectid_msdyn_slakpi', a: '_regardingobjectid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi' },
			regardingobjectid_msdyn_solutionhealthrule: { b: 'regardingobjectid_msdyn_solutionhealthrule', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrules', d: 'msdyn_solutionhealthrule' },
			regardingobjectid_msdyn_solutionhealthruleargument: { b: 'regardingobjectid_msdyn_solutionhealthruleargument', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrulearguments', d: 'msdyn_solutionhealthruleargument' },
			regardingobjectid_msdyn_solutionhealthruleset: { b: 'regardingobjectid_msdyn_solutionhealthruleset', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrulesets', d: 'msdyn_solutionhealthruleset' },
			regardingobjectid_newprocess: { b: 'regardingobjectid_newprocess', a: '_regardingobjectid_value', c: 'newprocesses', d: 'newprocess' },
			regardingobjectid_phonecall: { b: 'regardingobjectid_phonecall', a: '_regardingobjectid_value', c: 'phonecalls', d: 'phonecall' },
			regardingobjectid_position: { b: 'regardingobjectid_position', a: '_regardingobjectid_value', c: 'positions', d: 'position' },
			regardingobjectid_processstageparameter: { b: 'regardingobjectid_processstageparameter', a: '_regardingobjectid_value', c: 'processstageparameters', d: 'processstageparameter' },
			regardingobjectid_queue: { b: 'regardingobjectid_queue', a: '_regardingobjectid_value', c: 'queues', d: 'queue' },
			regardingobjectid_queueitem: { b: 'regardingobjectid_queueitem', a: '_regardingobjectid_value', c: 'queueitems', d: 'queueitem' },
			regardingobjectid_recurringappointmentmaster: { b: 'regardingobjectid_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			regardingobjectid_relationshiprole: { b: 'regardingobjectid_relationshiprole', a: '_regardingobjectid_value', c: 'relationshiproles', d: 'relationshiprole' },
			regardingobjectid_report: { b: 'regardingobjectid_report', a: '_regardingobjectid_value', c: 'reports', d: 'report' },
			regardingobjectid_rollupfield: { b: 'regardingobjectid_rollupfield', a: '_regardingobjectid_value', c: 'rollupfields', d: 'rollupfield' },
			regardingobjectid_routingrule: { b: 'regardingobjectid_routingrule', a: '_regardingobjectid_value', c: 'routingrules', d: 'routingrule' },
			regardingobjectid_routingruleitem: { b: 'regardingobjectid_routingruleitem', a: '_regardingobjectid_value', c: 'routingruleitems', d: 'routingruleitem' },
			regardingobjectid_serviceplan: { b: 'regardingobjectid_serviceplan', a: '_regardingobjectid_value', c: 'serviceplans', d: 'serviceplan' },
			regardingobjectid_sharepointdocumentlocation: { b: 'regardingobjectid_sharepointdocumentlocation', a: '_regardingobjectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			regardingobjectid_sharepointsite: { b: 'regardingobjectid_sharepointsite', a: '_regardingobjectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			regardingobjectid_sla: { b: 'regardingobjectid_sla', a: '_regardingobjectid_value', c: 'slas', d: 'sla' },
			regardingobjectid_socialactivity: { b: 'regardingobjectid_socialactivity', a: '_regardingobjectid_value', c: 'socialactivities', d: 'socialactivity' },
			regardingobjectid_socialprofile: { b: 'regardingobjectid_socialprofile', a: '_regardingobjectid_value', c: 'socialprofiles', d: 'socialprofile' },
			regardingobjectid_solutioncomponentattributeconfiguration: { b: 'regardingobjectid_solutioncomponentattributeconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration' },
			regardingobjectid_solutioncomponentconfiguration: { b: 'regardingobjectid_solutioncomponentconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration' },
			regardingobjectid_stagesolutionupload: { b: 'regardingobjectid_stagesolutionupload', a: '_regardingobjectid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload' },
			regardingobjectid_subject: { b: 'regardingobjectid_subject', a: '_regardingobjectid_value', c: 'subjects', d: 'subject' },
			regardingobjectid_systemuser: { b: 'regardingobjectid_systemuser', a: '_regardingobjectid_value', c: 'systemusers', d: 'systemuser' },
			regardingobjectid_task: { b: 'regardingobjectid_task', a: '_regardingobjectid_value', c: 'tasks', d: 'task' },
			regardingobjectid_team: { b: 'regardingobjectid_team', a: '_regardingobjectid_value', c: 'teams', d: 'team' },
			regardingobjectid_template: { b: 'regardingobjectid_template', a: '_regardingobjectid_value', c: 'templates', d: 'template' },
			regardingobjectid_territory: { b: 'regardingobjectid_territory', a: '_regardingobjectid_value', c: 'territories', d: 'territory' },
			regardingobjectid_theme: { b: 'regardingobjectid_theme', a: '_regardingobjectid_value', c: 'themes', d: 'theme' },
			regardingobjectid_transactioncurrency: { b: 'regardingobjectid_transactioncurrency', a: '_regardingobjectid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			regardingobjectid_translationprocess: { b: 'regardingobjectid_translationprocess', a: '_regardingobjectid_value', c: 'translationprocesses', d: 'translationprocess' },
			regardingobjectid_usermapping: { b: 'regardingobjectid_usermapping', a: '_regardingobjectid_value', c: 'usermappings', d: 'usermapping' },
			regardingobjectid_workflowbinary: { b: 'regardingobjectid_workflowbinary', a: '_regardingobjectid_value', c: 'workflowbinaries', d: 'workflowbinary' },
			RegardingObjectIdYomiName: { a: 'regardingobjectidyominame' },
			StartedBy: { b: 'startedby', a: '_startedby_value', c: 'systemusers', d: 'systemuser', r: true },
			StartedOn_UtcDateAndTime: { a: 'startedon' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			StepName: { a: 'stepname' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in processsession) {
			var a = processsession[field].a;
			var b = processsession[field].b;
			var c = processsession[field].c;
			var d = processsession[field].d;
			var g = processsession[field].g;
			var r = processsession[field].r;
			processsession[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		processsession.Entity = u;
		processsession.EntityName = 'processsession';
		processsession.EntityCollectionName = 'processsessions';
		processsession['@odata.etag'] = e['@odata.etag'];
		processsession.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		processsession.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return processsession;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ProcessSession = {
		StateCode : {
			Incomplete: 0,
			Complete: 1
		},
		StatusCode : {
			Not_Started: 1,
			In_Progress: 2,
			Paused: 3,
			Completed: 4,
			Canceled: 5,
			Failed: 6
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
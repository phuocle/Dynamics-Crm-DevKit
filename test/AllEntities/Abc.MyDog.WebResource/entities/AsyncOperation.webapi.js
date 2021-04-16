'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.AsyncOperationApi = function (e) {
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
		var asyncoperation = {
			AsyncOperationId: { a: 'asyncoperationid' },
			BreadcrumbId: { a: 'breadcrumbid' },
			CallerOrigin: { a: 'callerorigin' },
			CompletedOn_UtcDateAndTime: { a: 'completedon', r: true },
			CorrelationId: { a: 'correlationid' },
			CorrelationUpdatedTime_UtcDateAndTime: { a: 'correlationupdatedtime' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Data: { a: 'data' },
			DataBlobId_Name: { a: 'datablobid_name', r: true },
			DependencyToken: { a: 'dependencytoken' },
			Depth: { a: 'depth' },
			ErrorCode: { a: 'errorcode', r: true },
			ExecutionTimeSpan: { a: 'executiontimespan', r: true },
			ExpanderStartTime_UtcDateAndTime: { a: 'expanderstarttime' },
			FriendlyMessage: { a: 'friendlymessage' },
			HostId: { a: 'hostid' },
			IsWaitingForEvent: { a: 'iswaitingforevent', r: true },
			Message: { a: 'message', r: true },
			MessageName: { a: 'messagename' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OperationType: { a: 'operationtype' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningExtensionId: { b: 'owningextensionid', a: '_owningextensionid_value', c: 'sdkmessageprocessingsteps', d: 'sdkmessageprocessingstep' },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentPluginExecutionId: { a: 'parentpluginexecutionid' },
			PostponeUntil_UtcDateAndTime: { a: 'postponeuntil' },
			RecurrencePattern: { a: 'recurrencepattern' },
			RecurrenceStartTime_UtcDateOnly: { a: 'recurrencestarttime' },
			regardingobjectid_account: { b: 'regardingobjectid_account', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_activityfileattachment: { b: 'regardingobjectid_activityfileattachment', a: '_regardingobjectid_value', c: 'activityfileattachments', d: 'activityfileattachment' },
			regardingobjectid_activitymimeattachment: { b: 'regardingobjectid_activitymimeattachment', a: '_regardingobjectid_value', c: 'activitymimeattachments', d: 'activitymimeattachment' },
			regardingobjectid_activitypointer: { b: 'regardingobjectid_activitypointer', a: '_regardingobjectid_value', c: 'activitypointers', d: 'activitypointer' },
			regardingobjectid_annotation: { b: 'regardingobjectid_annotation', a: '_regardingobjectid_value', c: 'annotations', d: 'annotation' },
			regardingobjectid_annualfiscalcalendar: { b: 'regardingobjectid_annualfiscalcalendar', a: '_regardingobjectid_value', c: 'annualfiscalcalendars', d: 'annualfiscalcalendar' },
			regardingobjectid_apisettings: { b: 'regardingobjectid_apisettings', a: '_regardingobjectid_value', c: 'apisettingscollection', d: 'apisettings' },
			regardingobjectid_appelement: { b: 'regardingobjectid_appelement', a: '_regardingobjectid_value', c: 'appelements', d: 'appelement' },
			regardingobjectid_applicationuser: { b: 'regardingobjectid_applicationuser', a: '_regardingobjectid_value', c: 'applicationusers', d: 'applicationuser' },
			regardingobjectid_appmodulecomponentedge: { b: 'regardingobjectid_appmodulecomponentedge', a: '_regardingobjectid_value', c: 'appmodulecomponentedges', d: 'appmodulecomponentedge' },
			regardingobjectid_appmodulecomponentnode: { b: 'regardingobjectid_appmodulecomponentnode', a: '_regardingobjectid_value', c: 'appmodulecomponentnodes', d: 'appmodulecomponentnode' },
			regardingobjectid_appnotification: { b: 'regardingobjectid_appnotification', a: '_regardingobjectid_value', c: 'appnotifications', d: 'appnotification' },
			regardingobjectid_appointment: { b: 'regardingobjectid_appointment', a: '_regardingobjectid_value', c: 'appointments', d: 'appointment' },
			regardingobjectid_appsetting: { b: 'regardingobjectid_appsetting', a: '_regardingobjectid_value', c: 'appsettings', d: 'appsetting' },
			regardingobjectid_appusersetting: { b: 'regardingobjectid_appusersetting', a: '_regardingobjectid_value', c: 'appusersettings', d: 'appusersetting' },
			regardingobjectid_attributeimageconfig: { b: 'regardingobjectid_attributeimageconfig', a: '_regardingobjectid_value', c: 'attributeimageconfigs', d: 'attributeimageconfig' },
			regardingobjectid_attributemap: { b: 'regardingobjectid_attributemap', a: '_regardingobjectid_value', c: 'attributemaps', d: 'attributemap' },
			regardingobjectid_bot: { b: 'regardingobjectid_bot', a: '_regardingobjectid_value', c: 'bots', d: 'bot' },
			regardingobjectid_botcomponent: { b: 'regardingobjectid_botcomponent', a: '_regardingobjectid_value', c: 'botcomponents', d: 'botcomponent' },
			regardingobjectid_businessunit: { b: 'regardingobjectid_businessunit', a: '_regardingobjectid_value', c: 'businessunits', d: 'businessunit' },
			regardingobjectid_businessunitnewsarticle: { b: 'regardingobjectid_businessunitnewsarticle', a: '_regardingobjectid_value', c: 'businessunitnewsarticles', d: 'businessunitnewsarticle' },
			regardingobjectid_calendar: { b: 'regardingobjectid_calendar', a: '_regardingobjectid_value', c: 'calendars', d: 'calendar' },
			regardingobjectid_canvasappextendedmetadata: { b: 'regardingobjectid_canvasappextendedmetadata', a: '_regardingobjectid_value', c: 'canvasappextendedmetadatas', d: 'canvasappextendedmetadata' },
			regardingobjectid_cascadegrantrevokeaccessrecordstracker: { b: 'regardingobjectid_cascadegrantrevokeaccessrecordstracker', a: '_regardingobjectid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker' },
			regardingobjectid_cascadegrantrevokeaccessversiontracker: { b: 'regardingobjectid_cascadegrantrevokeaccessversiontracker', a: '_regardingobjectid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker' },
			regardingobjectid_catalog: { b: 'regardingobjectid_catalog', a: '_regardingobjectid_value', c: 'catalogs', d: 'catalog' },
			regardingobjectid_catalogassignment: { b: 'regardingobjectid_catalogassignment', a: '_regardingobjectid_value', c: 'catalogassignments', d: 'catalogassignment' },
			channelaccessprofile_asyncoperations: { b: 'channelaccessprofile_asyncoperations', a: '_regardingobjectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_regardingobjectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			regardingobjectid_connection: { b: 'regardingobjectid_connection', a: '_regardingobjectid_value', c: 'connections', d: 'connection' },
			regardingobjectid_connectionreference: { b: 'regardingobjectid_connectionreference', a: '_regardingobjectid_value', c: 'connectionreferences', d: 'connectionreference' },
			regardingobjectid_connectionrole: { b: 'regardingobjectid_connectionrole', a: '_regardingobjectid_value', c: 'connectionroles', d: 'connectionrole' },
			regardingobjectid_connector: { b: 'regardingobjectid_connector', a: '_regardingobjectid_value', c: 'connectors', d: 'connector' },
			regardingobjectid_contact: { b: 'regardingobjectid_contact', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_conversationtranscript: { b: 'regardingobjectid_conversationtranscript', a: '_regardingobjectid_value', c: 'conversationtranscripts', d: 'conversationtranscript' },
			regardingobjectid_convertrule: { b: 'regardingobjectid_convertrule', a: '_regardingobjectid_value', c: 'convertrules', d: 'convertrule' },
			regardingobjectid_customapi: { b: 'regardingobjectid_customapi', a: '_regardingobjectid_value', c: 'customapis', d: 'customapi' },
			regardingobjectid_customapirequestparameter: { b: 'regardingobjectid_customapirequestparameter', a: '_regardingobjectid_value', c: 'customapirequestparameters', d: 'customapirequestparameter' },
			regardingobjectid_customapiresponseproperty: { b: 'regardingobjectid_customapiresponseproperty', a: '_regardingobjectid_value', c: 'customapiresponseproperties', d: 'customapiresponseproperty' },
			regardingobjectid_customeraddress: { b: 'regardingobjectid_customeraddress', a: '_regardingobjectid_value', c: 'customeraddresses', d: 'customeraddress' },
			regardingobjectid_customerrelationship: { b: 'regardingobjectid_customerrelationship', a: '_regardingobjectid_value', c: 'customerrelationships', d: 'customerrelationship' },
			regardingobjectid_datalakefolder: { b: 'regardingobjectid_datalakefolder', a: '_regardingobjectid_value', c: 'datalakefolders', d: 'datalakefolder' },
			regardingobjectid_datalakefolderpermission: { b: 'regardingobjectid_datalakefolderpermission', a: '_regardingobjectid_value', c: 'datalakefolderpermissions', d: 'datalakefolderpermission' },
			regardingobjectid_datalakeworkspace: { b: 'regardingobjectid_datalakeworkspace', a: '_regardingobjectid_value', c: 'datalakeworkspaces', d: 'datalakeworkspace' },
			regardingobjectid_datalakeworkspacepermission: { b: 'regardingobjectid_datalakeworkspacepermission', a: '_regardingobjectid_value', c: 'datalakeworkspacepermissions', d: 'datalakeworkspacepermission' },
			regardingobjectid_devkit_bpfaccount1: { b: 'regardingobjectid_devkit_bpfaccount1', a: '_regardingobjectid_value', c: 'devkit_bpfaccount1s', d: 'devkit_bpfaccount1' },
			regardingobjectid_devkit_bpfaccount3: { b: 'regardingobjectid_devkit_bpfaccount3', a: '_regardingobjectid_value', c: 'devkit_bpfaccount3s', d: 'devkit_bpfaccount3' },
			regardingobjectid_devkit_bpf_location_1: { b: 'regardingobjectid_devkit_bpf_location_1', a: '_regardingobjectid_value', c: 'devkit_bpf_location_1s', d: 'devkit_bpf_location_1' },
			regardingobjectid_devkit_customactivity: { b: 'regardingobjectid_devkit_customactivity', a: '_regardingobjectid_value', c: 'devkit_customactivities', d: 'devkit_customactivity' },
			regardingobjectid_devkit_location: { b: 'regardingobjectid_devkit_location', a: '_regardingobjectid_value', c: 'devkit_locations', d: 'devkit_location' },
			regardingobjectid_devkit_processwebapi1: { b: 'regardingobjectid_devkit_processwebapi1', a: '_regardingobjectid_value', c: 'devkit_processwebapi1s', d: 'devkit_processwebapi1' },
			regardingobjectid_devkit_webapi: { b: 'regardingobjectid_devkit_webapi', a: '_regardingobjectid_value', c: 'devkit_webapis', d: 'devkit_webapi' },
			regardingobjectid_displaystring: { b: 'regardingobjectid_displaystring', a: '_regardingobjectid_value', c: 'displaystrings', d: 'displaystring' },
			regardingobjectid_email: { b: 'regardingobjectid_email', a: '_regardingobjectid_value', c: 'emails', d: 'email' },
			regardingobjectid_emailserverprofile: { b: 'regardingobjectid_emailserverprofile', a: '_regardingobjectid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			regardingobjectid_entityanalyticsconfig: { b: 'regardingobjectid_entityanalyticsconfig', a: '_regardingobjectid_value', c: 'entityanalyticsconfigs', d: 'entityanalyticsconfig' },
			regardingobjectid_entityimageconfig: { b: 'regardingobjectid_entityimageconfig', a: '_regardingobjectid_value', c: 'entityimageconfigs', d: 'entityimageconfig' },
			regardingobjectid_entitymap: { b: 'regardingobjectid_entitymap', a: '_regardingobjectid_value', c: 'entitymaps', d: 'entitymap' },
			regardingobjectid_environmentvariabledefinition: { b: 'regardingobjectid_environmentvariabledefinition', a: '_regardingobjectid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition' },
			regardingobjectid_environmentvariablevalue: { b: 'regardingobjectid_environmentvariablevalue', a: '_regardingobjectid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue' },
			regardingobjectid_exportsolutionupload: { b: 'regardingobjectid_exportsolutionupload', a: '_regardingobjectid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload' },
			externalparty_asyncoperations: { b: 'externalparty_asyncoperations', a: '_regardingobjectid_value', c: 'externalparties', d: 'externalparty' },
			externalpartyitem_asyncoperations: { b: 'externalpartyitem_asyncoperations', a: '_regardingobjectid_value', c: 'externalpartyitems', d: 'externalpartyitem' },
			regardingobjectid_fax: { b: 'regardingobjectid_fax', a: '_regardingobjectid_value', c: 'faxes', d: 'fax' },
			regardingobjectid_fixedmonthlyfiscalcalendar: { b: 'regardingobjectid_fixedmonthlyfiscalcalendar', a: '_regardingobjectid_value', c: 'fixedmonthlyfiscalcalendars', d: 'fixedmonthlyfiscalcalendar' },
			regardingobjectid_flowmachine: { b: 'regardingobjectid_flowmachine', a: '_regardingobjectid_value', c: 'flowmachines', d: 'flowmachine' },
			regardingobjectid_flowmachinegroup: { b: 'regardingobjectid_flowmachinegroup', a: '_regardingobjectid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			regardingobjectid_flowsession: { b: 'regardingobjectid_flowsession', a: '_regardingobjectid_value', c: 'flowsessions', d: 'flowsession' },
			regardingobjectid_goal: { b: 'regardingobjectid_goal', a: '_regardingobjectid_value', c: 'goals', d: 'goal' },
			regardingobjectid_goalrollupquery: { b: 'regardingobjectid_goalrollupquery', a: '_regardingobjectid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			regardingobjectid_holidaywrapper: { b: 'regardingobjectid_holidaywrapper', a: '_regardingobjectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			regardingobjectid_import: { b: 'regardingobjectid_import', a: '_regardingobjectid_value', c: 'imports', d: 'import' },
			regardingobjectid_importdata: { b: 'regardingobjectid_importdata', a: '_regardingobjectid_value', c: 'importdatas', d: 'importdata' },
			regardingobjectid_importfile: { b: 'regardingobjectid_importfile', a: '_regardingobjectid_value', c: 'importfiles', d: 'importfile' },
			regardingobjectid_importlog: { b: 'regardingobjectid_importlog', a: '_regardingobjectid_value', c: 'importlogs', d: 'importlog' },
			regardingobjectid_importmap: { b: 'regardingobjectid_importmap', a: '_regardingobjectid_value', c: 'importmaps', d: 'importmap' },
			regardingobjectid_new_interactionforemail: { b: 'regardingobjectid_new_interactionforemail', a: '_regardingobjectid_value', c: 'interactionforemails', d: 'interactionforemail' },
			regardingobjectid_internalcatalogassignment: { b: 'regardingobjectid_internalcatalogassignment', a: '_regardingobjectid_value', c: 'internalcatalogassignments', d: 'internalcatalogassignment' },
			regardingobjectid_isvconfig: { b: 'regardingobjectid_isvconfig', a: '_regardingobjectid_value', c: 'isvconfigs', d: 'isvconfig' },
			regardingobjectid_kbarticle: { b: 'regardingobjectid_kbarticle', a: '_regardingobjectid_value', c: 'kbarticles', d: 'kbarticle' },
			regardingobjectid_kbarticlecomment: { b: 'regardingobjectid_kbarticlecomment', a: '_regardingobjectid_value', c: 'kbarticlecomments', d: 'kbarticlecomment' },
			regardingobjectid_kbarticletemplate: { b: 'regardingobjectid_kbarticletemplate', a: '_regardingobjectid_value', c: 'kbarticletemplates', d: 'kbarticletemplate' },
			regardingobjectid_keyvaultreference: { b: 'regardingobjectid_keyvaultreference', a: '_regardingobjectid_value', c: 'keyvaultreferences', d: 'keyvaultreference' },
			regardingobjectid_knowledgearticle: { b: 'regardingobjectid_knowledgearticle', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord: { b: 'regardingobjectid_knowledgebaserecord', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_letter: { b: 'regardingobjectid_letter', a: '_regardingobjectid_value', c: 'letters', d: 'letter' },
			regardingobjectid_mailbox: { b: 'regardingobjectid_mailbox', a: '_regardingobjectid_value', c: 'mailboxes', d: 'mailbox' },
			regardingobjectid_mailmergetemplate: { b: 'regardingobjectid_mailmergetemplate', a: '_regardingobjectid_value', c: 'mailmergetemplates', d: 'mailmergetemplate' },
			regardingobjectid_managedidentity: { b: 'regardingobjectid_managedidentity', a: '_regardingobjectid_value', c: 'managedidentities', d: 'managedidentity' },
			regardingobjectid_metric: { b: 'regardingobjectid_metric', a: '_regardingobjectid_value', c: 'metrics', d: 'metric' },
			regardingobjectid_monthlyfiscalcalendar: { b: 'regardingobjectid_monthlyfiscalcalendar', a: '_regardingobjectid_value', c: 'monthlyfiscalcalendars', d: 'monthlyfiscalcalendar' },
			regardingobjectid_msdynce_botcontent: { b: 'regardingobjectid_msdynce_botcontent', a: '_regardingobjectid_value', c: 'msdynce_botcontents', d: 'msdynce_botcontent' },
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
			regardingobjectid_msdyn_federatedarticle: { b: 'regardingobjectid_msdyn_federatedarticle', a: '_regardingobjectid_value', c: 'msdyn_federatedarticles', d: 'msdyn_federatedarticle' },
			regardingobjectid_msdyn_federatedarticleincident: { b: 'regardingobjectid_msdyn_federatedarticleincident', a: '_regardingobjectid_value', c: 'msdyn_federatedarticleincidents', d: 'msdyn_federatedarticleincident' },
			regardingobjectid_msdyn_helppage: { b: 'regardingobjectid_msdyn_helppage', a: '_regardingobjectid_value', c: 'msdyn_helppages', d: 'msdyn_helppage' },
			regardingobjectid_msdyn_kalanguagesetting: { b: 'regardingobjectid_msdyn_kalanguagesetting', a: '_regardingobjectid_value', c: 'msdyn_kalanguagesettings', d: 'msdyn_kalanguagesetting' },
			regardingobjectid_msdyn_kmfederatedsearchconfig: { b: 'regardingobjectid_msdyn_kmfederatedsearchconfig', a: '_regardingobjectid_value', c: 'msdyn_kmfederatedsearchconfigs', d: 'msdyn_kmfederatedsearchconfig' },
			regardingobjectid_msdyn_kmpersonalizationsetting: { b: 'regardingobjectid_msdyn_kmpersonalizationsetting', a: '_regardingobjectid_value', c: 'msdyn_kmpersonalizationsettings', d: 'msdyn_kmpersonalizationsetting' },
			regardingobjectid_msdyn_knowledgearticleimage: { b: 'regardingobjectid_msdyn_knowledgearticleimage', a: '_regardingobjectid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage' },
			regardingobjectid_msdyn_knowledgearticletemplate: { b: 'regardingobjectid_msdyn_knowledgearticletemplate', a: '_regardingobjectid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			regardingobjectid_msdyn_knowledgeinteractioninsight: { b: 'regardingobjectid_msdyn_knowledgeinteractioninsight', a: '_regardingobjectid_value', c: 'msdyn_knowledgeinteractioninsights', d: 'msdyn_knowledgeinteractioninsight' },
			regardingobjectid_msdyn_knowledgepersonalfilter: { b: 'regardingobjectid_msdyn_knowledgepersonalfilter', a: '_regardingobjectid_value', c: 'msdyn_knowledgepersonalfilters', d: 'msdyn_knowledgepersonalfilter' },
			regardingobjectid_msdyn_knowledgesearchfilter: { b: 'regardingobjectid_msdyn_knowledgesearchfilter', a: '_regardingobjectid_value', c: 'msdyn_knowledgesearchfilters', d: 'msdyn_knowledgesearchfilter' },
			regardingobjectid_msdyn_knowledgesearchinsight: { b: 'regardingobjectid_msdyn_knowledgesearchinsight', a: '_regardingobjectid_value', c: 'msdyn_knowledgesearchinsights', d: 'msdyn_knowledgesearchinsight' },
			regardingobjectid_msdyn_richtextfile: { b: 'regardingobjectid_msdyn_richtextfile', a: '_regardingobjectid_value', c: 'msdyn_richtextfiles', d: 'msdyn_richtextfile' },
			regardingobjectid_msdyn_serviceconfiguration: { b: 'regardingobjectid_msdyn_serviceconfiguration', a: '_regardingobjectid_value', c: 'msdyn_serviceconfigurations', d: 'msdyn_serviceconfiguration' },
			regardingobjectid_msdyn_slakpi: { b: 'regardingobjectid_msdyn_slakpi', a: '_regardingobjectid_value', c: 'msdyn_slakpis', d: 'msdyn_slakpi' },
			regardingobjectid_msdyn_solutionhealthrule: { b: 'regardingobjectid_msdyn_solutionhealthrule', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrules', d: 'msdyn_solutionhealthrule' },
			regardingobjectid_msdyn_solutionhealthruleargument: { b: 'regardingobjectid_msdyn_solutionhealthruleargument', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrulearguments', d: 'msdyn_solutionhealthruleargument' },
			regardingobjectid_msdyn_solutionhealthruleset: { b: 'regardingobjectid_msdyn_solutionhealthruleset', a: '_regardingobjectid_value', c: 'msdyn_solutionhealthrulesets', d: 'msdyn_solutionhealthruleset' },
			regardingobjectid_new_bpf_301232cf016d4faebcee80f57b143c69: { b: 'regardingobjectid_new_bpf_301232cf016d4faebcee80f57b143c69', a: '_regardingobjectid_value', c: 'new_bpf_301232cf016d4faebcee80f57b143c69s', d: 'new_bpf_301232cf016d4faebcee80f57b143c69' },
			regardingobjectid_organization: { b: 'regardingobjectid_organization', a: '_regardingobjectid_value', c: 'organizations', d: 'organization' },
			regardingobjectid_organizationdatasyncsubscription: { b: 'regardingobjectid_organizationdatasyncsubscription', a: '_regardingobjectid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription' },
			regardingobjectid_organizationdatasyncsubscriptionentity: { b: 'regardingobjectid_organizationdatasyncsubscriptionentity', a: '_regardingobjectid_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity' },
			regardingobjectid_organizationsetting: { b: 'regardingobjectid_organizationsetting', a: '_regardingobjectid_value', c: 'organizationsettings', d: 'organizationsetting' },
			regardingobjectid_package: { b: 'regardingobjectid_package', a: '_regardingobjectid_value', c: 'packages', d: 'package' },
			regardingobjectid_pdfsetting: { b: 'regardingobjectid_pdfsetting', a: '_regardingobjectid_value', c: 'pdfsettings', d: 'pdfsetting' },
			regardingobjectid_phonecall: { b: 'regardingobjectid_phonecall', a: '_regardingobjectid_value', c: 'phonecalls', d: 'phonecall' },
			regardingobjectid_position: { b: 'regardingobjectid_position', a: '_regardingobjectid_value', c: 'positions', d: 'position' },
			regardingobjectid_post: { b: 'regardingobjectid_post', a: '_regardingobjectid_value', c: 'posts', d: 'post' },
			regardingobjectid_postfollow: { b: 'regardingobjectid_postfollow', a: '_regardingobjectid_value', c: 'postfollows', d: 'postfollow' },
			regardingobjectid_privilege: { b: 'regardingobjectid_privilege', a: '_regardingobjectid_value', c: 'privileges', d: 'privilege' },
			regardingobjectid_processstageparameter: { b: 'regardingobjectid_processstageparameter', a: '_regardingobjectid_value', c: 'processstageparameters', d: 'processstageparameter' },
			regardingobjectid_provisionlanguageforuser: { b: 'regardingobjectid_provisionlanguageforuser', a: '_regardingobjectid_value', c: 'provisionlanguageforusers', d: 'provisionlanguageforuser' },
			regardingobjectid_quarterlyfiscalcalendar: { b: 'regardingobjectid_quarterlyfiscalcalendar', a: '_regardingobjectid_value', c: 'quarterlyfiscalcalendars', d: 'quarterlyfiscalcalendar' },
			regardingobjectid_queue: { b: 'regardingobjectid_queue', a: '_regardingobjectid_value', c: 'queues', d: 'queue' },
			regardingobjectid_queueitem: { b: 'regardingobjectid_queueitem', a: '_regardingobjectid_value', c: 'queueitems', d: 'queueitem' },
			regardingobjectid_recurringappointmentmaster: { b: 'regardingobjectid_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			regardingobjectid_relationshipattribute: { b: 'regardingobjectid_relationshipattribute', a: '_regardingobjectid_value', c: 'relationshipattributes', d: 'relationshipattribute' },
			regardingobjectid_relationshiprole: { b: 'regardingobjectid_relationshiprole', a: '_regardingobjectid_value', c: 'relationshiproles', d: 'relationshiprole' },
			regardingobjectid_relationshiprolemap: { b: 'regardingobjectid_relationshiprolemap', a: '_regardingobjectid_value', c: 'relationshiprolemaps', d: 'relationshiprolemap' },
			regardingobjectid_report: { b: 'regardingobjectid_report', a: '_regardingobjectid_value', c: 'reports', d: 'report' },
			regardingobjectid_revokeinheritedaccessrecordstracker: { b: 'regardingobjectid_revokeinheritedaccessrecordstracker', a: '_regardingobjectid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker' },
			regardingobjectid_role: { b: 'regardingobjectid_role', a: '_regardingobjectid_value', c: 'roles', d: 'role' },
			regardingobjectid_rollupfield: { b: 'regardingobjectid_rollupfield', a: '_regardingobjectid_value', c: 'rollupfields', d: 'rollupfield' },
			regardingobjectid_routingrule: { b: 'regardingobjectid_routingrule', a: '_regardingobjectid_value', c: 'routingrules', d: 'routingrule' },
			regardingobjectid_routingruleitem: { b: 'regardingobjectid_routingruleitem', a: '_regardingobjectid_value', c: 'routingruleitems', d: 'routingruleitem' },
			regardingobjectid_savedquery: { b: 'regardingobjectid_savedquery', a: '_regardingobjectid_value', c: 'savedqueries', d: 'savedquery' },
			regardingobjectid_semiannualfiscalcalendar: { b: 'regardingobjectid_semiannualfiscalcalendar', a: '_regardingobjectid_value', c: 'semiannualfiscalcalendars', d: 'semiannualfiscalcalendar' },
			regardingobjectid_serviceplan: { b: 'regardingobjectid_serviceplan', a: '_regardingobjectid_value', c: 'serviceplans', d: 'serviceplan' },
			regardingobjectid_settingdefinition: { b: 'regardingobjectid_settingdefinition', a: '_regardingobjectid_value', c: 'settingdefinitions', d: 'settingdefinition' },
			regardingobjectid_sharepointdocumentlocation: { b: 'regardingobjectid_sharepointdocumentlocation', a: '_regardingobjectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			regardingobjectid_sharepointsite: { b: 'regardingobjectid_sharepointsite', a: '_regardingobjectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			regardingobjectid_similarityrule: { b: 'regardingobjectid_similarityrule', a: '_regardingobjectid_value', c: 'similarityrules', d: 'similarityrule' },
			regardingobjectid_sla: { b: 'regardingobjectid_sla', a: '_regardingobjectid_value', c: 'slas', d: 'sla' },
			regardingobjectid_socialactivity: { b: 'regardingobjectid_socialactivity', a: '_regardingobjectid_value', c: 'socialactivities', d: 'socialactivity' },
			regardingobjectid_socialprofile: { b: 'regardingobjectid_socialprofile', a: '_regardingobjectid_value', c: 'socialprofiles', d: 'socialprofile' },
			regardingobjectid_solutioncomponentattributeconfiguration: { b: 'regardingobjectid_solutioncomponentattributeconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration' },
			regardingobjectid_solutioncomponentconfiguration: { b: 'regardingobjectid_solutioncomponentconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration' },
			regardingobjectid_solutioncomponentrelationshipconfiguration: { b: 'regardingobjectid_solutioncomponentrelationshipconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentrelationshipconfigurations', d: 'solutioncomponentrelationshipconfiguration' },
			regardingobjectid_stagesolutionupload: { b: 'regardingobjectid_stagesolutionupload', a: '_regardingobjectid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload' },
			regardingobjectid_subject: { b: 'regardingobjectid_subject', a: '_regardingobjectid_value', c: 'subjects', d: 'subject' },
			regardingobjectid_systemform: { b: 'regardingobjectid_systemform', a: '_regardingobjectid_value', c: 'systemforms', d: 'systemform' },
			regardingobjectid_systemuser: { b: 'regardingobjectid_systemuser', a: '_regardingobjectid_value', c: 'systemusers', d: 'systemuser' },
			regardingobjectid_systemuserauthorizationchangetracker: { b: 'regardingobjectid_systemuserauthorizationchangetracker', a: '_regardingobjectid_value', c: 'systemuserauthorizationchangetrackers', d: 'systemuserauthorizationchangetracker' },
			regardingobjectid_task: { b: 'regardingobjectid_task', a: '_regardingobjectid_value', c: 'tasks', d: 'task' },
			regardingobjectid_team: { b: 'regardingobjectid_team', a: '_regardingobjectid_value', c: 'teams', d: 'team' },
			regardingobjectid_teammobileofflineprofilemembership: { b: 'regardingobjectid_teammobileofflineprofilemembership', a: '_regardingobjectid_value', c: 'teammobileofflineprofilememberships', d: 'teammobileofflineprofilemembership' },
			regardingobjectid_template: { b: 'regardingobjectid_template', a: '_regardingobjectid_value', c: 'templates', d: 'template' },
			regardingobjectid_territory: { b: 'regardingobjectid_territory', a: '_regardingobjectid_value', c: 'territories', d: 'territory' },
			regardingobjectid_theme: { b: 'regardingobjectid_theme', a: '_regardingobjectid_value', c: 'themes', d: 'theme' },
			regardingobjectid_transactioncurrency: { b: 'regardingobjectid_transactioncurrency', a: '_regardingobjectid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			regardingobjectid_userform: { b: 'regardingobjectid_userform', a: '_regardingobjectid_value', c: 'userforms', d: 'userform' },
			regardingobjectid_usermapping: { b: 'regardingobjectid_usermapping', a: '_regardingobjectid_value', c: 'usermappings', d: 'usermapping' },
			regardingobjectid_usermobileofflineprofilemembership: { b: 'regardingobjectid_usermobileofflineprofilemembership', a: '_regardingobjectid_value', c: 'usermobileofflineprofilememberships', d: 'usermobileofflineprofilemembership' },
			regardingobjectid_userquery: { b: 'regardingobjectid_userquery', a: '_regardingobjectid_value', c: 'userqueries', d: 'userquery' },
			regardingobjectid_workflowbinary: { b: 'regardingobjectid_workflowbinary', a: '_regardingobjectid_value', c: 'workflowbinaries', d: 'workflowbinary' },
			RegardingObjectIdYomiName: { a: 'regardingobjectidyominame' },
			RequestId: { a: 'requestid' },
			RetainJobHistory: { a: 'retainjobhistory' },
			RetryCount: { a: 'retrycount', r: true },
			RootExecutionContext: { a: 'rootexecutioncontext' },
			Sequence: { a: 'sequence', r: true },
			StartedOn_UtcDateAndTime: { a: 'startedon', r: true },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subtype: { a: 'subtype', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			WorkflowActivationId: { b: 'workflowactivationid', a: '_workflowactivationid_value', c: 'workflows', d: 'workflow' },
			WorkflowIsBlocked: { a: 'workflowisblocked', r: true },
			WorkflowStageName: { a: 'workflowstagename', r: true },
			WorkflowState: { a: 'workflowstate', r: true },
			Workload: { a: 'workload' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in asyncoperation) {
			var a = asyncoperation[field].a;
			var b = asyncoperation[field].b;
			var c = asyncoperation[field].c;
			var d = asyncoperation[field].d;
			var g = asyncoperation[field].g;
			var r = asyncoperation[field].r;
			asyncoperation[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		asyncoperation.Entity = u;
		asyncoperation.EntityName = 'asyncoperation';
		asyncoperation.EntityCollectionName = 'asyncoperations';
		asyncoperation['@odata.etag'] = e['@odata.etag'];
		asyncoperation.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		asyncoperation.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return asyncoperation;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AsyncOperation = {
		OperationType : {
			Activity_Propagation: 6,
			AI_Builder_Prediction_Events: 190690092,
			AI_Builder_Training_Events: 190690091,
			ALM_Anomaly_Detection_Operation: 73,
			App_Module_Metadata_Operation: 72,
			Audit_Partition_Creation: 41,
			Bulk_Delete: 13,
			Bulk_Delete_File_Attachment: 94,
			Bulk_Delete_Subprocess: 23,
			Bulk_Duplicate_Detection: 8,
			Bulk_Email: 2,
			Calculate_Organization_Maximum_Storage_Size: 22,
			Calculate_Organization_Storage_Size: 18,
			Calculate_Rollup_Field: 57,
			CallbackRegistration_Expander_Operation: 79,
			Cascade_Grant_or_Revoke_Access_Version_Tracking_Async_Operation: 12801,
			CascadeAssign: 90,
			CascadeDelete: 91,
			Check_For_Language_Pack_Updates: 42,
			Cleanup_inactive_workflow_assemblies: 32,
			Cleanup_Solution_Components: 71,
			Collect_Organization_Database_Statistics: 19,
			Collect_Organization_Statistics: 16,
			Collection_Organization_Size_Statistics: 20,
			Convert_Date_And_Time_Behavior: 62,
			Create_Or_Refresh_Virtual_Entity: 98,
			Database_log_backup: 26,
			Database_Tuning: 21,
			DBCC_SHRINKDATABASE_maintenance_job: 28,
			DBCC_SHRINKFILE_maintenance_job: 29,
			Deletion_Service: 14,
			Duplicate_Detection_Rule_Publish: 7,
			Encryption_Health_Check: 53,
			EntityKey_Index_Creation: 63,
			Event_Expander_Operation: 92,
			Execute_Async_Request: 54,
			Export_Solution_Async_Operation: 202,
			Flow_Notification: 75,
			Goal_Roll_Up: 40,
			Import: 5,
			Import_File_Parse: 3,
			Import_Sample_Data: 38,
			Import_Solution_Async_Operation: 203,
			Import_Solution_Metadata: 93,
			Import_Subprocess: 17,
			Import_Translation: 59,
			Incoming_Email_Processing: 51,
			Index_Management: 15,
			Mailbox_Test_Access: 52,
			Mass_Calculate_Rollup_Field: 58,
			Matchcode_Update: 12,
			Organization_Full_Text_Catalog_Index: 25,
			Outgoing_Activity: 50,
			Post_to_Yammer: 49,
			Provision_language_for_user: 201,
			Provision_Language_Pack: 43,
			Quick_Campaign: 11,
			Recurring_Series_Expansion: 35,
			Refresh_Business_Unit_for_Records_Owned_By_Principal: 95,
			Regenerate_Entity_Row_Count_Snapshot_Data: 46,
			Regenerate_Read_Share_Snapshot_Data: 47,
			Reindex_all_indices_maintenance_job: 30,
			Relationship_Assistant_Cards: 69,
			Resource_Booking_Sync: 68,
			Revoke_Inherited_Access: 96,
			Ribbon_Client_Metadata_Operation: 76,
			SQM_Data_Collection: 9,
			Storage_Limit_Notification: 31,
			System_Event: 1,
			Transform_Parse_Data: 4,
			Update_Contract_States: 27,
			Update_Entitlement_States: 56,
			Update_Knowledge_Article_States: 65,
			Update_Organization_Database: 44,
			Update_Solution: 45,
			Update_Statistic_Intervals: 24,
			Workflow: 10
		},
		StateCode : {
			Completed: 3,
			Locked: 2,
			Ready: 0,
			Suspended: 1
		},
		StatusCode : {
			Canceled: 32,
			Canceling: 22,
			Failed: 31,
			In_Progress: 20,
			Pausing: 21,
			Succeeded: 30,
			Waiting: 10,
			Waiting_For_Resources: 0
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
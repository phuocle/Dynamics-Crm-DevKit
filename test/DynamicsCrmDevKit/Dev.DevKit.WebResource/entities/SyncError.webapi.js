'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SyncErrorApi = function (e) {
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
		var syncerror = {
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
			regardingobjectid_annotation_syncerror: { b: 'regardingobjectid_annotation_syncerror', a: '_regardingobjectid_value', c: 'annotations', d: 'annotation' },
			regardingobjectid_apisettings: { b: 'regardingobjectid_apisettings', a: '_regardingobjectid_value', c: 'apisettingscollection', d: 'apisettings' },
			regardingobjectid_appelement: { b: 'regardingobjectid_appelement', a: '_regardingobjectid_value', c: 'appelements', d: 'appelement' },
			regardingobjectid_applicationuser: { b: 'regardingobjectid_applicationuser', a: '_regardingobjectid_value', c: 'applicationusers', d: 'applicationuser' },
			regardingobjectid_appmodulecomponentedge: { b: 'regardingobjectid_appmodulecomponentedge', a: '_regardingobjectid_value', c: 'appmodulecomponentedges', d: 'appmodulecomponentedge' },
			regardingobjectid_appmodulecomponentnode: { b: 'regardingobjectid_appmodulecomponentnode', a: '_regardingobjectid_value', c: 'appmodulecomponentnodes', d: 'appmodulecomponentnode' },
			regardingobjectid_appnotification: { b: 'regardingobjectid_appnotification', a: '_regardingobjectid_value', c: 'appnotifications', d: 'appnotification' },
			regardingobjectid_appointment_syncerror: { b: 'regardingobjectid_appointment_syncerror', a: '_regardingobjectid_value', c: 'appointments', d: 'appointment' },
			regardingobjectid_appsetting: { b: 'regardingobjectid_appsetting', a: '_regardingobjectid_value', c: 'appsettings', d: 'appsetting' },
			regardingobjectid_appusersetting: { b: 'regardingobjectid_appusersetting', a: '_regardingobjectid_value', c: 'appusersettings', d: 'appusersetting' },
			regardingobjectid_attachment_syncerror: { b: 'regardingobjectid_attachment_syncerror', a: '_regardingobjectid_value', c: 'attachments', d: 'attachment' },
			regardingobjectid_attributeimageconfig: { b: 'regardingobjectid_attributeimageconfig', a: '_regardingobjectid_value', c: 'attributeimageconfigs', d: 'attributeimageconfig' },
			regardingobjectid_bot: { b: 'regardingobjectid_bot', a: '_regardingobjectid_value', c: 'bots', d: 'bot' },
			regardingobjectid_botcomponent: { b: 'regardingobjectid_botcomponent', a: '_regardingobjectid_value', c: 'botcomponents', d: 'botcomponent' },
			regardingobjectid_businessdatalocalizedlabel_syncerror: { b: 'regardingobjectid_businessdatalocalizedlabel_syncerror', a: '_regardingobjectid_value', c: 'businessdatalocalizedlabels', d: 'businessdatalocalizedlabel' },
			regardingobjectid_businessunit_syncerror: { b: 'regardingobjectid_businessunit_syncerror', a: '_regardingobjectid_value', c: 'businessunits', d: 'businessunit' },
			regardingobjectid_canvasappextendedmetadata: { b: 'regardingobjectid_canvasappextendedmetadata', a: '_regardingobjectid_value', c: 'canvasappextendedmetadatas', d: 'canvasappextendedmetadata' },
			regardingobjectid_cascadegrantrevokeaccessrecordstracker: { b: 'regardingobjectid_cascadegrantrevokeaccessrecordstracker', a: '_regardingobjectid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker' },
			regardingobjectid_cascadegrantrevokeaccessversiontracker: { b: 'regardingobjectid_cascadegrantrevokeaccessversiontracker', a: '_regardingobjectid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker' },
			regardingobjectid_catalog: { b: 'regardingobjectid_catalog', a: '_regardingobjectid_value', c: 'catalogs', d: 'catalog' },
			regardingobjectid_catalogassignment: { b: 'regardingobjectid_catalogassignment', a: '_regardingobjectid_value', c: 'catalogassignments', d: 'catalogassignment' },
			regardingobjectid_category_syncerror: { b: 'regardingobjectid_category_syncerror', a: '_regardingobjectid_value', c: 'categories ', d: 'category' },
			regardingobjectid_channelaccessprofile_syncerror: { b: 'regardingobjectid_channelaccessprofile_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			regardingobjectid_channelaccessprofilerule_syncerror: { b: 'regardingobjectid_channelaccessprofilerule_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			regardingobjectid_channelaccessprofileruleitem_syncerror: { b: 'regardingobjectid_channelaccessprofileruleitem_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofileruleitems', d: 'channelaccessprofileruleitem' },
			regardingobjectid_connection_syncerror: { b: 'regardingobjectid_connection_syncerror', a: '_regardingobjectid_value', c: 'connections', d: 'connection' },
			regardingobjectid_connectionreference: { b: 'regardingobjectid_connectionreference', a: '_regardingobjectid_value', c: 'connectionreferences', d: 'connectionreference' },
			regardingobjectid_connectionrole_syncerror: { b: 'regardingobjectid_connectionrole_syncerror', a: '_regardingobjectid_value', c: 'connectionroles', d: 'connectionrole' },
			regardingobjectid_connector: { b: 'regardingobjectid_connector', a: '_regardingobjectid_value', c: 'connectors', d: 'connector' },
			regardingobjectid_contact_syncerror: { b: 'regardingobjectid_contact_syncerror', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_conversationtranscript: { b: 'regardingobjectid_conversationtranscript', a: '_regardingobjectid_value', c: 'conversationtranscripts', d: 'conversationtranscript' },
			regardingobjectid_customapi: { b: 'regardingobjectid_customapi', a: '_regardingobjectid_value', c: 'customapis', d: 'customapi' },
			regardingobjectid_customapirequestparameter: { b: 'regardingobjectid_customapirequestparameter', a: '_regardingobjectid_value', c: 'customapirequestparameters', d: 'customapirequestparameter' },
			regardingobjectid_customapiresponseproperty: { b: 'regardingobjectid_customapiresponseproperty', a: '_regardingobjectid_value', c: 'customapiresponseproperties', d: 'customapiresponseproperty' },
			regardingobjectid_customeraddress_syncerror: { b: 'regardingobjectid_customeraddress_syncerror', a: '_regardingobjectid_value', c: 'customeraddresses', d: 'customeraddress' },
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
			regardingobjectid_duplicaterule_syncerror: { b: 'regardingobjectid_duplicaterule_syncerror', a: '_regardingobjectid_value', c: 'duplicaterules', d: 'duplicaterule' },
			regardingobjectid_duplicaterulecondition_syncerror: { b: 'regardingobjectid_duplicaterulecondition_syncerror', a: '_regardingobjectid_value', c: 'duplicateruleconditions', d: 'duplicaterulecondition' },
			regardingobjectid_email_syncerror: { b: 'regardingobjectid_email_syncerror', a: '_regardingobjectid_value', c: 'emails', d: 'email' },
			regardingobjectid_emailserverprofile_syncerror: { b: 'regardingobjectid_emailserverprofile_syncerror', a: '_regardingobjectid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			regardingobjectid_entityanalyticsconfig: { b: 'regardingobjectid_entityanalyticsconfig', a: '_regardingobjectid_value', c: 'entityanalyticsconfigs', d: 'entityanalyticsconfig' },
			regardingobjectid_entityimageconfig: { b: 'regardingobjectid_entityimageconfig', a: '_regardingobjectid_value', c: 'entityimageconfigs', d: 'entityimageconfig' },
			regardingobjectid_environmentvariabledefinition: { b: 'regardingobjectid_environmentvariabledefinition', a: '_regardingobjectid_value', c: 'environmentvariabledefinitions', d: 'environmentvariabledefinition' },
			regardingobjectid_environmentvariablevalue: { b: 'regardingobjectid_environmentvariablevalue', a: '_regardingobjectid_value', c: 'environmentvariablevalues', d: 'environmentvariablevalue' },
			regardingobjectid_ExpiredProcess_syncerror: { b: 'regardingobjectid_ExpiredProcess_syncerror', a: '_regardingobjectid_value', c: 'expiredprocesses', d: 'expiredprocess' },
			regardingobjectid_exportsolutionupload: { b: 'regardingobjectid_exportsolutionupload', a: '_regardingobjectid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload' },
			regardingobjectid_externalparty_syncerror: { b: 'regardingobjectid_externalparty_syncerror', a: '_regardingobjectid_value', c: 'externalparties', d: 'externalparty' },
			regardingobjectid_externalpartyitem_syncerror: { b: 'regardingobjectid_externalpartyitem_syncerror', a: '_regardingobjectid_value', c: 'externalpartyitems', d: 'externalpartyitem' },
			regardingobjectid_fax_syncerror: { b: 'regardingobjectid_fax_syncerror', a: '_regardingobjectid_value', c: 'faxes', d: 'fax' },
			regardingobjectid_feedback_syncerror: { b: 'regardingobjectid_feedback_syncerror', a: '_regardingobjectid_value', c: 'feedback', d: 'feedback' },
			regardingobjectid_fieldpermission_syncerror: { b: 'regardingobjectid_fieldpermission_syncerror', a: '_regardingobjectid_value', c: 'fieldpermissions', d: 'fieldpermission' },
			regardingobjectid_fieldsecurityprofile_syncerror: { b: 'regardingobjectid_fieldsecurityprofile_syncerror', a: '_regardingobjectid_value', c: 'fieldsecurityprofiles', d: 'fieldsecurityprofile' },
			regardingobjectid_fileattachment_syncerror: { b: 'regardingobjectid_fileattachment_syncerror', a: '_regardingobjectid_value', c: 'fileattachments', d: 'fileattachment' },
			regardingobjectid_flowmachine: { b: 'regardingobjectid_flowmachine', a: '_regardingobjectid_value', c: 'flowmachines', d: 'flowmachine' },
			regardingobjectid_flowmachinegroup: { b: 'regardingobjectid_flowmachinegroup', a: '_regardingobjectid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			regardingobjectid_flowsession: { b: 'regardingobjectid_flowsession', a: '_regardingobjectid_value', c: 'flowsessions', d: 'flowsession' },
			regardingobjectid_goal_syncerror: { b: 'regardingobjectid_goal_syncerror', a: '_regardingobjectid_value', c: 'goals', d: 'goal' },
			regardingobjectid_goalrollupquery_syncerror: { b: 'regardingobjectid_goalrollupquery_syncerror', a: '_regardingobjectid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			regardingobjectid_holidaywrapper: { b: 'regardingobjectid_holidaywrapper', a: '_regardingobjectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			regardingobjectid_importmap_syncerror: { b: 'regardingobjectid_importmap_syncerror', a: '_regardingobjectid_value', c: 'importmaps', d: 'importmap' },
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
			regardingobjectid_managedidentity: { b: 'regardingobjectid_managedidentity', a: '_regardingobjectid_value', c: 'managedidentities', d: 'managedidentity' },
			regardingobjectid_metric_syncerror: { b: 'regardingobjectid_metric_syncerror', a: '_regardingobjectid_value', c: 'metrics', d: 'metric' },
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
			regardingobjectid_NewProcess_syncerror: { b: 'regardingobjectid_NewProcess_syncerror', a: '_regardingobjectid_value', c: 'newprocesses', d: 'newprocess' },
			regardingobjectid_new_bpf_301232cf016d4faebcee80f57b143c69: { b: 'regardingobjectid_new_bpf_301232cf016d4faebcee80f57b143c69', a: '_regardingobjectid_value', c: 'new_bpf_301232cf016d4faebcee80f57b143c69s', d: 'new_bpf_301232cf016d4faebcee80f57b143c69' },
			regardingobjectid_offlinecommanddefinition_syncerror: { b: 'regardingobjectid_offlinecommanddefinition_syncerror', a: '_regardingobjectid_value', c: 'offlinecommanddefinitions', d: 'offlinecommanddefinition' },
			regardingobjectid_organization_syncerror: { b: 'regardingobjectid_organization_syncerror', a: '_regardingobjectid_value', c: 'organizations', d: 'organization' },
			regardingobjectid_organizationdatasyncsubscription: { b: 'regardingobjectid_organizationdatasyncsubscription', a: '_regardingobjectid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription' },
			regardingobjectid_organizationdatasyncsubscriptionentity: { b: 'regardingobjectid_organizationdatasyncsubscriptionentity', a: '_regardingobjectid_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity' },
			regardingobjectid_organizationsetting: { b: 'regardingobjectid_organizationsetting', a: '_regardingobjectid_value', c: 'organizationsettings', d: 'organizationsetting' },
			regardingobjectid_package: { b: 'regardingobjectid_package', a: '_regardingobjectid_value', c: 'packages', d: 'package' },
			regardingobjectid_pdfsetting: { b: 'regardingobjectid_pdfsetting', a: '_regardingobjectid_value', c: 'pdfsettings', d: 'pdfsetting' },
			regardingobjectid_phonecall_syncerror: { b: 'regardingobjectid_phonecall_syncerror', a: '_regardingobjectid_value', c: 'phonecalls', d: 'phonecall' },
			regardingobjectid_position_syncerror: { b: 'regardingobjectid_position_syncerror', a: '_regardingobjectid_value', c: 'positions', d: 'position' },
			regardingobjectid_postfollow_syncerror: { b: 'regardingobjectid_postfollow_syncerror', a: '_regardingobjectid_value', c: 'postfollows', d: 'postfollow' },
			regardingobjectid_processsession_syncerror: { b: 'regardingobjectid_processsession_syncerror', a: '_regardingobjectid_value', c: 'processsessions', d: 'processsession' },
			regardingobjectid_processstage_syncerror: { b: 'regardingobjectid_processstage_syncerror', a: '_regardingobjectid_value', c: 'processstages', d: 'processstage' },
			regardingobjectid_processstageparameter: { b: 'regardingobjectid_processstageparameter', a: '_regardingobjectid_value', c: 'processstageparameters', d: 'processstageparameter' },
			regardingobjectid_processtrigger_syncerror: { b: 'regardingobjectid_processtrigger_syncerror', a: '_regardingobjectid_value', c: 'processtriggers', d: 'processtrigger' },
			regardingobjectid_provisionlanguageforuser: { b: 'regardingobjectid_provisionlanguageforuser', a: '_regardingobjectid_value', c: 'provisionlanguageforusers', d: 'provisionlanguageforuser' },
			regardingobjectid_publisher_syncerror: { b: 'regardingobjectid_publisher_syncerror', a: '_regardingobjectid_value', c: 'publishers', d: 'publisher' },
			regardingobjectid_queue_syncerror: { b: 'regardingobjectid_queue_syncerror', a: '_regardingobjectid_value', c: 'queues', d: 'queue' },
			regardingobjectid_queueitem_syncerror: { b: 'regardingobjectid_queueitem_syncerror', a: '_regardingobjectid_value', c: 'queueitems', d: 'queueitem' },
			regardingobjectid_recurringappointmentmaster_syncerror: { b: 'regardingobjectid_recurringappointmentmaster_syncerror', a: '_regardingobjectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			regardingobjectid_relationshipattribute: { b: 'regardingobjectid_relationshipattribute', a: '_regardingobjectid_value', c: 'relationshipattributes', d: 'relationshipattribute' },
			regardingobjectid_report_syncerror: { b: 'regardingobjectid_report_syncerror', a: '_regardingobjectid_value', c: 'reports', d: 'report' },
			regardingobjectid_reportcategory_syncerror: { b: 'regardingobjectid_reportcategory_syncerror', a: '_regardingobjectid_value', c: 'reportcategories', d: 'reportcategory' },
			regardingobjectid_revokeinheritedaccessrecordstracker: { b: 'regardingobjectid_revokeinheritedaccessrecordstracker', a: '_regardingobjectid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker' },
			regardingobjectid_role_syncerror: { b: 'regardingobjectid_role_syncerror', a: '_regardingobjectid_value', c: 'roles', d: 'role' },
			regardingobjectid_rollupfield_syncerror: { b: 'regardingobjectid_rollupfield_syncerror', a: '_regardingobjectid_value', c: 'rollupfields', d: 'rollupfield' },
			regardingobjectid_savedquery_syncerror: { b: 'regardingobjectid_savedquery_syncerror', a: '_regardingobjectid_value', c: 'savedqueries', d: 'savedquery' },
			regardingobjectid_savedqueryvisualization_syncerror: { b: 'regardingobjectid_savedqueryvisualization_syncerror', a: '_regardingobjectid_value', c: 'savedqueryvisualizations', d: 'savedqueryvisualization' },
			regardingobjectid_serviceplan: { b: 'regardingobjectid_serviceplan', a: '_regardingobjectid_value', c: 'serviceplans', d: 'serviceplan' },
			regardingobjectid_settingdefinition: { b: 'regardingobjectid_settingdefinition', a: '_regardingobjectid_value', c: 'settingdefinitions', d: 'settingdefinition' },
			regardingobjectid_sharepointdocumentlocation_syncerror: { b: 'regardingobjectid_sharepointdocumentlocation_syncerror', a: '_regardingobjectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			regardingobjectid_sharepointsite_syncerror: { b: 'regardingobjectid_sharepointsite_syncerror', a: '_regardingobjectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			regardingobjectid_sla_syncerror: { b: 'regardingobjectid_sla_syncerror', a: '_regardingobjectid_value', c: 'slas', d: 'sla' },
			regardingobjectid_slaitem_syncerror: { b: 'regardingobjectid_slaitem_syncerror', a: '_regardingobjectid_value', c: 'slaitems', d: 'slaitem' },
			regardingobjectid_slakpiinstance_syncerror: { b: 'regardingobjectid_slakpiinstance_syncerror', a: '_regardingobjectid_value', c: 'slakpiinstances', d: 'slakpiinstance' },
			regardingobjectid_socialactivity_syncerror: { b: 'regardingobjectid_socialactivity_syncerror', a: '_regardingobjectid_value', c: 'socialactivities', d: 'socialactivity' },
			regardingobjectid_socialprofile_syncerror: { b: 'regardingobjectid_socialprofile_syncerror', a: '_regardingobjectid_value', c: 'socialprofiles', d: 'socialprofile' },
			regardingobjectid_solution_syncerror: { b: 'regardingobjectid_solution_syncerror', a: '_regardingobjectid_value', c: 'solutions', d: 'solution' },
			regardingobjectid_solutioncomponentattributeconfiguration: { b: 'regardingobjectid_solutioncomponentattributeconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentattributeconfigurations', d: 'solutioncomponentattributeconfiguration' },
			regardingobjectid_solutioncomponentconfiguration: { b: 'regardingobjectid_solutioncomponentconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentconfigurations', d: 'solutioncomponentconfiguration' },
			regardingobjectid_solutioncomponentrelationshipconfiguration: { b: 'regardingobjectid_solutioncomponentrelationshipconfiguration', a: '_regardingobjectid_value', c: 'solutioncomponentrelationshipconfigurations', d: 'solutioncomponentrelationshipconfiguration' },
			regardingobjectid_stagesolutionupload: { b: 'regardingobjectid_stagesolutionupload', a: '_regardingobjectid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload' },
			regardingobjectid_subject_syncerror: { b: 'regardingobjectid_subject_syncerror', a: '_regardingobjectid_value', c: 'subjects', d: 'subject' },
			regardingobjectid_syncerror_syncerror: { b: 'regardingobjectid_syncerror_syncerror', a: '_regardingobjectid_value', c: 'syncerrors', d: 'syncerror' },
			regardingobjectid_systemuser_syncerror: { b: 'regardingobjectid_systemuser_syncerror', a: '_regardingobjectid_value', c: 'systemusers', d: 'systemuser' },
			regardingobjectid_systemuserauthorizationchangetracker: { b: 'regardingobjectid_systemuserauthorizationchangetracker', a: '_regardingobjectid_value', c: 'systemuserauthorizationchangetrackers', d: 'systemuserauthorizationchangetracker' },
			regardingobjectid_task_syncerror: { b: 'regardingobjectid_task_syncerror', a: '_regardingobjectid_value', c: 'tasks', d: 'task' },
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
			regardingobjectid_workflow_syncerror: { b: 'regardingobjectid_workflow_syncerror', a: '_regardingobjectid_value', c: 'workflows', d: 'workflow' },
			regardingobjectid_workflowbinary: { b: 'regardingobjectid_workflowbinary', a: '_regardingobjectid_value', c: 'workflowbinaries', d: 'workflowbinary' },
			RequestData: { a: 'requestdata' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SyncErrorId: { a: 'syncerrorid' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in syncerror) {
			var a = syncerror[field].a;
			var b = syncerror[field].b;
			var c = syncerror[field].c;
			var d = syncerror[field].d;
			var g = syncerror[field].g;
			var r = syncerror[field].r;
			syncerror[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		syncerror.Entity = u;
		syncerror.EntityName = 'syncerror';
		syncerror.EntityCollectionName = 'syncerrors';
		syncerror['@odata.etag'] = e['@odata.etag'];
		syncerror.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		syncerror.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
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
			Conflict: 0,
			Others: 3,
			Record_already_exists: 2,
			Record_not_found: 1
		},
		StateCode : {
			Active: 0,
			Resolved: 1
		},
		StatusCode : {
			Active: 0,
			Fixed: 1
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
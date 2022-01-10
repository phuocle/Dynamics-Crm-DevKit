'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FileAttachmentApi = function (e) {
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
		var fileattachment = {
			Body: { a: 'body', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			FileAttachmentId: { a: 'fileattachmentid' },
			FileName: { a: 'filename' },
			FilePointer: { a: 'filepointer', r: true },
			FileSizeInBytes: { a: 'filesizeinbytes', r: true },
			IsCommitted: { a: 'iscommitted', r: true },
			MimeType: { a: 'mimetype' },
			objectid_activityfileattachment: { b: 'objectid_activityfileattachment', a: '_objectid_value', c: 'activityfileattachments', d: 'activityfileattachment' },
			objectid_asyncoperation: { b: 'objectid_asyncoperation', a: '_objectid_value', c: 'asyncoperations', d: 'asyncoperation' },
			objectid_canvasapp: { b: 'objectid_canvasapp', a: '_objectid_value', c: 'canvasapps', d: 'canvasapp' },
			objectid_cascadegrantrevokeaccessrecordstracker: { b: 'objectid_cascadegrantrevokeaccessrecordstracker', a: '_objectid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker' },
			objectid_exportsolutionupload: { b: 'objectid_exportsolutionupload', a: '_objectid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload' },
			objectid_flowsession: { b: 'objectid_flowsession', a: '_objectid_value', c: 'flowsessions', d: 'flowsession' },
			objectid_imagedescriptor: { b: 'objectid_imagedescriptor', a: '_objectid_value', c: 'imagedescriptors', d: 'imagedescriptor' },
			objectid_mailbox: { b: 'objectid_mailbox', a: '_objectid_value', c: 'mailboxes', d: 'mailbox' },
			objectid_msdyn_aibfile: { b: 'objectid_msdyn_aibfile', a: '_objectid_value', c: 'msdyn_aibfiles', d: 'msdyn_aibfile' },
			objectid_msdyn_aiconfiguration: { b: 'objectid_msdyn_aiconfiguration', a: '_objectid_value', c: 'msdyn_aiconfigurations', d: 'msdyn_aiconfiguration' },
			objectid_msdyn_bookableresourcebookingquicknote: { b: 'objectid_msdyn_bookableresourcebookingquicknote', a: '_objectid_value', c: 'msdyn_bookableresourcebookingquicknotes', d: 'msdyn_bookableresourcebookingquicknote' },
			objectid_msdyn_conversationinsight: { b: 'objectid_msdyn_conversationinsight', a: '_objectid_value', c: 'msdyn_conversationinsights', d: 'msdyn_conversationinsight' },
			objectid_msdyn_customerassetattachment: { b: 'objectid_msdyn_customerassetattachment', a: '_objectid_value', c: 'msdyn_customerassetattachments', d: 'msdyn_customerassetattachment' },
			objectid_msdyn_knowledgearticleimage: { b: 'objectid_msdyn_knowledgearticleimage', a: '_objectid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage' },
			objectid_msdyn_soundfile: { b: 'objectid_msdyn_soundfile', a: '_objectid_value', c: 'msdyn_soundfiles', d: 'msdyn_soundfile' },
			objectid_msfp_fileresponse: { b: 'objectid_msfp_fileresponse', a: '_objectid_value', c: 'msfp_fileresponses', d: 'msfp_fileresponse' },
			objectid_revokeinheritedaccessrecordstracker: { b: 'objectid_revokeinheritedaccessrecordstracker', a: '_objectid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker' },
			objectid_ribbonclientmetadata: { b: 'objectid_ribbonclientmetadata', a: '_objectid_value', c: 'ribbonclientmetadata', d: 'ribbonclientmetadata' },
			FileAttachment_Solution: { b: 'FileAttachment_Solution', a: '_objectid_value', c: 'solutions', d: 'solution' },
			objectid_stagesolutionupload: { b: 'objectid_stagesolutionupload', a: '_objectid_value', c: 'stagesolutionuploads', d: 'stagesolutionupload' },
			objectid_webresource: { b: 'objectid_webresource', a: '_objectid_value', c: 'webresources', d: 'webresource' },
			objectid_workflowbinary: { b: 'objectid_workflowbinary', a: '_objectid_value', c: 'workflowbinaries', d: 'workflowbinary' },
			objectid_workflowlog: { b: 'objectid_workflowlog', a: '_objectid_value', c: 'workflowlogs', d: 'workflowlog' },
			Prefix: { a: 'prefix', r: true },
			RegardingFieldName: { a: 'regardingfieldname' },
			StoragePointer: { a: 'storagepointer', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in fileattachment) {
			var a = fileattachment[field].a;
			var b = fileattachment[field].b;
			var c = fileattachment[field].c;
			var d = fileattachment[field].d;
			var g = fileattachment[field].g;
			var r = fileattachment[field].r;
			fileattachment[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		fileattachment.Entity = u;
		fileattachment.EntityName = 'fileattachment';
		fileattachment.EntityCollectionName = 'fileattachments';
		fileattachment['@odata.etag'] = e['@odata.etag'];
		fileattachment.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		fileattachment.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return fileattachment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.FileAttachment = {
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
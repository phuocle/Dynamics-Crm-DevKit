﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FileAttachmentApi = function (e) {
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
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
		var _fileattachment = {
			Body: { a: 'body', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			FileAttachmentId: { a: 'fileattachmentid' },
			FileName: { a: 'filename' },
			FilePointer: { a: 'filepointer', r: true },
			FileSizeInBytes: { a: 'filesizeinbytes', r: true },
			IsCommitted: { a: 'iscommitted', r: true },
			MimeType: { a: 'mimetype' },
			objectid_activityfileattachment: { b: 'objectid_activityfileattachment', a: '_objectid_value', c: 'activityfileattachments', d: 'activityfileattachment' },
			objectid_activitypointer: { b: 'objectid_activitypointer', a: '_objectid_value', c: 'activitypointers', d: 'activitypointer' },
			objectid_asyncoperation: { b: 'objectid_asyncoperation', a: '_objectid_value', c: 'asyncoperations', d: 'asyncoperation' },
			objectid_botcomponent: { b: 'objectid_botcomponent', a: '_objectid_value', c: 'botcomponents', d: 'botcomponent' },
			objectid_canvasapp: { b: 'objectid_canvasapp', a: '_objectid_value', c: 'canvasapps', d: 'canvasapp' },
			objectid_cascadegrantrevokeaccessrecordstracker: { b: 'objectid_cascadegrantrevokeaccessrecordstracker', a: '_objectid_value', c: 'cascadegrantrevokeaccessrecordstrackers', d: 'cascadegrantrevokeaccessrecordstracker' },
			objectid_deleteditemreference: { b: 'objectid_deleteditemreference', a: '_objectid_value', c: 'deleteditemreferences', d: 'deleteditemreference' },
			objectid_desktopflowbinary: { b: 'objectid_desktopflowbinary', a: '_objectid_value', c: 'desktopflowbinaries', d: 'desktopflowbinary' },
			objectid_desktopflowmodule: { b: 'objectid_desktopflowmodule', a: '_objectid_value', c: 'desktopflowmodules', d: 'desktopflowmodule' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_exportedexcel: { b: 'objectid_exportedexcel', a: '_objectid_value', c: 'exportedexcels', d: 'exportedexcel' },
			objectid_exportsolutionupload: { b: 'objectid_exportsolutionupload', a: '_objectid_value', c: 'exportsolutionuploads', d: 'exportsolutionupload' },
			objectid_flowsession: { b: 'objectid_flowsession', a: '_objectid_value', c: 'flowsessions', d: 'flowsession' },
			objectid_imagedescriptor: { b: 'objectid_imagedescriptor', a: '_objectid_value', c: 'imagedescriptors', d: 'imagedescriptor' },
			objectid_knowledgearticle: { b: 'objectid_knowledgearticle', a: '_objectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			objectid_mailbox: { b: 'objectid_mailbox', a: '_objectid_value', c: 'mailboxes', d: 'mailbox' },
			objectid_msdyn_aibfeedbackloop: { b: 'objectid_msdyn_aibfeedbackloop', a: '_objectid_value', c: 'msdyn_aibfeedbackloops', d: 'msdyn_aibfeedbackloop' },
			objectid_msdyn_aibfile: { b: 'objectid_msdyn_aibfile', a: '_objectid_value', c: 'msdyn_aibfiles', d: 'msdyn_aibfile' },
			objectid_msdyn_aiconfiguration: { b: 'objectid_msdyn_aiconfiguration', a: '_objectid_value', c: 'msdyn_aiconfigurations', d: 'msdyn_aiconfiguration' },
			objectid_msdyn_analysisjob: { b: 'objectid_msdyn_analysisjob', a: '_objectid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob' },
			objectid_msdyn_fileupload: { b: 'objectid_msdyn_fileupload', a: '_objectid_value', c: 'msdyn_fileuploads', d: 'msdyn_fileupload' },
			objectid_msdyn_integratedsearchprovider: { b: 'objectid_msdyn_integratedsearchprovider', a: '_objectid_value', c: 'msdyn_integratedsearchproviders', d: 'msdyn_integratedsearchprovider' },
			objectid_msdyn_kbattachment: { b: 'objectid_msdyn_kbattachment', a: '_objectid_value', c: 'msdyn_kbattachments', d: 'msdyn_kbattachment' },
			objectid_msdyn_knowledgearticleimage: { b: 'objectid_msdyn_knowledgearticleimage', a: '_objectid_value', c: 'msdyn_knowledgearticleimages', d: 'msdyn_knowledgearticleimage' },
			objectid_msdyn_mobileapp: { b: 'objectid_msdyn_mobileapp', a: '_objectid_value', c: 'msdyn_mobileapps', d: 'msdyn_mobileapp' },
			objectid_msdyn_pminferredtask: { b: 'objectid_msdyn_pminferredtask', a: '_objectid_value', c: 'msdyn_pminferredtasks', d: 'msdyn_pminferredtask' },
			objectid_msdyn_richtextfile: { b: 'objectid_msdyn_richtextfile', a: '_objectid_value', c: 'msdyn_richtextfiles', d: 'msdyn_richtextfile' },
			objectid_mspcat_catalogsubmissionfiles: { b: 'objectid_mspcat_catalogsubmissionfiles', a: '_objectid_value', c: 'mspcat_catalogsubmissionfileses', d: 'mspcat_catalogsubmissionfiles' },
			objectid_mspcat_packagestore: { b: 'objectid_mspcat_packagestore', a: '_objectid_value', c: 'mspcat_packagestores', d: 'mspcat_packagestore' },
			objectid_package: { b: 'objectid_package', a: '_objectid_value', c: 'packages', d: 'package' },
			objectid_packagehistory: { b: 'objectid_packagehistory', a: '_objectid_value', c: 'packagehistories', d: 'packagehistory' },
			objectid_pluginpackage: { b: 'objectid_pluginpackage', a: '_objectid_value', c: 'pluginpackages', d: 'pluginpackage' },
			objectid_powerbidataset: { b: 'objectid_powerbidataset', a: '_objectid_value', c: 'powerbidatasets', d: 'powerbidataset' },
			objectid_powerbireport: { b: 'objectid_powerbireport', a: '_objectid_value', c: 'powerbireports', d: 'powerbireport' },
			objectid_powerpagecomponent: { b: 'objectid_powerpagecomponent', a: '_objectid_value', c: 'powerpagecomponents', d: 'powerpagecomponent' },
			objectid_powerpagesitepublished: { b: 'objectid_powerpagesitepublished', a: '_objectid_value', c: 'powerpagesitepublisheds', d: 'powerpagesitepublished' },
			objectid_powerpagesscanreport: { b: 'objectid_powerpagesscanreport', a: '_objectid_value', c: 'powerpagesscanreports', d: 'powerpagesscanreport' },
			objectid_report: { b: 'objectid_report', a: '_objectid_value', c: 'reports', d: 'report' },
			objectid_retaineddataexcel: { b: 'objectid_retaineddataexcel', a: '_objectid_value', c: 'retaineddataexcels', d: 'retaineddataexcel' },
			objectid_revokeinheritedaccessrecordstracker: { b: 'objectid_revokeinheritedaccessrecordstracker', a: '_objectid_value', c: 'revokeinheritedaccessrecordstrackers', d: 'revokeinheritedaccessrecordstracker' },
			objectid_ribbonclientmetadata: { b: 'objectid_ribbonclientmetadata', a: '_objectid_value', c: 'ribbonclientmetadata', d: 'ribbonclientmetadata' },
			objectid_searchcustomanalyzer: { b: 'objectid_searchcustomanalyzer', a: '_objectid_value', c: 'searchcustomanalyzers', d: 'searchcustomanalyzer' },
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
		var fileattachment = {};
		fileattachment.ODataEntity = e;
		fileattachment.FormattedValue = {};
		for (var field in _fileattachment) {
			var a = _fileattachment[field].a;
			var b = _fileattachment[field].b;
			var c = _fileattachment[field].c;
			var d = _fileattachment[field].d;
			var g = _fileattachment[field].g;
			var r = _fileattachment[field].r;
			webApiField(fileattachment, field, e, a, b, c, d, r, u, g);
		}
		fileattachment.Entity = u;
		fileattachment.EntityName = 'fileattachment';
		fileattachment.EntityCollectionName = 'fileattachments';
		fileattachment['@odata.etag'] = e['@odata.etag'];
		fileattachment.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		fileattachment.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
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
		ObjectIdTypeCode : {
		},
		ObjectTypeCode : {
			Khach_hang: 1
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
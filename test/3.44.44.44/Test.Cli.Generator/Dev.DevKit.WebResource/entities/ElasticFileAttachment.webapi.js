'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ElasticFileAttachmentApi = function (e) {
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
		var _elasticfileattachment = {
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ElasticFileAttachmentId: { a: 'elasticfileattachmentid' },
			FileName: { a: 'filename' },
			FilePointer: { a: 'filepointer', r: true },
			FileSizeInBytes: { a: 'filesizeinbytes', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			MimeType: { a: 'mimetype' },
			objectid: { b: 'objectid', a: '_objectid_value', c: 'componentversionnrddatasourceset', d: 'componentversionnrddatasource' },
			objectid_sourcecontrolcomponentpayload: { b: 'objectid_sourcecontrolcomponentpayload', a: '_objectid_value', c: 'sourcecontrolcomponentpayloads', d: 'sourcecontrolcomponentpayload' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			Prefix: { a: 'prefix', r: true },
			RegardingFieldName: { a: 'regardingfieldname' },
			StoragePointer: { a: 'storagepointer', r: true },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var elasticfileattachment = {};
		elasticfileattachment.ODataEntity = e;
		elasticfileattachment.FormattedValue = {};
		for (var field in _elasticfileattachment) {
			var a = _elasticfileattachment[field].a;
			var b = _elasticfileattachment[field].b;
			var c = _elasticfileattachment[field].c;
			var d = _elasticfileattachment[field].d;
			var g = _elasticfileattachment[field].g;
			var r = _elasticfileattachment[field].r;
			webApiField(elasticfileattachment, field, e, a, b, c, d, r, u, g);
		}
		elasticfileattachment.Entity = u;
		elasticfileattachment.EntityName = 'elasticfileattachment';
		elasticfileattachment.EntityCollectionName = 'elasticfileattachments';
		elasticfileattachment['@odata.etag'] = e['@odata.etag'];
		elasticfileattachment.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		elasticfileattachment.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return elasticfileattachment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ElasticFileAttachment = {
		ObjectIdTypeCode : {
		},
		ObjectTypeCode : {
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.flowlogApi = function (e) {
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
		var _flowlog = {
			cloudflowid: { b: 'cloudflowid', a: '_cloudflowid_value', c: 'workflows', d: 'workflow' },
			cloudflowrunid: { b: 'cloudflowrunid', a: '_cloudflowrunid_value', c: 'flowruns', d: 'flowrun' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			data: { a: 'data' },
			desktopflowid: { b: 'desktopflowid', a: '_desktopflowid_value', c: 'workflows', d: 'workflow' },
			flowlogId: { a: 'flowlogid' },
			flowmachinegroupid: { b: 'flowmachinegroupid', a: '_flowmachinegroupid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			flowmachineid: { b: 'flowmachineid', a: '_flowmachineid_value', c: 'flowmachines', d: 'flowmachine' },
			flowsessionid: { b: 'flowsessionid', a: '_flowsessionid_value', c: 'flowsessions', d: 'flowsession' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			level: { a: 'level' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			parentobjectid: { b: 'parentobjectid', a: '_parentobjectid_value', c: 'flowsessions', d: 'flowsession' },
			parentobjectid_workqueue: { b: 'parentobjectid_workqueue', a: '_parentobjectid_value', c: 'workqueues', d: 'workqueue' },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			type: { a: 'type' },
			VersionNumber: { a: 'versionnumber', r: true },
			workqueueid: { b: 'workqueueid', a: '_workqueueid_value', c: 'workqueues', d: 'workqueue' },
			workqueueitemid: { b: 'workqueueitemid', a: '_workqueueitemid_value', c: 'workqueueitems', d: 'workqueueitem' }
		};
		if (e === undefined) e = {};
		var u = {};
		var flowlog = {};
		flowlog.ODataEntity = e;
		flowlog.FormattedValue = {};
		for (var field in _flowlog) {
			var a = _flowlog[field].a;
			var b = _flowlog[field].b;
			var c = _flowlog[field].c;
			var d = _flowlog[field].d;
			var g = _flowlog[field].g;
			var r = _flowlog[field].r;
			webApiField(flowlog, field, e, a, b, c, d, r, u, g);
		}
		flowlog.Entity = u;
		flowlog.EntityName = 'flowlog';
		flowlog.EntityCollectionName = 'flowlogs';
		flowlog['@odata.etag'] = e['@odata.etag'];
		flowlog.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		flowlog.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return flowlog;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowlog = {
		level : {
			Debug: 100000001,
			Error: 100000004,
			Info: 100000002,
			Verbose: 100000000,
			Warning: 100000003
		},
		parentobjectidIdType : {
		},
		type : {
			CustomLog: 100000000,
			DesktopFlowRunAction: 100000001,
			DesktopFlowRunQueueAssigned: 100000004,
			DesktopFlowRunQueueAssignFailed: 100000005,
			DesktopFlowRunQueued: 100000003,
			DesktopFlowRunQueuePriorityChanged: 100000002,
			DesktopFlowRunQueueRunCompleted: 100000007,
			DesktopFlowRunQueueRunConfirmed: 100000006,
			DesktopFlowRunUnattendedRepairUISelectorRequest: 100000100,
			DesktopFlowRunUnattendedRepairUISelectorResponse: 100000101,
			WorkqueueFlowSession: 100000200,
			WorkqueueProcessorLog: 100000201
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
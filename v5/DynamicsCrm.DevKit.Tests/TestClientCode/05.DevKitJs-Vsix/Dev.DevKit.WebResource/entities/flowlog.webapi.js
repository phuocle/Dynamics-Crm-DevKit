'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.flowlogApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _flowlog = {
			cloudflowid: { b: 'cloudflowid', a: '_cloudflowid_value', c: 'workflows', d: 'workflow' },
			cloudflowrunid: { b: 'cloudflowrunid', a: '_cloudflowrunid_value', c: 'flowruns', d: 'flowrun' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			data: { a: 'data' },
			desktopflowid: { b: 'desktopflowid', a: '_desktopflowid_value', c: 'workflows', d: 'workflow' },
			Duration: { a: 'duration', g: 'Integer' },
			flowlogId: { a: 'flowlogid' },
			flowmachinegroupid: { b: 'flowmachinegroupid', a: '_flowmachinegroupid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			flowmachineid: { b: 'flowmachineid', a: '_flowmachineid_value', c: 'flowmachines', d: 'flowmachine' },
			flowsessionid: { b: 'flowsessionid', a: '_flowsessionid_value', c: 'flowsessions', d: 'flowsession' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			InputsLocalizedNames: { a: 'inputslocalizednames' },
			level: { a: 'level', g: 'Integer' },
			LogIndex: { a: 'logindex', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OutputsLocalizedNames: { a: 'outputslocalizednames' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds', g: 'Integer' },
			type: { a: 'type', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' },
			workqueueid: { b: 'workqueueid', a: '_workqueueid_value', c: 'workqueues', d: 'workqueue' },
			workqueueitemid: { b: 'workqueueitemid', a: '_workqueueitemid_value', c: 'workqueueitems', d: 'workqueueitem' }
		};
		if (e === undefined) e = {};
		const u = {};
		const flowlog = {};
		flowlog.ODataEntity = e;
		flowlog.FormattedValue = {};
		for (const field in _flowlog) {
			const fieldConfig = _flowlog[field];
			webApiField(flowlog, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		flowlog.Entity = u;
		flowlog.EntityName = 'flowlog';
		flowlog.EntityCollectionName = 'flowlogs';
		flowlog['@odata.etag'] = e?.['@odata.etag'];
		flowlog.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		flowlog.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return flowlog;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowlog = {
		level: { Debug: 100000001, Error: 100000004, Info: 100000002, Verbose: 100000000, Warning: 100000003 },
		parentobjectidIdType: { },
		type: { CuaHumanInTheLoopRequest: 100000403, CuaReasoningStep: 100000401, CuaStartSession: 100000400, CuaWaitOrCompleteSession: 100000402, CustomLog: 100000000, DesktopFlowOrchestrationRepairSessionMismatchRequest: 100000300, DesktopFlowOrchestrationRepairSessionMismatchResponse: 100000301, DesktopFlowOrchestrationRepairWindowsIdentityIncorrectRequest: 100000310, DesktopFlowOrchestrationRepairWindowsIdentityIncorrectResponse: 100000311, DesktopFlowRunAction: 100000001, DesktopFlowRunQueueAssigned: 100000004, DesktopFlowRunQueueAssignFailed: 100000005, DesktopFlowRunQueued: 100000003, DesktopFlowRunQueuePriorityChanged: 100000002, DesktopFlowRunQueueRunCompleted: 100000007, DesktopFlowRunQueueRunConfirmed: 100000006, DesktopFlowRunUnattendedRepairUISelectorRequest: 100000100, DesktopFlowRunUnattendedRepairUISelectorResponse: 100000101, WorkqueueFlowSession: 100000200, WorkqueueProcessorLog: 100000201 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));
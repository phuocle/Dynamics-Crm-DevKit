'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.WorkflowLogApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _workflowlog = {
			ActivityName: { a: 'activityname' },
			asyncoperationid_asyncoperation: { b: 'asyncoperationid_asyncoperation', a: '_asyncoperationid_value', c: 'asyncoperations', d: 'asyncoperation' },
			asyncoperationid_processsession: { b: 'asyncoperationid_processsession', a: '_asyncoperationid_value', c: 'processsessions', d: 'processsession' },
			childworkflowinstanceid_asyncoperation: { b: 'childworkflowinstanceid_asyncoperation', a: '_childworkflowinstanceid_value', c: 'asyncoperations', d: 'asyncoperation' },
			childworkflowinstanceid_processsession: { b: 'childworkflowinstanceid_processsession', a: '_childworkflowinstanceid_value', c: 'processsessions', d: 'processsession' },
			CompletedOn_UtcDateAndTime: { a: 'completedon' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			Duration: { a: 'duration', r: true },
			ErrorCode: { a: 'errorcode' },
			ErrorText: { a: 'errortext' },
			Inputs: { a: 'inputs', r: true },
			InteractionActivityResult: { a: 'interactionactivityresult' },
			IterationCount: { a: 'iterationcount' },
			Message: { a: 'message' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Outputs: { a: 'outputs', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			RepetitionCount: { a: 'repetitioncount' },
			RepetitionId: { a: 'repetitionid' },
			StageName: { a: 'stagename' },
			StartedOn_UtcDateAndTime: { a: 'startedon' },
			Status: { a: 'status' },
			StepName: { a: 'stepname' },
			WorkflowLogId: { a: 'workflowlogid' }
		};
		if (e === undefined) e = {};
		var u = {};
		var workflowlog = {};
		workflowlog.ODataEntity = e;
		workflowlog.FormattedValue = {};
		for (var field in _workflowlog) {
			var a = _workflowlog[field].a;
			var b = _workflowlog[field].b;
			var c = _workflowlog[field].c;
			var d = _workflowlog[field].d;
			var g = _workflowlog[field].g;
			var r = _workflowlog[field].r;
			webApiField(workflowlog, field, e, a, b, c, d, r, u, g);
		}
		workflowlog.Entity = u;
		workflowlog.EntityName = 'workflowlog';
		workflowlog.EntityCollectionName = 'workflowlogs';
		workflowlog['@odata.etag'] = e['@odata.etag'];
		workflowlog.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		workflowlog.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return workflowlog;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.WorkflowLog = {
		ChildWorkflowInstanceObjectTypeCode : {
			Flow_Session: 4720,
			System_Job: 4700,
			Workflow_Session: 4710
		},
		ObjectTypeCode : {
			Flow_Session: 4720,
			System_Job: 4700,
			Workflow_Session: 4710
		},
		Status : {
			Canceled: 4,
			Failed: 3,
			In_Progress: 1,
			Succeeded: 2,
			Waiting: 5
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
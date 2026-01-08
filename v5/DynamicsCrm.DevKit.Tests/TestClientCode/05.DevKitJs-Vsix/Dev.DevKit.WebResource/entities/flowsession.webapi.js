'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.flowsessionApi = function (e) {
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
		const _flowsession = {
			AdditionalContext_name: { a: 'additionalcontext', r: true },
			CallbackUrl: { a: 'callbackurl' },
			ClientTrackingId: { a: 'clienttrackingid' },
			CompletedOn_UtcDateAndTime: { a: 'completedon', g: 'DateTime' },
			ConnectionId: { a: 'connectionid' },
			Context: { a: 'context' },
			CorrelationId: { a: 'correlationid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Credentials: { a: 'credentials' },
			ErrorCode: { a: 'errorcode' },
			ErrorDetails: { a: 'errordetails' },
			ErrorInnerError: { a: 'errorinnererror' },
			ErrorMessage: { a: 'errormessage' },
			flowsessionId: { a: 'flowsessionid' },
			Gateway: { a: 'gateway' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			Inputs_name: { a: 'inputs', r: true },
			MachineGroupId: { b: 'machinegroupid', a: '_machinegroupid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			MachineId: { b: 'machineid', a: '_machineid_value', c: 'flowmachines', d: 'flowmachine' },
			MachinePercentCpuUsage: { a: 'machinepercentcpuusage', g: 'Number' },
			MachinePercentRamUsage: { a: 'machinepercentramusage', g: 'Number' },
			MachineRamUsage: { a: 'machineramusage', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			Outputs_name: { a: 'outputs', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentCloudFlowRunSequenceId: { a: 'parentcloudflowrunsequenceid' },
			ParentDesktopFlowRunGuid: { a: 'parentdesktopflowrunguid' },
			ParentDesktopFlowRunId: { b: 'parentdesktopflowrunid', a: '_parentdesktopflowrunid_value', c: 'flowsessions', d: 'flowsession' },
			ParentWorkflowId: { a: 'parentworkflowid' },
			ProcessVersion: { a: 'processversion' },
			RegardingObjectId: { b: 'regardingobjectid', a: '_regardingobjectid_value', c: 'workflows', d: 'workflow' },
			RunDetails: { a: 'rundetails' },
			RunDuration: { a: 'runduration', g: 'Integer' },
			RunExecutionDuration: { a: 'runexecutionduration', g: 'Integer' },
			RunMode: { a: 'runmode', g: 'Integer' },
			RunSessionMode: { a: 'runsessionmode', g: 'Integer' },
			RunWaitDuration: { a: 'runwaitduration', g: 'Integer' },
			SessionUsername: { a: 'sessionusername' },
			SessionUserSID: { a: 'sessionusersid' },
			StartedOn_UtcDateAndTime: { a: 'startedon', g: 'DateTime' },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' },
			SubCategory: { a: 'subcategory', g: 'Integer' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			TriggerType: { a: 'triggertype', g: 'Integer' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const flowsession = {};
		flowsession.ODataEntity = e;
		flowsession.FormattedValue = {};
		for (const field in _flowsession) {
			const fieldConfig = _flowsession[field];
			webApiField(flowsession, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		flowsession.Entity = u;
		flowsession.EntityName = 'flowsession';
		flowsession.EntityCollectionName = 'flowsessions';
		flowsession['@odata.etag'] = e?.['@odata.etag'];
		flowsession.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		flowsession.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return flowsession;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowsession = {
		RegardingObjectTypeCode: { },
		RunMode: { Attended: 1, Local: 0, Unattended: 2 },
		RunSessionMode: { Default: 1, PictureInPicture: 2, Unapplicable: 0 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Aborted: 11, Cancelled: 7, Deleted: 13, Failed: 8, Faulted: 9, Ignored: 12, NotSpecified: 0, Paused: 1, Running: 2, Skipped: 5, Succeeded: 4, Suspended: 6, Terminated: 14, TimedOut: 10, Waiting: 3 },
		SubCategory: { Default: 0, Test: 1 },
		TriggerType: { ApiFlow: 0, Cua: 4, DesktopFlow: 1, Local: 2, RunDesktopFlowDataverseApi: 3 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));
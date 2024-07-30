'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.flowsessionApi = function (e) {
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
		var _flowsession = {
			AdditionalContext_name: { a: 'additionalcontext', r: true },
			CallbackUrl: { a: 'callbackurl' },
			CompletedOn_UtcDateAndTime: { a: 'completedon' },
			ConnectionId: { a: 'connectionid' },
			Context: { a: 'context' },
			CorrelationId: { a: 'correlationid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ErrorCode: { a: 'errorcode' },
			ErrorDetails: { a: 'errordetails' },
			ErrorInnerError: { a: 'errorinnererror' },
			ErrorMessage: { a: 'errormessage' },
			flowsessionId: { a: 'flowsessionid' },
			Gateway: { a: 'gateway' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			Inputs_name: { a: 'inputs', r: true },
			MachineGroupId: { b: 'machinegroupid', a: '_machinegroupid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			MachineId: { b: 'machineid', a: '_machineid_value', c: 'flowmachines', d: 'flowmachine' },
			MachinePercentCpuUsage: { a: 'machinepercentcpuusage' },
			MachinePercentRamUsage: { a: 'machinepercentramusage' },
			MachineRamUsage: { a: 'machineramusage' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			Outputs_name: { a: 'outputs', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentCloudFlowRunSequenceId: { a: 'parentcloudflowrunsequenceid' },
			ParentWorkflowId: { a: 'parentworkflowid' },
			ProcessVersion: { a: 'processversion' },
			RegardingObjectId: { b: 'regardingobjectid', a: '_regardingobjectid_value', c: 'workflows', d: 'workflow' },
			RunDetails: { a: 'rundetails' },
			RunDuration: { a: 'runduration' },
			RunExecutionDuration: { a: 'runexecutionduration' },
			RunMode: { a: 'runmode' },
			RunSessionMode: { a: 'runsessionmode' },
			RunWaitDuration: { a: 'runwaitduration' },
			SessionUsername: { a: 'sessionusername' },
			SessionUserSID: { a: 'sessionusersid' },
			StartedOn_UtcDateAndTime: { a: 'startedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TriggerType: { a: 'triggertype' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var flowsession = {};
		flowsession.ODataEntity = e;
		flowsession.FormattedValue = {};
		for (var field in _flowsession) {
			var a = _flowsession[field].a;
			var b = _flowsession[field].b;
			var c = _flowsession[field].c;
			var d = _flowsession[field].d;
			var g = _flowsession[field].g;
			var r = _flowsession[field].r;
			webApiField(flowsession, field, e, a, b, c, d, r, u, g);
		}
		flowsession.Entity = u;
		flowsession.EntityName = 'flowsession';
		flowsession.EntityCollectionName = 'flowsessions';
		flowsession['@odata.etag'] = e['@odata.etag'];
		flowsession.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		flowsession.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return flowsession;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowsession = {
		RegardingObjectTypeCode : {
		},
		RunMode : {
			Co_giam_sat: 1,
			Cuc_bo: 0,
			Khong_giam_sat: 2
		},
		RunSessionMode : {
			Hinh_trong_hinh: 2,
			Khong_the_ap_dung: 0,
			Mac_dinh: 1
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Bi_loi: 9,
			Da_bo_qua_12: 12,
			Da_bo_qua_5: 5,
			Da_cham_dut: 14,
			Da_het_thoi_gian_cho: 10,
			Da_huy: 7,
			Da_huy_bo: 11,
			Da_tam_dung: 1,
			Da_thanh_cong: 4,
			Da_treo: 6,
			Da_xoa: 13,
			Dang_chay: 2,
			Dang_cho: 3,
			Khong_chi_dinh: 0,
			Khong_thanh_cong: 8
		},
		TriggerType : {
			ApiFlow: 0,
			Cuc_bo: 2,
			DesktopFlow: 1,
			RunDesktopFlowDataverseApi: 3
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
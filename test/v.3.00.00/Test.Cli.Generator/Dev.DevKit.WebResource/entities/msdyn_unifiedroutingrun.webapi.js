'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_unifiedroutingrunApi = function (e) {
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
		var _msdyn_unifiedroutingrun = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_assignedagent: { b: 'msdyn_assignedagent', a: '_msdyn_assignedagent_value', c: 'systemusers', d: 'systemuser' },
			msdyn_endtime_UtcDateAndTime: { a: 'msdyn_endtime' },
			msdyn_liveworkitem: { b: 'msdyn_liveworkitem', a: '_msdyn_liveworkitem_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_queue: { b: 'msdyn_queue', a: '_msdyn_queue_value', c: 'queues', d: 'queue' },
			msdyn_routingduration: { a: 'msdyn_routingduration', r: true },
			msdyn_routingdurationinseconds: { a: 'msdyn_routingdurationinseconds' },
			msdyn_routingstatus: { a: 'msdyn_routingstatus' },
			msdyn_runnumber: { a: 'msdyn_runnumber' },
			msdyn_starttime_UtcDateAndTime: { a: 'msdyn_starttime' },
			msdyn_targetobject_msdyn_ocliveworkitem: { b: 'msdyn_targetobject_msdyn_ocliveworkitem', a: '_msdyn_targetobject_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			msdyn_targetobject_queueitem: { b: 'msdyn_targetobject_queueitem', a: '_msdyn_targetobject_value', c: 'queueitems', d: 'queueitem' },
			msdyn_unifiedroutingrunId: { a: 'msdyn_unifiedroutingrunid' },
			msdyn_workstream: { b: 'msdyn_workstream', a: '_msdyn_workstream_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_unifiedroutingrun = {};
		msdyn_unifiedroutingrun.ODataEntity = e;
		msdyn_unifiedroutingrun.FormattedValue = {};
		for (var field in _msdyn_unifiedroutingrun) {
			var a = _msdyn_unifiedroutingrun[field].a;
			var b = _msdyn_unifiedroutingrun[field].b;
			var c = _msdyn_unifiedroutingrun[field].c;
			var d = _msdyn_unifiedroutingrun[field].d;
			var g = _msdyn_unifiedroutingrun[field].g;
			var r = _msdyn_unifiedroutingrun[field].r;
			webApiField(msdyn_unifiedroutingrun, field, e, a, b, c, d, r, u, g);
		}
		msdyn_unifiedroutingrun.Entity = u;
		msdyn_unifiedroutingrun.EntityName = 'msdyn_unifiedroutingrun';
		msdyn_unifiedroutingrun.EntityCollectionName = 'msdyn_unifiedroutingruns';
		msdyn_unifiedroutingrun['@odata.etag'] = e['@odata.etag'];
		msdyn_unifiedroutingrun.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_unifiedroutingrun.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_unifiedroutingrun;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_unifiedroutingrun = {
		msdyn_routingstatus : {
			Agent_assignment_completed: 100000006,
			Intake_rules_completed: 100000000,
			Queue_Assignment_rules_completed: 100000005,
			Queue_Assignment_selection_rules_completed: 100000004,
			Queue_Prioritization_rules_completed: 100000003,
			Workstream_Classification_rules_processing: 100000001,
			Workstream_Route_to_queue_rules_completed: 100000002
		},
		msdyn_targetobjectIdType : {
		},
		OwnerIdType : {
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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
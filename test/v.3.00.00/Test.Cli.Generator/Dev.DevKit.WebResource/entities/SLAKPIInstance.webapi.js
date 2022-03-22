'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SLAKPIInstanceApi = function (e) {
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
		var _slakpiinstance = {
			ApplicableFromValue_UtcDateAndTime: { a: 'applicablefromvalue' },
			ComputedFailureTime_UtcDateAndTime: { a: 'computedfailuretime' },
			ComputedWarningTime_UtcDateAndTime: { a: 'computedwarningtime' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ElapsedTime: { a: 'elapsedtime' },
			ExchangeRate: { a: 'exchangerate', r: true },
			FailureTime_UtcDateAndTime: { a: 'failuretime' },
			LastResumeTime_UtcDateAndTime: { a: 'lastresumetime' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ActionExecutionStatus: { a: 'msdyn_actionexecutionstatus' },
			msdyn_calendarid: { a: 'msdyn_calendarid' },
			msdyn_prevslakpiinstanceid: { a: 'msdyn_prevslakpiinstanceid' },
			msdyn_slaitemid: { b: 'msdyn_slaitemid', a: '_msdyn_slaitemid_value', c: 'slaitems', d: 'slaitem' },
			Name: { a: 'name' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit' },
			PausedOn_UtcDateAndTime: { a: 'pausedon' },
			Regarding: { b: 'regarding', a: '_regarding_value', c: 'incidents', d: 'incident' },
			RegardingEntityID: { a: 'regardingentityid' },
			SLAKPIInstanceId: { a: 'slakpiinstanceid' },
			Status: { a: 'status' },
			SucceededOn_UtcDateAndTime: { a: 'succeededon' },
			SuccessCheckedAt_TimezoneDateAndTime: { a: 'successcheckedat' },
			TerminalStateReached: { a: 'terminalstatereached' },
			TerminalStateTime_UtcDateAndTime: { a: 'terminalstatetime' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			VersionNumber: { a: 'versionnumber', r: true },
			WarningTime_UtcDateAndTime: { a: 'warningtime' },
			WarningTimeReached: { a: 'warningtimereached' }
		};
		if (e === undefined) e = {};
		var u = {};
		var slakpiinstance = {};
		slakpiinstance.ODataEntity = e;
		slakpiinstance.FormattedValue = {};
		for (var field in _slakpiinstance) {
			var a = _slakpiinstance[field].a;
			var b = _slakpiinstance[field].b;
			var c = _slakpiinstance[field].c;
			var d = _slakpiinstance[field].d;
			var g = _slakpiinstance[field].g;
			var r = _slakpiinstance[field].r;
			webApiField(slakpiinstance, field, e, a, b, c, d, r, u, g);
		}
		slakpiinstance.Entity = u;
		slakpiinstance.EntityName = 'slakpiinstance';
		slakpiinstance.EntityCollectionName = 'slakpiinstances';
		slakpiinstance['@odata.etag'] = e['@odata.etag'];
		slakpiinstance.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		slakpiinstance.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return slakpiinstance;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SLAKPIInstance = {
		msdyn_ActionExecutionStatus : {
			None: 0,
			Success: 2,
			Warning: 1
		},
		Status : {
			Canceled: 5,
			In_Progress: 0,
			Nearing_Noncompliance: 2,
			Noncompliant: 1,
			Paused: 3,
			Succeeded: 4
		},
		WarningTimeReached : {
			No: 0,
			Yes: 1
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
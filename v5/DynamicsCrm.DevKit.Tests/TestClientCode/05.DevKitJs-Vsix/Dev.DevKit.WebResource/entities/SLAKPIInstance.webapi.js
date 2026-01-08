'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.SLAKPIInstanceApi = function (e) {
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
		const _slakpiinstance = {
			ApplicableFromValue_UtcDateAndTime: { a: 'applicablefromvalue', g: 'DateTime' },
			ComputedFailureTime_UtcDateAndTime: { a: 'computedfailuretime', g: 'DateTime' },
			ComputedWarningTime_UtcDateAndTime: { a: 'computedwarningtime', g: 'DateTime' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ElapsedTime: { a: 'elapsedtime', g: 'Integer' },
			ExchangeRate: { a: 'exchangerate', r: true, g: 'Number' },
			FailureTime_UtcDateAndTime: { a: 'failuretime', g: 'DateTime' },
			LastResumeTime_UtcDateAndTime: { a: 'lastresumetime', g: 'DateTime' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ActionExecutionStatus: { a: 'msdyn_actionexecutionstatus', g: 'Integer' },
			msdyn_activeduration: { a: 'msdyn_activeduration', g: 'Integer' },
			msdyn_calendarid: { a: 'msdyn_calendarid' },
			msdyn_prevslakpiinstanceid: { a: 'msdyn_prevslakpiinstanceid' },
			msdyn_slaitemid: { b: 'msdyn_slaitemid', a: '_msdyn_slaitemid_value', c: 'slaitems', d: 'slaitem' },
			Name: { a: 'name' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit' },
			PausedOn_UtcDateAndTime: { a: 'pausedon', g: 'DateTime' },
			RegardingEntityID: { a: 'regardingentityid' },
			SLAKPIInstanceId: { a: 'slakpiinstanceid' },
			Status: { a: 'status', g: 'Integer' },
			SucceededOn_UtcDateAndTime: { a: 'succeededon', g: 'DateTime' },
			SuccessCheckedAt_TimezoneDateAndTime: { a: 'successcheckedat', g: 'DateTime' },
			TerminalStateReached: { a: 'terminalstatereached', g: 'Boolean' },
			TerminalStateTime_UtcDateAndTime: { a: 'terminalstatetime', g: 'DateTime' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' },
			WarningTime_UtcDateAndTime: { a: 'warningtime', g: 'DateTime' },
			WarningTimeReached: { a: 'warningtimereached', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const slakpiinstance = {};
		slakpiinstance.ODataEntity = e;
		slakpiinstance.FormattedValue = {};
		for (const field in _slakpiinstance) {
			const fieldConfig = _slakpiinstance[field];
			webApiField(slakpiinstance, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		slakpiinstance.Entity = u;
		slakpiinstance.EntityName = 'slakpiinstance';
		slakpiinstance.EntityCollectionName = 'slakpiinstances';
		slakpiinstance['@odata.etag'] = e?.['@odata.etag'];
		slakpiinstance.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		slakpiinstance.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return slakpiinstance;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SLAKPIInstance = {
		msdyn_ActionExecutionStatus: { None: 0, Success: 2, Warning: 1 },
		RegardingObjectTypeCode: { },
		Status: { Canceled: 5, In_Progress: 0, Nearing_Noncompliance: 2, Noncompliant: 1, Paused: 3, Succeeded: 4 },
		WarningTimeReached: { No: 0, Yes: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));
'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.ProcessSessionApi = function (e) {
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
		const _processsession = {
			ActivityName: { a: 'activityname' },
			CanceledBy: { b: 'canceledby', a: '_canceledby_value', c: 'systemusers', d: 'systemuser', r: true },
			CanceledOn_UtcDateAndTime: { a: 'canceledon', g: 'DateTime' },
			Comments: { a: 'comments' },
			CompletedBy: { b: 'completedby', a: '_completedby_value', c: 'systemusers', d: 'systemuser', r: true },
			CompletedOn_UtcDateAndTime: { a: 'completedon', g: 'DateTime' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ErrorCode: { a: 'errorcode', g: 'Integer' },
			ExecutedBy: { b: 'executedby', a: '_executedby_value', c: 'systemusers', d: 'systemuser' },
			ExecutedOn_UtcDateAndTime: { a: 'executedon', r: true, g: 'DateTime' },
			InputArguments: { a: 'inputarguments' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NextLinkedSessionId: { b: 'nextlinkedsessionid', a: '_nextlinkedsessionid_value', c: 'processsessions', d: 'processsession' },
			OriginatingSessionId: { b: 'originatingsessionid', a: '_originatingsessionid_value', c: 'processsessions', d: 'processsession' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PreviousLinkedSessionId: { b: 'previouslinkedsessionid', a: '_previouslinkedsessionid_value', c: 'processsessions', d: 'processsession' },
			ProcessId: { b: 'processid', a: '_processid_value', c: 'workflows', d: 'workflow' },
			ProcessSessionId: { a: 'processsessionid' },
			ProcessStageName: { a: 'processstagename' },
			ProcessState: { a: 'processstate' },
			ProtectionKey: { a: 'protectionkey', r: true },
			StartedBy: { b: 'startedby', a: '_startedby_value', c: 'systemusers', d: 'systemuser', r: true },
			StartedOn_UtcDateAndTime: { a: 'startedon', g: 'DateTime' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			StepName: { a: 'stepname' }
		};
		if (e === undefined) e = {};
		const u = {};
		const processsession = {};
		processsession.ODataEntity = e;
		processsession.FormattedValue = {};
		for (const field in _processsession) {
			const fieldConfig = _processsession[field];
			webApiField(processsession, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		processsession.Entity = u;
		processsession.EntityName = 'processsession';
		processsession.EntityCollectionName = 'processsessions';
		processsession['@odata.etag'] = e?.['@odata.etag'];
		processsession.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		processsession.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return processsession;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.ProcessSession = {
		RegardingObjectTypeCode: { },
		StateCode: { Complete: 1, Incomplete: 0 },
		StatusCode: { Canceled: 5, Completed: 4, Failed: 6, In_Progress: 2, Not_Started: 1, Paused: 3 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));
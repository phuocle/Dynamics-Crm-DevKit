'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.msdyn_solutionhistoryApi = function (e) {
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
		const _msdyn_solutionhistory = {
			msdyn_activityid: { a: 'msdyn_activityid' },
			msdyn_correlationid: { a: 'msdyn_correlationid' },
			msdyn_endtime_UtcDateAndTime: { a: 'msdyn_endtime', g: 'DateTime' },
			msdyn_errorcode: { a: 'msdyn_errorcode' },
			msdyn_exceptionmessage: { a: 'msdyn_exceptionmessage' },
			msdyn_exceptionstack: { a: 'msdyn_exceptionstack' },
			msdyn_ismanaged: { a: 'msdyn_ismanaged', g: 'Boolean' },
			msdyn_isoverwritecustomizations: { a: 'msdyn_isoverwritecustomizations', g: 'Boolean' },
			msdyn_ispatch: { a: 'msdyn_ispatch', g: 'Boolean' },
			msdyn_maxretries: { a: 'msdyn_maxretries', g: 'Integer' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_operation: { a: 'msdyn_operation', g: 'Integer' },
			msdyn_packagename: { a: 'msdyn_packagename' },
			msdyn_packageversion: { a: 'msdyn_packageversion' },
			msdyn_publisherid: { a: 'msdyn_publisherid' },
			msdyn_publishername: { a: 'msdyn_publishername' },
			msdyn_result: { a: 'msdyn_result', g: 'Boolean' },
			msdyn_retrycount: { a: 'msdyn_retrycount', g: 'Integer' },
			msdyn_solutionhistorydescription: { a: 'msdyn_solutionhistorydescription' },
			msdyn_solutionhistoryId: { a: 'msdyn_solutionhistoryid' },
			msdyn_solutionid: { a: 'msdyn_solutionid' },
			msdyn_solutionversion: { a: 'msdyn_solutionversion' },
			msdyn_starttime_UtcDateAndTime: { a: 'msdyn_starttime', g: 'DateTime' },
			msdyn_status: { a: 'msdyn_status', g: 'Integer' },
			msdyn_suboperation: { a: 'msdyn_suboperation', g: 'Integer' },
			msdyn_totaltime: { a: 'msdyn_totaltime', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const msdyn_solutionhistory = {};
		msdyn_solutionhistory.ODataEntity = e;
		msdyn_solutionhistory.FormattedValue = {};
		for (const field in _msdyn_solutionhistory) {
			const fieldConfig = _msdyn_solutionhistory[field];
			webApiField(msdyn_solutionhistory, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		msdyn_solutionhistory.Entity = u;
		msdyn_solutionhistory.EntityName = 'msdyn_solutionhistory';
		msdyn_solutionhistory.EntityCollectionName = 'msdyn_solutionhistories';
		msdyn_solutionhistory['@odata.etag'] = e?.['@odata.etag'];
		msdyn_solutionhistory.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		msdyn_solutionhistory.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return msdyn_solutionhistory;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.msdyn_solutionhistory = {
		msdyn_operation: { Export: 2, ExportLite: 10, Import: 0, ImportTranslation: 6, LanguageProvision: 5, None: 9, Publish: 3, PublishAll: 4, RibbonMetadataGeneration: 7, Uninstall: 1, UpdatingMissingPackages: 11, WorkflowSetState: 8 },
		msdyn_status: { Completed: 1, Queued: 2, Started: 0 },
		msdyn_suboperation: { Delete: 4, FailedInstallingMissingPackages: 8, InlineUpgrade: 5, InstalledMissingPackages: 7, New: 1, None: 0, Update: 3, Upgrade: 2, WaitingForMissingPackages: 6 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));
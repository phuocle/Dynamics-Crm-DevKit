'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.msdyn_solutioncomponentsummaryApi = function (e) {
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
		const _msdyn_solutioncomponentsummary = {
			msdyn_canvasappuniqueid: { a: 'msdyn_canvasappuniqueid' },
			msdyn_componentlogicalname: { a: 'msdyn_componentlogicalname' },
			msdyn_componenttype: { a: 'msdyn_componenttype', g: 'Number' },
			msdyn_componenttypename: { a: 'msdyn_componenttypename' },
			msdyn_connectorinternalid: { a: 'msdyn_connectorinternalid' },
			msdyn_createdon: { a: 'msdyn_createdon' },
			msdyn_culture: { a: 'msdyn_culture' },
			msdyn_deployment: { a: 'msdyn_deployment' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_displayname: { a: 'msdyn_displayname' },
			msdyn_eventhandler: { a: 'msdyn_eventhandler' },
			msdyn_executionorder: { a: 'msdyn_executionorder' },
			msdyn_executionstage: { a: 'msdyn_executionstage' },
			msdyn_fieldsecurity: { a: 'msdyn_fieldsecurity' },
			msdyn_fieldtype: { a: 'msdyn_fieldtype' },
			msdyn_hasactivecustomization: { a: 'msdyn_hasactivecustomization' },
			msdyn_isappaware: { a: 'msdyn_isappaware' },
			msdyn_isappawarename: { a: 'msdyn_isappawarename' },
			msdyn_isauditenabled: { a: 'msdyn_isauditenabled' },
			msdyn_isauditenabledname: { a: 'msdyn_isauditenabledname' },
			msdyn_iscustom: { a: 'msdyn_iscustom' },
			msdyn_iscustomizable: { a: 'msdyn_iscustomizable' },
			msdyn_iscustomizablename: { a: 'msdyn_iscustomizablename' },
			msdyn_iscustomname: { a: 'msdyn_iscustomname' },
			msdyn_isdefault: { a: 'msdyn_isdefault' },
			msdyn_isdefaultname: { a: 'msdyn_isdefaultname' },
			msdyn_ismanaged: { a: 'msdyn_ismanaged' },
			msdyn_ismanagedname: { a: 'msdyn_ismanagedname' },
			msdyn_isolationmode: { a: 'msdyn_isolationmode' },
			msdyn_istableenabled: { a: 'msdyn_istableenabled' },
			msdyn_lcid: { a: 'msdyn_lcid', g: 'Number' },
			msdyn_logicalcollectionname: { a: 'msdyn_logicalcollectionname' },
			msdyn_modifiedon: { a: 'msdyn_modifiedon' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_objectid: { a: 'msdyn_objectid' },
			msdyn_objecttypecode: { a: 'msdyn_objecttypecode' },
			msdyn_owner: { a: 'msdyn_owner' },
			msdyn_owningbusinessunit: { a: 'msdyn_owningbusinessunit' },
			msdyn_primaryentityname: { a: 'msdyn_primaryentityname' },
			msdyn_primaryidattribute: { a: 'msdyn_primaryidattribute' },
			msdyn_publickeytoken: { a: 'msdyn_publickeytoken' },
			msdyn_relatedentity: { a: 'msdyn_relatedentity' },
			msdyn_relatedentityattribute: { a: 'msdyn_relatedentityattribute' },
			msdyn_schemaname: { a: 'msdyn_schemaname' },
			msdyn_sdkmessagename: { a: 'msdyn_sdkmessagename' },
			msdyn_solutioncomponentsummaryId: { a: 'msdyn_solutioncomponentsummaryid' },
			msdyn_solutionid: { a: 'msdyn_solutionid' },
			msdyn_standardstatus: { a: 'msdyn_standardstatus' },
			msdyn_status: { a: 'msdyn_status' },
			msdyn_statusname: { a: 'msdyn_statusname' },
			msdyn_subtype: { a: 'msdyn_subtype' },
			msdyn_synctoexternalsearchindex: { a: 'msdyn_synctoexternalsearchindex' },
			msdyn_total: { a: 'msdyn_total', g: 'Number' },
			msdyn_typename: { a: 'msdyn_typename' },
			msdyn_uniquename: { a: 'msdyn_uniquename' },
			msdyn_version: { a: 'msdyn_version' },
			msdyn_workflowcategory: { a: 'msdyn_workflowcategory' },
			msdyn_workflowcategoryname: { a: 'msdyn_workflowcategoryname' },
			msdyn_workflowidunique: { a: 'msdyn_workflowidunique' },
			OrganizationId: { a: 'organizationid', r: true }
		};
		if (e === undefined) e = {};
		const u = {};
		const msdyn_solutioncomponentsummary = {};
		msdyn_solutioncomponentsummary.ODataEntity = e;
		msdyn_solutioncomponentsummary.FormattedValue = {};
		for (const field in _msdyn_solutioncomponentsummary) {
			const fieldConfig = _msdyn_solutioncomponentsummary[field];
			webApiField(msdyn_solutioncomponentsummary, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		msdyn_solutioncomponentsummary.Entity = u;
		msdyn_solutioncomponentsummary.EntityName = 'msdyn_solutioncomponentsummary';
		msdyn_solutioncomponentsummary.EntityCollectionName = 'msdyn_solutioncomponentsummaries';
		msdyn_solutioncomponentsummary['@odata.etag'] = e?.['@odata.etag'];
		msdyn_solutioncomponentsummary.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		msdyn_solutioncomponentsummary.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return msdyn_solutioncomponentsummary;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_solutioncomponentsummary = {
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));
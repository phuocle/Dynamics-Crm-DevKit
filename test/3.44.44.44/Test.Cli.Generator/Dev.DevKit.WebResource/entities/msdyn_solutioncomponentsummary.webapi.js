'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_solutioncomponentsummaryApi = function (e) {
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
		var _msdyn_solutioncomponentsummary = {
			msdyn_canvasappuniqueid: { a: 'msdyn_canvasappuniqueid' },
			msdyn_componentlogicalname: { a: 'msdyn_componentlogicalname' },
			msdyn_componenttype: { a: 'msdyn_componenttype' },
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
			msdyn_lcid: { a: 'msdyn_lcid' },
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
			msdyn_total: { a: 'msdyn_total' },
			msdyn_typename: { a: 'msdyn_typename' },
			msdyn_uniquename: { a: 'msdyn_uniquename' },
			msdyn_version: { a: 'msdyn_version' },
			msdyn_workflowcategory: { a: 'msdyn_workflowcategory' },
			msdyn_workflowcategoryname: { a: 'msdyn_workflowcategoryname' },
			msdyn_workflowidunique: { a: 'msdyn_workflowidunique' },
			OrganizationId: { a: 'organizationid', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_solutioncomponentsummary = {};
		msdyn_solutioncomponentsummary.ODataEntity = e;
		msdyn_solutioncomponentsummary.FormattedValue = {};
		for (var field in _msdyn_solutioncomponentsummary) {
			var a = _msdyn_solutioncomponentsummary[field].a;
			var b = _msdyn_solutioncomponentsummary[field].b;
			var c = _msdyn_solutioncomponentsummary[field].c;
			var d = _msdyn_solutioncomponentsummary[field].d;
			var g = _msdyn_solutioncomponentsummary[field].g;
			var r = _msdyn_solutioncomponentsummary[field].r;
			webApiField(msdyn_solutioncomponentsummary, field, e, a, b, c, d, r, u, g);
		}
		msdyn_solutioncomponentsummary.Entity = u;
		msdyn_solutioncomponentsummary.EntityName = 'msdyn_solutioncomponentsummary';
		msdyn_solutioncomponentsummary.EntityCollectionName = 'msdyn_solutioncomponentsummaries';
		msdyn_solutioncomponentsummary['@odata.etag'] = e['@odata.etag'];
		msdyn_solutioncomponentsummary.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_solutioncomponentsummary.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_solutioncomponentsummary;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_solutioncomponentsummary = {
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
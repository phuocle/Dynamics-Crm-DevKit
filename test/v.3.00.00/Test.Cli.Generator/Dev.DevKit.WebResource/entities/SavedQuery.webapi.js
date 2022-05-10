'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SavedQueryApi = function (e) {
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
		var _savedquery = {
			AdvancedGroupBy: { a: 'advancedgroupby' },
			CanBeDeleted: { a: 'canbedeleted' },
			ColumnSetXml: { a: 'columnsetxml' },
			ComponentState: { a: 'componentstate', r: true },
			ConditionalFormatting: { a: 'conditionalformatting' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			FetchXml: { a: 'fetchxml' },
			IntroducedVersion: { a: 'introducedversion' },
			IsCustom: { a: 'iscustom', r: true },
			IsCustomizable: { a: 'iscustomizable' },
			IsDefault: { a: 'isdefault' },
			IsManaged: { a: 'ismanaged', r: true },
			IsPrivate: { a: 'isprivate', r: true },
			IsQuickFindQuery: { a: 'isquickfindquery' },
			IsUserDefined: { a: 'isuserdefined', r: true },
			LayoutJson: { a: 'layoutjson' },
			LayoutXml: { a: 'layoutxml' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OfflineSqlQuery: { a: 'offlinesqlquery' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OrganizationTabOrder: { a: 'organizationtaborder', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			QueryAPI: { a: 'queryapi', r: true },
			QueryAppUsage: { a: 'queryappusage' },
			QueryType: { a: 'querytype' },
			SavedQueryId: { a: 'savedqueryid' },
			SavedQueryIdUnique: { a: 'savedqueryidunique', r: true },
			SolutionId: { a: 'solutionid', r: true },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var savedquery = {};
		savedquery.ODataEntity = e;
		savedquery.FormattedValue = {};
		for (var field in _savedquery) {
			var a = _savedquery[field].a;
			var b = _savedquery[field].b;
			var c = _savedquery[field].c;
			var d = _savedquery[field].d;
			var g = _savedquery[field].g;
			var r = _savedquery[field].r;
			webApiField(savedquery, field, e, a, b, c, d, r, u, g);
		}
		savedquery.Entity = u;
		savedquery.EntityName = 'savedquery';
		savedquery.EntityCollectionName = 'savedqueries';
		savedquery['@odata.etag'] = e['@odata.etag'];
		savedquery.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		savedquery.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return savedquery;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SavedQuery = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		ReturnedTypeCode : {
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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
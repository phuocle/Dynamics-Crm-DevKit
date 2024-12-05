'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PrivilegeCheckerLogApi = function (e) {
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
		var _privilegecheckerlog = {
			CheckedPrivilege: { b: 'CheckedPrivilege', a: '_checkedprivilege_value', c: 'privileges', d: 'privilege', r: true },
			CheckedUser: { b: 'CheckedUser', a: '_checkeduser_value', c: 'systemusers', d: 'systemuser', r: true },
			CheckType: { a: 'checktype', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImpersonatingUser: { b: 'ImpersonatingUser', a: '_impersonatinguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PrivilegeCheckerLogId: { a: 'privilegecheckerlogid', r: true },
			PrivilegeCheckerRunId: { b: 'PrivilegeCheckerRunId', a: '_privilegecheckerrunid_value', c: 'privilegecheckerruns', d: 'privilegecheckerrun' },
			PrivilegeDepth: { a: 'privilegedepth', r: true },
			PrivilegeName: { a: 'privilegename', r: true },
			Request: { a: 'request', r: true },
			statecode: { a: 'statecode', r: true },
			statuscode: { a: 'statuscode', r: true },
			SupportingCaller: { b: 'SupportingCaller', a: '_supportingcaller_value', c: 'systemusers', d: 'systemuser', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', r: true },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var privilegecheckerlog = {};
		privilegecheckerlog.ODataEntity = e;
		privilegecheckerlog.FormattedValue = {};
		for (var field in _privilegecheckerlog) {
			var a = _privilegecheckerlog[field].a;
			var b = _privilegecheckerlog[field].b;
			var c = _privilegecheckerlog[field].c;
			var d = _privilegecheckerlog[field].d;
			var g = _privilegecheckerlog[field].g;
			var r = _privilegecheckerlog[field].r;
			webApiField(privilegecheckerlog, field, e, a, b, c, d, r, u, g);
		}
		privilegecheckerlog.Entity = u;
		privilegecheckerlog.EntityName = 'privilegecheckerlog';
		privilegecheckerlog.EntityCollectionName = 'privilegecheckerlogs';
		privilegecheckerlog['@odata.etag'] = e['@odata.etag'];
		privilegecheckerlog.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		privilegecheckerlog.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return privilegecheckerlog;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PrivilegeCheckerLog = {
		CheckType : {
			Access_check: 2,
			Privilege_Check: 1
		},
		PrivilegeDepth : {
			Basic: 0,
			Deep: 2,
			Global: 3,
			Local: 1,
			NA: 5,
			Record_Filter: 4
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
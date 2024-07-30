'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.organizationdatasyncfnostateApi = function (e) {
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
		var _organizationdatasyncfnostate = {
			continuefromlastdeltasync: { a: 'continuefromlastdeltasync' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			currentfullsyncfetchxml: { a: 'currentfullsyncfetchxml' },
			currentfullsyncstate: { a: 'currentfullsyncstate' },
			entityname: { b: 'entityname', a: '_entityname_value', c: 'organizationdatasyncsubscriptionfnotables', d: 'organizationdatasyncsubscriptionfnotable' },
			fullsynconly: { a: 'fullsynconly' },
			fullsyncpagesdata: { a: 'fullsyncpagesdata' },
			implicitlastdataversion: { a: 'implicitlastdataversion' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			lastdataversion: { a: 'lastdataversion' },
			lastmetadataversion: { a: 'lastmetadataversion' },
			lockexpiretimestamp_UtcDateAndTime: { a: 'lockexpiretimestamp' },
			lockowner: { a: 'lockowner' },
			minactiverowversion: { a: 'minactiverowversion' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			nullstatedate_UtcDateOnly: { a: 'nullstatedate' },
			organizationdatasyncfnostateId: { a: 'organizationdatasyncfnostateid' },
			organizationdatasyncsubscriptionid: { b: 'organizationdatasyncsubscriptionid', a: '_organizationdatasyncsubscriptionid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			pagenumber: { a: 'pagenumber' },
			paginationcookie: { a: 'paginationcookie' },
			pagingcookie: { a: 'pagingcookie' },
			partitionid: { a: 'partitionid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			usepagingcookiemax: { a: 'usepagingcookiemax' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var organizationdatasyncfnostate = {};
		organizationdatasyncfnostate.ODataEntity = e;
		organizationdatasyncfnostate.FormattedValue = {};
		for (var field in _organizationdatasyncfnostate) {
			var a = _organizationdatasyncfnostate[field].a;
			var b = _organizationdatasyncfnostate[field].b;
			var c = _organizationdatasyncfnostate[field].c;
			var d = _organizationdatasyncfnostate[field].d;
			var g = _organizationdatasyncfnostate[field].g;
			var r = _organizationdatasyncfnostate[field].r;
			webApiField(organizationdatasyncfnostate, field, e, a, b, c, d, r, u, g);
		}
		organizationdatasyncfnostate.Entity = u;
		organizationdatasyncfnostate.EntityName = 'organizationdatasyncfnostate';
		organizationdatasyncfnostate.EntityCollectionName = 'organizationdatasyncfnostates';
		organizationdatasyncfnostate['@odata.etag'] = e['@odata.etag'];
		organizationdatasyncfnostate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		organizationdatasyncfnostate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return organizationdatasyncfnostate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.organizationdatasyncfnostate = {
		currentfullsyncstate : {
			AcceptMerge: 5,
			Completed: 3,
			Failed: 6,
			Initiating: 1,
			InProgress: 2,
			Invalid: 4,
			NotInitialized: 0
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
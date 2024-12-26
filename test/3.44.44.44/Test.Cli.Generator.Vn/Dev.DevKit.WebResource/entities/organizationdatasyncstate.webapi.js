'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.organizationdatasyncstateApi = function (e) {
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
		var _organizationdatasyncstate = {
			continuefromlastdeltasync: { a: 'continuefromlastdeltasync' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			currentfullsyncfetchxml: { a: 'currentfullsyncfetchxml' },
			currentfullsyncstate: { a: 'currentfullsyncstate' },
			entityname: { b: 'entityname', a: '_entityname_value', c: 'organizationdatasyncsubscriptionentities', d: 'organizationdatasyncsubscriptionentity' },
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
			organizationdatasyncstateId: { a: 'organizationdatasyncstateid' },
			organizationdatasyncsubscriptionid: { b: 'organizationdatasyncsubscriptionid', a: '_organizationdatasyncsubscriptionid_value', c: 'organizationdatasyncsubscriptions', d: 'organizationdatasyncsubscription' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			pagenumber: { a: 'pagenumber' },
			paginationcookie: { a: 'paginationcookie' },
			pagingcookie: { a: 'pagingcookie' },
			partitionid: { a: 'partitionid' },
			partitionssyncstatedata: { a: 'partitionssyncstatedata' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			usepagingcookiemax: { a: 'usepagingcookiemax' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var organizationdatasyncstate = {};
		organizationdatasyncstate.ODataEntity = e;
		organizationdatasyncstate.FormattedValue = {};
		for (var field in _organizationdatasyncstate) {
			var a = _organizationdatasyncstate[field].a;
			var b = _organizationdatasyncstate[field].b;
			var c = _organizationdatasyncstate[field].c;
			var d = _organizationdatasyncstate[field].d;
			var g = _organizationdatasyncstate[field].g;
			var r = _organizationdatasyncstate[field].r;
			webApiField(organizationdatasyncstate, field, e, a, b, c, d, r, u, g);
		}
		organizationdatasyncstate.Entity = u;
		organizationdatasyncstate.EntityName = 'organizationdatasyncstate';
		organizationdatasyncstate.EntityCollectionName = 'organizationdatasyncstates';
		organizationdatasyncstate['@odata.etag'] = e['@odata.etag'];
		organizationdatasyncstate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		organizationdatasyncstate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return organizationdatasyncstate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.organizationdatasyncstate = {
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
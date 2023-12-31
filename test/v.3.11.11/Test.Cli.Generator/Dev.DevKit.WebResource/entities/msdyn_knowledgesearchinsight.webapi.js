﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_knowledgesearchinsightApi = function (e) {
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
		var _msdyn_knowledgesearchinsight = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ApplicationName: { a: 'msdyn_applicationname' },
			msdyn_CorrelationId: { a: 'msdyn_correlationid' },
			msdyn_CustomControlId: { a: 'msdyn_customcontrolid' },
			msdyn_EntityRecordId: { a: 'msdyn_entityrecordid' },
			msdyn_EntityType: { a: 'msdyn_entitytype' },
			msdyn_Filters: { a: 'msdyn_filters' },
			msdyn_InitiatedBy: { a: 'msdyn_initiatedby' },
			msdyn_knowledgesearchinsightId: { a: 'msdyn_knowledgesearchinsightid' },
			msdyn_ResponseTime: { a: 'msdyn_responsetime' },
			msdyn_ResultCount: { a: 'msdyn_resultcount' },
			msdyn_SearchProviderId: { a: 'msdyn_searchproviderid' },
			msdyn_SearchProviderName: { a: 'msdyn_searchprovidername' },
			msdyn_SearchTerm: { a: 'msdyn_searchterm' },
			msdyn_SearchType: { a: 'msdyn_searchtype' },
			msdyn_SortBy: { a: 'msdyn_sortby' },
			msdyn_TimeStamp_TimezoneDateAndTime: { a: 'msdyn_timestamp' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_knowledgesearchinsight = {};
		msdyn_knowledgesearchinsight.ODataEntity = e;
		msdyn_knowledgesearchinsight.FormattedValue = {};
		for (var field in _msdyn_knowledgesearchinsight) {
			var a = _msdyn_knowledgesearchinsight[field].a;
			var b = _msdyn_knowledgesearchinsight[field].b;
			var c = _msdyn_knowledgesearchinsight[field].c;
			var d = _msdyn_knowledgesearchinsight[field].d;
			var g = _msdyn_knowledgesearchinsight[field].g;
			var r = _msdyn_knowledgesearchinsight[field].r;
			webApiField(msdyn_knowledgesearchinsight, field, e, a, b, c, d, r, u, g);
		}
		msdyn_knowledgesearchinsight.Entity = u;
		msdyn_knowledgesearchinsight.EntityName = 'msdyn_knowledgesearchinsight';
		msdyn_knowledgesearchinsight.EntityCollectionName = 'msdyn_knowledgesearchinsights';
		msdyn_knowledgesearchinsight['@odata.etag'] = e['@odata.etag'];
		msdyn_knowledgesearchinsight.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_knowledgesearchinsight.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_knowledgesearchinsight;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_knowledgesearchinsight = {
		OwnerIdType : {
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_segmentdefinitionApi = function (e) {
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
		var _msdynmkt_segmentdefinition = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_complianceprofiles: { a: 'msdynmkt_complianceprofiles' },
			msdynmkt_computationfinishedon_UtcDateAndTime: { a: 'msdynmkt_computationfinishedon' },
			msdynmkt_computationstartedon_UtcDateAndTime: { a: 'msdynmkt_computationstartedon' },
			msdynmkt_computationstatus: { a: 'msdynmkt_computationstatus' },
			msdynmkt_definitionmodifiedon_UtcDateAndTime: { a: 'msdynmkt_definitionmodifiedon' },
			msdynmkt_dependentsegmentids: { a: 'msdynmkt_dependentsegmentids' },
			msdynmkt_disablesegmentrefresh: { a: 'msdynmkt_disablesegmentrefresh' },
			msdynmkt_excludedmembers: { a: 'msdynmkt_excludedmembers' },
			msdynmkt_includedmembers: { a: 'msdynmkt_includedmembers' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_segmentdefinitionId: { a: 'msdynmkt_segmentdefinitionid' },
			msdynmkt_segmentquery: { a: 'msdynmkt_segmentquery' },
			msdynmkt_segmentrefreshintervalminutes: { a: 'msdynmkt_segmentrefreshintervalminutes' },
			msdynmkt_stoprefreshafter_UtcDateAndTime: { a: 'msdynmkt_stoprefreshafter' },
			msdynmkt_targetedsegmentids: { a: 'msdynmkt_targetedsegmentids' },
			msdynmkt_timezonecode: { a: 'msdynmkt_timezonecode' },
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
		var msdynmkt_segmentdefinition = {};
		msdynmkt_segmentdefinition.ODataEntity = e;
		msdynmkt_segmentdefinition.FormattedValue = {};
		for (var field in _msdynmkt_segmentdefinition) {
			var a = _msdynmkt_segmentdefinition[field].a;
			var b = _msdynmkt_segmentdefinition[field].b;
			var c = _msdynmkt_segmentdefinition[field].c;
			var d = _msdynmkt_segmentdefinition[field].d;
			var g = _msdynmkt_segmentdefinition[field].g;
			var r = _msdynmkt_segmentdefinition[field].r;
			webApiField(msdynmkt_segmentdefinition, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_segmentdefinition.Entity = u;
		msdynmkt_segmentdefinition.EntityName = 'msdynmkt_segmentdefinition';
		msdynmkt_segmentdefinition.EntityCollectionName = 'msdynmkt_segmentdefinitions';
		msdynmkt_segmentdefinition['@odata.etag'] = e['@odata.etag'];
		msdynmkt_segmentdefinition.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_segmentdefinition.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_segmentdefinition;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_segmentdefinition = {
		msdynmkt_computationstatus : {
			Error: 723270002,
			Finished: 723270001,
			NotStarted: 723270003,
			Running: 723270000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Deleted: 723270003,
			Draft: 723270001,
			GoingLive: 723270002,
			Live: 723270000,
			LiveWithWarnings: 723270004,
			Stopped: 723270006,
			Stopping: 723270005
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
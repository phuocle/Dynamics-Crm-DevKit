'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_entityscoringmodelApi = function (e) {
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
		var _msdynmkt_entityscoringmodel = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_baseversionmodelid: { b: 'msdynmkt_baseversionmodelid', a: '_msdynmkt_baseversionmodelid_value', c: 'msdynmkt_entityscoringmodels', d: 'msdynmkt_entityscoringmodel' },
			msdynmkt_entityscoringmodelId: { a: 'msdynmkt_entityscoringmodelid' },
			msdynmkt_entitytarget: { a: 'msdynmkt_entitytarget' },
			msdynmkt_errorDetails: { a: 'msdynmkt_errorDetails' },
			msdynmkt_globalcondition: { a: 'msdynmkt_globalcondition' },
			msdynmkt_gradingdefinition: { a: 'msdynmkt_gradingdefinition' },
			msdynmkt_mainquery: { a: 'msdynmkt_mainquery' },
			msdynmkt_modeldefinition: { a: 'msdynmkt_modeldefinition' },
			msdynmkt_modellock: { a: 'msdynmkt_modellock' },
			msdynmkt_modelversion: { a: 'msdynmkt_modelversion' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_overwrittenon_UtcDateAndTime: { a: 'msdynmkt_overwrittenon' },
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
		var msdynmkt_entityscoringmodel = {};
		msdynmkt_entityscoringmodel.ODataEntity = e;
		msdynmkt_entityscoringmodel.FormattedValue = {};
		for (var field in _msdynmkt_entityscoringmodel) {
			var a = _msdynmkt_entityscoringmodel[field].a;
			var b = _msdynmkt_entityscoringmodel[field].b;
			var c = _msdynmkt_entityscoringmodel[field].c;
			var d = _msdynmkt_entityscoringmodel[field].d;
			var g = _msdynmkt_entityscoringmodel[field].g;
			var r = _msdynmkt_entityscoringmodel[field].r;
			webApiField(msdynmkt_entityscoringmodel, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_entityscoringmodel.Entity = u;
		msdynmkt_entityscoringmodel.EntityName = 'msdynmkt_entityscoringmodel';
		msdynmkt_entityscoringmodel.EntityCollectionName = 'msdynmkt_entityscoringmodels';
		msdynmkt_entityscoringmodel['@odata.etag'] = e['@odata.etag'];
		msdynmkt_entityscoringmodel.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_entityscoringmodel.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_entityscoringmodel;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_entityscoringmodel = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Deleted: 723270005,
			Draft: 723270000,
			Live: 723270002,
			Publishing: 723270001,
			Stopped: 723270004,
			Stopping: 723270003
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
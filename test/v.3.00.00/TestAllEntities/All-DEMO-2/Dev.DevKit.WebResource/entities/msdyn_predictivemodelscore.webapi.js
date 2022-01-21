'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_predictivemodelscoreApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var property = {};
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return EMPTY_STRING;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return EMPTY_STRING;
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
					value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(property, 'FormattedValue', {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(property, 'Value', {
					get: getValue
				});
			}
			else {
				Object.defineProperty(property, 'Value', {
					get: getValue,
					set: setValue
				});
			}
			return property;
		}
		var msdyn_predictivemodelscore = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_EntityId: { a: 'msdyn_entityid' },
			msdyn_EntityType: { a: 'msdyn_entitytype' },
			msdyn_Grade: { a: 'msdyn_grade' },
			msdyn_ModelName: { a: 'msdyn_modelname' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_PredictionID: { a: 'msdyn_predictionid' },
			msdyn_predictivemodelscoreId: { a: 'msdyn_predictivemodelscoreid' },
			msdyn_PredictiveScoreId: { b: 'msdyn_PredictiveScoreId', a: '_msdyn_predictivescoreid_value', c: 'msdyn_predictivescores', d: 'msdyn_predictivescore' },
			msdyn_Score: { a: 'msdyn_score' },
			msdyn_ScoredOn_UtcDateOnly: { a: 'msdyn_scoredon' },
			msdyn_ScoreHistory: { a: 'msdyn_scorehistory' },
			msdyn_ScoreReasons: { a: 'msdyn_scorereasons' },
			msdyn_ScoreTrend: { a: 'msdyn_scoretrend' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_predictivemodelscore) {
			var a = msdyn_predictivemodelscore[field].a;
			var b = msdyn_predictivemodelscore[field].b;
			var c = msdyn_predictivemodelscore[field].c;
			var d = msdyn_predictivemodelscore[field].d;
			var g = msdyn_predictivemodelscore[field].g;
			var r = msdyn_predictivemodelscore[field].r;
			msdyn_predictivemodelscore[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_predictivemodelscore.Entity = u;
		msdyn_predictivemodelscore.EntityName = 'msdyn_predictivemodelscore';
		msdyn_predictivemodelscore.EntityCollectionName = 'msdyn_predictivemodelscores';
		msdyn_predictivemodelscore['@odata.etag'] = e['@odata.etag'];
		msdyn_predictivemodelscore.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_predictivemodelscore.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_predictivemodelscore;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_predictivemodelscore = {
		msdyn_Grade : {
			Grade_A: 0,
			Grade_B: 1,
			Grade_C: 2,
			Grade_D: 3
		},
		msdyn_ScoreTrend : {
			Declining: 2,
			Improving: 0,
			Not_enough_info: 3,
			Steady: 1
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
﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_incidenttyperecommendationresultApi = function (e) {
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
		var _msdyn_incidenttyperecommendationresult = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_IncidentType: { b: 'msdyn_IncidentType', a: '_msdyn_incidenttype_value', c: 'msdyn_incidenttypes', d: 'msdyn_incidenttype' },
			msdyn_IncidentTypeForMerge: { b: 'msdyn_IncidentTypeForMerge', a: '_msdyn_incidenttypeformerge_value', c: 'msdyn_incidenttypes', d: 'msdyn_incidenttype' },
			msdyn_IncidentTypeId: { a: 'msdyn_incidenttypeid' },
			msdyn_IncidentTypeIdForMerge: { a: 'msdyn_incidenttypeidformerge' },
			msdyn_incidenttyperecommendationresultId: { a: 'msdyn_incidenttyperecommendationresultid' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_OccurrenceTimes: { a: 'msdyn_occurrencetimes' },
			msdyn_ProductService: { b: 'msdyn_ProductService', a: '_msdyn_productservice_value', c: 'products', d: 'product' },
			msdyn_ProductServiceId: { a: 'msdyn_productserviceid' },
			msdyn_RecommendationDescription: { a: 'msdyn_recommendationdescription' },
			msdyn_RecommendationType: { a: 'msdyn_recommendationtype' },
			msdyn_RunHistoryId: { b: 'msdyn_RunHistoryId', a: '_msdyn_runhistoryid_value', c: 'msdyn_incidenttyperecommendationrunhistories', d: 'msdyn_incidenttyperecommendationrunhistory' },
			msdyn_RunId: { a: 'msdyn_runid' },
			msdyn_ScoreRanking: { a: 'msdyn_scoreranking' },
			msdyn_SuggestedValue: { a: 'msdyn_suggestedvalue' },
			msdyn_TotalOccurrenceTimes: { a: 'msdyn_totaloccurrencetimes' },
			msdyn_Unit: { b: 'msdyn_Unit', a: '_msdyn_unit_value', c: 'uoms', d: 'uom' },
			msdyn_UnitId: { a: 'msdyn_unitid' },
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
		var msdyn_incidenttyperecommendationresult = {};
		msdyn_incidenttyperecommendationresult.ODataEntity = e;
		msdyn_incidenttyperecommendationresult.FormattedValue = {};
		for (var field in _msdyn_incidenttyperecommendationresult) {
			var a = _msdyn_incidenttyperecommendationresult[field].a;
			var b = _msdyn_incidenttyperecommendationresult[field].b;
			var c = _msdyn_incidenttyperecommendationresult[field].c;
			var d = _msdyn_incidenttyperecommendationresult[field].d;
			var g = _msdyn_incidenttyperecommendationresult[field].g;
			var r = _msdyn_incidenttyperecommendationresult[field].r;
			webApiField(msdyn_incidenttyperecommendationresult, field, e, a, b, c, d, r, u, g);
		}
		msdyn_incidenttyperecommendationresult.Entity = u;
		msdyn_incidenttyperecommendationresult.EntityName = 'msdyn_incidenttyperecommendationresult';
		msdyn_incidenttyperecommendationresult.EntityCollectionName = 'msdyn_incidenttyperecommendationresults';
		msdyn_incidenttyperecommendationresult['@odata.etag'] = e['@odata.etag'];
		msdyn_incidenttyperecommendationresult.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_incidenttyperecommendationresult.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_incidenttyperecommendationresult;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_incidenttyperecommendationresult = {
		msdyn_RecommendationType : {
			Incident_Type: 192350002,
			Work_Order_Product: 192350000,
			Work_Order_Service: 192350001
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Applied: 192350001,
			Disliked: 192350000,
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
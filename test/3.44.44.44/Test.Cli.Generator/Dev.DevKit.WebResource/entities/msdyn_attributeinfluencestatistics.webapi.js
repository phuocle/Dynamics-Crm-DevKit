﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_attributeinfluencestatisticsApi = function (e) {
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
		var _msdyn_attributeinfluencestatistics = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_attributeinfluencestatisticsId: { a: 'msdyn_attributeinfluencestatisticsid' },
			msdyn_attributename: { a: 'msdyn_attributename' },
			msdyn_entityname: { a: 'msdyn_entityname' },
			msdyn_IgnoreIfBlank: { a: 'msdyn_ignoreifblank' },
			msdyn_Importance: { a: 'msdyn_importance' },
			msdyn_IsCrmAttribute: { a: 'msdyn_iscrmattribute' },
			msdyn_IsRecommended: { a: 'msdyn_isrecommended' },
			msdyn_isvalid: { a: 'msdyn_isvalid' },
			msdyn_modelid: { a: 'msdyn_modelid' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_notselectedreason: { a: 'msdyn_notselectedreason' },
			msdyn_predictioniD: { a: 'msdyn_predictionid' },
			msdyn_statistics: { a: 'msdyn_statistics' },
			msdyn_submodelid: { a: 'msdyn_submodelid' },
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
		var msdyn_attributeinfluencestatistics = {};
		msdyn_attributeinfluencestatistics.ODataEntity = e;
		msdyn_attributeinfluencestatistics.FormattedValue = {};
		for (var field in _msdyn_attributeinfluencestatistics) {
			var a = _msdyn_attributeinfluencestatistics[field].a;
			var b = _msdyn_attributeinfluencestatistics[field].b;
			var c = _msdyn_attributeinfluencestatistics[field].c;
			var d = _msdyn_attributeinfluencestatistics[field].d;
			var g = _msdyn_attributeinfluencestatistics[field].g;
			var r = _msdyn_attributeinfluencestatistics[field].r;
			webApiField(msdyn_attributeinfluencestatistics, field, e, a, b, c, d, r, u, g);
		}
		msdyn_attributeinfluencestatistics.Entity = u;
		msdyn_attributeinfluencestatistics.EntityName = 'msdyn_attributeinfluencestatistics';
		msdyn_attributeinfluencestatistics.EntityCollectionName = 'msdyn_attributeinfluencestatisticses';
		msdyn_attributeinfluencestatistics['@odata.etag'] = e['@odata.etag'];
		msdyn_attributeinfluencestatistics.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_attributeinfluencestatistics.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_attributeinfluencestatistics;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_attributeinfluencestatistics = {
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
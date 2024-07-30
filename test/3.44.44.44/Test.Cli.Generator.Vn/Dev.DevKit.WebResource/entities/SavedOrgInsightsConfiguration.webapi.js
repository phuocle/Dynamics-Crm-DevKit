'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SavedOrgInsightsConfigurationApi = function (e) {
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
		var _savedorginsightsconfiguration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			IsDefault: { a: 'isdefault' },
			IsDrilldown: { a: 'isdrilldown' },
			JsonData: { a: 'jsondata', r: true },
			JsonDataEndTime_UtcDateAndTime: { a: 'jsondataendtime', r: true },
			JsonDataStartTime_UtcDateAndTime: { a: 'jsondatastarttime', r: true },
			Lookback: { a: 'lookback' },
			MetricType: { a: 'metrictype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			Parameters: { a: 'parameters' },
			PlotOption: { a: 'plotoption' },
			SavedOrgInsightsConfigurationId: { a: 'savedorginsightsconfigurationid' }
		};
		if (e === undefined) e = {};
		var u = {};
		var savedorginsightsconfiguration = {};
		savedorginsightsconfiguration.ODataEntity = e;
		savedorginsightsconfiguration.FormattedValue = {};
		for (var field in _savedorginsightsconfiguration) {
			var a = _savedorginsightsconfiguration[field].a;
			var b = _savedorginsightsconfiguration[field].b;
			var c = _savedorginsightsconfiguration[field].c;
			var d = _savedorginsightsconfiguration[field].d;
			var g = _savedorginsightsconfiguration[field].g;
			var r = _savedorginsightsconfiguration[field].r;
			webApiField(savedorginsightsconfiguration, field, e, a, b, c, d, r, u, g);
		}
		savedorginsightsconfiguration.Entity = u;
		savedorginsightsconfiguration.EntityName = 'savedorginsightsconfiguration';
		savedorginsightsconfiguration.EntityCollectionName = 'savedorginsightsconfigurations';
		savedorginsightsconfiguration['@odata.etag'] = e['@odata.etag'];
		savedorginsightsconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		savedorginsightsconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return savedorginsightsconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SavedOrgInsightsConfiguration = {
		Lookback : {
			_2_Tieng: 1,
			_30_Ngay: 4,
			_48_Tieng: 2,
			_7_Ngay: 3
		},
		MetricType : {
			Chuoi_Thoi_gian: 1,
			The_loai: 2
		},
		PlotOption : {
			Bo_do_Tuyen_tinh: 10,
			Bong_bong: 11,
			Cot: 2,
			Dang_vong: 6,
			Dang_vong_kep: 9,
			Danh_sach: 8,
			Duong: 1,
			Thanh: 5,
			The_thong_tin: 7,
			Tron: 4,
			Vung: 3
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
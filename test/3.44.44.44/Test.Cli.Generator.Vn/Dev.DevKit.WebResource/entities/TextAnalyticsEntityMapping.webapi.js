'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.TextAnalyticsEntityMappingApi = function (e) {
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
		var _textanalyticsentitymapping = {
			ComponentState: { a: 'componentstate', r: true },
			Entity1: { a: 'entity' },
			EntityDisplayName: { a: 'entitydisplayname' },
			EntityPickList: { a: 'entitypicklist' },
			Field: { a: 'field' },
			FieldDisplayName: { a: 'fielddisplayname' },
			FieldPickList: { a: 'fieldpicklist' },
			IsManaged: { a: 'ismanaged', r: true },
			IsTextMatchMapping: { a: 'istextmatchmapping' },
			ModelType: { a: 'modeltype' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			RelationshipName: { a: 'relationshipname' },
			SimilarityRuleId: { b: 'similarityruleid', a: '_similarityruleid_value', c: 'similarityrules', d: 'similarityrule' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TextAnalyticsEntityMappingId: { a: 'textanalyticsentitymappingid' },
			TextAnalyticsEntityMappingIdUnique: { a: 'textanalyticsentitymappingidunique', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var textanalyticsentitymapping = {};
		textanalyticsentitymapping.ODataEntity = e;
		textanalyticsentitymapping.FormattedValue = {};
		for (var field in _textanalyticsentitymapping) {
			var a = _textanalyticsentitymapping[field].a;
			var b = _textanalyticsentitymapping[field].b;
			var c = _textanalyticsentitymapping[field].c;
			var d = _textanalyticsentitymapping[field].d;
			var g = _textanalyticsentitymapping[field].g;
			var r = _textanalyticsentitymapping[field].r;
			webApiField(textanalyticsentitymapping, field, e, a, b, c, d, r, u, g);
		}
		textanalyticsentitymapping.Entity = u;
		textanalyticsentitymapping.EntityName = 'textanalyticsentitymapping';
		textanalyticsentitymapping.EntityCollectionName = 'textanalyticsentitymapping';
		textanalyticsentitymapping['@odata.etag'] = e['@odata.etag'];
		textanalyticsentitymapping.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		textanalyticsentitymapping.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return textanalyticsentitymapping;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.TextAnalyticsEntityMapping = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		EntityPickList : {
			Co: 2,
			Khong: 1
		},
		FieldPickList : {
			Co: 2,
			Khong: 1
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
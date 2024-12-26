'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.LanguageProvisioningStateApi = function (e) {
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
		var _languageprovisioningstate = {
			ApplicationVersion: { a: 'applicationversion' },
			LanguageId: { a: 'languageid' },
			LanguageProvisioningStateId: { a: 'languageprovisioningstateid' },
			ProvisioningStage: { a: 'provisioningstage' },
			SolutionFileVersion: { a: 'solutionfileversion' },
			SolutionUniqueName: { a: 'solutionuniquename' }
		};
		if (e === undefined) e = {};
		var u = {};
		var languageprovisioningstate = {};
		languageprovisioningstate.ODataEntity = e;
		languageprovisioningstate.FormattedValue = {};
		for (var field in _languageprovisioningstate) {
			var a = _languageprovisioningstate[field].a;
			var b = _languageprovisioningstate[field].b;
			var c = _languageprovisioningstate[field].c;
			var d = _languageprovisioningstate[field].d;
			var g = _languageprovisioningstate[field].g;
			var r = _languageprovisioningstate[field].r;
			webApiField(languageprovisioningstate, field, e, a, b, c, d, r, u, g);
		}
		languageprovisioningstate.Entity = u;
		languageprovisioningstate.EntityName = 'languageprovisioningstate';
		languageprovisioningstate.EntityCollectionName = 'languageprovisioningstates';
		languageprovisioningstate['@odata.etag'] = e['@odata.etag'];
		languageprovisioningstate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		languageprovisioningstate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return languageprovisioningstate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.LanguageProvisioningState = {
		ProvisioningStage : {
			FileBased: 1,
			Khac: 4,
			MetadataHelperDependent: 2,
			Ruy_bang: 5,
			SystemOnly: 3
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
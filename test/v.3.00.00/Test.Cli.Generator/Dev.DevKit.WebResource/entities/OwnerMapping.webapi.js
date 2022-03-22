'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.OwnerMappingApi = function (e) {
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
		var _ownermapping = {
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportMapId: { b: 'importmapid', a: '_importmapid_value', c: 'importmaps', d: 'importmap' },
			IntroducedVersion: { a: 'introducedversion' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			OwnerMappingId: { a: 'ownermappingid' },
			OwnerMappingIdUnique: { a: 'ownermappingidunique', r: true },
			ProcessCode: { a: 'processcode' },
			SolutionId: { a: 'solutionid', r: true },
			SourceSystemUserName: { a: 'sourcesystemusername' },
			SourceUserValueForSourceCRMUserLink: { a: 'sourceuservalueforsourcecrmuserlink' },
			StateCode: { a: 'statecode', r: true },
			StatusCode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TargetSystemUserDomainName: { a: 'targetsystemuserdomainname' },
			TargetSystemUserId: { b: 'targetsystemuserid', a: '_targetsystemuserid_value', c: 'businessunits', d: 'businessunit' },
			TargetUserValueForSourceCRMUserLink: { a: 'targetuservalueforsourcecrmuserlink' }
		};
		if (e === undefined) e = {};
		var u = {};
		var ownermapping = {};
		ownermapping.ODataEntity = e;
		ownermapping.FormattedValue = {};
		for (var field in _ownermapping) {
			var a = _ownermapping[field].a;
			var b = _ownermapping[field].b;
			var c = _ownermapping[field].c;
			var d = _ownermapping[field].d;
			var g = _ownermapping[field].g;
			var r = _ownermapping[field].r;
			webApiField(ownermapping, field, e, a, b, c, d, r, u, g);
		}
		ownermapping.Entity = u;
		ownermapping.EntityName = 'ownermapping';
		ownermapping.EntityCollectionName = 'ownermappings';
		ownermapping['@odata.etag'] = e['@odata.etag'];
		ownermapping.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		ownermapping.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return ownermapping;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.OwnerMapping = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		ProcessCode : {
			Ignore: 2,
			Internal: 3,
			Process: 1
		},
		StateCode : {
			Active: 0
		},
		StatusCode : {
			Active: 0
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
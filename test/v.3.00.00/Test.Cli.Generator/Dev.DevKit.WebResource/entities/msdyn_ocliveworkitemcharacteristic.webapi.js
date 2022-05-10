'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ocliveworkitemcharacteristicApi = function (e) {
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
		var _msdyn_ocliveworkitemcharacteristic = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_characteristic: { b: 'msdyn_characteristic', a: '_msdyn_characteristic_value', c: 'characteristics', d: 'characteristic' },
			msdyn_characteristicsource: { a: 'msdyn_characteristicsource' },
			msdyn_confidence: { a: 'msdyn_confidence' },
			msdyn_createdon_UtcDateAndTime: { a: 'msdyn_createdon' },
			msdyn_mlmodelid: { b: 'msdyn_mlmodelid', a: '_msdyn_mlmodelid_value', c: 'msdyn_aimodels', d: 'msdyn_aimodel' },
			msdyn_modifiedon_UtcDateAndTime: { a: 'msdyn_modifiedon' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ocliveworkitemcharacteristicId: { a: 'msdyn_ocliveworkitemcharacteristicid' },
			msdyn_ocliveworkitemid: { b: 'msdyn_ocliveworkitemid', a: '_msdyn_ocliveworkitemid_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			msdyn_ratingvalue: { b: 'msdyn_ratingvalue', a: '_msdyn_ratingvalue_value', c: 'ratingvalues', d: 'ratingvalue' },
			msdyn_skilladdedby: { b: 'msdyn_skilladdedby', a: '_msdyn_skilladdedby_value', c: 'systemusers', d: 'systemuser' },
			msdyn_status: { a: 'msdyn_status' },
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
		var msdyn_ocliveworkitemcharacteristic = {};
		msdyn_ocliveworkitemcharacteristic.ODataEntity = e;
		msdyn_ocliveworkitemcharacteristic.FormattedValue = {};
		for (var field in _msdyn_ocliveworkitemcharacteristic) {
			var a = _msdyn_ocliveworkitemcharacteristic[field].a;
			var b = _msdyn_ocliveworkitemcharacteristic[field].b;
			var c = _msdyn_ocliveworkitemcharacteristic[field].c;
			var d = _msdyn_ocliveworkitemcharacteristic[field].d;
			var g = _msdyn_ocliveworkitemcharacteristic[field].g;
			var r = _msdyn_ocliveworkitemcharacteristic[field].r;
			webApiField(msdyn_ocliveworkitemcharacteristic, field, e, a, b, c, d, r, u, g);
		}
		msdyn_ocliveworkitemcharacteristic.Entity = u;
		msdyn_ocliveworkitemcharacteristic.EntityName = 'msdyn_ocliveworkitemcharacteristic';
		msdyn_ocliveworkitemcharacteristic.EntityCollectionName = 'msdyn_ocliveworkitemcharacteristics';
		msdyn_ocliveworkitemcharacteristic['@odata.etag'] = e['@odata.etag'];
		msdyn_ocliveworkitemcharacteristic.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocliveworkitemcharacteristic.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocliveworkitemcharacteristic;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocliveworkitemcharacteristic = {
		msdyn_characteristicsource : {
			Manual: 321240002,
			ML_Based: 321240001,
			Rule_Based: 321240000
		},
		msdyn_status : {
			Active: 192350000,
			Deleted: 192350001
		},
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
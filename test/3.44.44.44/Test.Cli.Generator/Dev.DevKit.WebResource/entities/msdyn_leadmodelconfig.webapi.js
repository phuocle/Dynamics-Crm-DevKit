'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_leadmodelconfigApi = function (e) {
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
		var _msdyn_leadmodelconfig = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_activeLeadValue: { a: 'msdyn_activeleadvalue' },
			msdyn_appliedon_UtcDateAndTime: { a: 'msdyn_appliedon' },
			msdyn_createonField: { a: 'msdyn_createonfield' },
			msdyn_disqualificationValue: { a: 'msdyn_disqualificationvalue' },
			msdyn_featurestate: { a: 'msdyn_featurestate' },
			msdyn_isStandardEntity: { a: 'msdyn_isstandardentity' },
			msdyn_leadEntityID: { a: 'msdyn_leadentityid' },
			msdyn_leadEntityName: { a: 'msdyn_leadentityname' },
			msdyn_leadFormID: { a: 'msdyn_leadformid' },
			msdyn_leadFormName: { a: 'msdyn_leadformname' },
			msdyn_leadmodelconfigId: { a: 'msdyn_leadmodelconfigid' },
			msdyn_leadViewID: { a: 'msdyn_leadviewid' },
			msdyn_leadViewName: { a: 'msdyn_leadviewname' },
			msdyn_modifiedonField: { a: 'msdyn_modifiedonfield' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_predictionName: { a: 'msdyn_predictionname' },
			msdyn_qualificationValue: { a: 'msdyn_qualificationvalue' },
			msdyn_statusField: { a: 'msdyn_statusfield' },
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
		var msdyn_leadmodelconfig = {};
		msdyn_leadmodelconfig.ODataEntity = e;
		msdyn_leadmodelconfig.FormattedValue = {};
		for (var field in _msdyn_leadmodelconfig) {
			var a = _msdyn_leadmodelconfig[field].a;
			var b = _msdyn_leadmodelconfig[field].b;
			var c = _msdyn_leadmodelconfig[field].c;
			var d = _msdyn_leadmodelconfig[field].d;
			var g = _msdyn_leadmodelconfig[field].g;
			var r = _msdyn_leadmodelconfig[field].r;
			webApiField(msdyn_leadmodelconfig, field, e, a, b, c, d, r, u, g);
		}
		msdyn_leadmodelconfig.Entity = u;
		msdyn_leadmodelconfig.EntityName = 'msdyn_leadmodelconfig';
		msdyn_leadmodelconfig.EntityCollectionName = 'msdyn_leadmodelconfigs';
		msdyn_leadmodelconfig['@odata.etag'] = e['@odata.etag'];
		msdyn_leadmodelconfig.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_leadmodelconfig.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_leadmodelconfig;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_leadmodelconfig = {
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_opportunitymodelconfigApi = function (e) {
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
		var _msdyn_opportunitymodelconfig = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_activeOpportunityValue: { a: 'msdyn_activeopportunityvalue' },
			msdyn_appliedon_UtcDateAndTime: { a: 'msdyn_appliedon' },
			msdyn_createonField: { a: 'msdyn_createonfield' },
			msdyn_disqualificationValue: { a: 'msdyn_disqualificationvalue' },
			msdyn_featurestate: { a: 'msdyn_featurestate' },
			msdyn_isStandardEntity: { a: 'msdyn_isstandardentity' },
			msdyn_modifiedonField: { a: 'msdyn_modifiedonfield' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_opportunityEntityID: { a: 'msdyn_opportunityentityid' },
			msdyn_opportunityEntityName: { a: 'msdyn_opportunityentityname' },
			msdyn_opportunityFormID: { a: 'msdyn_opportunityformid' },
			msdyn_opportunityFormName: { a: 'msdyn_opportunityformname' },
			msdyn_opportunitymodelconfigId: { a: 'msdyn_opportunitymodelconfigid' },
			msdyn_opportunityViewID: { a: 'msdyn_opportunityviewid' },
			msdyn_opportunityViewName: { a: 'msdyn_opportunityviewname' },
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
		var msdyn_opportunitymodelconfig = {};
		msdyn_opportunitymodelconfig.ODataEntity = e;
		msdyn_opportunitymodelconfig.FormattedValue = {};
		for (var field in _msdyn_opportunitymodelconfig) {
			var a = _msdyn_opportunitymodelconfig[field].a;
			var b = _msdyn_opportunitymodelconfig[field].b;
			var c = _msdyn_opportunitymodelconfig[field].c;
			var d = _msdyn_opportunitymodelconfig[field].d;
			var g = _msdyn_opportunitymodelconfig[field].g;
			var r = _msdyn_opportunitymodelconfig[field].r;
			webApiField(msdyn_opportunitymodelconfig, field, e, a, b, c, d, r, u, g);
		}
		msdyn_opportunitymodelconfig.Entity = u;
		msdyn_opportunitymodelconfig.EntityName = 'msdyn_opportunitymodelconfig';
		msdyn_opportunitymodelconfig.EntityCollectionName = 'msdyn_opportunitymodelconfigs';
		msdyn_opportunitymodelconfig['@odata.etag'] = e['@odata.etag'];
		msdyn_opportunitymodelconfig.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_opportunitymodelconfig.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_opportunitymodelconfig;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_opportunitymodelconfig = {
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
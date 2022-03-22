'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_rulesetdependencymappingApi = function (e) {
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
		var _msdyn_rulesetdependencymapping = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic: { b: 'msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic', a: '_msdyn_referencedpolymorphicentityid_value', c: 'characteristics', d: 'characteristic' },
			msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile: { b: 'msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile', a: '_msdyn_referencedpolymorphicentityid_value', c: 'msdyn_capacityprofiles', d: 'msdyn_capacityprofile' },
			msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset: { b: 'msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset', a: '_msdyn_referencedpolymorphicentityid_value', c: 'msdyn_decisionrulesets', d: 'msdyn_decisionruleset' },
			msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream: { b: 'msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream', a: '_msdyn_referencedpolymorphicentityid_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable: { b: 'msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable', a: '_msdyn_referencedpolymorphicentityid_value', c: 'msdyn_ocliveworkstreamcontextvariables', d: 'msdyn_ocliveworkstreamcontextvariable' },
			msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue: { b: 'msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue', a: '_msdyn_referencedpolymorphicentityid_value', c: 'queues', d: 'queue' },
			msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue: { b: 'msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue', a: '_msdyn_referencedpolymorphicentityid_value', c: 'ratingvalues', d: 'ratingvalue' },
			msdyn_referencedpolymorphiclogicalname: { a: 'msdyn_referencedpolymorphiclogicalname' },
			msdyn_referencingruleid: { a: 'msdyn_referencingruleid' },
			msdyn_referencingrulename: { a: 'msdyn_referencingrulename' },
			msdyn_referencingrulesetid: { b: 'msdyn_referencingrulesetid', a: '_msdyn_referencingrulesetid_value', c: 'msdyn_decisionrulesets', d: 'msdyn_decisionruleset' },
			msdyn_rulesetdependencymappingId: { a: 'msdyn_rulesetdependencymappingid' },
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
		var msdyn_rulesetdependencymapping = {};
		msdyn_rulesetdependencymapping.ODataEntity = e;
		msdyn_rulesetdependencymapping.FormattedValue = {};
		for (var field in _msdyn_rulesetdependencymapping) {
			var a = _msdyn_rulesetdependencymapping[field].a;
			var b = _msdyn_rulesetdependencymapping[field].b;
			var c = _msdyn_rulesetdependencymapping[field].c;
			var d = _msdyn_rulesetdependencymapping[field].d;
			var g = _msdyn_rulesetdependencymapping[field].g;
			var r = _msdyn_rulesetdependencymapping[field].r;
			webApiField(msdyn_rulesetdependencymapping, field, e, a, b, c, d, r, u, g);
		}
		msdyn_rulesetdependencymapping.Entity = u;
		msdyn_rulesetdependencymapping.EntityName = 'msdyn_rulesetdependencymapping';
		msdyn_rulesetdependencymapping.EntityCollectionName = 'msdyn_rulesetdependencymappings';
		msdyn_rulesetdependencymapping['@odata.etag'] = e['@odata.etag'];
		msdyn_rulesetdependencymapping.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_rulesetdependencymapping.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_rulesetdependencymapping;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_rulesetdependencymapping = {
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
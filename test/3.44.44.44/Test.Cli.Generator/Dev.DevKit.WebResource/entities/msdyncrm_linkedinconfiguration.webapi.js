'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_linkedinconfigurationApi = function (e) {
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
		var _msdyncrm_linkedinconfiguration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncr2_synchronizecampaigns: { a: 'msdyncr2_synchronizecampaigns' },
			msdyncrm_authenticationresource: { a: 'msdyncrm_authenticationresource' },
			msdyncrm_authenticationtokenendpoint: { a: 'msdyncrm_authenticationtokenendpoint' },
			msdyncrm_authenticationtype: { a: 'msdyncrm_authenticationtype' },
			msdyncrm_clientId: { a: 'msdyncrm_clientid' },
			msdyncrm_configcacheexpirationdate_UtcDateOnly: { a: 'msdyncrm_configcacheexpirationdate' },
			msdyncrm_configcacheexpirationperiodinms: { a: 'msdyncrm_configcacheexpirationperiodinms' },
			msdyncrm_discoveryendpointurl: { a: 'msdyncrm_discoveryendpointurl' },
			msdyncrm_linkedinconfigurationId: { a: 'msdyncrm_linkedinconfigurationid' },
			msdyncrm_OnMatchingFail: { a: 'msdyncrm_onmatchingfail' },
			msdyncrm_organization_config: { a: 'msdyncrm_organization_config' },
			msdyncrm_redirectUrl: { a: 'msdyncrm_redirecturl' },
			msdyncrm_s2sinboundconfigurl: { a: 'msdyncrm_s2sinboundconfigurl' },
			msdyncrm_servicepublicid: { a: 'msdyncrm_servicepublicid' },
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
		var msdyncrm_linkedinconfiguration = {};
		msdyncrm_linkedinconfiguration.ODataEntity = e;
		msdyncrm_linkedinconfiguration.FormattedValue = {};
		for (var field in _msdyncrm_linkedinconfiguration) {
			var a = _msdyncrm_linkedinconfiguration[field].a;
			var b = _msdyncrm_linkedinconfiguration[field].b;
			var c = _msdyncrm_linkedinconfiguration[field].c;
			var d = _msdyncrm_linkedinconfiguration[field].d;
			var g = _msdyncrm_linkedinconfiguration[field].g;
			var r = _msdyncrm_linkedinconfiguration[field].r;
			webApiField(msdyncrm_linkedinconfiguration, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_linkedinconfiguration.Entity = u;
		msdyncrm_linkedinconfiguration.EntityName = 'msdyncrm_linkedinconfiguration';
		msdyncrm_linkedinconfiguration.EntityCollectionName = 'msdyncrm_linkedinconfigurations';
		msdyncrm_linkedinconfiguration['@odata.etag'] = e['@odata.etag'];
		msdyncrm_linkedinconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_linkedinconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_linkedinconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_linkedinconfiguration = {
		msdyncrm_authenticationtype : {
			Basic_Authentication: 192350001,
			Bearer_Authentication: 192350000
		},
		msdyncrm_OnMatchingFail : {
			Create_new_lead: 192350001,
			Ignore: 192350000
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
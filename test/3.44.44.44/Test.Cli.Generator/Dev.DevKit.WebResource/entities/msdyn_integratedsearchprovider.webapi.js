'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_integratedsearchproviderApi = function (e) {
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
		var _msdyn_integratedsearchprovider = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_allowedlanguages: { a: 'msdyn_allowedlanguages' },
			msdyn_articlepropertiesmapping: { a: 'msdyn_articlepropertiesmapping' },
			msdyn_authenticationtype: { a: 'msdyn_authenticationtype' },
			msdyn_clientid: { a: 'msdyn_clientid' },
			msdyn_clientsecret: { a: 'msdyn_clientsecret' },
			msdyn_datasourcetype: { a: 'msdyn_datasourcetype' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_htmlmetatags: { a: 'msdyn_htmlmetatags' },
			msdyn_htmlsample_name: { a: 'msdyn_htmlsample', r: true },
			msdyn_includedsitemapurls: { a: 'msdyn_includedsitemapurls' },
			msdyn_integratedsearchproviderId: { a: 'msdyn_integratedsearchproviderid' },
			msdyn_isfieldmappingoptionselected: { a: 'msdyn_isfieldmappingoptionselected' },
			msdyn_lastfetchtime_UtcDateAndTime: { a: 'msdyn_lastfetchtime' },
			msdyn_lookbackperiod: { a: 'msdyn_lookbackperiod' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_refreshschedule: { a: 'msdyn_refreshschedule' },
			msdyn_resourceid: { a: 'msdyn_resourceid' },
			msdyn_rooturl: { a: 'msdyn_rooturl' },
			msdyn_tenantid: { a: 'msdyn_tenantid' },
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
		var msdyn_integratedsearchprovider = {};
		msdyn_integratedsearchprovider.ODataEntity = e;
		msdyn_integratedsearchprovider.FormattedValue = {};
		for (var field in _msdyn_integratedsearchprovider) {
			var a = _msdyn_integratedsearchprovider[field].a;
			var b = _msdyn_integratedsearchprovider[field].b;
			var c = _msdyn_integratedsearchprovider[field].c;
			var d = _msdyn_integratedsearchprovider[field].d;
			var g = _msdyn_integratedsearchprovider[field].g;
			var r = _msdyn_integratedsearchprovider[field].r;
			webApiField(msdyn_integratedsearchprovider, field, e, a, b, c, d, r, u, g);
		}
		msdyn_integratedsearchprovider.Entity = u;
		msdyn_integratedsearchprovider.EntityName = 'msdyn_integratedsearchprovider';
		msdyn_integratedsearchprovider.EntityCollectionName = 'msdyn_integratedsearchproviders';
		msdyn_integratedsearchprovider['@odata.etag'] = e['@odata.etag'];
		msdyn_integratedsearchprovider.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_integratedsearchprovider.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_integratedsearchprovider;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_integratedsearchprovider = {
		msdyn_authenticationtype : {
			None: 0,
			OAuth: 1
		},
		msdyn_datasourcetype : {
			Website: 0
		},
		msdyn_lookbackperiod : {
			_1_hour: 6,
			_2_hours: 1,
			_30_mins: 5,
			_4_hours: 2,
			_6_hours: 3,
			_8_hours: 4,
			No_Lookback: 0
		},
		msdyn_refreshschedule : {
			_1_day: 8,
			_1_hour: 4,
			_15_mins: 1,
			_2_days: 9,
			_2_hours: 5,
			_30_mins: 2,
			_4_days: 10,
			_4_hours: 6,
			_45_mins: 3,
			_7_days: 11,
			_8_hours: 7,
			No_refresh: 0
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 3,
			Ingestion_Ready: 1,
			Validated: 2
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
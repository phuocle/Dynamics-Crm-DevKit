'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_eventmetadataApi = function (e) {
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
		var _msdynmkt_eventmetadata = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_cataloguniquename: { a: 'msdynmkt_cataloguniquename', r: true },
			msdynmkt_cdpaexportlocation: { a: 'msdynmkt_cdpaexportlocation' },
			msdynmkt_customapiid: { b: 'msdynmkt_customapiid', a: '_msdynmkt_customapiid_value', c: 'customapis', d: 'customapi' },
			msdynmkt_cxpversioningjson: { a: 'msdynmkt_cxpversioningjson' },
			msdynmkt_eventjson: { a: 'msdynmkt_eventjson' },
			msdynmkt_eventmetadataId: { a: 'msdynmkt_eventmetadataid' },
			msdynmkt_eventmetadatastatus: { a: 'msdynmkt_eventmetadatastatus' },
			msdynmkt_iconpath: { a: 'msdynmkt_iconpath', r: true },
			msdynmkt_integrationstatus: { a: 'msdynmkt_integrationstatus' },
			msdynmkt_integrationstatuscomputedon_UtcDateAndTime: { a: 'msdynmkt_lastintegrationstatuscomputedon' },
			msdynmkt_journeycount: { a: 'msdynmkt_journeycount', r: true },
			msdynmkt_journeycount_Date_UtcDateAndTime: { a: 'msdynmkt_journeycount_date', r: true },
			msdynmkt_journeycount_State: { a: 'msdynmkt_journeycount_state', r: true },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_sourceentity: { a: 'msdynmkt_sourceentity' },
			msdynmkt_state: { a: 'msdynmkt_state' },
			msdynmkt_supportedtargetentities: { a: 'msdynmkt_supportedtargetentities' },
			msdynmkt_supportedtargetentitiesdisplaynames: { a: 'msdynmkt_supportedtargetentitiesdisplaynames', r: true },
			msdynmkt_uniquename: { a: 'msdynmkt_uniquename' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_eventmetadata = {};
		msdynmkt_eventmetadata.ODataEntity = e;
		msdynmkt_eventmetadata.FormattedValue = {};
		for (var field in _msdynmkt_eventmetadata) {
			var a = _msdynmkt_eventmetadata[field].a;
			var b = _msdynmkt_eventmetadata[field].b;
			var c = _msdynmkt_eventmetadata[field].c;
			var d = _msdynmkt_eventmetadata[field].d;
			var g = _msdynmkt_eventmetadata[field].g;
			var r = _msdynmkt_eventmetadata[field].r;
			webApiField(msdynmkt_eventmetadata, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_eventmetadata.Entity = u;
		msdynmkt_eventmetadata.EntityName = 'msdynmkt_eventmetadata';
		msdynmkt_eventmetadata.EntityCollectionName = 'msdynmkt_eventmetadatas';
		msdynmkt_eventmetadata['@odata.etag'] = e['@odata.etag'];
		msdynmkt_eventmetadata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_eventmetadata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_eventmetadata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_eventmetadata = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_eventmetadatastatus : {
			Draft: 534120000,
			Published: 534120001,
			Stopped: 534120002
		},
		msdynmkt_integrationstatus : {
			Integrated: 534120001,
			NotIntegrated: 534120002,
			Unknown: 534120000
		},
		msdynmkt_state : {
			Deleted: 534120006,
			Deleting: 534120005,
			Draft: 534120000,
			Getting_ready: 534120001,
			Ready_to_use: 534120002,
			Resetting: 534120008,
			Restarting: 534120007,
			Stopped: 534120004,
			Stopping: 534120003
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
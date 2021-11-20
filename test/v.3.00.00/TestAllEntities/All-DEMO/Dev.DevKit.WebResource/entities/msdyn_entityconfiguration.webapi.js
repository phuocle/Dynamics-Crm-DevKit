'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_entityconfigurationApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var property = {};
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return EMPTY_STRING;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return EMPTY_STRING;
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
					value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(property, 'FormattedValue', {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(property, 'Value', {
					get: getValue
				});
			}
			else {
				Object.defineProperty(property, 'Value', {
					get: getValue,
					set: setValue
				});
			}
			return property;
		}
		var msdyn_entityconfiguration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_CopyGeoDataFromURS: { a: 'msdyn_copygeodatafromurs' },
			msdyn_DateFilter1FieldName: { a: 'msdyn_datefilter1fieldname' },
			msdyn_DateFilter1LastXDay: { a: 'msdyn_datefilter1lastxday' },
			msdyn_DateFilter1NextXDay: { a: 'msdyn_datefilter1nextxday' },
			msdyn_DateFilter2FieldName: { a: 'msdyn_datefilter2fieldname' },
			msdyn_DateFilter2LastXDay: { a: 'msdyn_datefilter2lastxday' },
			msdyn_DateFilter2NextXDay: { a: 'msdyn_datefilter2nextxday' },
			msdyn_EnabledAs: { a: 'msdyn_enabledas' },
			msdyn_EnableTriggerFilters: { a: 'msdyn_enabletriggerfilters' },
			msdyn_Entity: { a: 'msdyn_entity' },
			msdyn_entityconfigurationId: { a: 'msdyn_entityconfigurationid' },
			msdyn_EntityPrimaryKey: { a: 'msdyn_entityprimarykey' },
			msdyn_LatitudeFieldName: { a: 'msdyn_latitudefieldname' },
			msdyn_LongitudeFieldName: { a: 'msdyn_longitudefieldname' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Radius: { a: 'msdyn_radius' },
			msdyn_RelationshipFieldName: { a: 'msdyn_relationshipfieldname' },
			msdyn_timestampfieldname: { a: 'msdyn_timestampfieldname' },
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
		for (var field in msdyn_entityconfiguration) {
			var a = msdyn_entityconfiguration[field].a;
			var b = msdyn_entityconfiguration[field].b;
			var c = msdyn_entityconfiguration[field].c;
			var d = msdyn_entityconfiguration[field].d;
			var g = msdyn_entityconfiguration[field].g;
			var r = msdyn_entityconfiguration[field].r;
			msdyn_entityconfiguration[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_entityconfiguration.Entity = u;
		msdyn_entityconfiguration.EntityName = 'msdyn_entityconfiguration';
		msdyn_entityconfiguration.EntityCollectionName = 'msdyn_entityconfigurations';
		msdyn_entityconfiguration['@odata.etag'] = e['@odata.etag'];
		msdyn_entityconfiguration.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_entityconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_entityconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.msdyn_entityconfiguration = {
			msdyn_EnabledAs : {
				Geofence: 192350000,
				Geotracked: 192350001
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
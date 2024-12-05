'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_basestyleApi = function (e) {
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
		var _msdyncrm_basestyle = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_align: { a: 'msdyncrm_align' },
			msdyncrm_backgroundColor: { a: 'msdyncrm_backgroundcolor' },
			msdyncrm_backgroundImage: { a: 'msdyncrm_backgroundimage' },
			msdyncrm_basestyleId: { a: 'msdyncrm_basestyleid' },
			msdyncrm_borderColor: { a: 'msdyncrm_bordercolor' },
			msdyncrm_borderRadius: { a: 'msdyncrm_borderradius' },
			msdyncrm_borderstyle: { a: 'msdyncrm_borderstyle' },
			msdyncrm_borderWidth: { a: 'msdyncrm_borderwidth' },
			msdyncrm_emailcolorpalette: { a: 'msdyncrm_emailcolorpalette' },
			msdyncrm_marginBottom: { a: 'msdyncrm_marginbottom' },
			msdyncrm_marginLeft: { a: 'msdyncrm_marginleft' },
			msdyncrm_marginRight: { a: 'msdyncrm_marginright' },
			msdyncrm_marginTop: { a: 'msdyncrm_margintop' },
			msdyncrm_minHeight: { a: 'msdyncrm_minheight' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_paddingBottom: { a: 'msdyncrm_paddingbottom' },
			msdyncrm_paddingLeft: { a: 'msdyncrm_paddingleft' },
			msdyncrm_paddingRight: { a: 'msdyncrm_paddingright' },
			msdyncrm_paddingTop: { a: 'msdyncrm_paddingtop' },
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
		var msdyncrm_basestyle = {};
		msdyncrm_basestyle.ODataEntity = e;
		msdyncrm_basestyle.FormattedValue = {};
		for (var field in _msdyncrm_basestyle) {
			var a = _msdyncrm_basestyle[field].a;
			var b = _msdyncrm_basestyle[field].b;
			var c = _msdyncrm_basestyle[field].c;
			var d = _msdyncrm_basestyle[field].d;
			var g = _msdyncrm_basestyle[field].g;
			var r = _msdyncrm_basestyle[field].r;
			webApiField(msdyncrm_basestyle, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_basestyle.Entity = u;
		msdyncrm_basestyle.EntityName = 'msdyncrm_basestyle';
		msdyncrm_basestyle.EntityCollectionName = 'msdyncrm_basestyles';
		msdyncrm_basestyle['@odata.etag'] = e['@odata.etag'];
		msdyncrm_basestyle.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_basestyle.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_basestyle;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_basestyle = {
		msdyncrm_align : {
			Center: 164230002,
			Left: 164230001,
			None: 164230000,
			Right: 164230003
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
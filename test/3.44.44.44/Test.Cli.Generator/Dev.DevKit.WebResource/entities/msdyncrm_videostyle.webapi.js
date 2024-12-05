'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_videostyleApi = function (e) {
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
		var _msdyncrm_videostyle = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_alignment: { a: 'msdyncrm_alignment' },
			msdyncrm_alttext: { a: 'msdyncrm_alttext' },
			msdyncrm_autowidth: { a: 'msdyncrm_autowidth' },
			msdyncrm_height: { a: 'msdyncrm_height' },
			msdyncrm_marginbottom: { a: 'msdyncrm_marginbottom' },
			msdyncrm_marginleft: { a: 'msdyncrm_marginleft' },
			msdyncrm_marginright: { a: 'msdyncrm_marginright' },
			msdyncrm_margintop: { a: 'msdyncrm_margintop' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_noalttext: { a: 'msdyncrm_noalttext' },
			msdyncrm_originalheight: { a: 'msdyncrm_originalheight' },
			msdyncrm_originalwidth: { a: 'msdyncrm_originalwidth' },
			msdyncrm_paddingbottom: { a: 'msdyncrm_paddingbottom' },
			msdyncrm_paddingleft: { a: 'msdyncrm_paddingleft' },
			msdyncrm_paddingright: { a: 'msdyncrm_paddingright' },
			msdyncrm_paddingtop: { a: 'msdyncrm_paddingtop' },
			msdyncrm_roundedcorners: { a: 'msdyncrm_roundedcorners' },
			msdyncrm_source: { a: 'msdyncrm_source' },
			msdyncrm_thumbnail: { a: 'msdyncrm_thumbnail' },
			msdyncrm_verticalalign: { a: 'msdyncrm_verticalalign' },
			msdyncrm_videoId: { b: 'msdyncrm_videoId', a: '_msdyncrm_videoid_value', c: 'msdyncrm_videostyles', d: 'msdyncrm_videostyle' },
			msdyncrm_videostyleId: { a: 'msdyncrm_videostyleid' },
			msdyncrm_videourl: { a: 'msdyncrm_videourl' },
			msdyncrm_width: { a: 'msdyncrm_width' },
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
		var msdyncrm_videostyle = {};
		msdyncrm_videostyle.ODataEntity = e;
		msdyncrm_videostyle.FormattedValue = {};
		for (var field in _msdyncrm_videostyle) {
			var a = _msdyncrm_videostyle[field].a;
			var b = _msdyncrm_videostyle[field].b;
			var c = _msdyncrm_videostyle[field].c;
			var d = _msdyncrm_videostyle[field].d;
			var g = _msdyncrm_videostyle[field].g;
			var r = _msdyncrm_videostyle[field].r;
			webApiField(msdyncrm_videostyle, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_videostyle.Entity = u;
		msdyncrm_videostyle.EntityName = 'msdyncrm_videostyle';
		msdyncrm_videostyle.EntityCollectionName = 'msdyncrm_videostyles';
		msdyncrm_videostyle['@odata.etag'] = e['@odata.etag'];
		msdyncrm_videostyle.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_videostyle.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_videostyle;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_videostyle = {
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
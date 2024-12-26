'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_imagestyleApi = function (e) {
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
		var _msdynmkt_imagestyle = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_alias: { a: 'msdynmkt_alias' },
			msdynmkt_aliasplaceholder: { a: 'msdynmkt_aliasplaceholder' },
			msdynmkt_align: { a: 'msdynmkt_align' },
			msdynmkt_alttext: { a: 'msdynmkt_alttext' },
			msdynmkt_assetsprovider: { a: 'msdynmkt_assetsprovider' },
			msdynmkt_autowidth: { a: 'msdynmkt_autowidth' },
			msdynmkt_emailtext: { a: 'msdynmkt_emailtext' },
			msdynmkt_fileid: { a: 'msdynmkt_fileid' },
			msdynmkt_fit: { a: 'msdynmkt_fit' },
			msdynmkt_height: { a: 'msdynmkt_height' },
			msdynmkt_imagesource: { a: 'msdynmkt_imagesource' },
			msdynmkt_imagestyleId: { a: 'msdynmkt_imagestyleid' },
			msdynmkt_link: { a: 'msdynmkt_link' },
			msdynmkt_marginbottom: { a: 'msdynmkt_marginbottom' },
			msdynmkt_marginleft: { a: 'msdynmkt_marginleft' },
			msdynmkt_marginright: { a: 'msdynmkt_marginright' },
			msdynmkt_margintop: { a: 'msdynmkt_margintop' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_noalttext: { a: 'msdynmkt_noalttext' },
			msdynmkt_originalheight: { a: 'msdynmkt_originalheight' },
			msdynmkt_originalwidth: { a: 'msdynmkt_originalwidth' },
			msdynmkt_paddingbottom: { a: 'msdynmkt_paddingbottom' },
			msdynmkt_paddingleft: { a: 'msdynmkt_paddingleft' },
			msdynmkt_paddingright: { a: 'msdynmkt_paddingright' },
			msdynmkt_paddingtop: { a: 'msdynmkt_paddingtop' },
			msdynmkt_parentowningbusinessunit: { b: 'msdynmkt_parentowningbusinessunit', a: '_msdynmkt_parentowningbusinessunit_value', c: 'businessunits', d: 'businessunit' },
			msdynmkt_parentstatuscode: { a: 'msdynmkt_parentstatuscode' },
			msdynmkt_placeholders: { a: 'msdynmkt_placeholders' },
			msdynmkt_roundedcorners: { a: 'msdynmkt_roundedcorners' },
			msdynmkt_tracking: { a: 'msdynmkt_tracking' },
			msdynmkt_verticalalign: { a: 'msdynmkt_verticalalign' },
			msdynmkt_width: { a: 'msdynmkt_width' },
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
		var msdynmkt_imagestyle = {};
		msdynmkt_imagestyle.ODataEntity = e;
		msdynmkt_imagestyle.FormattedValue = {};
		for (var field in _msdynmkt_imagestyle) {
			var a = _msdynmkt_imagestyle[field].a;
			var b = _msdynmkt_imagestyle[field].b;
			var c = _msdynmkt_imagestyle[field].c;
			var d = _msdynmkt_imagestyle[field].d;
			var g = _msdynmkt_imagestyle[field].g;
			var r = _msdynmkt_imagestyle[field].r;
			webApiField(msdynmkt_imagestyle, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_imagestyle.Entity = u;
		msdynmkt_imagestyle.EntityName = 'msdynmkt_imagestyle';
		msdynmkt_imagestyle.EntityCollectionName = 'msdynmkt_imagestyles';
		msdynmkt_imagestyle['@odata.etag'] = e['@odata.etag'];
		msdynmkt_imagestyle.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_imagestyle.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_imagestyle;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_imagestyle = {
		msdynmkt_assetsprovider : {
			Commerce: 2,
			Digital_Assets: 1
		},
		msdynmkt_fit : {
			Custom: 164230001,
			Fill: 164230000
		},
		msdynmkt_parentstatuscode : {
			Draft: 1,
			Inactive: 100,
			Live_editing: 3,
			Ready_to_send: 2
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
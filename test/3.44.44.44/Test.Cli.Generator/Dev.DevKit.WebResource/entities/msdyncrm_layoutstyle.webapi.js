'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_layoutstyleApi = function (e) {
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
		var _msdyncrm_layoutstyle = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_assetsprovider: { a: 'msdyncrm_assetsprovider' },
			msdyncrm_backgroundimage: { a: 'msdyncrm_backgroundimage' },
			msdyncrm_backgroundimagefileid: { a: 'msdyncrm_backgroundimagefileid' },
			msdyncrm_backgroundpositionx: { a: 'msdyncrm_backgroundpositionx' },
			msdyncrm_backgroundpositiony: { a: 'msdyncrm_backgroundpositiony' },
			msdyncrm_backgroundsize: { a: 'msdyncrm_backgroundsize' },
			msdyncrm_backgroundtype: { a: 'msdyncrm_backgroundtype' },
			msdyncrm_bordercolor: { a: 'msdyncrm_bordercolor' },
			msdyncrm_bordersize: { a: 'msdyncrm_bordersize' },
			msdyncrm_borderstyle: { a: 'msdyncrm_borderstyle' },
			msdyncrm_borderstyle2: { a: 'msdyncrm_borderstyle2' },
			msdyncrm_desktop: { a: 'msdyncrm_desktop' },
			msdyncrm_emailcolorpalette: { a: 'msdyncrm_emailcolorpalette' },
			msdyncrm_equal: { a: 'msdyncrm_equal' },
			msdyncrm_image: { a: 'msdyncrm_image' },
			msdyncrm_layout: { a: 'msdyncrm_layout' },
			msdyncrm_layoutstyleId: { a: 'msdyncrm_layoutstyleid' },
			msdyncrm_marginbottom: { a: 'msdyncrm_marginbottom' },
			msdyncrm_marginleft: { a: 'msdyncrm_marginleft' },
			msdyncrm_marginright: { a: 'msdyncrm_marginright' },
			msdyncrm_margintop: { a: 'msdyncrm_margintop' },
			msdyncrm_mobile: { a: 'msdyncrm_mobile' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_paddingbottom: { a: 'msdyncrm_paddingbottom' },
			msdyncrm_paddingleft: { a: 'msdyncrm_paddingleft' },
			msdyncrm_paddingright: { a: 'msdyncrm_paddingright' },
			msdyncrm_paddingtop: { a: 'msdyncrm_paddingtop' },
			msdyncrm_roundedcorners: { a: 'msdyncrm_roundedcorners' },
			msdyncrm_sectionbackgroundcolor: { a: 'msdyncrm_sectionbackgroundcolor' },
			msdyncrm_wrap: { a: 'msdyncrm_wrap' },
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
		var msdyncrm_layoutstyle = {};
		msdyncrm_layoutstyle.ODataEntity = e;
		msdyncrm_layoutstyle.FormattedValue = {};
		for (var field in _msdyncrm_layoutstyle) {
			var a = _msdyncrm_layoutstyle[field].a;
			var b = _msdyncrm_layoutstyle[field].b;
			var c = _msdyncrm_layoutstyle[field].c;
			var d = _msdyncrm_layoutstyle[field].d;
			var g = _msdyncrm_layoutstyle[field].g;
			var r = _msdyncrm_layoutstyle[field].r;
			webApiField(msdyncrm_layoutstyle, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_layoutstyle.Entity = u;
		msdyncrm_layoutstyle.EntityName = 'msdyncrm_layoutstyle';
		msdyncrm_layoutstyle.EntityCollectionName = 'msdyncrm_layoutstyles';
		msdyncrm_layoutstyle['@odata.etag'] = e['@odata.etag'];
		msdyncrm_layoutstyle.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_layoutstyle.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_layoutstyle;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_layoutstyle = {
		msdyncrm_assetsprovider : {
			Commerce: 2,
			Digital_Assets: 1
		},
		msdyncrm_backgroundsize : {
			Contain: 164230001,
			Fill_Cover: 164230000
		},
		msdyncrm_backgroundtype : {
			Content_width: 164230001,
			Full_width: 164230000
		},
		msdyncrm_borderstyle : {
			Dashed: 164230003,
			Dotted: 164230002,
			Double: 164230004,
			None: 164230000,
			Solid: 164230001
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
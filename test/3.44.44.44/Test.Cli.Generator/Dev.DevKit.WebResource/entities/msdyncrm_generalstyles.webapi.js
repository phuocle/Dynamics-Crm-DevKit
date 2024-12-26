'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_generalstylesApi = function (e) {
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
		var _msdyncrm_generalstyles = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_bordercolor: { a: 'msdyncrm_bordercolor' },
			msdyncrm_bordersize: { a: 'msdyncrm_bordersize' },
			msdyncrm_borderstyle: { a: 'msdyncrm_borderstyle' },
			msdyncrm_buttoncolor: { a: 'msdyncrm_buttoncolor' },
			msdyncrm_dividercolor: { a: 'msdyncrm_dividercolor' },
			msdyncrm_dividerlinestyle: { a: 'msdyncrm_dividerlinestyle' },
			msdyncrm_dividersize: { a: 'msdyncrm_dividersize' },
			msdyncrm_dividerstyle: { a: 'msdyncrm_dividerstyle' },
			msdyncrm_emailcolorpalette: { a: 'msdyncrm_emailcolorpalette' },
			msdyncrm_emailwidth: { a: 'msdyncrm_emailwidth' },
			msdyncrm_font: { a: 'msdyncrm_font' },
			msdyncrm_fontsize: { a: 'msdyncrm_fontsize' },
			msdyncrm_generalstylesId: { a: 'msdyncrm_generalstylesid' },
			msdyncrm_heading1color: { a: 'msdyncrm_heading1color' },
			msdyncrm_heading1font: { a: 'msdyncrm_heading1font' },
			msdyncrm_heading1size: { a: 'msdyncrm_heading1size' },
			msdyncrm_heading2color: { a: 'msdyncrm_heading2color' },
			msdyncrm_heading2font: { a: 'msdyncrm_heading2font' },
			msdyncrm_heading2size: { a: 'msdyncrm_heading2size' },
			msdyncrm_heading3color: { a: 'msdyncrm_heading3color' },
			msdyncrm_heading3font: { a: 'msdyncrm_heading3font' },
			msdyncrm_heading3size: { a: 'msdyncrm_heading3size' },
			msdyncrm_innerbackgroundcolor: { a: 'msdyncrm_innerbackgroundcolor' },
			msdyncrm_lineheight: { a: 'msdyncrm_lineheight' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_outerbackgroundcolor: { a: 'msdyncrm_outerbackgroundcolor' },
			msdyncrm_paragraphcolor: { a: 'msdyncrm_paragraphcolor' },
			msdyncrm_paragraphfont: { a: 'msdyncrm_paragraphfont' },
			msdyncrm_paragraphsize: { a: 'msdyncrm_paragraphsize' },
			msdyncrm_plaintextfullwidth: { a: 'msdyncrm_plaintextfullwidth' },
			msdyncrm_roundedcorners: { a: 'msdyncrm_roundedcorners' },
			msdyncrm_textdecoration: { a: 'msdyncrm_textdecoration' },
			msdyncrm_textfontweight: { a: 'msdyncrm_textfontweight' },
			msdyncrm_textitalicstyle: { a: 'msdyncrm_textitalicstyle' },
			msdyncrm_textlinkfontweight: { a: 'msdyncrm_textlinkfontweight' },
			msdyncrm_textlinkitalicstyle: { a: 'msdyncrm_textlinkitalicstyle' },
			msdyncrm_textlinkstylecolor: { a: 'msdyncrm_textlinkstylecolor' },
			msdyncrm_textlinkstylefont: { a: 'msdyncrm_textlinkstylefont' },
			msdyncrm_textlinktextdecoration: { a: 'msdyncrm_textlinktextdecoration' },
			msdyncrm_textstylecolor: { a: 'msdyncrm_textstylecolor' },
			msdyncrm_textstylefont: { a: 'msdyncrm_textstylefont' },
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
		var msdyncrm_generalstyles = {};
		msdyncrm_generalstyles.ODataEntity = e;
		msdyncrm_generalstyles.FormattedValue = {};
		for (var field in _msdyncrm_generalstyles) {
			var a = _msdyncrm_generalstyles[field].a;
			var b = _msdyncrm_generalstyles[field].b;
			var c = _msdyncrm_generalstyles[field].c;
			var d = _msdyncrm_generalstyles[field].d;
			var g = _msdyncrm_generalstyles[field].g;
			var r = _msdyncrm_generalstyles[field].r;
			webApiField(msdyncrm_generalstyles, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_generalstyles.Entity = u;
		msdyncrm_generalstyles.EntityName = 'msdyncrm_generalstyles';
		msdyncrm_generalstyles.EntityCollectionName = 'msdyncrm_generalstyleses';
		msdyncrm_generalstyles['@odata.etag'] = e['@odata.etag'];
		msdyncrm_generalstyles.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_generalstyles.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_generalstyles;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_generalstyles = {
		msdyncrm_dividerstyle : {
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_buttonstyleApi = function (e) {
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
		var _msdyncrm_buttonstyle = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_alignment: { a: 'msdyncrm_alignment' },
			msdyncrm_autowidth: { a: 'msdyncrm_autowidth' },
			msdyncrm_bordercolor: { a: 'msdyncrm_bordercolor' },
			msdyncrm_bordersize: { a: 'msdyncrm_bordersize' },
			msdyncrm_borderstyle: { a: 'msdyncrm_borderstyle' },
			msdyncrm_buttoncolor: { a: 'msdyncrm_buttoncolor' },
			msdyncrm_buttonstyleId: { a: 'msdyncrm_buttonstyleid' },
			msdyncrm_buttontext: { a: 'msdyncrm_buttontext' },
			msdyncrm_emailcolorpalette: { a: 'msdyncrm_emailcolorpalette' },
			msdyncrm_fittotext: { a: 'msdyncrm_fittotext' },
			msdyncrm_fontfamily: { a: 'msdyncrm_fontfamily' },
			msdyncrm_fontitalicstyle: { a: 'msdyncrm_fontitalicstyle' },
			msdyncrm_fontsize: { a: 'msdyncrm_fontsize' },
			msdyncrm_fontweight: { a: 'msdyncrm_fontweight' },
			msdyncrm_height: { a: 'msdyncrm_height' },
			msdyncrm_linkto: { a: 'msdyncrm_linkto' },
			msdyncrm_marginbottom: { a: 'msdyncrm_marginbottom' },
			msdyncrm_marginleft: { a: 'msdyncrm_marginleft' },
			msdyncrm_marginright: { a: 'msdyncrm_marginright' },
			msdyncrm_margintop: { a: 'msdyncrm_margintop' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_paddingbottom: { a: 'msdyncrm_paddingbottom' },
			msdyncrm_paddingleft: { a: 'msdyncrm_paddingleft' },
			msdyncrm_paddingright: { a: 'msdyncrm_paddingright' },
			msdyncrm_paddingtop: { a: 'msdyncrm_paddingtop' },
			msdyncrm_roundedcorners: { a: 'msdyncrm_roundedcorners' },
			msdyncrm_target: { a: 'msdyncrm_target' },
			msdyncrm_textdecoration: { a: 'msdyncrm_textdecoration' },
			msdyncrm_textfontstyle: { a: 'msdyncrm_textfontstyle' },
			msdyncrm_textstylecolor: { a: 'msdyncrm_textstylecolor' },
			msdyncrm_tracking: { a: 'msdyncrm_tracking' },
			msdyncrm_verticalalign: { a: 'msdyncrm_verticalalign' },
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
		var msdyncrm_buttonstyle = {};
		msdyncrm_buttonstyle.ODataEntity = e;
		msdyncrm_buttonstyle.FormattedValue = {};
		for (var field in _msdyncrm_buttonstyle) {
			var a = _msdyncrm_buttonstyle[field].a;
			var b = _msdyncrm_buttonstyle[field].b;
			var c = _msdyncrm_buttonstyle[field].c;
			var d = _msdyncrm_buttonstyle[field].d;
			var g = _msdyncrm_buttonstyle[field].g;
			var r = _msdyncrm_buttonstyle[field].r;
			webApiField(msdyncrm_buttonstyle, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_buttonstyle.Entity = u;
		msdyncrm_buttonstyle.EntityName = 'msdyncrm_buttonstyle';
		msdyncrm_buttonstyle.EntityCollectionName = 'msdyncrm_buttonstyles';
		msdyncrm_buttonstyle['@odata.etag'] = e['@odata.etag'];
		msdyncrm_buttonstyle.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_buttonstyle.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_buttonstyle;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_buttonstyle = {
		msdyncrm_target : {
			_blank: 164230001,
			_parent: 164230002,
			_self: 164230000,
			_top: 164230003
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
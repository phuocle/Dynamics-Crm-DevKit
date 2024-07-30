﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ThemeApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _theme = {
			AccentColor: { a: 'accentcolor' },
			BackgroundColor: { a: 'backgroundcolor' },
			ControlBorder: { a: 'controlborder' },
			ControlShade: { a: 'controlshade' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DefaultCustomEntityColor: { a: 'defaultcustomentitycolor' },
			DefaultEntityColor: { a: 'defaultentitycolor' },
			ExchangeRate: { a: 'exchangerate', r: true },
			GlobalLinkColor: { a: 'globallinkcolor' },
			HeaderColor: { a: 'headercolor' },
			HoverLinkEffect: { a: 'hoverlinkeffect' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsDefaultTheme: { a: 'isdefaulttheme' },
			LogoId: { b: 'logoid', a: '_logoid_value', c: 'webresources', d: 'webresource' },
			LogoToolTip: { a: 'logotooltip' },
			MainColor: { a: 'maincolor' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NavBarBackgroundColor: { a: 'navbarbackgroundcolor' },
			NavBarShelfColor: { a: 'navbarshelfcolor' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PageHeaderBackgroundColor: { a: 'pageheaderbackgroundcolor' },
			PanelHeaderBackgroundColor: { a: 'panelheaderbackgroundcolor' },
			ProcessControlColor: { a: 'processcontrolcolor' },
			SelectedLinkEffect: { a: 'selectedlinkeffect' },
			statecode: { a: 'statecode', r: true },
			statuscode: { a: 'statuscode' },
			ThemeId: { a: 'themeid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			Type: { a: 'type' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var theme = {};
		theme.ODataEntity = e;
		theme.FormattedValue = {};
		for (var field in _theme) {
			var a = _theme[field].a;
			var b = _theme[field].b;
			var c = _theme[field].c;
			var d = _theme[field].d;
			var g = _theme[field].g;
			var r = _theme[field].r;
			webApiField(theme, field, e, a, b, c, d, r, u, g);
		}
		theme.Entity = u;
		theme.EntityName = 'theme';
		theme.EntityCollectionName = 'themes';
		theme['@odata.etag'] = e['@odata.etag'];
		theme.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		theme.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return theme;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Theme = {
		statecode : {
			He_thong: 1,
			Tuy_chinh: 0
		},
		statuscode : {
			He_thong: 2,
			Tuy_chinh: 1
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
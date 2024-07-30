'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.WebResourceApi = function (e) {
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
		var _webresource = {
			CanBeDeleted: { a: 'canbedeleted' },
			ComponentState: { a: 'componentstate', r: true },
			Content: { a: 'content' },
			ContentFileRef_name: { a: 'contentfileref', r: true },
			ContentJson: { a: 'contentjson' },
			ContentJsonFileRef_name: { a: 'contentjsonfileref', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DependencyXml: { a: 'dependencyxml' },
			Description: { a: 'description' },
			DisplayName: { a: 'displayname' },
			IntroducedVersion: { a: 'introducedversion' },
			IsAvailableForMobileOffline: { a: 'isavailableformobileoffline' },
			IsCustomizable: { a: 'iscustomizable' },
			IsEnabledForMobileClient: { a: 'isenabledformobileclient' },
			IsHidden: { a: 'ishidden' },
			IsManaged: { a: 'ismanaged', r: true },
			LanguageCode: { a: 'languagecode' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			SilverlightVersion: { a: 'silverlightversion' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true },
			WebResourceId: { a: 'webresourceid' },
			WebResourceIdUnique: { a: 'webresourceidunique', r: true },
			WebResourceType: { a: 'webresourcetype' }
		};
		if (e === undefined) e = {};
		var u = {};
		var webresource = {};
		webresource.ODataEntity = e;
		webresource.FormattedValue = {};
		for (var field in _webresource) {
			var a = _webresource[field].a;
			var b = _webresource[field].b;
			var c = _webresource[field].c;
			var d = _webresource[field].d;
			var g = _webresource[field].g;
			var r = _webresource[field].r;
			webApiField(webresource, field, e, a, b, c, d, r, u, g);
		}
		webresource.Entity = u;
		webresource.EntityName = 'webresource';
		webresource.EntityCollectionName = 'webresources';
		webresource['@odata.etag'] = e['@odata.etag'];
		webresource.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		webresource.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return webresource;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.WebResource = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		WebResourceType : {
			Chuoi_RESX: 12,
			Dinh_dang_GIF: 7,
			Dinh_dang_ICO: 10,
			Dinh_dang_JPG: 6,
			Dinh_dang_PNG: 5,
			Dinh_dang_vec_to_SVG: 11,
			Du_lieu_XML: 4,
			Script_JScript: 3,
			Silverlight_XAP: 8,
			To_mau_CSS: 2,
			To_mau_XSL: 9,
			Trang_web_HTML: 1
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
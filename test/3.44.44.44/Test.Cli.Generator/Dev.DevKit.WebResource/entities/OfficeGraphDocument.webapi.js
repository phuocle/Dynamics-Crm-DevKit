'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.OfficeGraphDocumentApi = function (e) {
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
		var _officegraphdocument = {
			AuthorNames: { a: 'authornames', r: true },
			CreatedBy: { a: 'createdby', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedTime_UtcDateAndTime: { a: 'createdtime', r: true },
			DocumentId: { a: 'documentid' },
			DocumentLastModifiedBy: { a: 'documentlastmodifiedby', r: true },
			DocumentLastModifiedOn_UtcDateAndTime: { a: 'documentlastmodifiedon', r: true },
			DocumentPreviewMetadata: { a: 'documentpreviewmetadata', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			FileExtension: { a: 'fileextension', r: true },
			FileType: { a: 'filetype', r: true },
			ModifiedBy: { a: 'modifiedby', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedTime_UtcDateAndTime: { a: 'modifiedtime', r: true },
			OfficeGraphDocumentId: { a: 'officegraphdocumentid' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			PreviewImageUrl: { a: 'previewimageurl', r: true },
			QueryType: { a: 'querytype', r: true },
			Rank: { a: 'rank', r: true },
			ReadUrl: { a: 'readurl', r: true },
			SecondaryFileExtension: { a: 'secondaryfileextension', r: true },
			SiteTitle: { a: 'sitetitle', r: true },
			SiteUrl: { a: 'siteurl', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			ViewCount: { a: 'viewcount', r: true },
			WebLocationUrl: { a: 'weblocationurl', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var officegraphdocument = {};
		officegraphdocument.ODataEntity = e;
		officegraphdocument.FormattedValue = {};
		for (var field in _officegraphdocument) {
			var a = _officegraphdocument[field].a;
			var b = _officegraphdocument[field].b;
			var c = _officegraphdocument[field].c;
			var d = _officegraphdocument[field].d;
			var g = _officegraphdocument[field].g;
			var r = _officegraphdocument[field].r;
			webApiField(officegraphdocument, field, e, a, b, c, d, r, u, g);
		}
		officegraphdocument.Entity = u;
		officegraphdocument.EntityName = 'officegraphdocument';
		officegraphdocument.EntityCollectionName = 'officegraphdocuments';
		officegraphdocument['@odata.etag'] = e['@odata.etag'];
		officegraphdocument.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		officegraphdocument.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return officegraphdocument;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.OfficeGraphDocument = {
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
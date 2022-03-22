'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SalesLiteratureItemApi = function (e) {
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
		var _salesliteratureitem = {
			Abstract: { a: 'abstract' },
			AttachedDocumentUrl: { a: 'attacheddocumenturl' },
			AuthorName: { a: 'authorname' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DocumentBody: { a: 'documentbody' },
			FileName: { a: 'filename' },
			FileSize: { a: 'filesize' },
			FileType: { a: 'filetype', r: true },
			FileTypeCode: { a: 'filetypecode' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomerViewable: { a: 'iscustomerviewable' },
			KeyWords: { a: 'keywords' },
			MimeType: { a: 'mimetype' },
			Mode: { a: 'mode' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OrganizationId: { a: 'organizationid', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			SalesLiteratureId: { b: 'salesliteratureid', a: '_salesliteratureid_value', c: 'salesliteratures', d: 'salesliterature' },
			SalesLiteratureItemId: { a: 'salesliteratureitemid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Title: { a: 'title' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var salesliteratureitem = {};
		salesliteratureitem.ODataEntity = e;
		salesliteratureitem.FormattedValue = {};
		for (var field in _salesliteratureitem) {
			var a = _salesliteratureitem[field].a;
			var b = _salesliteratureitem[field].b;
			var c = _salesliteratureitem[field].c;
			var d = _salesliteratureitem[field].d;
			var g = _salesliteratureitem[field].g;
			var r = _salesliteratureitem[field].r;
			webApiField(salesliteratureitem, field, e, a, b, c, d, r, u, g);
		}
		salesliteratureitem.Entity = u;
		salesliteratureitem.EntityName = 'salesliteratureitem';
		salesliteratureitem.EntityCollectionName = 'salesliteratureitems';
		salesliteratureitem['@odata.etag'] = e['@odata.etag'];
		salesliteratureitem.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		salesliteratureitem.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return salesliteratureitem;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SalesLiteratureItem = {
		FileTypeCode : {
			Default_Value: 1
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
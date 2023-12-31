'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SalesLiteratureApi = function (e) {
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
		var _salesliterature = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			EmployeeContactId: { b: 'employeecontactid', a: '_employeecontactid_value', c: 'systemusers', d: 'systemuser' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExpirationDate_UtcDateOnly: { a: 'expirationdate' },
			HasAttachments: { a: 'hasattachments' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomerViewable: { a: 'iscustomerviewable' },
			KeyWords: { a: 'keywords' },
			LiteratureTypeCode: { a: 'literaturetypecode' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			ProcessId: { a: 'processid' },
			SalesLiteratureId: { a: 'salesliteratureid' },
			StageId: { a: 'stageid' },
			SubjectId: { b: 'subjectid', a: '_subjectid_value', c: 'subjects', d: 'subject' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var salesliterature = {};
		salesliterature.ODataEntity = e;
		salesliterature.FormattedValue = {};
		for (var field in _salesliterature) {
			var a = _salesliterature[field].a;
			var b = _salesliterature[field].b;
			var c = _salesliterature[field].c;
			var d = _salesliterature[field].d;
			var g = _salesliterature[field].g;
			var r = _salesliterature[field].r;
			webApiField(salesliterature, field, e, a, b, c, d, r, u, g);
		}
		salesliterature.Entity = u;
		salesliterature.EntityName = 'salesliterature';
		salesliterature.EntityCollectionName = 'salesliteratures';
		salesliterature['@odata.etag'] = e['@odata.etag'];
		salesliterature.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		salesliterature.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return salesliterature;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SalesLiterature = {
		LiteratureTypeCode : {
			Bulletins: 6,
			Company_Background: 9,
			Manuals: 8,
			Marketing_Collateral: 100001,
			News: 5,
			Policies_And_Procedures: 2,
			Presentation: 0,
			Price_Sheets: 7,
			Product_Sheet: 1,
			Sales_Literature: 3,
			Spreadsheets: 4
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
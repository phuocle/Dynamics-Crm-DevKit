'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.LeadAddressApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var property = {};
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return EMPTY_STRING;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return EMPTY_STRING;
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
					value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(property, 'FormattedValue', {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(property, 'Value', {
					get: getValue
				});
			}
			else {
				Object.defineProperty(property, 'Value', {
					get: getValue,
					set: setValue
				});
			}
			return property;
		}
		var leadaddress = {
			AddressNumber: { a: 'addressnumber' },
			AddressTypeCode: { a: 'addresstypecode' },
			City: { a: 'city' },
			Composite: { a: 'composite', r: true },
			Country: { a: 'country' },
			County: { a: 'county' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			Fax: { a: 'fax' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			Latitude: { a: 'latitude' },
			LeadAddressId: { a: 'leadaddressid' },
			Line1: { a: 'line1' },
			Line2: { a: 'line2' },
			Line3: { a: 'line3' },
			Longitude: { a: 'longitude' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId: { a: 'ownerid', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			ParentId: { b: 'parentid', a: '_parentid_value', c: 'leads', d: 'lead' },
			PostalCode: { a: 'postalcode' },
			PostOfficeBox: { a: 'postofficebox' },
			ShippingMethodCode: { a: 'shippingmethodcode' },
			StateOrProvince: { a: 'stateorprovince' },
			Telephone1: { a: 'telephone1' },
			Telephone2: { a: 'telephone2' },
			Telephone3: { a: 'telephone3' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UPSZone: { a: 'upszone' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			UTCOffset: { a: 'utcoffset' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in leadaddress) {
			var a = leadaddress[field].a;
			var b = leadaddress[field].b;
			var c = leadaddress[field].c;
			var d = leadaddress[field].d;
			var g = leadaddress[field].g;
			var r = leadaddress[field].r;
			leadaddress[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		leadaddress.Entity = u;
		leadaddress.EntityName = 'leadaddress';
		leadaddress.EntityCollectionName = 'leadaddresses';
		leadaddress['@odata.etag'] = e['@odata.etag'];
		leadaddress.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		leadaddress.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return leadaddress;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.LeadAddress = {
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
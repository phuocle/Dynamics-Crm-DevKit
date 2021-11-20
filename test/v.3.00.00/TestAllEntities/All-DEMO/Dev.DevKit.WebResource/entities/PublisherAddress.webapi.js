'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PublisherAddressApi = function (e) {
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
		var publisheraddress = {
			AddressNumber: { a: 'addressnumber' },
			AddressTypeCode: { a: 'addresstypecode' },
			City: { a: 'city' },
			Country: { a: 'country' },
			County: { a: 'county' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Fax: { a: 'fax' },
			FreightTermsCode: { a: 'freighttermscode' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			Latitude: { a: 'latitude' },
			Line1: { a: 'line1' },
			Line2: { a: 'line2' },
			Line3: { a: 'line3' },
			Longitude: { a: 'longitude' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			ParentId: { b: 'parentid', a: '_parentid_value', c: 'publishers', d: 'publisher' },
			PostalCode: { a: 'postalcode' },
			PostOfficeBox: { a: 'postofficebox' },
			PrimaryContactName: { a: 'primarycontactname' },
			PublisherAddressId: { a: 'publisheraddressid' },
			ShippingMethodCode: { a: 'shippingmethodcode' },
			StateOrProvince: { a: 'stateorprovince' },
			Telephone1: { a: 'telephone1' },
			Telephone2: { a: 'telephone2' },
			Telephone3: { a: 'telephone3' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UPSZone: { a: 'upszone' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			UTCOffset: { a: 'utcoffset' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in publisheraddress) {
			var a = publisheraddress[field].a;
			var b = publisheraddress[field].b;
			var c = publisheraddress[field].c;
			var d = publisheraddress[field].d;
			var g = publisheraddress[field].g;
			var r = publisheraddress[field].r;
			publisheraddress[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		publisheraddress.Entity = u;
		publisheraddress.EntityName = 'publisheraddress';
		publisheraddress.EntityCollectionName = 'publisheraddresses';
		publisheraddress['@odata.etag'] = e['@odata.etag'];
		publisheraddress.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		publisheraddress.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return publisheraddress;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.PublisherAddress = {
			AddressTypeCode : {
				Bill_To: 1,
				Other: 4,
				Primary: 3,
				Ship_To: 2
			},
			FreightTermsCode : {
				FOB: 1,
				No_Charge: 2
			},
			ShippingMethodCode : {
				Default: 1
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
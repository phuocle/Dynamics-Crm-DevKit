﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PublisherApi = function (e) {
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
		var _publisher = {
			Address1_AddressId: { a: 'address1_addressid' },
			Address1_AddressTypeCode: { a: 'address1_addresstypecode' },
			Address1_City: { a: 'address1_city' },
			Address1_Country: { a: 'address1_country' },
			Address1_County: { a: 'address1_county' },
			Address1_Fax: { a: 'address1_fax' },
			Address1_Latitude: { a: 'address1_latitude' },
			Address1_Line1: { a: 'address1_line1' },
			Address1_Line2: { a: 'address1_line2' },
			Address1_Line3: { a: 'address1_line3' },
			Address1_Longitude: { a: 'address1_longitude' },
			Address1_Name: { a: 'address1_name' },
			Address1_PostalCode: { a: 'address1_postalcode' },
			Address1_PostOfficeBox: { a: 'address1_postofficebox' },
			Address1_ShippingMethodCode: { a: 'address1_shippingmethodcode' },
			Address1_StateOrProvince: { a: 'address1_stateorprovince' },
			Address1_Telephone1: { a: 'address1_telephone1' },
			Address1_Telephone2: { a: 'address1_telephone2' },
			Address1_Telephone3: { a: 'address1_telephone3' },
			Address1_UPSZone: { a: 'address1_upszone' },
			Address1_UTCOffset: { a: 'address1_utcoffset' },
			Address2_AddressId: { a: 'address2_addressid' },
			Address2_AddressTypeCode: { a: 'address2_addresstypecode' },
			Address2_City: { a: 'address2_city' },
			Address2_Country: { a: 'address2_country' },
			Address2_County: { a: 'address2_county' },
			Address2_Fax: { a: 'address2_fax' },
			Address2_Latitude: { a: 'address2_latitude' },
			Address2_Line1: { a: 'address2_line1' },
			Address2_Line2: { a: 'address2_line2' },
			Address2_Line3: { a: 'address2_line3' },
			Address2_Longitude: { a: 'address2_longitude' },
			Address2_Name: { a: 'address2_name' },
			Address2_PostalCode: { a: 'address2_postalcode' },
			Address2_PostOfficeBox: { a: 'address2_postofficebox' },
			Address2_ShippingMethodCode: { a: 'address2_shippingmethodcode' },
			Address2_StateOrProvince: { a: 'address2_stateorprovince' },
			Address2_Telephone1: { a: 'address2_telephone1' },
			Address2_Telephone2: { a: 'address2_telephone2' },
			Address2_Telephone3: { a: 'address2_telephone3' },
			Address2_UPSZone: { a: 'address2_upszone' },
			Address2_UTCOffset: { a: 'address2_utcoffset' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomizationOptionValuePrefix: { a: 'customizationoptionvalueprefix' },
			CustomizationPrefix: { a: 'customizationprefix' },
			Description: { a: 'description' },
			EMailAddress: { a: 'emailaddress' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			FriendlyName: { a: 'friendlyname' },
			IsReadonly: { a: 'isreadonly', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			PinpointPublisherDefaultLocale: { a: 'pinpointpublisherdefaultlocale', r: true },
			PinpointPublisherId: { a: 'pinpointpublisherid', r: true },
			PublisherId: { a: 'publisherid' },
			SupportingWebsiteUrl: { a: 'supportingwebsiteurl' },
			UniqueName: { a: 'uniquename' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var publisher = {};
		publisher.ODataEntity = e;
		publisher.FormattedValue = {};
		for (var field in _publisher) {
			var a = _publisher[field].a;
			var b = _publisher[field].b;
			var c = _publisher[field].c;
			var d = _publisher[field].d;
			var g = _publisher[field].g;
			var r = _publisher[field].r;
			webApiField(publisher, field, e, a, b, c, d, r, u, g);
		}
		publisher.Entity = u;
		publisher.EntityName = 'publisher';
		publisher.EntityCollectionName = 'publishers';
		publisher['@odata.etag'] = e['@odata.etag'];
		publisher.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		publisher.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return publisher;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Publisher = {
		Address1_AddressTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		Address1_ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
		},
		Address2_AddressTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		Address2_ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
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
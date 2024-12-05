'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_VenueApi = function (e) {
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
		var _msevtmgt_venue = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msevtmgt_AccessibleToilets: { a: 'msevtmgt_accessibletoilets' },
			msevtmgt_AdditionalFacilities: { a: 'msevtmgt_additionalfacilities' },
			msevtmgt_AddressComposite: { a: 'msevtmgt_addresscomposite', r: true },
			msevtmgt_AddressLine1: { a: 'msevtmgt_addressline1' },
			msevtmgt_AddressLine2: { a: 'msevtmgt_addressline2' },
			msevtmgt_AddressLine3: { a: 'msevtmgt_addressline3' },
			msevtmgt_BuildingId: { b: 'msevtmgt_BuildingId', a: '_msevtmgt_buildingid_value', c: 'msevtmgt_buildings', d: 'msevtmgt_building' },
			msevtmgt_City: { a: 'msevtmgt_city' },
			msevtmgt_Cost: { a: 'msevtmgt_cost' },
			msevtmgt_cost_Base: { a: 'msevtmgt_cost_base', r: true },
			msevtmgt_Country: { a: 'msevtmgt_country' },
			msevtmgt_Description: { a: 'msevtmgt_description' },
			msevtmgt_DisabledAccess: { a: 'msevtmgt_disabledaccess' },
			msevtmgt_DisabledParking: { a: 'msevtmgt_disabledparking' },
			msevtmgt_Email: { a: 'msevtmgt_email' },
			msevtmgt_EstCapacity: { a: 'msevtmgt_estcapacity' },
			msevtmgt_layoutId: { b: 'msevtmgt_layoutId', a: '_msevtmgt_layoutid_value', c: 'msevtmgt_layouts', d: 'msevtmgt_layout' },
			msevtmgt_Name: { a: 'msevtmgt_name' },
			msevtmgt_ParentVenueId: { b: 'msevtmgt_ParentVenueId', a: '_msevtmgt_parentvenueid_value', c: 'msevtmgt_venues', d: 'msevtmgt_venue' },
			msevtmgt_PostalCode: { a: 'msevtmgt_postalcode' },
			msevtmgt_PrimaryContact: { b: 'msevtmgt_PrimaryContact', a: '_msevtmgt_primarycontact_value', c: 'contacts', d: 'contact' },
			msevtmgt_PublicTelephoneAvailable: { a: 'msevtmgt_publictelephoneavailable' },
			msevtmgt_RoomId: { b: 'msevtmgt_RoomId', a: '_msevtmgt_roomid_value', c: 'msevtmgt_rooms', d: 'msevtmgt_room' },
			msevtmgt_StateProvince: { a: 'msevtmgt_stateprovince' },
			msevtmgt_Telephone1: { a: 'msevtmgt_telephone1' },
			msevtmgt_Telephone2: { a: 'msevtmgt_telephone2' },
			msevtmgt_Telephone3: { a: 'msevtmgt_telephone3' },
			msevtmgt_TransactionCurrencyId: { b: 'msevtmgt_TransactionCurrencyId', a: '_msevtmgt_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			msevtmgt_VenueId: { a: 'msevtmgt_venueid' },
			msevtmgt_Website: { a: 'msevtmgt_website' },
			msevtmgt_WifiAvailable: { a: 'msevtmgt_wifiavailable' },
			msevtmgt_WifiPassword: { a: 'msevtmgt_wifipassword' },
			msevtmgt_WifiSSID: { a: 'msevtmgt_wifissid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msevtmgt_venue = {};
		msevtmgt_venue.ODataEntity = e;
		msevtmgt_venue.FormattedValue = {};
		for (var field in _msevtmgt_venue) {
			var a = _msevtmgt_venue[field].a;
			var b = _msevtmgt_venue[field].b;
			var c = _msevtmgt_venue[field].c;
			var d = _msevtmgt_venue[field].d;
			var g = _msevtmgt_venue[field].g;
			var r = _msevtmgt_venue[field].r;
			webApiField(msevtmgt_venue, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_venue.Entity = u;
		msevtmgt_venue.EntityName = 'msevtmgt_venue';
		msevtmgt_venue.EntityCollectionName = 'msevtmgt_venues';
		msevtmgt_venue['@odata.etag'] = e['@odata.etag'];
		msevtmgt_venue.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_venue.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_venue;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_Venue = {
		msevtmgt_AccessibleToilets : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_DisabledAccess : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_DisabledParking : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_PublicTelephoneAvailable : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_WifiAvailable : {
			No: 100000002,
			Yes: 100000001
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
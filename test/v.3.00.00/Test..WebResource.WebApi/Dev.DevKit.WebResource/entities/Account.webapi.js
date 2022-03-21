'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AccountApi = function (e) {
		//var EMPTY_STRING = '';
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
		function webApiField2(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
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
			Object.defineProperty(obj, field, {
				get: getValue,
				set: setValue,
			});
		}
		var _account = {
			AccountCategoryCode: { a: 'accountcategorycode' },
			AccountClassificationCode: { a: 'accountclassificationcode' },
			AccountId: { a: 'accountid' },
			AccountNumber: { a: 'accountnumber' },
			AccountRatingCode: { a: 'accountratingcode' },
			Address1_AddressId: { a: 'address1_addressid' },
			Address1_AddressTypeCode: { a: 'address1_addresstypecode' },
			Address1_City: { a: 'address1_city' },
			Address1_Composite: { a: 'address1_composite', r: true },
			Address1_Country: { a: 'address1_country' },
			Address1_County: { a: 'address1_county' },
			Address1_Fax: { a: 'address1_fax' },
			Address1_FreightTermsCode: { a: 'address1_freighttermscode' },
			Address1_Latitude: { a: 'address1_latitude' },
			Address1_Line1: { a: 'address1_line1' },
			Address1_Line2: { a: 'address1_line2' },
			Address1_Line3: { a: 'address1_line3' },
			Address1_Longitude: { a: 'address1_longitude' },
			Address1_Name: { a: 'address1_name' },
			Address1_PostalCode: { a: 'address1_postalcode' },
			Address1_PostOfficeBox: { a: 'address1_postofficebox' },
			Address1_PrimaryContactName: { a: 'address1_primarycontactname' },
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
			Address2_Composite: { a: 'address2_composite', r: true },
			Address2_Country: { a: 'address2_country' },
			Address2_County: { a: 'address2_county' },
			Address2_Fax: { a: 'address2_fax' },
			Address2_FreightTermsCode: { a: 'address2_freighttermscode' },
			Address2_Latitude: { a: 'address2_latitude' },
			Address2_Line1: { a: 'address2_line1' },
			Address2_Line2: { a: 'address2_line2' },
			Address2_Line3: { a: 'address2_line3' },
			Address2_Longitude: { a: 'address2_longitude' },
			Address2_Name: { a: 'address2_name' },
			Address2_PostalCode: { a: 'address2_postalcode' },
			Address2_PostOfficeBox: { a: 'address2_postofficebox' },
			Address2_PrimaryContactName: { a: 'address2_primarycontactname' },
			Address2_ShippingMethodCode: { a: 'address2_shippingmethodcode' },
			Address2_StateOrProvince: { a: 'address2_stateorprovince' },
			Address2_Telephone1: { a: 'address2_telephone1' },
			Address2_Telephone2: { a: 'address2_telephone2' },
			Address2_Telephone3: { a: 'address2_telephone3' },
			Address2_UPSZone: { a: 'address2_upszone' },
			Address2_UTCOffset: { a: 'address2_utcoffset' },
			Aging30: { a: 'aging30', r: true },
			Aging30_Base: { a: 'aging30_base', r: true },
			Aging60: { a: 'aging60', r: true },
			Aging60_Base: { a: 'aging60_base', r: true },
			Aging90: { a: 'aging90', r: true },
			Aging90_Base: { a: 'aging90_base', r: true },
			BusinessTypeCode: { a: 'businesstypecode' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedByExternalParty: { b: 'createdbyexternalparty', a: '_createdbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreditLimit: { a: 'creditlimit' },
			CreditLimit_Base: { a: 'creditlimit_base', r: true },
			CreditOnHold: { a: 'creditonhold' },
			CustomerSizeCode: { a: 'customersizecode' },
			CustomerTypeCode: { a: 'customertypecode' },
			Description: { a: 'description' },
			devkit_CategoryCode: { a: 'devkit_categorycode', g: true },
			devkit_CurrencySymbolCalculated: { a: 'devkit_currencysymbolcalculated', r: true },
			devkit_IsParentCurrencySymbolCalculated: { a: 'devkit_isparentcurrencysymbolcalculated', r: true },
			devkit_ParentCurrencySymbolCalculated: { a: 'devkit_parentcurrencysymbolcalculated', r: true },
			DoNotBulkEMail: { a: 'donotbulkemail' },
			DoNotBulkPostalMail: { a: 'donotbulkpostalmail' },
			DoNotEMail: { a: 'donotemail' },
			DoNotFax: { a: 'donotfax' },
			DoNotPhone: { a: 'donotphone' },
			DoNotPostalMail: { a: 'donotpostalmail' },
			DoNotSendMM: { a: 'donotsendmm' },
			EMailAddress1: { a: 'emailaddress1' },
			EMailAddress2: { a: 'emailaddress2' },
			EMailAddress3: { a: 'emailaddress3' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			Fax: { a: 'fax' },
			FollowEmail: { a: 'followemail' },
			FtpSiteURL: { a: 'ftpsiteurl' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IndustryCode: { a: 'industrycode' },
			IsPrivate: { a: 'isprivate', r: true },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LastUsedInCampaign_UtcDateOnly: { a: 'lastusedincampaign' },
			MarketCap: { a: 'marketcap' },
			MarketCap_Base: { a: 'marketcap_base', r: true },
			MarketingOnly: { a: 'marketingonly' },
			MasterAccountIdName: { a: 'masteraccountidname', r: true },
			MasterId: { b: 'masterid', a: '_masterid_value', c: 'accounts', d: 'account', r: true },
			Merged: { a: 'merged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedByExternalParty: { b: 'modifiedbyexternalparty', a: '_modifiedbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NumberOfEmployees: { a: 'numberofemployees' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwnershipCode: { a: 'ownershipcode' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentAccountId: { b: 'parentaccountid', a: '_parentaccountid_value', c: 'accounts', d: 'account' },
			ParticipatesInWorkflow: { a: 'participatesinworkflow' },
			PaymentTermsCode: { a: 'paymenttermscode' },
			PreferredAppointmentDayCode: { a: 'preferredappointmentdaycode' },
			PreferredAppointmentTimeCode: { a: 'preferredappointmenttimecode' },
			PreferredContactMethodCode: { a: 'preferredcontactmethodcode' },
			PreferredSystemUserId: { b: 'preferredsystemuserid', a: '_preferredsystemuserid_value', c: 'systemusers', d: 'systemuser' },
			PrimaryContactId: { b: 'primarycontactid', a: '_primarycontactid_value', c: 'contacts', d: 'contact' },
			PrimarySatoriId: { a: 'primarysatoriid' },
			PrimaryTwitterId: { a: 'primarytwitterid' },
			ProcessId: { a: 'processid' },
			Revenue: { a: 'revenue' },
			Revenue_Base: { a: 'revenue_base', r: true },
			SharesOutstanding: { a: 'sharesoutstanding' },
			ShippingMethodCode: { a: 'shippingmethodcode' },
			SIC: { a: 'sic' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SLAName: { a: 'slaname', r: true },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			StockExchange: { a: 'stockexchange' },
			Telephone1: { a: 'telephone1' },
			Telephone2: { a: 'telephone2' },
			Telephone3: { a: 'telephone3' },
			TerritoryCode: { a: 'territorycode' },
			TickerSymbol: { a: 'tickersymbol' },
			TimeSpentByMeOnEmailAndMeetings: { a: 'timespentbymeonemailandmeetings', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			WebSiteURL: { a: 'websiteurl' },
			YomiName: { a: 'yominame' }
		};
		if (e === undefined) e = {};
		var u = {};
		var account = {};
		account.ODataEntity = e;
		account.FormattedValue = {};
		for (var field in _account) {
			var a = _account[field].a;
			var b = _account[field].b;
			var c = _account[field].c;
			var d = _account[field].d;
			var g = _account[field].g;
			var r = _account[field].r;
			webApiField2(account, field, e, a, b, c, d, r, u, g);
		}
		account.Entity = u;
		account.EntityName = 'account';
		account.EntityCollectionName = 'accounts';
		account['@odata.etag'] = e['@odata.etag'];
		account.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		account.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return account;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Account = {
		AccountCategoryCode : {
			Preferred_Customer: 1,
			Standard: 2
		},
		AccountClassificationCode : {
			Default_Value: 1
		},
		AccountRatingCode : {
			Default_Value: 1
		},
		Address1_AddressTypeCode : {
			Bill_To: 1,
			Other: 4,
			Primary: 3,
			Ship_To: 2
		},
		Address1_FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		Address1_ShippingMethodCode : {
			Airborne: 1,
			DHL: 2,
			FedEx: 3,
			Full_Load: 6,
			Postal_Mail: 5,
			UPS: 4,
			Will_Call: 7
		},
		Address2_AddressTypeCode : {
			Default_Value: 1
		},
		Address2_FreightTermsCode : {
			Default_Value: 1
		},
		Address2_ShippingMethodCode : {
			Default_Value: 1
		},
		BusinessTypeCode : {
			Default_Value: 1
		},
		CustomerSizeCode : {
			Default_Value: 1
		},
		CustomerTypeCode : {
			Competitor: 1,
			Consultant: 2,
			Customer: 3,
			Influencer: 6,
			Investor: 4,
			Other: 12,
			Partner: 5,
			Press: 7,
			Prospect: 8,
			Reseller: 9,
			Supplier: 10,
			Vendor: 11
		},
		devkit_CategoryCode : {
			Business: 1,
			Family: 2,
			Other: 5,
			Sales: 4,
			Sales_Team: 1001,
			Service: 1002,
			Social: 3,
			Stakeholder: 1000
		},
		IndustryCode : {
			Accounting: 1,
			Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2,
			Broadcasting_Printing_and_Publishing: 3,
			Brokers: 4,
			Building_Supply_Retail: 5,
			Business_Services: 6,
			Consulting: 7,
			Consumer_Services: 8,
			Design_Direction_and_Creative_Management: 9,
			Distributors_Dispatchers_and_Processors: 10,
			Doctors_Offices_and_Clinics: 11,
			Durable_Manufacturing: 12,
			Eating_and_Drinking_Places: 13,
			Entertainment_Retail: 14,
			Equipment_Rental_and_Leasing: 15,
			Financial: 16,
			Food_and_Tobacco_Processing: 17,
			Inbound_Capital_Intensive_Processing: 18,
			Inbound_Repair_and_Services: 19,
			Insurance: 20,
			Legal_Services: 21,
			Non_Durable_Merchandise_Retail: 22,
			Outbound_Consumer_Service: 23,
			Petrochemical_Extraction_and_Distribution: 24,
			Service_Retail: 25,
			SIG_Affiliations: 26,
			Social_Services: 27,
			Special_Outbound_Trade_Contractors: 28,
			Specialty_Realty: 29,
			Transportation: 30,
			Utility_Creation_and_Distribution: 31,
			Vehicle_Retail: 32,
			Wholesale: 33
		},
		OwnershipCode : {
			Other: 4,
			Private: 2,
			Public: 1,
			Subsidiary: 3
		},
		PaymentTermsCode : {
			_2_10_Net_30: 2,
			Net_30: 1,
			Net_45: 3,
			Net_60: 4
		},
		PreferredAppointmentDayCode : {
			Friday: 5,
			Monday: 1,
			Saturday: 6,
			Sunday: 0,
			Thursday: 4,
			Tuesday: 2,
			Wednesday: 3
		},
		PreferredAppointmentTimeCode : {
			Afternoon: 2,
			Evening: 3,
			Morning: 1
		},
		PreferredContactMethodCode : {
			Any: 1,
			Email: 2,
			Fax: 4,
			Mail: 5,
			Phone: 3
		},
		ShippingMethodCode : {
			Default_Value: 1
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 1,
			Inactive: 2
		},
		TerritoryCode : {
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
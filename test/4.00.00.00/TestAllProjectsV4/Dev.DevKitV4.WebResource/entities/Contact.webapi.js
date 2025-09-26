'use strict';
/** @namespace DevKitV4 */
var DevKitV4;
(function (DevKitV4) {
	DevKitV4.ContactApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _contact = {
			AccountId: { b: 'accountid', a: '_accountid_value', c: 'accounts', d: 'account', r: true },
			AccountRoleCode: { a: 'accountrolecode', g: 'Integer' },
			Address1_AddressId: { a: 'address1_addressid' },
			Address1_AddressTypeCode: { a: 'address1_addresstypecode', g: 'Integer' },
			Address1_City: { a: 'address1_city' },
			Address1_Composite: { a: 'address1_composite', r: true },
			Address1_Country: { a: 'address1_country' },
			Address1_County: { a: 'address1_county' },
			Address1_Fax: { a: 'address1_fax' },
			Address1_FreightTermsCode: { a: 'address1_freighttermscode', g: 'Integer' },
			Address1_Latitude: { a: 'address1_latitude', g: 'Number' },
			Address1_Line1: { a: 'address1_line1' },
			Address1_Line2: { a: 'address1_line2' },
			Address1_Line3: { a: 'address1_line3' },
			Address1_Longitude: { a: 'address1_longitude', g: 'Number' },
			Address1_Name: { a: 'address1_name' },
			Address1_PostalCode: { a: 'address1_postalcode' },
			Address1_PostOfficeBox: { a: 'address1_postofficebox' },
			Address1_PrimaryContactName: { a: 'address1_primarycontactname' },
			Address1_ShippingMethodCode: { a: 'address1_shippingmethodcode', g: 'Integer' },
			Address1_StateOrProvince: { a: 'address1_stateorprovince' },
			Address1_Telephone1: { a: 'address1_telephone1' },
			Address1_Telephone2: { a: 'address1_telephone2' },
			Address1_Telephone3: { a: 'address1_telephone3' },
			Address1_UPSZone: { a: 'address1_upszone' },
			Address1_UTCOffset: { a: 'address1_utcoffset', g: 'Integer' },
			Address2_AddressId: { a: 'address2_addressid' },
			Address2_AddressTypeCode: { a: 'address2_addresstypecode', g: 'Integer' },
			Address2_City: { a: 'address2_city' },
			Address2_Composite: { a: 'address2_composite', r: true },
			Address2_Country: { a: 'address2_country' },
			Address2_County: { a: 'address2_county' },
			Address2_Fax: { a: 'address2_fax' },
			Address2_FreightTermsCode: { a: 'address2_freighttermscode', g: 'Integer' },
			Address2_Latitude: { a: 'address2_latitude', g: 'Number' },
			Address2_Line1: { a: 'address2_line1' },
			Address2_Line2: { a: 'address2_line2' },
			Address2_Line3: { a: 'address2_line3' },
			Address2_Longitude: { a: 'address2_longitude', g: 'Number' },
			Address2_Name: { a: 'address2_name' },
			Address2_PostalCode: { a: 'address2_postalcode' },
			Address2_PostOfficeBox: { a: 'address2_postofficebox' },
			Address2_PrimaryContactName: { a: 'address2_primarycontactname' },
			Address2_ShippingMethodCode: { a: 'address2_shippingmethodcode', g: 'Integer' },
			Address2_StateOrProvince: { a: 'address2_stateorprovince' },
			Address2_Telephone1: { a: 'address2_telephone1' },
			Address2_Telephone2: { a: 'address2_telephone2' },
			Address2_Telephone3: { a: 'address2_telephone3' },
			Address2_UPSZone: { a: 'address2_upszone' },
			Address2_UTCOffset: { a: 'address2_utcoffset', g: 'Integer' },
			Address3_AddressId: { a: 'address3_addressid' },
			Address3_AddressTypeCode: { a: 'address3_addresstypecode', g: 'Integer' },
			Address3_City: { a: 'address3_city' },
			Address3_Composite: { a: 'address3_composite', r: true },
			Address3_Country: { a: 'address3_country' },
			Address3_County: { a: 'address3_county' },
			Address3_Fax: { a: 'address3_fax' },
			Address3_FreightTermsCode: { a: 'address3_freighttermscode', g: 'Integer' },
			Address3_Latitude: { a: 'address3_latitude', g: 'Number' },
			Address3_Line1: { a: 'address3_line1' },
			Address3_Line2: { a: 'address3_line2' },
			Address3_Line3: { a: 'address3_line3' },
			Address3_Longitude: { a: 'address3_longitude', g: 'Number' },
			Address3_Name: { a: 'address3_name' },
			Address3_PostalCode: { a: 'address3_postalcode' },
			Address3_PostOfficeBox: { a: 'address3_postofficebox' },
			Address3_PrimaryContactName: { a: 'address3_primarycontactname' },
			Address3_ShippingMethodCode: { a: 'address3_shippingmethodcode', g: 'Integer' },
			Address3_StateOrProvince: { a: 'address3_stateorprovince' },
			Address3_Telephone1: { a: 'address3_telephone1' },
			Address3_Telephone2: { a: 'address3_telephone2' },
			Address3_Telephone3: { a: 'address3_telephone3' },
			Address3_UPSZone: { a: 'address3_upszone' },
			Address3_UTCOffset: { a: 'address3_utcoffset', g: 'Integer' },
			adx_ConfirmRemovePassword: { a: 'adx_confirmremovepassword', g: 'Boolean' },
			Adx_CreatedByIPAddress: { a: 'adx_createdbyipaddress' },
			Adx_CreatedByUsername: { a: 'adx_createdbyusername' },
			adx_identity_accessfailedcount: { a: 'adx_identity_accessfailedcount', g: 'Integer' },
			adx_identity_emailaddress1confirmed: { a: 'adx_identity_emailaddress1confirmed', g: 'Boolean' },
			adx_identity_lastsuccessfullogin_UtcDateAndTime: { a: 'adx_identity_lastsuccessfullogin', g: 'DateTime' },
			adx_identity_locallogindisabled: { a: 'adx_identity_locallogindisabled', g: 'Boolean' },
			adx_identity_lockoutenabled: { a: 'adx_identity_lockoutenabled', g: 'Boolean' },
			adx_identity_lockoutenddate_UtcDateAndTime: { a: 'adx_identity_lockoutenddate', g: 'DateTime' },
			adx_identity_logonenabled: { a: 'adx_identity_logonenabled', g: 'Boolean' },
			adx_identity_mobilephoneconfirmed: { a: 'adx_identity_mobilephoneconfirmed', g: 'Boolean' },
			adx_identity_newpassword: { a: 'adx_identity_newpassword' },
			adx_identity_passwordhash: { a: 'adx_identity_passwordhash' },
			adx_identity_securitystamp: { a: 'adx_identity_securitystamp' },
			adx_identity_twofactorenabled: { a: 'adx_identity_twofactorenabled', g: 'Boolean' },
			adx_identity_username: { a: 'adx_identity_username' },
			Adx_ModifiedByIPAddress: { a: 'adx_modifiedbyipaddress' },
			Adx_ModifiedByUsername: { a: 'adx_modifiedbyusername' },
			Adx_OrganizationName: { a: 'adx_organizationname' },
			adx_preferredlcid: { a: 'adx_preferredlcid', g: 'Integer' },
			adx_profilealert: { a: 'adx_profilealert', g: 'Boolean' },
			adx_profilealertdate_UtcDateAndTime: { a: 'adx_profilealertdate', g: 'DateTime' },
			adx_profilealertinstructions: { a: 'adx_profilealertinstructions' },
			Adx_ProfileIsAnonymous: { a: 'adx_profileisanonymous', g: 'Boolean' },
			Adx_ProfileLastActivity_UtcDateAndTime: { a: 'adx_profilelastactivity', g: 'DateTime' },
			adx_profilemodifiedon_UtcDateAndTime: { a: 'adx_profilemodifiedon', g: 'DateTime' },
			adx_PublicProfileCopy: { a: 'adx_publicprofilecopy' },
			Adx_TimeZone: { a: 'adx_timezone', g: 'Integer' },
			Aging30: { a: 'aging30', r: true, g: 'Number' },
			Aging30_Base: { a: 'aging30_base', r: true, g: 'Number' },
			Aging60: { a: 'aging60', r: true, g: 'Number' },
			Aging60_Base: { a: 'aging60_base', r: true, g: 'Number' },
			Aging90: { a: 'aging90', r: true, g: 'Number' },
			Aging90_Base: { a: 'aging90_base', r: true, g: 'Number' },
			Anniversary_DateOnly: { a: 'anniversary', g: 'DateTime' },
			AnnualIncome: { a: 'annualincome', g: 'Number' },
			AnnualIncome_Base: { a: 'annualincome_base', r: true, g: 'Number' },
			AssistantName: { a: 'assistantname' },
			AssistantPhone: { a: 'assistantphone' },
			BirthDate_DateOnly: { a: 'birthdate', g: 'DateTime' },
			Business2: { a: 'business2' },
			Callback: { a: 'callback' },
			ChildrensNames: { a: 'childrensnames' },
			Company: { a: 'company' },
			ContactId: { a: 'contactid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedByExternalParty: { b: 'createdbyexternalparty', a: '_createdbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreditLimit: { a: 'creditlimit', g: 'Number' },
			CreditLimit_Base: { a: 'creditlimit_base', r: true, g: 'Number' },
			CreditOnHold: { a: 'creditonhold', g: 'Boolean' },
			CustomerSizeCode: { a: 'customersizecode', g: 'Integer' },
			CustomerTypeCode: { a: 'customertypecode', g: 'Integer' },
			Department: { a: 'department' },
			Description: { a: 'description' },
			devkit_CategoryCode: { a: 'devkit_categorycode', g: 'MultiOptionSet' },
			DoNotBulkEMail: { a: 'donotbulkemail', g: 'Boolean' },
			DoNotBulkPostalMail: { a: 'donotbulkpostalmail', g: 'Boolean' },
			DoNotEMail: { a: 'donotemail', g: 'Boolean' },
			DoNotFax: { a: 'donotfax', g: 'Boolean' },
			DoNotPhone: { a: 'donotphone', g: 'Boolean' },
			DoNotPostalMail: { a: 'donotpostalmail', g: 'Boolean' },
			DoNotSendMM: { a: 'donotsendmm', g: 'Boolean' },
			EducationCode: { a: 'educationcode', g: 'Integer' },
			EMailAddress1: { a: 'emailaddress1' },
			EMailAddress2: { a: 'emailaddress2' },
			EMailAddress3: { a: 'emailaddress3' },
			EmployeeId: { a: 'employeeid' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true, g: 'Number' },
			ExternalUserIdentifier: { a: 'externaluseridentifier' },
			FamilyStatusCode: { a: 'familystatuscode', g: 'Integer' },
			Fax: { a: 'fax' },
			FirstName: { a: 'firstname' },
			FollowEmail: { a: 'followemail', g: 'Boolean' },
			FtpSiteUrl: { a: 'ftpsiteurl' },
			FullName: { a: 'fullname', r: true },
			GenderCode: { a: 'gendercode', g: 'Integer' },
			GovernmentId: { a: 'governmentid' },
			HasChildrenCode: { a: 'haschildrencode', g: 'Integer' },
			Home2: { a: 'home2' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			IsAutoCreate: { a: 'isautocreate', r: true, g: 'Boolean' },
			IsBackofficeCustomer: { a: 'isbackofficecustomer', g: 'Boolean' },
			IsPrivate: { a: 'isprivate', r: true, g: 'Boolean' },
			JobTitle: { a: 'jobtitle' },
			LastName: { a: 'lastname' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime', g: 'DateTime' },
			LastUsedInCampaign_UtcDateOnly: { a: 'lastusedincampaign', g: 'DateTime' },
			LeadSourceCode: { a: 'leadsourcecode', g: 'Integer' },
			ManagerName: { a: 'managername' },
			ManagerPhone: { a: 'managerphone' },
			MarketingOnly: { a: 'marketingonly', g: 'Boolean' },
			MasterId: { b: 'masterid', a: '_masterid_value', c: 'contacts', d: 'contact', r: true },
			Merged: { a: 'merged', r: true, g: 'Boolean' },
			MiddleName: { a: 'middlename' },
			MobilePhone: { a: 'mobilephone' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedByExternalParty: { b: 'modifiedbyexternalparty', a: '_modifiedbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msa_managingpartnerid: { b: 'msa_managingpartnerid', a: '_msa_managingpartnerid_value', c: 'accounts', d: 'account' },
			msdyn_disablewebtracking: { a: 'msdyn_disablewebtracking', g: 'Boolean' },
			msdyn_isminor: { a: 'msdyn_isminor', g: 'Boolean' },
			msdyn_isminorwithparentalconsent: { a: 'msdyn_isminorwithparentalconsent', g: 'Boolean' },
			msdyn_portaltermsagreementdate_UtcDateAndTime: { a: 'msdyn_portaltermsagreementdate', g: 'DateTime' },
			mspp_userpreferredlcid: { a: 'mspp_userpreferredlcid', g: 'Integer' },
			NickName: { a: 'nickname' },
			NumberOfChildren: { a: 'numberofchildren', g: 'Integer' },
			OnHoldTime: { a: 'onholdtime', r: true, g: 'Integer' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Pager: { a: 'pager' },
			ParentContactId: { b: 'parentcontactid', a: '_parentcontactid_value', c: 'contacts', d: 'contact', r: true },
			parentcustomerid_account: { b: 'parentcustomerid_account', a: '_parentcustomerid_value', c: 'accounts', d: 'account' },
			parentcustomerid_contact: { b: 'parentcustomerid_contact', a: '_parentcustomerid_value', c: 'contacts', d: 'contact' },
			ParticipatesInWorkflow: { a: 'participatesinworkflow', g: 'Boolean' },
			PaymentTermsCode: { a: 'paymenttermscode', g: 'Integer' },
			PreferredAppointmentDayCode: { a: 'preferredappointmentdaycode', g: 'Integer' },
			PreferredAppointmentTimeCode: { a: 'preferredappointmenttimecode', g: 'Integer' },
			PreferredContactMethodCode: { a: 'preferredcontactmethodcode', g: 'Integer' },
			PreferredSystemUserId: { b: 'preferredsystemuserid', a: '_preferredsystemuserid_value', c: 'systemusers', d: 'systemuser' },
			ProcessId: { a: 'processid' },
			Salutation: { a: 'salutation' },
			ShippingMethodCode: { a: 'shippingmethodcode', g: 'Integer' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SpousesName: { a: 'spousesname' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			SubscriptionId: { a: 'subscriptionid' },
			Suffix: { a: 'suffix' },
			Telephone1: { a: 'telephone1' },
			Telephone2: { a: 'telephone2' },
			Telephone3: { a: 'telephone3' },
			TerritoryCode: { a: 'territorycode', g: 'Integer' },
			TimeSpentByMeOnEmailAndMeetings: { a: 'timespentbymeonemailandmeetings', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' },
			WebSiteUrl: { a: 'websiteurl' },
			YomiFirstName: { a: 'yomifirstname' },
			YomiFullName: { a: 'yomifullname', r: true },
			YomiLastName: { a: 'yomilastname' },
			YomiMiddleName: { a: 'yomimiddlename' }
		};
		if (e === undefined) e = {};
		const u = {};
		const contact = {};
		contact.ODataEntity = e;
		contact.FormattedValue = {};
		for (const field in _contact) {
			const fieldConfig = _contact[field];
			webApiField(contact, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		contact.Entity = u;
		contact.EntityName = 'contact';
		contact.EntityCollectionName = 'contacts';
		contact['@odata.etag'] = e?.['@odata.etag'];
		contact.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		contact.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return contact;
	};
})(DevKitV4 || (DevKitV4 = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Contact = {
		AccountRoleCode : {
			Decision_Maker: 1,
			Employee: 2,
			Influencer: 3
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
		Address3_AddressTypeCode : {
			Default_Value: 1
		},
		Address3_FreightTermsCode : {
			Default_Value: 1
		},
		Address3_ShippingMethodCode : {
			Default_Value: 1
		},
		CustomerSizeCode : {
			Default_Value: 1
		},
		CustomerTypeCode : {
			Default_Value: 1
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
		EducationCode : {
			Default_Value: 1
		},
		FamilyStatusCode : {
			Divorced: 3,
			Married: 2,
			Single: 1,
			Widowed: 4
		},
		GenderCode : {
			Female: 2,
			Male: 1
		},
		HasChildrenCode : {
			Default_Value: 1
		},
		LeadSourceCode : {
			Default_Value: 1
		},
		mspp_userpreferredlcid : {
			Arabic: 1025,
			Basque_Basque: 1069,
			Bulgarian_Bulgaria: 1026,
			Catalan_Catalan: 1027,
			Chinese_China: 2052,
			Chinese_Hong_Kong_SAR: 3076,
			Chinese_Traditional: 1028,
			Croatian_Croatia: 1050,
			Czech_Czech_Republic: 1029,
			Danish_Denmark: 1030,
			Dutch_Netherlands: 1043,
			English: 1033,
			Estonian_Estonia: 1061,
			Finnish_Finland: 1035,
			French_France: 1036,
			Galician_Spain: 1110,
			German_Germany: 1031,
			Greek_Greece: 1032,
			Hebrew: 1037,
			Hindi_India: 1081,
			Hungarian_Hungary: 1038,
			Indonesian_Indonesia: 1057,
			Italian_Italy: 1040,
			Japanese_Japan: 1041,
			Kazakh_Kazakhstan: 1087,
			Korean_Korea: 1042,
			Latvian_Latvia: 1062,
			Lithuanian_Lithuania: 1063,
			Malay_Malaysia: 1086,
			Norwegian_Bokmal_Norway: 1044,
			Polish_Poland: 1045,
			Portuguese_Brazil: 1046,
			Portuguese_Portugal: 2070,
			Romanian_Romania: 1048,
			Russian_Russia: 1049,
			Serbian_Cyrillic_Serbia: 3098,
			Serbian_Latin_Serbia: 2074,
			Slovak_Slovakia: 1051,
			Slovenian_Slovenia: 1060,
			Spanish_Traditional_Sort_Spain: 3082,
			Swedish_Sweden: 1053,
			Thai_Thailand: 1054,
			Turkish_Turkiye: 1055,
			Ukrainian_Ukraine: 1058,
			Vietnamese_Vietnam: 1066
		},
		ParentCustomerIdType : {
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
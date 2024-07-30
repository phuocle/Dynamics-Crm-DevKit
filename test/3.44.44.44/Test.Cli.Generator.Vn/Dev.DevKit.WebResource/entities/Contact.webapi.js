'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ContactApi = function (e) {
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
		var _contact = {
			AccountId: { b: 'accountid', a: '_accountid_value', c: 'accounts', d: 'account', r: true },
			AccountRoleCode: { a: 'accountrolecode' },
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
			Address3_AddressId: { a: 'address3_addressid' },
			Address3_AddressTypeCode: { a: 'address3_addresstypecode' },
			Address3_City: { a: 'address3_city' },
			Address3_Composite: { a: 'address3_composite', r: true },
			Address3_Country: { a: 'address3_country' },
			Address3_County: { a: 'address3_county' },
			Address3_Fax: { a: 'address3_fax' },
			Address3_FreightTermsCode: { a: 'address3_freighttermscode' },
			Address3_Latitude: { a: 'address3_latitude' },
			Address3_Line1: { a: 'address3_line1' },
			Address3_Line2: { a: 'address3_line2' },
			Address3_Line3: { a: 'address3_line3' },
			Address3_Longitude: { a: 'address3_longitude' },
			Address3_Name: { a: 'address3_name' },
			Address3_PostalCode: { a: 'address3_postalcode' },
			Address3_PostOfficeBox: { a: 'address3_postofficebox' },
			Address3_PrimaryContactName: { a: 'address3_primarycontactname' },
			Address3_ShippingMethodCode: { a: 'address3_shippingmethodcode' },
			Address3_StateOrProvince: { a: 'address3_stateorprovince' },
			Address3_Telephone1: { a: 'address3_telephone1' },
			Address3_Telephone2: { a: 'address3_telephone2' },
			Address3_Telephone3: { a: 'address3_telephone3' },
			Address3_UPSZone: { a: 'address3_upszone' },
			Address3_UTCOffset: { a: 'address3_utcoffset' },
			adx_ConfirmRemovePassword: { a: 'adx_confirmremovepassword' },
			Adx_CreatedByIPAddress: { a: 'adx_createdbyipaddress' },
			Adx_CreatedByUsername: { a: 'adx_createdbyusername' },
			adx_identity_accessfailedcount: { a: 'adx_identity_accessfailedcount' },
			adx_identity_emailaddress1confirmed: { a: 'adx_identity_emailaddress1confirmed' },
			adx_identity_lastsuccessfullogin_UtcDateAndTime: { a: 'adx_identity_lastsuccessfullogin' },
			adx_identity_locallogindisabled: { a: 'adx_identity_locallogindisabled' },
			adx_identity_lockoutenabled: { a: 'adx_identity_lockoutenabled' },
			adx_identity_lockoutenddate_UtcDateAndTime: { a: 'adx_identity_lockoutenddate' },
			adx_identity_logonenabled: { a: 'adx_identity_logonenabled' },
			adx_identity_mobilephoneconfirmed: { a: 'adx_identity_mobilephoneconfirmed' },
			adx_identity_newpassword: { a: 'adx_identity_newpassword' },
			adx_identity_passwordhash: { a: 'adx_identity_passwordhash' },
			adx_identity_securitystamp: { a: 'adx_identity_securitystamp' },
			adx_identity_twofactorenabled: { a: 'adx_identity_twofactorenabled' },
			adx_identity_username: { a: 'adx_identity_username' },
			Adx_ModifiedByIPAddress: { a: 'adx_modifiedbyipaddress' },
			Adx_ModifiedByUsername: { a: 'adx_modifiedbyusername' },
			Adx_OrganizationName: { a: 'adx_organizationname' },
			adx_preferredlcid: { a: 'adx_preferredlcid' },
			adx_profilealert: { a: 'adx_profilealert' },
			adx_profilealertdate_UtcDateAndTime: { a: 'adx_profilealertdate' },
			adx_profilealertinstructions: { a: 'adx_profilealertinstructions' },
			Adx_ProfileIsAnonymous: { a: 'adx_profileisanonymous' },
			Adx_ProfileLastActivity_UtcDateAndTime: { a: 'adx_profilelastactivity' },
			adx_profilemodifiedon_UtcDateAndTime: { a: 'adx_profilemodifiedon' },
			adx_PublicProfileCopy: { a: 'adx_publicprofilecopy' },
			Adx_TimeZone: { a: 'adx_timezone' },
			Aging30: { a: 'aging30', r: true },
			Aging30_Base: { a: 'aging30_base', r: true },
			Aging60: { a: 'aging60', r: true },
			Aging60_Base: { a: 'aging60_base', r: true },
			Aging90: { a: 'aging90', r: true },
			Aging90_Base: { a: 'aging90_base', r: true },
			Anniversary_DateOnly: { a: 'anniversary' },
			AnnualIncome: { a: 'annualincome' },
			AnnualIncome_Base: { a: 'annualincome_base', r: true },
			AssistantName: { a: 'assistantname' },
			AssistantPhone: { a: 'assistantphone' },
			BirthDate_DateOnly: { a: 'birthdate' },
			Business2: { a: 'business2' },
			Callback: { a: 'callback' },
			ChildrensNames: { a: 'childrensnames' },
			Company: { a: 'company' },
			ContactId: { a: 'contactid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedByExternalParty: { b: 'createdbyexternalparty', a: '_createdbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreditLimit: { a: 'creditlimit' },
			CreditLimit_Base: { a: 'creditlimit_base', r: true },
			CreditOnHold: { a: 'creditonhold' },
			CustomerSizeCode: { a: 'customersizecode' },
			CustomerTypeCode: { a: 'customertypecode' },
			Department: { a: 'department' },
			Description: { a: 'description' },
			DoNotBulkEMail: { a: 'donotbulkemail' },
			DoNotBulkPostalMail: { a: 'donotbulkpostalmail' },
			DoNotEMail: { a: 'donotemail' },
			DoNotFax: { a: 'donotfax' },
			DoNotPhone: { a: 'donotphone' },
			DoNotPostalMail: { a: 'donotpostalmail' },
			DoNotSendMM: { a: 'donotsendmm' },
			EducationCode: { a: 'educationcode' },
			EMailAddress1: { a: 'emailaddress1' },
			EMailAddress2: { a: 'emailaddress2' },
			EMailAddress3: { a: 'emailaddress3' },
			EmployeeId: { a: 'employeeid' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExternalUserIdentifier: { a: 'externaluseridentifier' },
			FamilyStatusCode: { a: 'familystatuscode' },
			Fax: { a: 'fax' },
			FirstName: { a: 'firstname' },
			FollowEmail: { a: 'followemail' },
			FtpSiteUrl: { a: 'ftpsiteurl' },
			FullName: { a: 'fullname', r: true },
			GenderCode: { a: 'gendercode' },
			GovernmentId: { a: 'governmentid' },
			HasChildrenCode: { a: 'haschildrencode' },
			Home2: { a: 'home2' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsAutoCreate: { a: 'isautocreate', r: true },
			IsBackofficeCustomer: { a: 'isbackofficecustomer' },
			IsPrivate: { a: 'isprivate', r: true },
			JobTitle: { a: 'jobtitle' },
			LastName: { a: 'lastname' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LastUsedInCampaign_UtcDateOnly: { a: 'lastusedincampaign' },
			LeadSourceCode: { a: 'leadsourcecode' },
			ManagerName: { a: 'managername' },
			ManagerPhone: { a: 'managerphone' },
			MarketingOnly: { a: 'marketingonly' },
			MasterId: { b: 'masterid', a: '_masterid_value', c: 'contacts', d: 'contact', r: true },
			Merged: { a: 'merged', r: true },
			MiddleName: { a: 'middlename' },
			MobilePhone: { a: 'mobilephone' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedByExternalParty: { b: 'modifiedbyexternalparty', a: '_modifiedbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msa_managingpartnerid: { b: 'msa_managingpartnerid', a: '_msa_managingpartnerid_value', c: 'accounts', d: 'account' },
			msdyn_disablewebtracking: { a: 'msdyn_disablewebtracking' },
			msdyn_isminor: { a: 'msdyn_isminor' },
			msdyn_isminorwithparentalconsent: { a: 'msdyn_isminorwithparentalconsent' },
			msdyn_portaltermsagreementdate_UtcDateAndTime: { a: 'msdyn_portaltermsagreementdate' },
			mspp_userpreferredlcid: { a: 'mspp_userpreferredlcid' },
			NickName: { a: 'nickname' },
			NumberOfChildren: { a: 'numberofchildren' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Pager: { a: 'pager' },
			ParentContactId: { b: 'parentcontactid', a: '_parentcontactid_value', c: 'contacts', d: 'contact', r: true },
			parentcustomerid_account: { b: 'parentcustomerid_account', a: '_parentcustomerid_value', c: 'accounts', d: 'account' },
			parentcustomerid_contact: { b: 'parentcustomerid_contact', a: '_parentcustomerid_value', c: 'contacts', d: 'contact' },
			ParticipatesInWorkflow: { a: 'participatesinworkflow' },
			PaymentTermsCode: { a: 'paymenttermscode' },
			PreferredAppointmentDayCode: { a: 'preferredappointmentdaycode' },
			PreferredAppointmentTimeCode: { a: 'preferredappointmenttimecode' },
			PreferredContactMethodCode: { a: 'preferredcontactmethodcode' },
			PreferredSystemUserId: { b: 'preferredsystemuserid', a: '_preferredsystemuserid_value', c: 'systemusers', d: 'systemuser' },
			ProcessId: { a: 'processid' },
			Salutation: { a: 'salutation' },
			ShippingMethodCode: { a: 'shippingmethodcode' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SpousesName: { a: 'spousesname' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SubscriptionId: { a: 'subscriptionid' },
			Suffix: { a: 'suffix' },
			Telephone1: { a: 'telephone1' },
			Telephone2: { a: 'telephone2' },
			Telephone3: { a: 'telephone3' },
			TerritoryCode: { a: 'territorycode' },
			TimeSpentByMeOnEmailAndMeetings: { a: 'timespentbymeonemailandmeetings', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			WebSiteUrl: { a: 'websiteurl' },
			YomiFirstName: { a: 'yomifirstname' },
			YomiFullName: { a: 'yomifullname', r: true },
			YomiLastName: { a: 'yomilastname' },
			YomiMiddleName: { a: 'yomimiddlename' }
		};
		if (e === undefined) e = {};
		var u = {};
		var contact = {};
		contact.ODataEntity = e;
		contact.FormattedValue = {};
		for (var field in _contact) {
			var a = _contact[field].a;
			var b = _contact[field].b;
			var c = _contact[field].c;
			var d = _contact[field].d;
			var g = _contact[field].g;
			var r = _contact[field].r;
			webApiField(contact, field, e, a, b, c, d, r, u, g);
		}
		contact.Entity = u;
		contact.EntityName = 'contact';
		contact.EntityCollectionName = 'contacts';
		contact['@odata.etag'] = e['@odata.etag'];
		contact.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		contact.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return contact;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Contact = {
		AccountRoleCode : {
			Nguoi_anh_huong: 3,
			Nguoi_ra_quyet_dinh: 1,
			Nhan_vien: 2
		},
		Address1_AddressTypeCode : {
			Chinh: 3,
			Khac: 4,
			Nhan_hang: 2,
			Nhan_hoa_don: 1
		},
		Address1_FreightTermsCode : {
			Cang_giao_hang: 1,
			Mien_phi: 2
		},
		Address1_ShippingMethodCode : {
			Ban_le_dat_hang_truoc: 7,
			Chuyen_cho_bang_may_bay: 1,
			Day_tai: 6,
			DHL: 2,
			FedEx: 3,
			Thu_gui_buu_dien: 5,
			UPS: 4
		},
		Address2_AddressTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		Address2_FreightTermsCode : {
			Gia_tri_mac_dinh: 1
		},
		Address2_ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
		},
		Address3_AddressTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		Address3_FreightTermsCode : {
			Gia_tri_mac_dinh: 1
		},
		Address3_ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
		},
		CustomerSizeCode : {
			Gia_tri_mac_dinh: 1
		},
		CustomerTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		EducationCode : {
			Gia_tri_mac_dinh: 1
		},
		FamilyStatusCode : {
			Da_ket_hon: 2,
			Da_ly_di: 3,
			Doc_than: 1,
			Goa: 4
		},
		GenderCode : {
			Nam: 1,
			Nu: 2
		},
		HasChildrenCode : {
			Gia_tri_mac_dinh: 1
		},
		LeadSourceCode : {
			Gia_tri_mac_dinh: 1
		},
		mspp_userpreferredlcid : {
			Tieng_A_Rap: 1025,
			Tieng_Anh: 1033,
			Tieng_Ba_Lan_Ba_Lan: 1045,
			Tieng_Basque_Basque: 1069,
			Tieng_Bo_Dao_Nha_Bo_Dao_Nha: 2070,
			Tieng_Bo_Dao_Nha_Brazil: 1046,
			Tieng_Bulgaria_Bulgaria: 1026,
			Tieng_Catalan_Catalan: 1027,
			Tieng_Croatia_Croatia: 1050,
			Tieng_Dan_Mach_Dan_Mach: 1030,
			Tieng_Do_Thai: 1037,
			Tieng_Duc_Duc: 1031,
			Tieng_Estonia_Estonia: 1061,
			Tieng_Galician_Tay_Ban_Nha: 1110,
			Tieng_Ha_Lan_Ha_Lan: 1043,
			Tieng_Han_Han_Quoc: 1042,
			Tieng_Hindi_An_Do: 1081,
			Tieng_Hungary_Hungary: 1038,
			Tieng_Hy_Lap_Hy_Lap: 1032,
			Tieng_Indonesia_Indonesia: 1057,
			Tieng_Italy_Italy: 1040,
			Tieng_Kazakh_Kazakhstan: 1087,
			Tieng_Latvia_Latvia: 1062,
			Tieng_Litva_Litva: 1063,
			Tieng_Ma_Lai_Malaysia: 1086,
			Tieng_Na_Uy_Bokmal_Na_Uy: 1044,
			Tieng_Nga_Nga: 1049,
			Tieng_Nhat_Nhat_Ban: 1041,
			Tieng_Phan_Lan_Phan_Lan: 1035,
			Tieng_Phap_Phap: 1036,
			Tieng_Romania_Romania: 1048,
			Tieng_Sec_Cong_hoa_Sec: 1029,
			Tieng_Serbia_Cyrillic_Serbia: 3098,
			Tieng_Serbia_Latinh_Serbia: 2074,
			Tieng_Slovak_Slovakia: 1051,
			Tieng_Slovenia_Slovenia: 1060,
			Tieng_Tay_Ban_Nha_Cach_sap_xep_Truyen_thong_Tay_Ban_Nha: 3082,
			Tieng_Thai_Thai_Lan: 1054,
			Tieng_Tho_Nhi_Ky_Tho_Nhi_Ky: 1055,
			Tieng_Thuy_Dien_Thuy_Dien: 1053,
			Tieng_Trung_Dac_khu_Hanh_chinh_Hong_Kong: 3076,
			Tieng_Trung_Phon_the: 1028,
			Tieng_Trung_Trung_Quoc: 2052,
			Tieng_Ukraina_Ukraina: 1058,
			Tieng_Viet_Viet_Nam: 1066
		},
		ParentCustomerIdType : {
		},
		PaymentTermsCode : {
			_2_10_Tong_30: 2,
			Tong_30: 1,
			Tong_45: 3,
			Tong_60: 4
		},
		PreferredAppointmentDayCode : {
			Chu_Nhat: 0,
			Thu_Ba: 2,
			Thu_Bay: 6,
			Thu_Hai: 1,
			Thu_Nam: 4,
			Thu_Sau: 5,
			Thu_Tu: 3
		},
		PreferredAppointmentTimeCode : {
			Buoi_chieu: 2,
			Buoi_sang: 1,
			Buoi_toi: 3
		},
		PreferredContactMethodCode : {
			Bat_ky: 1,
			Dien_thoai: 3,
			Email: 2,
			Fax: 4,
			Thu: 5
		},
		ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
		},
		TerritoryCode : {
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
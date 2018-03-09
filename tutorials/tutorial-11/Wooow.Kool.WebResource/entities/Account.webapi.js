Kool.WebApi = Kool.WebApi || {};
Kool.WebApi.Account = function (entity, extendFields) {
	var account = {
		AccountCategoryCode: { logicalName: "accountcategorycode" },
		AccountClassificationCode: { logicalName: "accountclassificationcode" },
		AccountId: { logicalName: "accountid" },
		AccountNumber: { logicalName: "accountnumber" },
		AccountRatingCode: { logicalName: "accountratingcode" },
		Address1_AddressId: { logicalName: "address1_addressid" },
		Address1_AddressTypeCode: { logicalName: "address1_addresstypecode" },
		Address1_City: { logicalName: "address1_city" },
		Address1_Composite: { logicalName: "address1_composite", readOnly: true },
		Address1_Country: { logicalName: "address1_country" },
		Address1_County: { logicalName: "address1_county" },
		Address1_Fax: { logicalName: "address1_fax" },
		Address1_FreightTermsCode: { logicalName: "address1_freighttermscode" },
		Address1_Latitude: { logicalName: "address1_latitude" },
		Address1_Line1: { logicalName: "address1_line1" },
		Address1_Line2: { logicalName: "address1_line2" },
		Address1_Line3: { logicalName: "address1_line3" },
		Address1_Longitude: { logicalName: "address1_longitude" },
		Address1_Name: { logicalName: "address1_name" },
		Address1_PostalCode: { logicalName: "address1_postalcode" },
		Address1_PostOfficeBox: { logicalName: "address1_postofficebox" },
		Address1_PrimaryContactName: { logicalName: "address1_primarycontactname" },
		Address1_ShippingMethodCode: { logicalName: "address1_shippingmethodcode" },
		Address1_StateOrProvince: { logicalName: "address1_stateorprovince" },
		Address1_Telephone1: { logicalName: "address1_telephone1" },
		Address1_Telephone2: { logicalName: "address1_telephone2" },
		Address1_Telephone3: { logicalName: "address1_telephone3" },
		Address1_UPSZone: { logicalName: "address1_upszone" },
		Address1_UTCOffset: { logicalName: "address1_utcoffset" },
		Address2_AddressId: { logicalName: "address2_addressid" },
		Address2_AddressTypeCode: { logicalName: "address2_addresstypecode" },
		Address2_City: { logicalName: "address2_city" },
		Address2_Composite: { logicalName: "address2_composite", readOnly: true },
		Address2_Country: { logicalName: "address2_country" },
		Address2_County: { logicalName: "address2_county" },
		Address2_Fax: { logicalName: "address2_fax" },
		Address2_FreightTermsCode: { logicalName: "address2_freighttermscode" },
		Address2_Latitude: { logicalName: "address2_latitude" },
		Address2_Line1: { logicalName: "address2_line1" },
		Address2_Line2: { logicalName: "address2_line2" },
		Address2_Line3: { logicalName: "address2_line3" },
		Address2_Longitude: { logicalName: "address2_longitude" },
		Address2_Name: { logicalName: "address2_name" },
		Address2_PostalCode: { logicalName: "address2_postalcode" },
		Address2_PostOfficeBox: { logicalName: "address2_postofficebox" },
		Address2_PrimaryContactName: { logicalName: "address2_primarycontactname" },
		Address2_ShippingMethodCode: { logicalName: "address2_shippingmethodcode" },
		Address2_StateOrProvince: { logicalName: "address2_stateorprovince" },
		Address2_Telephone1: { logicalName: "address2_telephone1" },
		Address2_Telephone2: { logicalName: "address2_telephone2" },
		Address2_Telephone3: { logicalName: "address2_telephone3" },
		Address2_UPSZone: { logicalName: "address2_upszone" },
		Address2_UTCOffset: { logicalName: "address2_utcoffset" },
		Aging30: { logicalName: "aging30", readOnly: true },
		Aging30_Base: { logicalName: "aging30_base", readOnly: true },
		Aging60: { logicalName: "aging60", readOnly: true },
		Aging60_Base: { logicalName: "aging60_base", readOnly: true },
		Aging90: { logicalName: "aging90", readOnly: true },
		Aging90_Base: { logicalName: "aging90_base", readOnly: true },
		BusinessTypeCode: { logicalName: "businesstypecode" },
		CreatedBy: { logicalName: "_createdby_value", entityLogicalCollectionName: "systemusers", entityLogicalName: "systemuser", readOnly: true },
		CreatedByExternalParty: { logicalName: "_createdbyexternalparty_value", entityLogicalCollectionName: "externalparties", entityLogicalName: "externalparty", readOnly: true },
		CreatedOn_UtcDateAndTime: { logicalName: "createdon", readOnly: true },
		CreatedOnBehalfBy: { logicalName: "_createdonbehalfby_value", entityLogicalCollectionName: "systemusers", entityLogicalName: "systemuser", readOnly: true },
		CreditLimit: { logicalName: "creditlimit" },
		CreditLimit_Base: { logicalName: "creditlimit_base", readOnly: true },
		CreditOnHold: { logicalName: "creditonhold" },
		CustomerSizeCode: { logicalName: "customersizecode" },
		CustomerTypeCode: { logicalName: "customertypecode" },
		DefaultPriceLevelId: { logicalName: "_defaultpricelevelid_value", entityLogicalCollectionName: "pricelevels", entityLogicalName: "pricelevel" },
		Description: { logicalName: "description" },
		DoNotBulkEMail: { logicalName: "donotbulkemail" },
		DoNotBulkPostalMail: { logicalName: "donotbulkpostalmail" },
		DoNotEMail: { logicalName: "donotemail" },
		DoNotFax: { logicalName: "donotfax" },
		DoNotPhone: { logicalName: "donotphone" },
		DoNotPostalMail: { logicalName: "donotpostalmail" },
		DoNotSendMM: { logicalName: "donotsendmm" },
		EMailAddress1: { logicalName: "emailaddress1" },
		EMailAddress2: { logicalName: "emailaddress2" },
		EMailAddress3: { logicalName: "emailaddress3" },
		EntityImageId: { logicalName: "entityimageid", readOnly: true },
		ExchangeRate: { logicalName: "exchangerate", readOnly: true },
		Fax: { logicalName: "fax" },
		FollowEmail: { logicalName: "followemail" },
		FtpSiteURL: { logicalName: "ftpsiteurl" },
		ImportSequenceNumber: { logicalName: "importsequencenumber" },
		IndustryCode: { logicalName: "industrycode" },
		IsPrivate: { logicalName: "isprivate", readOnly: true },
		LastOnHoldTime_UtcDateAndTime: { logicalName: "lastonholdtime" },
		LastUsedInCampaign_UtcDateOnly: { logicalName: "lastusedincampaign" },
		MarketCap: { logicalName: "marketcap" },
		MarketCap_Base: { logicalName: "marketcap_base", readOnly: true },
		MarketingOnly: { logicalName: "marketingonly" },
		MasterId: { logicalName: "_masterid_value", entityLogicalCollectionName: "accounts", entityLogicalName: "account", readOnly: true },
		Merged: { logicalName: "merged", readOnly: true },
		ModifiedBy: { logicalName: "_modifiedby_value", entityLogicalCollectionName: "systemusers", entityLogicalName: "systemuser", readOnly: true },
		ModifiedByExternalParty: { logicalName: "_modifiedbyexternalparty_value", entityLogicalCollectionName: "externalparties", entityLogicalName: "externalparty", readOnly: true },
		ModifiedOn_UtcDateAndTime: { logicalName: "modifiedon", readOnly: true },
		ModifiedOnBehalfBy: { logicalName: "_modifiedonbehalfby_value", entityLogicalCollectionName: "systemusers", entityLogicalName: "systemuser", readOnly: true },
		Name: { logicalName: "name" },
		NumberOfEmployees: { logicalName: "numberofemployees" },
		OnHoldTime: { logicalName: "onholdtime", readOnly: true },
		OpenDeals: { logicalName: "opendeals", readOnly: true },
		OpenDeals_Date_UtcDateAndTime: { logicalName: "opendeals_date", readOnly: true },
		OpenDeals_State: { logicalName: "opendeals_state", readOnly: true },
		OpenRevenue: { logicalName: "openrevenue", readOnly: true },
		OpenRevenue_Base: { logicalName: "openrevenue_base", readOnly: true },
		OpenRevenue_Date_UtcDateAndTime: { logicalName: "openrevenue_date", readOnly: true },
		OpenRevenue_State: { logicalName: "openrevenue_state", readOnly: true },
		OriginatingLeadId: { logicalName: "_originatingleadid_value", entityLogicalCollectionName: "leads", entityLogicalName: "lead" },
		OverriddenCreatedOn_UtcDateOnly: { logicalName: "overriddencreatedon" },
		OwnerId_systemuser: { logicalName: "_ownerid_value", entityLogicalCollectionName: "systemusers", entityLogicalName: "systemuser" },
		OwnerId_team: { logicalName: "_ownerid_value", entityLogicalCollectionName: "teams", entityLogicalName: "team" },
		OwnershipCode: { logicalName: "ownershipcode" },
		OwningBusinessUnit: { logicalName: "_owningbusinessunit_value", entityLogicalCollectionName: "businessunits", entityLogicalName: "businessunit", readOnly: true },
		OwningTeam: { logicalName: "_owningteam_value", entityLogicalCollectionName: "teams", entityLogicalName: "team", readOnly: true },
		OwningUser: { logicalName: "_owninguser_value", entityLogicalCollectionName: "systemusers", entityLogicalName: "systemuser", readOnly: true },
		ParentAccountId: { logicalName: "_parentaccountid_value", entityLogicalCollectionName: "accounts", entityLogicalName: "account" },
		ParticipatesInWorkflow: { logicalName: "participatesinworkflow" },
		PaymentTermsCode: { logicalName: "paymenttermscode" },
		PreferredAppointmentDayCode: { logicalName: "preferredappointmentdaycode" },
		PreferredAppointmentTimeCode: { logicalName: "preferredappointmenttimecode" },
		PreferredContactMethodCode: { logicalName: "preferredcontactmethodcode" },
		PreferredEquipmentId: { logicalName: "_preferredequipmentid_value", entityLogicalCollectionName: "equipments", entityLogicalName: "equipment" },
		PreferredServiceId: { logicalName: "_preferredserviceid_value", entityLogicalCollectionName: "services", entityLogicalName: "service" },
		PreferredSystemUserId: { logicalName: "_preferredsystemuserid_value", entityLogicalCollectionName: "systemusers", entityLogicalName: "systemuser" },
		PrimaryContactId: { logicalName: "_primarycontactid_value", entityLogicalCollectionName: "contacts", entityLogicalName: "contact" },
		PrimarySatoriId: { logicalName: "primarysatoriid" },
		PrimaryTwitterId: { logicalName: "primarytwitterid" },
		ProcessId: { logicalName: "processid" },
		Revenue: { logicalName: "revenue" },
		Revenue_Base: { logicalName: "revenue_base", readOnly: true },
		SharesOutstanding: { logicalName: "sharesoutstanding" },
		ShippingMethodCode: { logicalName: "shippingmethodcode" },
		SIC: { logicalName: "sic" },
		SLAId: { logicalName: "_slaid_value", entityLogicalCollectionName: "slas", entityLogicalName: "sla" },
		SLAInvokedId: { logicalName: "_slainvokedid_value", entityLogicalCollectionName: "slas", entityLogicalName: "sla", readOnly: true },
		StageId: { logicalName: "stageid" },
		StateCode: { logicalName: "statecode" },
		StatusCode: { logicalName: "statuscode" },
		StockExchange: { logicalName: "stockexchange" },
		Telephone1: { logicalName: "telephone1" },
		Telephone2: { logicalName: "telephone2" },
		Telephone3: { logicalName: "telephone3" },
		TerritoryCode: { logicalName: "territorycode" },
		TerritoryId: { logicalName: "_territoryid_value", entityLogicalCollectionName: "territories", entityLogicalName: "territory" },
		TickerSymbol: { logicalName: "tickersymbol" },
		TimeSpentByMeOnEmailAndMeetings: { logicalName: "timespentbymeonemailandmeetings", readOnly: true },
		TimeZoneRuleVersionNumber: { logicalName: "timezoneruleversionnumber" },
		TransactionCurrencyId: { logicalName: "_transactioncurrencyid_value", entityLogicalCollectionName: "transactioncurrencies", entityLogicalName: "transactioncurrency" },
		TraversedPath: { logicalName: "traversedpath" },
		UTCConversionTimeZoneCode: { logicalName: "utcconversiontimezonecode" },
		VersionNumber: { logicalName: "versionnumber", readOnly: true },
		WebSiteURL: { logicalName: "websiteurl" },
		YomiName: { logicalName: "yominame" }
	};
	if (typeof extendFields !== undefined) Object.assign(account, extendFields);
	if (entity === undefined) entity = {};
	var logicalName = "", entityLogicalCollectionName = "", entityLogicalName = "", readOnly = false, upsertEntity = {};
	for (var field in account) {
		logicalName = account[field].logicalName;
		entityLogicalCollectionName = account[field].entityLogicalCollectionName;
		entityLogicalName = account[field].entityLogicalName;
		readOnly = account[field].readOnly;
		account[field] = Kool.WebApi.LoadField(entity, logicalName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity);
	};
	account.UpsertEntity = upsertEntity;
	account.LogicalName = "account";
	account.LogicalCollectionName = "accounts";
	return account;
};
OptionSet.AccountCategoryCode = {
	Preferred_Customer: 1,
	Standard: 2
}
OptionSet.AccountClassificationCode = {
	Default_Value: 1
}
OptionSet.AccountRatingCode = {
	Default_Value: 1
}
OptionSet.Address1_AddressTypeCode = {
	Bill_To: 1,
	Ship_To: 2,
	Primary: 3,
	Other: 4
}
OptionSet.Address1_FreightTermsCode = {
	FOB: 1,
	No_Charge: 2
}
OptionSet.Address1_ShippingMethodCode = {
	Airborne: 1,
	DHL: 2,
	FedEx: 3,
	UPS: 4,
	Postal_Mail: 5,
	Full_Load: 6,
	Will_Call: 7
}
OptionSet.Address2_AddressTypeCode = {
	Default_Value: 1
}
OptionSet.Address2_FreightTermsCode = {
	Default_Value: 1
}
OptionSet.Address2_ShippingMethodCode = {
	Default_Value: 1
}
OptionSet.BusinessTypeCode = {
	Default_Value: 1
}
OptionSet.CustomerSizeCode = {
	Default_Value: 1
}
OptionSet.CustomerTypeCode = {
	Competitor: 1,
	Consultant: 2,
	Customer: 3,
	Investor: 4,
	Partner: 5,
	Influencer: 6,
	Press: 7,
	Prospect: 8,
	Reseller: 9,
	Supplier: 10,
	Vendor: 11,
	Other: 12
}
OptionSet.IndustryCode = {
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
}
OptionSet.OwnershipCode = {
	Public: 1,
	Private: 2,
	Subsidiary: 3,
	Other: 4
}
OptionSet.PaymentTermsCode = {
	Net_30: 1,
	_2_10_Net_30: 2,
	Net_45: 3,
	Net_60: 4
}
OptionSet.PreferredAppointmentDayCode = {
	Sunday: 0,
	Monday: 1,
	Tuesday: 2,
	Wednesday: 3,
	Thursday: 4,
	Friday: 5,
	Saturday: 6
}
OptionSet.PreferredAppointmentTimeCode = {
	Morning: 1,
	Afternoon: 2,
	Evening: 3
}
OptionSet.PreferredContactMethodCode = {
	Any: 1,
	Email: 2,
	Phone: 3,
	Fax: 4,
	Mail: 5
}
OptionSet.ShippingMethodCode = {
	Default_Value: 1
}
OptionSet.StateCode = {
	Active: 0,
	Inactive: 1
}
OptionSet.StatusCode = {
	Active: 1,
	Inactive: 2
}
OptionSet.TerritoryCode = {
	Default_Value: 1
}
///<reference path="crm.intellisense.js" />
///<reference path="webapi.intellisense.js" />
Kool.WebApi = Kool.WebApi || {};
Kool.WebApi.Account = function (entity, extendFields) {
	return {
		///<field name="AccountCategoryCode" type="OptionSet.Account.AccountCategoryCode">Edm.Int32 - OptionSet.Account.AccountCategoryCode</field>
		AccountCategoryCode: intellisense.EntityValue,
		///<field name="AccountClassificationCode" type="OptionSet.Account.AccountClassificationCode">Edm.Int32 - OptionSet.Account.AccountClassificationCode</field>
		AccountClassificationCode: intellisense.EntityValue,
		///<field name="AccountId" type="Uniqueidentifier">Edm.Guid</field>
		AccountId: intellisense.EntityValue,
		///<field name="AccountNumber" type="String">Edm.String</field>
		AccountNumber: intellisense.EntityValue,
		///<field name="AccountRatingCode" type="OptionSet.Account.AccountRatingCode">Edm.Int32 - OptionSet.Account.AccountRatingCode</field>
		AccountRatingCode: intellisense.EntityValue,
		///<field name="Address1_AddressId" type="Uniqueidentifier">Edm.Guid</field>
		Address1_AddressId: intellisense.EntityValue,
		///<field name="Address1_AddressTypeCode" type="OptionSet.Account.Address1_AddressTypeCode">Edm.Int32 - OptionSet.Account.Address1_AddressTypeCode</field>
		Address1_AddressTypeCode: intellisense.EntityValue,
		///<field name="Address1_City" type="String">Edm.String</field>
		Address1_City: intellisense.EntityValue,
		///<field name="Address1_Composite" type="Memo">ReadOnly - Edm.String</field>
		Address1_Composite: intellisense.EntityValue,
		///<field name="Address1_Country" type="String">Edm.String</field>
		Address1_Country: intellisense.EntityValue,
		///<field name="Address1_County" type="String">Edm.String</field>
		Address1_County: intellisense.EntityValue,
		///<field name="Address1_Fax" type="String">Edm.String</field>
		Address1_Fax: intellisense.EntityValue,
		///<field name="Address1_FreightTermsCode" type="OptionSet.Account.Address1_FreightTermsCode">Edm.Int32 - OptionSet.Account.Address1_FreightTermsCode</field>
		Address1_FreightTermsCode: intellisense.EntityValue,
		///<field name="Address1_Latitude" type="Double">Edm.Double</field>
		Address1_Latitude: intellisense.EntityValue,
		///<field name="Address1_Line1" type="String">Edm.String</field>
		Address1_Line1: intellisense.EntityValue,
		///<field name="Address1_Line2" type="String">Edm.String</field>
		Address1_Line2: intellisense.EntityValue,
		///<field name="Address1_Line3" type="String">Edm.String</field>
		Address1_Line3: intellisense.EntityValue,
		///<field name="Address1_Longitude" type="Double">Edm.Double</field>
		Address1_Longitude: intellisense.EntityValue,
		///<field name="Address1_Name" type="String">Edm.String</field>
		Address1_Name: intellisense.EntityValue,
		///<field name="Address1_PostalCode" type="String">Edm.String</field>
		Address1_PostalCode: intellisense.EntityValue,
		///<field name="Address1_PostOfficeBox" type="String">Edm.String</field>
		Address1_PostOfficeBox: intellisense.EntityValue,
		///<field name="Address1_PrimaryContactName" type="String">Edm.String</field>
		Address1_PrimaryContactName: intellisense.EntityValue,
		///<field name="Address1_ShippingMethodCode" type="OptionSet.Account.Address1_ShippingMethodCode">Edm.Int32 - OptionSet.Account.Address1_ShippingMethodCode</field>
		Address1_ShippingMethodCode: intellisense.EntityValue,
		///<field name="Address1_StateOrProvince" type="String">Edm.String</field>
		Address1_StateOrProvince: intellisense.EntityValue,
		///<field name="Address1_Telephone1" type="String">Edm.String</field>
		Address1_Telephone1: intellisense.EntityValue,
		///<field name="Address1_Telephone2" type="String">Edm.String</field>
		Address1_Telephone2: intellisense.EntityValue,
		///<field name="Address1_Telephone3" type="String">Edm.String</field>
		Address1_Telephone3: intellisense.EntityValue,
		///<field name="Address1_UPSZone" type="String">Edm.String</field>
		Address1_UPSZone: intellisense.EntityValue,
		///<field name="Address1_UTCOffset" type="Integer">Edm.Int32</field>
		Address1_UTCOffset: intellisense.EntityValue,
		///<field name="Address2_AddressId" type="Uniqueidentifier">Edm.Guid</field>
		Address2_AddressId: intellisense.EntityValue,
		///<field name="Address2_AddressTypeCode" type="OptionSet.Account.Address2_AddressTypeCode">Edm.Int32 - OptionSet.Account.Address2_AddressTypeCode</field>
		Address2_AddressTypeCode: intellisense.EntityValue,
		///<field name="Address2_City" type="String">Edm.String</field>
		Address2_City: intellisense.EntityValue,
		///<field name="Address2_Composite" type="Memo">ReadOnly - Edm.String</field>
		Address2_Composite: intellisense.EntityValue,
		///<field name="Address2_Country" type="String">Edm.String</field>
		Address2_Country: intellisense.EntityValue,
		///<field name="Address2_County" type="String">Edm.String</field>
		Address2_County: intellisense.EntityValue,
		///<field name="Address2_Fax" type="String">Edm.String</field>
		Address2_Fax: intellisense.EntityValue,
		///<field name="Address2_FreightTermsCode" type="OptionSet.Account.Address2_FreightTermsCode">Edm.Int32 - OptionSet.Account.Address2_FreightTermsCode</field>
		Address2_FreightTermsCode: intellisense.EntityValue,
		///<field name="Address2_Latitude" type="Double">Edm.Double</field>
		Address2_Latitude: intellisense.EntityValue,
		///<field name="Address2_Line1" type="String">Edm.String</field>
		Address2_Line1: intellisense.EntityValue,
		///<field name="Address2_Line2" type="String">Edm.String</field>
		Address2_Line2: intellisense.EntityValue,
		///<field name="Address2_Line3" type="String">Edm.String</field>
		Address2_Line3: intellisense.EntityValue,
		///<field name="Address2_Longitude" type="Double">Edm.Double</field>
		Address2_Longitude: intellisense.EntityValue,
		///<field name="Address2_Name" type="String">Edm.String</field>
		Address2_Name: intellisense.EntityValue,
		///<field name="Address2_PostalCode" type="String">Edm.String</field>
		Address2_PostalCode: intellisense.EntityValue,
		///<field name="Address2_PostOfficeBox" type="String">Edm.String</field>
		Address2_PostOfficeBox: intellisense.EntityValue,
		///<field name="Address2_PrimaryContactName" type="String">Edm.String</field>
		Address2_PrimaryContactName: intellisense.EntityValue,
		///<field name="Address2_ShippingMethodCode" type="OptionSet.Account.Address2_ShippingMethodCode">Edm.Int32 - OptionSet.Account.Address2_ShippingMethodCode</field>
		Address2_ShippingMethodCode: intellisense.EntityValue,
		///<field name="Address2_StateOrProvince" type="String">Edm.String</field>
		Address2_StateOrProvince: intellisense.EntityValue,
		///<field name="Address2_Telephone1" type="String">Edm.String</field>
		Address2_Telephone1: intellisense.EntityValue,
		///<field name="Address2_Telephone2" type="String">Edm.String</field>
		Address2_Telephone2: intellisense.EntityValue,
		///<field name="Address2_Telephone3" type="String">Edm.String</field>
		Address2_Telephone3: intellisense.EntityValue,
		///<field name="Address2_UPSZone" type="String">Edm.String</field>
		Address2_UPSZone: intellisense.EntityValue,
		///<field name="Address2_UTCOffset" type="Integer">Edm.Int32</field>
		Address2_UTCOffset: intellisense.EntityValue,
		///<field name="Aging30" type="Money">ReadOnly - Edm.Decimal</field>
		Aging30: intellisense.EntityValue,
		///<field name="Aging30_Base" type="Money">ReadOnly - Edm.Decimal</field>
		Aging30_Base: intellisense.EntityValue,
		///<field name="Aging60" type="Money">ReadOnly - Edm.Decimal</field>
		Aging60: intellisense.EntityValue,
		///<field name="Aging60_Base" type="Money">ReadOnly - Edm.Decimal</field>
		Aging60_Base: intellisense.EntityValue,
		///<field name="Aging90" type="Money">ReadOnly - Edm.Decimal</field>
		Aging90: intellisense.EntityValue,
		///<field name="Aging90_Base" type="Money">ReadOnly - Edm.Decimal</field>
		Aging90_Base: intellisense.EntityValue,
		///<field name="BusinessTypeCode" type="OptionSet.Account.BusinessTypeCode">Edm.Int32 - OptionSet.Account.BusinessTypeCode</field>
		BusinessTypeCode: intellisense.EntityValue,
		///<field name="CreatedBy" type="Lookup">ReadOnly - Edm.Guid</field>
		CreatedBy: intellisense.EntityValue,
		///<field name="CreatedByExternalParty" type="Lookup">ReadOnly - Edm.Guid</field>
		CreatedByExternalParty: intellisense.EntityValue,
		///<field name="CreatedOn_UtcDateAndTime" type="DateTime">ReadOnly - Edm.DateTimeOffset</field>
		CreatedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name="CreatedOnBehalfBy" type="Lookup">ReadOnly - Edm.Guid</field>
		CreatedOnBehalfBy: intellisense.EntityValue,
		///<field name="CreditLimit" type="Money">Edm.Decimal</field>
		CreditLimit: intellisense.EntityValue,
		///<field name="CreditLimit_Base" type="Money">ReadOnly - Edm.Decimal</field>
		CreditLimit_Base: intellisense.EntityValue,
		///<field name="CreditOnHold" type="Boolean">Edm.Boolean</field>
		CreditOnHold: intellisense.EntityValue,
		///<field name="CustomerSizeCode" type="OptionSet.Account.CustomerSizeCode">Edm.Int32 - OptionSet.Account.CustomerSizeCode</field>
		CustomerSizeCode: intellisense.EntityValue,
		///<field name="CustomerTypeCode" type="OptionSet.Account.CustomerTypeCode">Edm.Int32 - OptionSet.Account.CustomerTypeCode</field>
		CustomerTypeCode: intellisense.EntityValue,
		///<field name="DefaultPriceLevelId" type="Lookup">Edm.Guid</field>
		DefaultPriceLevelId: intellisense.EntityValue,
		///<field name="Description" type="Memo">Edm.String</field>
		Description: intellisense.EntityValue,
		///<field name="DoNotBulkEMail" type="Boolean">Edm.Boolean</field>
		DoNotBulkEMail: intellisense.EntityValue,
		///<field name="DoNotBulkPostalMail" type="Boolean">Edm.Boolean</field>
		DoNotBulkPostalMail: intellisense.EntityValue,
		///<field name="DoNotEMail" type="Boolean">Edm.Boolean</field>
		DoNotEMail: intellisense.EntityValue,
		///<field name="DoNotFax" type="Boolean">Edm.Boolean</field>
		DoNotFax: intellisense.EntityValue,
		///<field name="DoNotPhone" type="Boolean">Edm.Boolean</field>
		DoNotPhone: intellisense.EntityValue,
		///<field name="DoNotPostalMail" type="Boolean">Edm.Boolean</field>
		DoNotPostalMail: intellisense.EntityValue,
		///<field name="DoNotSendMM" type="Boolean">Edm.Boolean</field>
		DoNotSendMM: intellisense.EntityValue,
		///<field name="EMailAddress1" type="String">Edm.String</field>
		EMailAddress1: intellisense.EntityValue,
		///<field name="EMailAddress2" type="String">Edm.String</field>
		EMailAddress2: intellisense.EntityValue,
		///<field name="EMailAddress3" type="String">Edm.String</field>
		EMailAddress3: intellisense.EntityValue,
		///<field name="EntityImageId" type="Uniqueidentifier">ReadOnly - Edm.Guid</field>
		EntityImageId: intellisense.EntityValue,
		///<field name="ExchangeRate" type="Decimal">ReadOnly - Edm.Decimal</field>
		ExchangeRate: intellisense.EntityValue,
		///<field name="Fax" type="String">Edm.String</field>
		Fax: intellisense.EntityValue,
		///<field name="FollowEmail" type="Boolean">Edm.Boolean</field>
		FollowEmail: intellisense.EntityValue,
		///<field name="FtpSiteURL" type="String">Edm.String</field>
		FtpSiteURL: intellisense.EntityValue,
		///<field name="ImportSequenceNumber" type="Integer">Edm.Int32</field>
		ImportSequenceNumber: intellisense.EntityValue,
		///<field name="IndustryCode" type="OptionSet.Account.IndustryCode">Edm.Int32 - OptionSet.Account.IndustryCode</field>
		IndustryCode: intellisense.EntityValue,
		///<field name="IsPrivate" type="Boolean">ReadOnly - Edm.Boolean</field>
		IsPrivate: intellisense.EntityValue,
		///<field name="LastOnHoldTime_UtcDateAndTime" type="DateTime">Edm.DateTimeOffset</field>
		LastOnHoldTime_UtcDateAndTime: intellisense.EntityValue,
		///<field name="LastUsedInCampaign_UtcDateOnly" type="DateTime">Edm.DateTimeOffset</field>
		LastUsedInCampaign_UtcDateOnly: intellisense.EntityValue,
		///<field name="MarketCap" type="Money">Edm.Decimal</field>
		MarketCap: intellisense.EntityValue,
		///<field name="MarketCap_Base" type="Money">ReadOnly - Edm.Decimal</field>
		MarketCap_Base: intellisense.EntityValue,
		///<field name="MarketingOnly" type="Boolean">Edm.Boolean</field>
		MarketingOnly: intellisense.EntityValue,
		///<field name="MasterId" type="Lookup">ReadOnly - Edm.Guid</field>
		MasterId: intellisense.EntityValue,
		///<field name="Merged" type="Boolean">ReadOnly - Edm.Boolean</field>
		Merged: intellisense.EntityValue,
		///<field name="ModifiedBy" type="Lookup">ReadOnly - Edm.Guid</field>
		ModifiedBy: intellisense.EntityValue,
		///<field name="ModifiedByExternalParty" type="Lookup">ReadOnly - Edm.Guid</field>
		ModifiedByExternalParty: intellisense.EntityValue,
		///<field name="ModifiedOn_UtcDateAndTime" type="DateTime">ReadOnly - Edm.DateTimeOffset</field>
		ModifiedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name="ModifiedOnBehalfBy" type="Lookup">ReadOnly - Edm.Guid</field>
		ModifiedOnBehalfBy: intellisense.EntityValue,
		///<field name="Name" type="String">Edm.String</field>
		Name: intellisense.EntityValue,
		///<field name="NumberOfEmployees" type="Integer">Edm.Int32</field>
		NumberOfEmployees: intellisense.EntityValue,
		///<field name="OnHoldTime" type="Integer">ReadOnly - Edm.Int32</field>
		OnHoldTime: intellisense.EntityValue,
		///<field name="OpenDeals" type="Integer">ReadOnly - Edm.Int32</field>
		OpenDeals: intellisense.EntityValue,
		///<field name="OpenDeals_Date_UtcDateAndTime" type="DateTime">ReadOnly - Edm.DateTimeOffset</field>
		OpenDeals_Date_UtcDateAndTime: intellisense.EntityValue,
		///<field name="OpenDeals_State" type="Integer">ReadOnly - Edm.Int32</field>
		OpenDeals_State: intellisense.EntityValue,
		///<field name="OpenRevenue" type="Money">ReadOnly - Edm.Decimal</field>
		OpenRevenue: intellisense.EntityValue,
		///<field name="OpenRevenue_Base" type="Money">ReadOnly - Edm.Decimal</field>
		OpenRevenue_Base: intellisense.EntityValue,
		///<field name="OpenRevenue_Date_UtcDateAndTime" type="DateTime">ReadOnly - Edm.DateTimeOffset</field>
		OpenRevenue_Date_UtcDateAndTime: intellisense.EntityValue,
		///<field name="OpenRevenue_State" type="Integer">ReadOnly - Edm.Int32</field>
		OpenRevenue_State: intellisense.EntityValue,
		///<field name="OriginatingLeadId" type="Lookup">Edm.Guid</field>
		OriginatingLeadId: intellisense.EntityValue,
		///<field name="OverriddenCreatedOn_UtcDateOnly" type="DateTime">Edm.DateTimeOffset</field>
		OverriddenCreatedOn_UtcDateOnly: intellisense.EntityValue,
		///<field name="OwnerId_systemuser" type="Lookup"></field>
		OwnerId_systemuser: intellisense.EntityValue,
		///<field name="OwnerId_team" type="Lookup"></field>
		OwnerId_team: intellisense.EntityValue,
		///<field name="OwnershipCode" type="OptionSet.Account.OwnershipCode">Edm.Int32 - OptionSet.Account.OwnershipCode</field>
		OwnershipCode: intellisense.EntityValue,
		///<field name="OwningBusinessUnit" type="Lookup">ReadOnly - Edm.Guid</field>
		OwningBusinessUnit: intellisense.EntityValue,
		///<field name="OwningTeam" type="Lookup">ReadOnly - Edm.Guid</field>
		OwningTeam: intellisense.EntityValue,
		///<field name="OwningUser" type="Lookup">ReadOnly - Edm.Guid</field>
		OwningUser: intellisense.EntityValue,
		///<field name="ParentAccountId" type="Lookup">Edm.Guid</field>
		ParentAccountId: intellisense.EntityValue,
		///<field name="ParticipatesInWorkflow" type="Boolean">Edm.Boolean</field>
		ParticipatesInWorkflow: intellisense.EntityValue,
		///<field name="PaymentTermsCode" type="OptionSet.Account.PaymentTermsCode">Edm.Int32 - OptionSet.Account.PaymentTermsCode</field>
		PaymentTermsCode: intellisense.EntityValue,
		///<field name="PreferredAppointmentDayCode" type="OptionSet.Account.PreferredAppointmentDayCode">Edm.Int32 - OptionSet.Account.PreferredAppointmentDayCode</field>
		PreferredAppointmentDayCode: intellisense.EntityValue,
		///<field name="PreferredAppointmentTimeCode" type="OptionSet.Account.PreferredAppointmentTimeCode">Edm.Int32 - OptionSet.Account.PreferredAppointmentTimeCode</field>
		PreferredAppointmentTimeCode: intellisense.EntityValue,
		///<field name="PreferredContactMethodCode" type="OptionSet.Account.PreferredContactMethodCode">Edm.Int32 - OptionSet.Account.PreferredContactMethodCode</field>
		PreferredContactMethodCode: intellisense.EntityValue,
		///<field name="PreferredEquipmentId" type="Lookup">Edm.Guid</field>
		PreferredEquipmentId: intellisense.EntityValue,
		///<field name="PreferredServiceId" type="Lookup">Edm.Guid</field>
		PreferredServiceId: intellisense.EntityValue,
		///<field name="PreferredSystemUserId" type="Lookup">Edm.Guid</field>
		PreferredSystemUserId: intellisense.EntityValue,
		///<field name="PrimaryContactId" type="Lookup">Edm.Guid</field>
		PrimaryContactId: intellisense.EntityValue,
		///<field name="PrimarySatoriId" type="String">Edm.String</field>
		PrimarySatoriId: intellisense.EntityValue,
		///<field name="PrimaryTwitterId" type="String">Edm.String</field>
		PrimaryTwitterId: intellisense.EntityValue,
		///<field name="ProcessId" type="Uniqueidentifier">Edm.Guid</field>
		ProcessId: intellisense.EntityValue,
		///<field name="Revenue" type="Money">Edm.Decimal</field>
		Revenue: intellisense.EntityValue,
		///<field name="Revenue_Base" type="Money">ReadOnly - Edm.Decimal</field>
		Revenue_Base: intellisense.EntityValue,
		///<field name="SharesOutstanding" type="Integer">Edm.Int32</field>
		SharesOutstanding: intellisense.EntityValue,
		///<field name="ShippingMethodCode" type="OptionSet.Account.ShippingMethodCode">Edm.Int32 - OptionSet.Account.ShippingMethodCode</field>
		ShippingMethodCode: intellisense.EntityValue,
		///<field name="SIC" type="String">Edm.String</field>
		SIC: intellisense.EntityValue,
		///<field name="SLAId" type="Lookup">Edm.Guid</field>
		SLAId: intellisense.EntityValue,
		///<field name="SLAInvokedId" type="Lookup">ReadOnly - Edm.Guid</field>
		SLAInvokedId: intellisense.EntityValue,
		///<field name="StageId" type="Uniqueidentifier">Edm.Guid</field>
		StageId: intellisense.EntityValue,
		///<field name="StateCode" type="OptionSet.Account.StateCode">Edm.Int32 - OptionSet.Account.StateCode</field>
		StateCode: intellisense.EntityValue,
		///<field name="StatusCode" type="OptionSet.Account.StatusCode">Edm.Int32 - OptionSet.Account.StatusCode</field>
		StatusCode: intellisense.EntityValue,
		///<field name="StockExchange" type="String">Edm.String</field>
		StockExchange: intellisense.EntityValue,
		///<field name="Telephone1" type="String">Edm.String</field>
		Telephone1: intellisense.EntityValue,
		///<field name="Telephone2" type="String">Edm.String</field>
		Telephone2: intellisense.EntityValue,
		///<field name="Telephone3" type="String">Edm.String</field>
		Telephone3: intellisense.EntityValue,
		///<field name="TerritoryCode" type="OptionSet.Account.TerritoryCode">Edm.Int32 - OptionSet.Account.TerritoryCode</field>
		TerritoryCode: intellisense.EntityValue,
		///<field name="TerritoryId" type="Lookup">Edm.Guid</field>
		TerritoryId: intellisense.EntityValue,
		///<field name="TickerSymbol" type="String">Edm.String</field>
		TickerSymbol: intellisense.EntityValue,
		///<field name="TimeSpentByMeOnEmailAndMeetings" type="String">ReadOnly - Edm.String</field>
		TimeSpentByMeOnEmailAndMeetings: intellisense.EntityValue,
		///<field name="TimeZoneRuleVersionNumber" type="Integer">Edm.Int32</field>
		TimeZoneRuleVersionNumber: intellisense.EntityValue,
		///<field name="TransactionCurrencyId" type="Lookup">Edm.Guid</field>
		TransactionCurrencyId: intellisense.EntityValue,
		///<field name="TraversedPath" type="String">Edm.String</field>
		TraversedPath: intellisense.EntityValue,
		///<field name="UTCConversionTimeZoneCode" type="Integer">Edm.Int32</field>
		UTCConversionTimeZoneCode: intellisense.EntityValue,
		///<field name="VersionNumber" type="BigInt">ReadOnly - </field>
		VersionNumber: intellisense.EntityValue,
		///<field name="WebSiteURL" type="String">Edm.String</field>
		WebSiteURL: intellisense.EntityValue,
		///<field name="YomiName" type="String">Edm.String</field>
		YomiName: intellisense.EntityValue,
		///<field name="UpsertEntity" type="Object"></field>
		UpsertEntity: null,
		///<field name="LogicalName" type="String"></field>
		LogicalName: null,
		///<field name="LogicalCollectionName" type="String"></field>
		LogicalCollectionName: null,
		///<field name="OptionSet" type="Object"></field>
	}
}
///<field name="AccountCategoryCode" type="PickList"></field>
OptionSet.AccountCategoryCode = {
	///<field name="Preferred_Customer" type="PickListValue">Preferred_Customer = 1</field>
	Preferred_Customer: 1,
	///<field name="Standard" type="PickListValue">Standard = 2</field>
	Standard: 2
}
///<field name="AccountClassificationCode" type="PickList"></field>
OptionSet.AccountClassificationCode = {
	///<field name="Default_Value" type="PickListValue">Default_Value = 1</field>
	Default_Value: 1
}
///<field name="AccountRatingCode" type="PickList"></field>
OptionSet.AccountRatingCode = {
	///<field name="Default_Value" type="PickListValue">Default_Value = 1</field>
	Default_Value: 1
}
///<field name="Address1_AddressTypeCode" type="PickList"></field>
OptionSet.Address1_AddressTypeCode = {
	///<field name="Bill_To" type="PickListValue">Bill_To = 1</field>
	Bill_To: 1,
	///<field name="Ship_To" type="PickListValue">Ship_To = 2</field>
	Ship_To: 2,
	///<field name="Primary" type="PickListValue">Primary = 3</field>
	Primary: 3,
	///<field name="Other" type="PickListValue">Other = 4</field>
	Other: 4
}
///<field name="Address1_FreightTermsCode" type="PickList"></field>
OptionSet.Address1_FreightTermsCode = {
	///<field name="FOB" type="PickListValue">FOB = 1</field>
	FOB: 1,
	///<field name="No_Charge" type="PickListValue">No_Charge = 2</field>
	No_Charge: 2
}
///<field name="Address1_ShippingMethodCode" type="PickList"></field>
OptionSet.Address1_ShippingMethodCode = {
	///<field name="Airborne" type="PickListValue">Airborne = 1</field>
	Airborne: 1,
	///<field name="DHL" type="PickListValue">DHL = 2</field>
	DHL: 2,
	///<field name="FedEx" type="PickListValue">FedEx = 3</field>
	FedEx: 3,
	///<field name="UPS" type="PickListValue">UPS = 4</field>
	UPS: 4,
	///<field name="Postal_Mail" type="PickListValue">Postal_Mail = 5</field>
	Postal_Mail: 5,
	///<field name="Full_Load" type="PickListValue">Full_Load = 6</field>
	Full_Load: 6,
	///<field name="Will_Call" type="PickListValue">Will_Call = 7</field>
	Will_Call: 7
}
///<field name="Address2_AddressTypeCode" type="PickList"></field>
OptionSet.Address2_AddressTypeCode = {
	///<field name="Default_Value" type="PickListValue">Default_Value = 1</field>
	Default_Value: 1
}
///<field name="Address2_FreightTermsCode" type="PickList"></field>
OptionSet.Address2_FreightTermsCode = {
	///<field name="Default_Value" type="PickListValue">Default_Value = 1</field>
	Default_Value: 1
}
///<field name="Address2_ShippingMethodCode" type="PickList"></field>
OptionSet.Address2_ShippingMethodCode = {
	///<field name="Default_Value" type="PickListValue">Default_Value = 1</field>
	Default_Value: 1
}
///<field name="BusinessTypeCode" type="PickList"></field>
OptionSet.BusinessTypeCode = {
	///<field name="Default_Value" type="PickListValue">Default_Value = 1</field>
	Default_Value: 1
}
///<field name="CustomerSizeCode" type="PickList"></field>
OptionSet.CustomerSizeCode = {
	///<field name="Default_Value" type="PickListValue">Default_Value = 1</field>
	Default_Value: 1
}
///<field name="CustomerTypeCode" type="PickList"></field>
OptionSet.CustomerTypeCode = {
	///<field name="Competitor" type="PickListValue">Competitor = 1</field>
	Competitor: 1,
	///<field name="Consultant" type="PickListValue">Consultant = 2</field>
	Consultant: 2,
	///<field name="Customer" type="PickListValue">Customer = 3</field>
	Customer: 3,
	///<field name="Investor" type="PickListValue">Investor = 4</field>
	Investor: 4,
	///<field name="Partner" type="PickListValue">Partner = 5</field>
	Partner: 5,
	///<field name="Influencer" type="PickListValue">Influencer = 6</field>
	Influencer: 6,
	///<field name="Press" type="PickListValue">Press = 7</field>
	Press: 7,
	///<field name="Prospect" type="PickListValue">Prospect = 8</field>
	Prospect: 8,
	///<field name="Reseller" type="PickListValue">Reseller = 9</field>
	Reseller: 9,
	///<field name="Supplier" type="PickListValue">Supplier = 10</field>
	Supplier: 10,
	///<field name="Vendor" type="PickListValue">Vendor = 11</field>
	Vendor: 11,
	///<field name="Other" type="PickListValue">Other = 12</field>
	Other: 12
}
///<field name="IndustryCode" type="PickList"></field>
OptionSet.IndustryCode = {
	///<field name="Accounting" type="PickListValue">Accounting = 1</field>
	Accounting: 1,
	///<field name="Agriculture_and_Non_petrol_Natural_Resource_Extraction" type="PickListValue">Agriculture_and_Non_petrol_Natural_Resource_Extraction = 2</field>
	Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2,
	///<field name="Broadcasting_Printing_and_Publishing" type="PickListValue">Broadcasting_Printing_and_Publishing = 3</field>
	Broadcasting_Printing_and_Publishing: 3,
	///<field name="Brokers" type="PickListValue">Brokers = 4</field>
	Brokers: 4,
	///<field name="Building_Supply_Retail" type="PickListValue">Building_Supply_Retail = 5</field>
	Building_Supply_Retail: 5,
	///<field name="Business_Services" type="PickListValue">Business_Services = 6</field>
	Business_Services: 6,
	///<field name="Consulting" type="PickListValue">Consulting = 7</field>
	Consulting: 7,
	///<field name="Consumer_Services" type="PickListValue">Consumer_Services = 8</field>
	Consumer_Services: 8,
	///<field name="Design_Direction_and_Creative_Management" type="PickListValue">Design_Direction_and_Creative_Management = 9</field>
	Design_Direction_and_Creative_Management: 9,
	///<field name="Distributors_Dispatchers_and_Processors" type="PickListValue">Distributors_Dispatchers_and_Processors = 10</field>
	Distributors_Dispatchers_and_Processors: 10,
	///<field name="Doctors_Offices_and_Clinics" type="PickListValue">Doctors_Offices_and_Clinics = 11</field>
	Doctors_Offices_and_Clinics: 11,
	///<field name="Durable_Manufacturing" type="PickListValue">Durable_Manufacturing = 12</field>
	Durable_Manufacturing: 12,
	///<field name="Eating_and_Drinking_Places" type="PickListValue">Eating_and_Drinking_Places = 13</field>
	Eating_and_Drinking_Places: 13,
	///<field name="Entertainment_Retail" type="PickListValue">Entertainment_Retail = 14</field>
	Entertainment_Retail: 14,
	///<field name="Equipment_Rental_and_Leasing" type="PickListValue">Equipment_Rental_and_Leasing = 15</field>
	Equipment_Rental_and_Leasing: 15,
	///<field name="Financial" type="PickListValue">Financial = 16</field>
	Financial: 16,
	///<field name="Food_and_Tobacco_Processing" type="PickListValue">Food_and_Tobacco_Processing = 17</field>
	Food_and_Tobacco_Processing: 17,
	///<field name="Inbound_Capital_Intensive_Processing" type="PickListValue">Inbound_Capital_Intensive_Processing = 18</field>
	Inbound_Capital_Intensive_Processing: 18,
	///<field name="Inbound_Repair_and_Services" type="PickListValue">Inbound_Repair_and_Services = 19</field>
	Inbound_Repair_and_Services: 19,
	///<field name="Insurance" type="PickListValue">Insurance = 20</field>
	Insurance: 20,
	///<field name="Legal_Services" type="PickListValue">Legal_Services = 21</field>
	Legal_Services: 21,
	///<field name="Non_Durable_Merchandise_Retail" type="PickListValue">Non_Durable_Merchandise_Retail = 22</field>
	Non_Durable_Merchandise_Retail: 22,
	///<field name="Outbound_Consumer_Service" type="PickListValue">Outbound_Consumer_Service = 23</field>
	Outbound_Consumer_Service: 23,
	///<field name="Petrochemical_Extraction_and_Distribution" type="PickListValue">Petrochemical_Extraction_and_Distribution = 24</field>
	Petrochemical_Extraction_and_Distribution: 24,
	///<field name="Service_Retail" type="PickListValue">Service_Retail = 25</field>
	Service_Retail: 25,
	///<field name="SIG_Affiliations" type="PickListValue">SIG_Affiliations = 26</field>
	SIG_Affiliations: 26,
	///<field name="Social_Services" type="PickListValue">Social_Services = 27</field>
	Social_Services: 27,
	///<field name="Special_Outbound_Trade_Contractors" type="PickListValue">Special_Outbound_Trade_Contractors = 28</field>
	Special_Outbound_Trade_Contractors: 28,
	///<field name="Specialty_Realty" type="PickListValue">Specialty_Realty = 29</field>
	Specialty_Realty: 29,
	///<field name="Transportation" type="PickListValue">Transportation = 30</field>
	Transportation: 30,
	///<field name="Utility_Creation_and_Distribution" type="PickListValue">Utility_Creation_and_Distribution = 31</field>
	Utility_Creation_and_Distribution: 31,
	///<field name="Vehicle_Retail" type="PickListValue">Vehicle_Retail = 32</field>
	Vehicle_Retail: 32,
	///<field name="Wholesale" type="PickListValue">Wholesale = 33</field>
	Wholesale: 33
}
///<field name="OwnershipCode" type="PickList"></field>
OptionSet.OwnershipCode = {
	///<field name="Public" type="PickListValue">Public = 1</field>
	Public: 1,
	///<field name="Private" type="PickListValue">Private = 2</field>
	Private: 2,
	///<field name="Subsidiary" type="PickListValue">Subsidiary = 3</field>
	Subsidiary: 3,
	///<field name="Other" type="PickListValue">Other = 4</field>
	Other: 4
}
///<field name="PaymentTermsCode" type="PickList"></field>
OptionSet.PaymentTermsCode = {
	///<field name="Net_30" type="PickListValue">Net_30 = 1</field>
	Net_30: 1,
	///<field name="_2_10_Net_30" type="PickListValue">_2_10_Net_30 = 2</field>
	_2_10_Net_30: 2,
	///<field name="Net_45" type="PickListValue">Net_45 = 3</field>
	Net_45: 3,
	///<field name="Net_60" type="PickListValue">Net_60 = 4</field>
	Net_60: 4
}
///<field name="PreferredAppointmentDayCode" type="PickList"></field>
OptionSet.PreferredAppointmentDayCode = {
	///<field name="Sunday" type="PickListValue">Sunday = 0</field>
	Sunday: 0,
	///<field name="Monday" type="PickListValue">Monday = 1</field>
	Monday: 1,
	///<field name="Tuesday" type="PickListValue">Tuesday = 2</field>
	Tuesday: 2,
	///<field name="Wednesday" type="PickListValue">Wednesday = 3</field>
	Wednesday: 3,
	///<field name="Thursday" type="PickListValue">Thursday = 4</field>
	Thursday: 4,
	///<field name="Friday" type="PickListValue">Friday = 5</field>
	Friday: 5,
	///<field name="Saturday" type="PickListValue">Saturday = 6</field>
	Saturday: 6
}
///<field name="PreferredAppointmentTimeCode" type="PickList"></field>
OptionSet.PreferredAppointmentTimeCode = {
	///<field name="Morning" type="PickListValue">Morning = 1</field>
	Morning: 1,
	///<field name="Afternoon" type="PickListValue">Afternoon = 2</field>
	Afternoon: 2,
	///<field name="Evening" type="PickListValue">Evening = 3</field>
	Evening: 3
}
///<field name="PreferredContactMethodCode" type="PickList"></field>
OptionSet.PreferredContactMethodCode = {
	///<field name="Any" type="PickListValue">Any = 1</field>
	Any: 1,
	///<field name="Email" type="PickListValue">Email = 2</field>
	Email: 2,
	///<field name="Phone" type="PickListValue">Phone = 3</field>
	Phone: 3,
	///<field name="Fax" type="PickListValue">Fax = 4</field>
	Fax: 4,
	///<field name="Mail" type="PickListValue">Mail = 5</field>
	Mail: 5
}
///<field name="ShippingMethodCode" type="PickList"></field>
OptionSet.ShippingMethodCode = {
	///<field name="Default_Value" type="PickListValue">Default_Value = 1</field>
	Default_Value: 1
}
///<field name="StateCode" type="PickList"></field>
OptionSet.StateCode = {
	///<field name="Active" type="PickListValue">Active = 0</field>
	Active: 0,
	///<field name="Inactive" type="PickListValue">Inactive = 1</field>
	Inactive: 1
}
///<field name="StatusCode" type="PickList"></field>
OptionSet.StatusCode = {
	///<field name="Active" type="PickListValue">Active = 1</field>
	Active: 1,
	///<field name="Inactive" type="PickListValue">Inactive = 2</field>
	Inactive: 2
}
///<field name="TerritoryCode" type="PickList"></field>
OptionSet.TerritoryCode = {
	///<field name="Default_Value" type="PickListValue">Default_Value = 1</field>
	Default_Value: 1
}
intellisense.addEventListener("statementcompletion", function (event) {
    event.items = event.items.filter(function (item) {
        var removes = ["hasOwnProperty", "propertyIsEnumerable", "isPrototypeOf", "toLocaleString", "toString", "valueOf", "constructor", "__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__", "__proto__"];
        if (removes.indexOf(item.name) != -1) return false;
        item.glyph = "vs:GlyphGroupNamespace";
        if (item.comments.length != 0) {
            if (item.comments.indexOf('type="Boolean"') >= 0)
                item.glyph = "vs:GlyphGroupModule";
            else if (item.comments.indexOf('type="Money"') >= 0)
                item.glyph = "vs:GlyphGroupStruct";
            else if (item.comments.indexOf('type="DateTime"') >= 0 || item.comments.indexOf('type="DateOnly"') >= 0)
                item.glyph = "vs:GlyphGroupTemplate";
            else if (item.comments.indexOf('type="PickList"') >= 0 || item.comments.indexOf('type="Status"') >= 0 || item.comments.indexOf('type="State"') >= 0 || item.comments.indexOf('type="OptionSet.') >= 0)
                item.glyph = "vs:GlyphGroupEnum";
            else if (item.comments.indexOf('type="Function"') >= 0)
                item.glyph = "vs:GlyphGroupEvent";
            else if (item.comments.indexOf('type="Lookup"') >= 0 || item.comments.indexOf('type="PartyList"') >= 0)
                item.glyph = "vs:GlyphGroupMapItem";
            else if (item.comments.indexOf('type="Object"') >= 0)
                item.glyph = "vs:GlyphGroupNamespace";
            else if (item.comments.indexOf('type="Memo"') >= 0 || item.comments.indexOf('type="String"') >= 0)
                item.glyph = "vs:GlyphGroupField";
            else if (item.comments.indexOf('type="Uniqueidentifier"') >= 0)
                item.glyph = "vs:GlyphGroupMap";
            else if (item.comments.indexOf('type="Virtual"') >= 0)
                item.glyph = "vs:GlyphGroupInterface";
            else if (item.comments.indexOf('type="Array"') >= 0)
                item.glyph = "vs:GlyphJSharpProject";
            else if (item.comments.indexOf('type="PickListValue"') >= 0)
                item.glyph = "vs:GlyphGroupEnumMember";
            else if (item.comments.indexOf('type="Integer"') >= 0)
                item.glyph = "vs:GlyphGroupInterface";
            else if (item.comments.indexOf('type="Double"') >= 0)
                item.glyph = "vs:GlyphReference";
        }
        return true;
    });
})
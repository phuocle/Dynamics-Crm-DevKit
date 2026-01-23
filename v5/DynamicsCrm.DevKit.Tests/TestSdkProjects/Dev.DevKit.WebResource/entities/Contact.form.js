'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormContact = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActionCards", "Address1_Composite", "Address1_FreightTermsCode", "Address1_ShippingMethodCode", "Anniversary", "BirthDate", "CreditLimit", "CreditOnHold", "Description", "DoNotBulkEMail", "DoNotEMail", "DoNotFax", "DoNotPhone", "DoNotPostalMail", "EMailAddress1", "FamilyStatusCode", "Fax", "FollowEmail", "FullName", "GenderCode", "JobTitle", "mapcontrol", "MobilePhone", "notescontrol", "ParentCustomerId", "PaymentTermsCode", "PreferredContactMethodCode", "PreferredContactMethodCode1", "SpousesName", "Telephone1", "TransactionCurrencyId"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["OwnerId"],
			navigation: ["navActivities", "navAddresses", "navAsyncOperations", "navInvoices", "navOrders", "navProcessSessions", "navQuotes", "navRelationships", "navSubConts"],
			quick: [],
			tab: ["DETAILS_TAB___billing_information", "DETAILS_TAB___CONTACT_PREFERENCES", "DETAILS_TAB___PERSONAL_INFORMATION", "DETAILS_TAB___PERSONAL_NOTES_SECTION", "DETAILS_TAB___shipping_information", "SUMMARY_TAB___CONTACT_INFORMATION", "SUMMARY_TAB___MapSection", "SUMMARY_TAB___SOCIAL_PANE_TAB", "SUMMARY_TAB___Summary_section_6"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormContact_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AccountRoleCode", "Address1_AddressTypeCode", "Address1_City", "Address1_Country", "Address1_FreightTermsCode", "Address1_Line1", "Address1_Line2", "Address1_Line3", "Address1_Name", "Address1_PostalCode", "Address1_ShippingMethodCode", "Address1_StateOrProvince", "Address1_Telephone1", "Anniversary", "AssistantName", "AssistantPhone", "BirthDate", "contactactivitiesgrid", "CreditLimit", "CreditOnHold", "Department", "Description", "DoNotBulkEMail", "DoNotEMail", "DoNotFax", "DoNotPhone", "DoNotPostalMail", "EMailAddress1", "FamilyStatusCode", "Fax", "FirstName", "GenderCode", "JobTitle", "LastName", "ManagerName", "ManagerPhone", "MiddleName", "MobilePhone", "notescontrol", "OwnerId", "ParentCustomerId", "PaymentTermsCode", "PreferredContactMethodCode", "Salutation", "SpousesName", "Telephone1", "Telephone2", "TransactionCurrencyId"],
			bpf: [],
			dialog: [],
			grid: ["contactactivitiesgrid"],
			header: ["EMailAddress1", "OwnerId", "PreferredContactMethodCode"],
			navigation: ["navActivities", "navActivityHistory", "navAddresses", "navRelationships", "navSubConts"],
			quick: [],
			tab: ["administration___billing_information", "administration___contact_methods", "administration___internal_information", "details___personal_information", "details___professional_information", "general___address", "general___description", "general___name", "general___shipping_information", "notes_and_activities___activities", "notes_and_activities___notes"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormInvite_Web_Form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["EMailAddress1", "FirstName", "LastName", "OwnerId", "Telephone1"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: ["navActivities", "navActivityHistory", "navAddresses", "navRelationships", "navSubConts"],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormPortal_Contact_Enhanced = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AccountRoleCode", "Address1_AddressTypeCode", "Address1_City", "Address1_Country", "Address1_FreightTermsCode", "Address1_Line1", "Address1_Line2", "Address1_Line3", "Address1_Name", "Address1_PostalCode", "Address1_ShippingMethodCode", "Address1_StateOrProvince", "Address1_Telephone1", "adx_externalidentity", "adx_identity_accessfailedcount", "adx_identity_emailaddress1confirmed", "adx_identity_locallogindisabled", "adx_identity_lockoutenabled", "adx_identity_lockoutenddate", "adx_identity_logonenabled", "adx_identity_mobilephoneconfirmed", "adx_identity_securitystamp", "adx_identity_twofactorenabled", "adx_identity_username", "Adx_TimeZone", "Anniversary", "AssistantName", "AssistantPhone", "BirthDate", "contactactivitiesgrid", "CreditLimit", "CreditOnHold", "defaultpricelevelid", "Department", "Description", "DoNotBulkEMail", "DoNotEMail", "DoNotFax", "DoNotPhone", "DoNotPostalMail", "EMailAddress1", "FamilyStatusCode", "Fax", "FirstName", "GenderCode", "grid_contact_mspp_webrole", "JobTitle", "LastName", "ManagerName", "ManagerPhone", "MiddleName", "MobilePhone", "notescontrol", "OwnerId", "ParentCustomerId", "PaymentTermsCode", "PreferredContactMethodCode", "Salutation", "SpousesName", "Telephone1", "Telephone2", "TransactionCurrencyId"],
			bpf: [],
			dialog: [],
			grid: ["adx_externalidentity", "contactactivitiesgrid", "grid_contact_mspp_webrole"],
			header: ["EMailAddress1", "OwnerId", "PreferredContactMethodCode"],
			navigation: ["nav_adx_webrole_contact", "nav_powerpagecomponent_mspp_webrole_contact", "navActivities", "navActivityHistory", "navAddresses", "navRelationships", "navSubConts"],
			quick: [],
			tab: ["administration___billing_information", "administration___contact_methods", "administration___internal_information", "details___personal_information", "details___professional_information", "general___address", "general___contact_webrole_section", "general___description", "general___name", "general___shipping_information", "notes_and_activities___activities", "notes_and_activities___notes", "web_authentication____F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_4", "web_authentication____F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_5"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormProfile_Web_Form_Enhanced = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Adx_OrganizationName", "adx_PublicProfileCopy", "EMailAddress1", "FirstName", "JobTitle", "LastName", "mspp_userpreferredlcid", "NickName", "OwnerId", "Telephone1", "WebSiteUrl"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: ["navActivities", "navActivityHistory", "navAddresses", "navRelationships", "navSubConts"],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormProfile_Web_Form_Enhanced_Japanese = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Adx_OrganizationName", "adx_PublicProfileCopy", "EMailAddress1", "FirstName", "JobTitle", "LastName", "mspp_userpreferredlcid", "NickName", "OwnerId", "Telephone1", "WebSiteUrl", "YomiFirstName", "YomiLastName"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: ["navActivities", "navActivityHistory", "navAddresses", "navRelationships", "navSubConts"],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormContact_Quick_Create = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Address1_City", "Address1_Line1", "Address1_Line2", "Address1_PostalCode", "Description", "EMailAddress1", "FirstName", "JobTitle", "LastName", "MobilePhone", "ParentCustomerId", "Telephone1"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["tab_1___tab_1_column_1_section_1", "tab_1___tab_1_column_2_section_1", "tab_1___tab_1_column_3_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Contact = {
		AccountRoleCode: { Decision_Maker: 1, Employee: 2, Influencer: 3 },
		Address1_AddressTypeCode: { Bill_To: 1, Other: 4, Primary: 3, Ship_To: 2 },
		Address1_FreightTermsCode: { FOB: 1, No_Charge: 2 },
		Address1_ShippingMethodCode: { Airborne: 1, DHL: 2, FedEx: 3, Full_Load: 6, Postal_Mail: 5, UPS: 4, Will_Call: 7 },
		Address2_AddressTypeCode: { Default_Value: 1 },
		Address2_FreightTermsCode: { Default_Value: 1 },
		Address2_ShippingMethodCode: { Default_Value: 1 },
		Address3_AddressTypeCode: { Default_Value: 1 },
		Address3_FreightTermsCode: { Default_Value: 1 },
		Address3_ShippingMethodCode: { Default_Value: 1 },
		CustomerSizeCode: { Default_Value: 1 },
		CustomerTypeCode: { Default_Value: 1 },
		EducationCode: { Default_Value: 1 },
		FamilyStatusCode: { Divorced: 3, Married: 2, Single: 1, Widowed: 4 },
		GenderCode: { Female: 2, Male: 1 },
		HasChildrenCode: { Default_Value: 1 },
		LeadSourceCode: { Default_Value: 1 },
		mspp_userpreferredlcid: { Arabic: 1025, Basque_Basque: 1069, Bulgarian_Bulgaria: 1026, Catalan_Catalan: 1027, Chinese_China: 2052, Chinese_Hong_Kong_SAR: 3076, Chinese_Traditional: 1028, Croatian_Croatia: 1050, Czech_Czech_Republic: 1029, Danish_Denmark: 1030, Dutch_Netherlands: 1043, English: 1033, Estonian_Estonia: 1061, Finnish_Finland: 1035, French_France: 1036, Galician_Spain: 1110, German_Germany: 1031, Greek_Greece: 1032, Hebrew: 1037, Hindi_India: 1081, Hungarian_Hungary: 1038, Indonesian_Indonesia: 1057, Italian_Italy: 1040, Japanese_Japan: 1041, Kazakh_Kazakhstan: 1087, Korean_Korea: 1042, Latvian_Latvia: 1062, Lithuanian_Lithuania: 1063, Malay_Malaysia: 1086, Norwegian_Bokmal_Norway: 1044, Polish_Poland: 1045, Portuguese_Brazil: 1046, Portuguese_Portugal: 2070, Romanian_Romania: 1048, Russian_Russia: 1049, Serbian_Cyrillic_Serbia: 3098, Serbian_Latin_Serbia: 2074, Slovak_Slovakia: 1051, Slovenian_Slovenia: 1060, Spanish_Traditional_Sort_Spain: 3082, Swedish_Sweden: 1053, Thai_Thailand: 1054, Turkish_Turkiye: 1055, Ukrainian_Ukraine: 1058, Vietnamese_Vietnam: 1066 },
		ParentCustomerIdType: { },
		PaymentTermsCode: { _2_10_Net_30: 2, Net_30: 1, Net_45: 3, Net_60: 4 },
		PreferredAppointmentDayCode: { Friday: 5, Monday: 1, Saturday: 6, Sunday: 0, Thursday: 4, Tuesday: 2, Wednesday: 3 },
		PreferredAppointmentTimeCode: { Afternoon: 2, Evening: 3, Morning: 1 },
		PreferredContactMethodCode: { Any: 1, Email: 2, Fax: 4, Mail: 5, Phone: 3 },
		ShippingMethodCode: { Default_Value: 1 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		TerritoryCode: { Default_Value: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));
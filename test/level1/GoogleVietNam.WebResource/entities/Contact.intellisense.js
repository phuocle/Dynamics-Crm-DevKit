///<reference path='devkit.intellisense.js' />
WebResource.FormContact = function (executionContext, defaultWebResourceName) {
	var contact = intellisense.Form;
	contact.Utility = intellisense.Utility;
	var tab = {};
	tab.SUMMARY_TAB = {
		///<field name='AddTabStateChange' type='Function'></field>
		AddTabStateChange: intellisense.FunctionTabAddTabStateChange,
		///<field name='DisplayState' type='OptionSet.TabDisplayState'>[GetSet] a value that indicates whether the tab is collapsed or expanded.</field>
		DisplayState: '',
		///<field name='Focus' type='Function'></field>
		Focus: intellisense.FunctionControlFocus,
		///<field name='Label' type='String'>[GetSet] the tab label.</field>
		Label: '',
		///<field name='Name' type='String'>[Get] returns the name of the tab.</field>
		Name: '',
		///<field name='Parent' type='Object'>[Get] returns the formContext.ui object containing the tab.</field>
		Parent: '',
		///<field name='Visible' type='Boolean'>[GetSet] a value that indicates whether the tab is currently visible or not.</field>
		Visible: '',
		///<field name='RemoveTabStateChange' type='Function'></field>
		RemoveTabStateChange: intellisense.FunctionTabRemoveTabStateChange,
		///<field name='Section' type='Object'>A section contains methods to manage how it appears as well as accessing the tab that contains the section.</field>
		Section: {
			CONTACT_INFORMATION: intellisense.FormSection,
			MapSection: intellisense.FormSection,
			SOCIAL_PANE_TAB: intellisense.FormSection,
			TalkingPoints_section: intellisense.FormSection,
			Summary_section_6: intellisense.FormSection,
			CUSTOMER_DETAILS_TAB: intellisense.FormSection
		}
	};
	tab.DETAILS_TAB = {
		///<field name='AddTabStateChange' type='Function'></field>
		AddTabStateChange: intellisense.FunctionTabAddTabStateChange,
		///<field name='DisplayState' type='OptionSet.TabDisplayState'>[GetSet] a value that indicates whether the tab is collapsed or expanded.</field>
		DisplayState: '',
		///<field name='Focus' type='Function'></field>
		Focus: intellisense.FunctionControlFocus,
		///<field name='Label' type='String'>[GetSet] the tab label.</field>
		Label: '',
		///<field name='Name' type='String'>[Get] returns the name of the tab.</field>
		Name: '',
		///<field name='Parent' type='Object'>[Get] returns the formContext.ui object containing the tab.</field>
		Parent: '',
		///<field name='Visible' type='Boolean'>[GetSet] a value that indicates whether the tab is currently visible or not.</field>
		Visible: '',
		///<field name='RemoveTabStateChange' type='Function'></field>
		RemoveTabStateChange: intellisense.FunctionTabRemoveTabStateChange,
		///<field name='Section' type='Object'>A section contains methods to manage how it appears as well as accessing the tab that contains the section.</field>
		Section: {
			PERSONAL_INFORMATION: intellisense.FormSection,
			PERSONAL_NOTES_SECTION: intellisense.FormSection,
			marketing_information: intellisense.FormSection,
			CONTACT_PREFERENCES: intellisense.FormSection,
			billing_information: intellisense.FormSection,
			shipping_information: intellisense.FormSection
		}
	};
	var body = {
		///<field name='Tab' type='Object'>A tab is a group of sections on a page</field>
		Tab: tab,
		///<field name='Address1_Composite' type='String'></field>
		Address1_Composite: intellisense.FieldString,
		///<field name='Address1_FreightTermsCode' type='OptionSet'></field>
		Address1_FreightTermsCode: intellisense.FieldOptionSet,
		///<field name='Address1_ShippingMethodCode' type='OptionSet'></field>
		Address1_ShippingMethodCode: intellisense.FieldOptionSet,
		///<field name='Anniversary' type='DateTime'></field>
		Anniversary: intellisense.FieldDateTime,
		///<field name='BirthDate' type='DateTime'></field>
		BirthDate: intellisense.FieldDateTime,
		///<field name='CreditLimit' type='Money'></field>
		CreditLimit: intellisense.FieldNumber,
		///<field name='CreditOnHold' type='Boolean'></field>
		CreditOnHold: intellisense.FieldBoolean,
		///<field name='Description' type='String'></field>
		Description: intellisense.FieldString,
		///<field name='DoNotBulkEMail' type='Boolean'></field>
		DoNotBulkEMail: intellisense.FieldBoolean,
		///<field name='DoNotEMail' type='Boolean'></field>
		DoNotEMail: intellisense.FieldBoolean,
		///<field name='DoNotFax' type='Boolean'></field>
		DoNotFax: intellisense.FieldBoolean,
		///<field name='DoNotPhone' type='Boolean'></field>
		DoNotPhone: intellisense.FieldBoolean,
		///<field name='DoNotPostalMail' type='Boolean'></field>
		DoNotPostalMail: intellisense.FieldBoolean,
		///<field name='DoNotSendMM' type='Boolean'></field>
		DoNotSendMM: intellisense.FieldBoolean,
		///<field name='EMailAddress1' type='String'></field>
		EMailAddress1: intellisense.FieldString,
		///<field name='FamilyStatusCode' type='OptionSet'></field>
		FamilyStatusCode: intellisense.FieldOptionSet,
		///<field name='Fax' type='String'></field>
		Fax: intellisense.FieldString,
		///<field name='FollowEmail' type='Boolean'></field>
		FollowEmail: intellisense.FieldBoolean,
		///<field name='FullName' type='String'></field>
		FullName: intellisense.FieldString,
		///<field name='GenderCode' type='OptionSet'></field>
		GenderCode: intellisense.FieldOptionSet,
		///<field name='JobTitle' type='String'></field>
		JobTitle: intellisense.FieldString,
		///<field name='LastUsedInCampaign' type='DateTime'></field>
		LastUsedInCampaign: intellisense.FieldDateTime,
		///<field name='MobilePhone' type='String'></field>
		MobilePhone: intellisense.FieldString,
		///<field name='OriginatingLeadId' type='Lookup'></field>
		OriginatingLeadId: intellisense.FieldLookup,
		///<field name='ParentCustomerId' type='Lookup'></field>
		ParentCustomerId: intellisense.FieldLookup,
		///<field name='PaymentTermsCode' type='OptionSet'></field>
		PaymentTermsCode: intellisense.FieldOptionSet,
		///<field name='PreferredContactMethodCode' type='OptionSet'></field>
		PreferredContactMethodCode: intellisense.FieldOptionSet,
		///<field name='SpousesName' type='String'></field>
		SpousesName: intellisense.FieldString,
		///<field name='Telephone1' type='String'></field>
		Telephone1: intellisense.FieldString,
		///<field name='TransactionCurrencyId' type='Lookup'></field>
		TransactionCurrencyId: intellisense.FieldLookup
	};
	contact.Body = body;
	var header = {
		///<field name='OwnerId' type='Lookup'></field>
		OwnerId: intellisense.FieldLookup
	};
	contact.Header = header;
	var footer = {

	};
	contact.Footer = footer;
	var quickForm = {
		contactquickform: intellisense.FormQuickView
	};
	contact.QuickForm = quickForm;
	var navigation = {
		navInvoices: intellisense.FormNavigation,
		navOrders: intellisense.FormNavigation,
		navQuotes: intellisense.FormNavigation,
		navAddresses: intellisense.FormNavigation,
		navSubConts: intellisense.FormNavigation,
		navRelationships: intellisense.FormNavigation,
		navAsyncOperations: intellisense.FormNavigation,
		navProcessSessions: intellisense.FormNavigation
	};
	contact.Navigation = navigation;
	contact.OptionSet = {};
	///<field name='AccountRoleCode' type='PickList'></field>
	contact.OptionSet.AccountRoleCode = {
		///<field name='Decision_Maker' type='PickListValue'>Decision_Maker = 1</field>
		Decision_Maker: 1,
		///<field name='Employee' type='PickListValue'>Employee = 2</field>
		Employee: 2,
		///<field name='Influencer' type='PickListValue'>Influencer = 3</field>
		Influencer: 3
	};
	///<field name='Address1_AddressTypeCode' type='PickList'></field>
	contact.OptionSet.Address1_AddressTypeCode = {
		///<field name='Bill_To' type='PickListValue'>Bill_To = 1</field>
		Bill_To: 1,
		///<field name='Ship_To' type='PickListValue'>Ship_To = 2</field>
		Ship_To: 2,
		///<field name='Primary' type='PickListValue'>Primary = 3</field>
		Primary: 3,
		///<field name='Other' type='PickListValue'>Other = 4</field>
		Other: 4
	};
	///<field name='Address1_FreightTermsCode' type='PickList'></field>
	contact.OptionSet.Address1_FreightTermsCode = {
		///<field name='FOB' type='PickListValue'>FOB = 1</field>
		FOB: 1,
		///<field name='No_Charge' type='PickListValue'>No_Charge = 2</field>
		No_Charge: 2
	};
	///<field name='Address1_ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.Address1_ShippingMethodCode = {
		///<field name='Airborne' type='PickListValue'>Airborne = 1</field>
		Airborne: 1,
		///<field name='DHL' type='PickListValue'>DHL = 2</field>
		DHL: 2,
		///<field name='FedEx' type='PickListValue'>FedEx = 3</field>
		FedEx: 3,
		///<field name='UPS' type='PickListValue'>UPS = 4</field>
		UPS: 4,
		///<field name='Postal_Mail' type='PickListValue'>Postal_Mail = 5</field>
		Postal_Mail: 5,
		///<field name='Full_Load' type='PickListValue'>Full_Load = 6</field>
		Full_Load: 6,
		///<field name='Will_Call' type='PickListValue'>Will_Call = 7</field>
		Will_Call: 7
	};
	///<field name='Address2_AddressTypeCode' type='PickList'></field>
	contact.OptionSet.Address2_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_FreightTermsCode' type='PickList'></field>
	contact.OptionSet.Address2_FreightTermsCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.Address2_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address3_AddressTypeCode' type='PickList'></field>
	contact.OptionSet.Address3_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address3_FreightTermsCode' type='PickList'></field>
	contact.OptionSet.Address3_FreightTermsCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address3_ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.Address3_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='CustomerSizeCode' type='PickList'></field>
	contact.OptionSet.CustomerSizeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='CustomerTypeCode' type='PickList'></field>
	contact.OptionSet.CustomerTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='EducationCode' type='PickList'></field>
	contact.OptionSet.EducationCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='FamilyStatusCode' type='PickList'></field>
	contact.OptionSet.FamilyStatusCode = {
		///<field name='Single' type='PickListValue'>Single = 1</field>
		Single: 1,
		///<field name='Married' type='PickListValue'>Married = 2</field>
		Married: 2,
		///<field name='Divorced' type='PickListValue'>Divorced = 3</field>
		Divorced: 3,
		///<field name='Widowed' type='PickListValue'>Widowed = 4</field>
		Widowed: 4
	};
	///<field name='GenderCode' type='PickList'></field>
	contact.OptionSet.GenderCode = {
		///<field name='Male' type='PickListValue'>Male = 1</field>
		Male: 1,
		///<field name='Female' type='PickListValue'>Female = 2</field>
		Female: 2
	};
	///<field name='HasChildrenCode' type='PickList'></field>
	contact.OptionSet.HasChildrenCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='LeadSourceCode' type='PickList'></field>
	contact.OptionSet.LeadSourceCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='PaymentTermsCode' type='PickList'></field>
	contact.OptionSet.PaymentTermsCode = {
		///<field name='Net_30' type='PickListValue'>Net_30 = 1</field>
		Net_30: 1,
		///<field name='_2_10_Net_30' type='PickListValue'>_2_10_Net_30 = 2</field>
		_2_10_Net_30: 2,
		///<field name='Net_45' type='PickListValue'>Net_45 = 3</field>
		Net_45: 3,
		///<field name='Net_60' type='PickListValue'>Net_60 = 4</field>
		Net_60: 4
	};
	///<field name='PreferredAppointmentDayCode' type='PickList'></field>
	contact.OptionSet.PreferredAppointmentDayCode = {
		///<field name='Sunday' type='PickListValue'>Sunday = 0</field>
		Sunday: 0,
		///<field name='Monday' type='PickListValue'>Monday = 1</field>
		Monday: 1,
		///<field name='Tuesday' type='PickListValue'>Tuesday = 2</field>
		Tuesday: 2,
		///<field name='Wednesday' type='PickListValue'>Wednesday = 3</field>
		Wednesday: 3,
		///<field name='Thursday' type='PickListValue'>Thursday = 4</field>
		Thursday: 4,
		///<field name='Friday' type='PickListValue'>Friday = 5</field>
		Friday: 5,
		///<field name='Saturday' type='PickListValue'>Saturday = 6</field>
		Saturday: 6
	};
	///<field name='PreferredAppointmentTimeCode' type='PickList'></field>
	contact.OptionSet.PreferredAppointmentTimeCode = {
		///<field name='Morning' type='PickListValue'>Morning = 1</field>
		Morning: 1,
		///<field name='Afternoon' type='PickListValue'>Afternoon = 2</field>
		Afternoon: 2,
		///<field name='Evening' type='PickListValue'>Evening = 3</field>
		Evening: 3
	};
	///<field name='PreferredContactMethodCode' type='PickList'></field>
	contact.OptionSet.PreferredContactMethodCode = {
		///<field name='Any' type='PickListValue'>Any = 1</field>
		Any: 1,
		///<field name='Email' type='PickListValue'>Email = 2</field>
		Email: 2,
		///<field name='Phone' type='PickListValue'>Phone = 3</field>
		Phone: 3,
		///<field name='Fax' type='PickListValue'>Fax = 4</field>
		Fax: 4,
		///<field name='Mail' type='PickListValue'>Mail = 5</field>
		Mail: 5
	};
	///<field name='ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='StateCode' type='PickList'></field>
	contact.OptionSet.StateCode = {
		///<field name='Active' type='PickListValue'>Active = 0</field>
		Active: 0,
		///<field name='Inactive' type='PickListValue'>Inactive = 1</field>
		Inactive: 1
	};
	///<field name='StatusCode' type='PickList'></field>
	contact.OptionSet.StatusCode = {
		///<field name='Active' type='PickListValue'>Active = 1</field>
		Active: 1,
		///<field name='Inactive' type='PickListValue'>Inactive = 2</field>
		Inactive: 2
	};
	///<field name='TerritoryCode' type='PickList'></field>
	contact.OptionSet.TerritoryCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	return contact;
};
//{'JsForm':['Contact'],'JsWebApi':false,'IsDebugForm':false,'IsDebugWebApi':false}
///<reference path='devkit.intellisense.js' />
Debug.FormAccount = function (executionContext, defaultWebResourceName) {
	var account = intellisense.Form;
	account.Utility = intellisense.Utility;
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
			ACCOUNT_INFORMATION: intellisense.FormSection,
			ADDRESS: intellisense.FormSection,
			MapSection: intellisense.FormSection,
			SOCIAL_PANE_TAB: intellisense.FormSection,
			Summary_section_6: intellisense.FormSection,
			SUMMARY_TAB_section_6: intellisense.FormSection
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
			COMPANY_PROFILE: intellisense.FormSection,
			DETAILS_TAB_section_6: intellisense.FormSection,
			MARKETING: intellisense.FormSection,
			CONTACT_PREFERENCES: intellisense.FormSection,
			BILLING: intellisense.FormSection,
			SHIPPING: intellisense.FormSection,
			ChildAccounts: intellisense.FormSection
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
		///<field name='Fax' type='String'></field>
		Fax: intellisense.FieldString,
		///<field name='FollowEmail' type='Boolean'></field>
		FollowEmail: intellisense.FieldBoolean,
		///<field name='IndustryCode' type='OptionSet'></field>
		IndustryCode: intellisense.FieldOptionSet,
		///<field name='LastUsedInCampaign' type='DateTime'></field>
		LastUsedInCampaign: intellisense.FieldDateTime,
		///<field name='Name' type='String'></field>
		Name: intellisense.FieldString,
		///<field name='OriginatingLeadId' type='Lookup'></field>
		OriginatingLeadId: intellisense.FieldLookup,
		///<field name='OwnershipCode' type='OptionSet'></field>
		OwnershipCode: intellisense.FieldOptionSet,
		///<field name='ParentAccountId' type='Lookup'></field>
		ParentAccountId: intellisense.FieldLookup,
		///<field name='PaymentTermsCode' type='OptionSet'></field>
		PaymentTermsCode: intellisense.FieldOptionSet,
		///<field name='PreferredContactMethodCode' type='OptionSet'></field>
		PreferredContactMethodCode: intellisense.FieldOptionSet,
		///<field name='PrimaryContactId' type='Lookup'></field>
		PrimaryContactId: intellisense.FieldLookup,
		///<field name='SIC' type='String'></field>
		SIC: intellisense.FieldString,
		///<field name='Telephone1' type='String'></field>
		Telephone1: intellisense.FieldString,
		///<field name='TickerSymbol' type='String'></field>
		TickerSymbol: intellisense.FieldString,
		///<field name='TransactionCurrencyId' type='Lookup'></field>
		TransactionCurrencyId: intellisense.FieldLookup,
		///<field name='WebSiteURL' type='String'></field>
		WebSiteURL: intellisense.FieldString
	};
	account.Body = body;
	var header = {
		///<field name='NumberOfEmployees' type='Integer'></field>
		NumberOfEmployees: intellisense.FieldNumber,
		///<field name='OwnerId' type='Lookup'></field>
		OwnerId: intellisense.FieldLookup,
		///<field name='Revenue' type='Money'></field>
		Revenue: intellisense.FieldNumber
	};
	account.Header = header;
	var footer = {

	};
	account.Footer = footer;
	var process = intellisense.Process;
	var _InstoreExcellence = {
		///<field name='Address1_City' type='String'></field>
		Address1_City: intellisense.FieldString,
		///<field name='Address1_Line1' type='String'></field>
		Address1_Line1: intellisense.FieldString,
		///<field name='Address1_PostalCode' type='String'></field>
		Address1_PostalCode: intellisense.FieldString,
		///<field name='Address1_StateOrProvince' type='String'></field>
		Address1_StateOrProvince: intellisense.FieldString,
		///<field name='Name' type='String'></field>
		Name: intellisense.FieldString,
		///<field name='PaymentTermsCode' type='OptionSet'></field>
		PaymentTermsCode: intellisense.FieldOptionSet,
		///<field name='PreferredAppointmentDayCode' type='OptionSet'></field>
		PreferredAppointmentDayCode: intellisense.FieldOptionSet,
		///<field name='PreferredAppointmentTimeCode' type='OptionSet'></field>
		PreferredAppointmentTimeCode: intellisense.FieldOptionSet,
		///<field name='PrimaryContactId' type='Lookup'></field>
		PrimaryContactId: intellisense.FieldLookup,
		///<field name='StatusCode' type='OptionSet'></field>
		StatusCode: intellisense.FieldOptionSet,
		///<field name='StatusCode_1' type='OptionSet'></field>
		StatusCode_1: intellisense.FieldOptionSet,
		///<field name='StatusCode_2' type='OptionSet'></field>
		StatusCode_2: intellisense.FieldOptionSet,
		///<field name='Telephone1' type='String'></field>
		Telephone1: intellisense.FieldString
	}
	process.InstoreExcellence = _InstoreExcellence;
	account.Process = process;
	var quickForm = {
		contactquickform: intellisense.FormQuickView
	};
	account.QuickForm = quickForm;
	var navigation = {
		navAddresses: intellisense.FormNavigation,
		navSubAccts: intellisense.FormNavigation,
		navRelationships: intellisense.FormNavigation,
		navCampaignsInSFA: intellisense.FormNavigation,
		navProcessSessions: intellisense.FormNavigation,
		navAsyncOperations: intellisense.FormNavigation,
		navContracts: intellisense.FormNavigation,
		navQuotes: intellisense.FormNavigation,
		navOrders: intellisense.FormNavigation,
		navInvoices: intellisense.FormNavigation
	};
	account.Navigation = navigation;
	account.OptionSet = {};
	///<field name='AccountCategoryCode' type='PickList'></field>
	account.OptionSet.AccountCategoryCode = {
		///<field name='Preferred_Customer' type='PickListValue'>Preferred_Customer = 1</field>
		Preferred_Customer: 1,
		///<field name='Standard' type='PickListValue'>Standard = 2</field>
		Standard: 2
	};
	///<field name='AccountClassificationCode' type='PickList'></field>
	account.OptionSet.AccountClassificationCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='AccountRatingCode' type='PickList'></field>
	account.OptionSet.AccountRatingCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address1_AddressTypeCode' type='PickList'></field>
	account.OptionSet.Address1_AddressTypeCode = {
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
	account.OptionSet.Address1_FreightTermsCode = {
		///<field name='FOB' type='PickListValue'>FOB = 1</field>
		FOB: 1,
		///<field name='No_Charge' type='PickListValue'>No_Charge = 2</field>
		No_Charge: 2
	};
	///<field name='Address1_ShippingMethodCode' type='PickList'></field>
	account.OptionSet.Address1_ShippingMethodCode = {
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
	account.OptionSet.Address2_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_FreightTermsCode' type='PickList'></field>
	account.OptionSet.Address2_FreightTermsCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_ShippingMethodCode' type='PickList'></field>
	account.OptionSet.Address2_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='BusinessTypeCode' type='PickList'></field>
	account.OptionSet.BusinessTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='CustomerSizeCode' type='PickList'></field>
	account.OptionSet.CustomerSizeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='CustomerTypeCode' type='PickList'></field>
	account.OptionSet.CustomerTypeCode = {
		///<field name='Competitor' type='PickListValue'>Competitor = 1</field>
		Competitor: 1,
		///<field name='Consultant' type='PickListValue'>Consultant = 2</field>
		Consultant: 2,
		///<field name='Customer' type='PickListValue'>Customer = 3</field>
		Customer: 3,
		///<field name='Investor' type='PickListValue'>Investor = 4</field>
		Investor: 4,
		///<field name='Partner' type='PickListValue'>Partner = 5</field>
		Partner: 5,
		///<field name='Influencer' type='PickListValue'>Influencer = 6</field>
		Influencer: 6,
		///<field name='Press' type='PickListValue'>Press = 7</field>
		Press: 7,
		///<field name='Prospect' type='PickListValue'>Prospect = 8</field>
		Prospect: 8,
		///<field name='Reseller' type='PickListValue'>Reseller = 9</field>
		Reseller: 9,
		///<field name='Supplier' type='PickListValue'>Supplier = 10</field>
		Supplier: 10,
		///<field name='Vendor' type='PickListValue'>Vendor = 11</field>
		Vendor: 11,
		///<field name='Other' type='PickListValue'>Other = 12</field>
		Other: 12
	};
	///<field name='IndustryCode' type='PickList'></field>
	account.OptionSet.IndustryCode = {
		///<field name='Accounting' type='PickListValue'>Accounting = 1</field>
		Accounting: 1,
		///<field name='Agriculture_and_Non_petrol_Natural_Resource_Extraction' type='PickListValue'>Agriculture_and_Non_petrol_Natural_Resource_Extraction = 2</field>
		Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2,
		///<field name='Broadcasting_Printing_and_Publishing' type='PickListValue'>Broadcasting_Printing_and_Publishing = 3</field>
		Broadcasting_Printing_and_Publishing: 3,
		///<field name='Brokers' type='PickListValue'>Brokers = 4</field>
		Brokers: 4,
		///<field name='Building_Supply_Retail' type='PickListValue'>Building_Supply_Retail = 5</field>
		Building_Supply_Retail: 5,
		///<field name='Business_Services' type='PickListValue'>Business_Services = 6</field>
		Business_Services: 6,
		///<field name='Consulting' type='PickListValue'>Consulting = 7</field>
		Consulting: 7,
		///<field name='Consumer_Services' type='PickListValue'>Consumer_Services = 8</field>
		Consumer_Services: 8,
		///<field name='Design_Direction_and_Creative_Management' type='PickListValue'>Design_Direction_and_Creative_Management = 9</field>
		Design_Direction_and_Creative_Management: 9,
		///<field name='Distributors_Dispatchers_and_Processors' type='PickListValue'>Distributors_Dispatchers_and_Processors = 10</field>
		Distributors_Dispatchers_and_Processors: 10,
		///<field name='Doctors_Offices_and_Clinics' type='PickListValue'>Doctors_Offices_and_Clinics = 11</field>
		Doctors_Offices_and_Clinics: 11,
		///<field name='Durable_Manufacturing' type='PickListValue'>Durable_Manufacturing = 12</field>
		Durable_Manufacturing: 12,
		///<field name='Eating_and_Drinking_Places' type='PickListValue'>Eating_and_Drinking_Places = 13</field>
		Eating_and_Drinking_Places: 13,
		///<field name='Entertainment_Retail' type='PickListValue'>Entertainment_Retail = 14</field>
		Entertainment_Retail: 14,
		///<field name='Equipment_Rental_and_Leasing' type='PickListValue'>Equipment_Rental_and_Leasing = 15</field>
		Equipment_Rental_and_Leasing: 15,
		///<field name='Financial' type='PickListValue'>Financial = 16</field>
		Financial: 16,
		///<field name='Food_and_Tobacco_Processing' type='PickListValue'>Food_and_Tobacco_Processing = 17</field>
		Food_and_Tobacco_Processing: 17,
		///<field name='Inbound_Capital_Intensive_Processing' type='PickListValue'>Inbound_Capital_Intensive_Processing = 18</field>
		Inbound_Capital_Intensive_Processing: 18,
		///<field name='Inbound_Repair_and_Services' type='PickListValue'>Inbound_Repair_and_Services = 19</field>
		Inbound_Repair_and_Services: 19,
		///<field name='Insurance' type='PickListValue'>Insurance = 20</field>
		Insurance: 20,
		///<field name='Legal_Services' type='PickListValue'>Legal_Services = 21</field>
		Legal_Services: 21,
		///<field name='Non_Durable_Merchandise_Retail' type='PickListValue'>Non_Durable_Merchandise_Retail = 22</field>
		Non_Durable_Merchandise_Retail: 22,
		///<field name='Outbound_Consumer_Service' type='PickListValue'>Outbound_Consumer_Service = 23</field>
		Outbound_Consumer_Service: 23,
		///<field name='Petrochemical_Extraction_and_Distribution' type='PickListValue'>Petrochemical_Extraction_and_Distribution = 24</field>
		Petrochemical_Extraction_and_Distribution: 24,
		///<field name='Service_Retail' type='PickListValue'>Service_Retail = 25</field>
		Service_Retail: 25,
		///<field name='SIG_Affiliations' type='PickListValue'>SIG_Affiliations = 26</field>
		SIG_Affiliations: 26,
		///<field name='Social_Services' type='PickListValue'>Social_Services = 27</field>
		Social_Services: 27,
		///<field name='Special_Outbound_Trade_Contractors' type='PickListValue'>Special_Outbound_Trade_Contractors = 28</field>
		Special_Outbound_Trade_Contractors: 28,
		///<field name='Specialty_Realty' type='PickListValue'>Specialty_Realty = 29</field>
		Specialty_Realty: 29,
		///<field name='Transportation' type='PickListValue'>Transportation = 30</field>
		Transportation: 30,
		///<field name='Utility_Creation_and_Distribution' type='PickListValue'>Utility_Creation_and_Distribution = 31</field>
		Utility_Creation_and_Distribution: 31,
		///<field name='Vehicle_Retail' type='PickListValue'>Vehicle_Retail = 32</field>
		Vehicle_Retail: 32,
		///<field name='Wholesale' type='PickListValue'>Wholesale = 33</field>
		Wholesale: 33
	};
	///<field name='OwnershipCode' type='PickList'></field>
	account.OptionSet.OwnershipCode = {
		///<field name='Public' type='PickListValue'>Public = 1</field>
		Public: 1,
		///<field name='Private' type='PickListValue'>Private = 2</field>
		Private: 2,
		///<field name='Subsidiary' type='PickListValue'>Subsidiary = 3</field>
		Subsidiary: 3,
		///<field name='Other' type='PickListValue'>Other = 4</field>
		Other: 4
	};
	///<field name='PaymentTermsCode' type='PickList'></field>
	account.OptionSet.PaymentTermsCode = {
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
	account.OptionSet.PreferredAppointmentDayCode = {
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
	account.OptionSet.PreferredAppointmentTimeCode = {
		///<field name='Morning' type='PickListValue'>Morning = 1</field>
		Morning: 1,
		///<field name='Afternoon' type='PickListValue'>Afternoon = 2</field>
		Afternoon: 2,
		///<field name='Evening' type='PickListValue'>Evening = 3</field>
		Evening: 3
	};
	///<field name='PreferredContactMethodCode' type='PickList'></field>
	account.OptionSet.PreferredContactMethodCode = {
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
	account.OptionSet.ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='StateCode' type='PickList'></field>
	account.OptionSet.StateCode = {
		///<field name='Active' type='PickListValue'>Active = 0</field>
		Active: 0,
		///<field name='Inactive' type='PickListValue'>Inactive = 1</field>
		Inactive: 1
	};
	///<field name='StatusCode' type='PickList'></field>
	account.OptionSet.StatusCode = {
		///<field name='Active' type='PickListValue'>Active = 1</field>
		Active: 1,
		///<field name='Inactive' type='PickListValue'>Inactive = 2</field>
		Inactive: 2
	};
	///<field name='TerritoryCode' type='PickList'></field>
	account.OptionSet.TerritoryCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	return account;
};
Debug.FormAccountQuickCreate = function (executionContext, defaultWebResourceName) {
	var account = intellisense.FormQuickCreate;
	account.Utility = intellisense.Utility;
	///<field name='section' type='Object'></field>
	var section = {
		tab_1_column_1_section_1: intellisense.FormSection,
		tab_1_column_2_section_1: intellisense.FormSection,
		tab_1_column_3_section_1: intellisense.FormSection
	}
	var body = {
		///<field name='Section' type='Object'>A group of sections on a quick create form</field>
		Section: section,
		///<field name='Address1_City' type='String'></field>
		Address1_City: intellisense.FieldString,
		///<field name='Address1_Line1' type='String'></field>
		Address1_Line1: intellisense.FieldString,
		///<field name='Address1_Line2' type='String'></field>
		Address1_Line2: intellisense.FieldString,
		///<field name='Address1_PostalCode' type='String'></field>
		Address1_PostalCode: intellisense.FieldString,
		///<field name='Description' type='String'></field>
		Description: intellisense.FieldString,
		///<field name='Name' type='String'></field>
		Name: intellisense.FieldString,
		///<field name='NumberOfEmployees' type='Integer'></field>
		NumberOfEmployees: intellisense.FieldNumber,
		///<field name='PrimaryContactId' type='Lookup'></field>
		PrimaryContactId: intellisense.FieldLookup,
		///<field name='Revenue' type='Money'></field>
		Revenue: intellisense.FieldNumber,
		///<field name='Telephone1' type='String'></field>
		Telephone1: intellisense.FieldString
	}
	account.Body = body;
	account.OptionSet = {};
	///<field name='AccountCategoryCode' type='PickList'></field>
	account.OptionSet.AccountCategoryCode = {
		///<field name='Preferred_Customer' type='PickListValue'>Preferred_Customer = 1</field>
		Preferred_Customer: 1,
		///<field name='Standard' type='PickListValue'>Standard = 2</field>
		Standard: 2
	};
	///<field name='AccountClassificationCode' type='PickList'></field>
	account.OptionSet.AccountClassificationCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='AccountRatingCode' type='PickList'></field>
	account.OptionSet.AccountRatingCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address1_AddressTypeCode' type='PickList'></field>
	account.OptionSet.Address1_AddressTypeCode = {
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
	account.OptionSet.Address1_FreightTermsCode = {
		///<field name='FOB' type='PickListValue'>FOB = 1</field>
		FOB: 1,
		///<field name='No_Charge' type='PickListValue'>No_Charge = 2</field>
		No_Charge: 2
	};
	///<field name='Address1_ShippingMethodCode' type='PickList'></field>
	account.OptionSet.Address1_ShippingMethodCode = {
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
	account.OptionSet.Address2_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_FreightTermsCode' type='PickList'></field>
	account.OptionSet.Address2_FreightTermsCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_ShippingMethodCode' type='PickList'></field>
	account.OptionSet.Address2_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='BusinessTypeCode' type='PickList'></field>
	account.OptionSet.BusinessTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='CustomerSizeCode' type='PickList'></field>
	account.OptionSet.CustomerSizeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='CustomerTypeCode' type='PickList'></field>
	account.OptionSet.CustomerTypeCode = {
		///<field name='Competitor' type='PickListValue'>Competitor = 1</field>
		Competitor: 1,
		///<field name='Consultant' type='PickListValue'>Consultant = 2</field>
		Consultant: 2,
		///<field name='Customer' type='PickListValue'>Customer = 3</field>
		Customer: 3,
		///<field name='Investor' type='PickListValue'>Investor = 4</field>
		Investor: 4,
		///<field name='Partner' type='PickListValue'>Partner = 5</field>
		Partner: 5,
		///<field name='Influencer' type='PickListValue'>Influencer = 6</field>
		Influencer: 6,
		///<field name='Press' type='PickListValue'>Press = 7</field>
		Press: 7,
		///<field name='Prospect' type='PickListValue'>Prospect = 8</field>
		Prospect: 8,
		///<field name='Reseller' type='PickListValue'>Reseller = 9</field>
		Reseller: 9,
		///<field name='Supplier' type='PickListValue'>Supplier = 10</field>
		Supplier: 10,
		///<field name='Vendor' type='PickListValue'>Vendor = 11</field>
		Vendor: 11,
		///<field name='Other' type='PickListValue'>Other = 12</field>
		Other: 12
	};
	///<field name='IndustryCode' type='PickList'></field>
	account.OptionSet.IndustryCode = {
		///<field name='Accounting' type='PickListValue'>Accounting = 1</field>
		Accounting: 1,
		///<field name='Agriculture_and_Non_petrol_Natural_Resource_Extraction' type='PickListValue'>Agriculture_and_Non_petrol_Natural_Resource_Extraction = 2</field>
		Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2,
		///<field name='Broadcasting_Printing_and_Publishing' type='PickListValue'>Broadcasting_Printing_and_Publishing = 3</field>
		Broadcasting_Printing_and_Publishing: 3,
		///<field name='Brokers' type='PickListValue'>Brokers = 4</field>
		Brokers: 4,
		///<field name='Building_Supply_Retail' type='PickListValue'>Building_Supply_Retail = 5</field>
		Building_Supply_Retail: 5,
		///<field name='Business_Services' type='PickListValue'>Business_Services = 6</field>
		Business_Services: 6,
		///<field name='Consulting' type='PickListValue'>Consulting = 7</field>
		Consulting: 7,
		///<field name='Consumer_Services' type='PickListValue'>Consumer_Services = 8</field>
		Consumer_Services: 8,
		///<field name='Design_Direction_and_Creative_Management' type='PickListValue'>Design_Direction_and_Creative_Management = 9</field>
		Design_Direction_and_Creative_Management: 9,
		///<field name='Distributors_Dispatchers_and_Processors' type='PickListValue'>Distributors_Dispatchers_and_Processors = 10</field>
		Distributors_Dispatchers_and_Processors: 10,
		///<field name='Doctors_Offices_and_Clinics' type='PickListValue'>Doctors_Offices_and_Clinics = 11</field>
		Doctors_Offices_and_Clinics: 11,
		///<field name='Durable_Manufacturing' type='PickListValue'>Durable_Manufacturing = 12</field>
		Durable_Manufacturing: 12,
		///<field name='Eating_and_Drinking_Places' type='PickListValue'>Eating_and_Drinking_Places = 13</field>
		Eating_and_Drinking_Places: 13,
		///<field name='Entertainment_Retail' type='PickListValue'>Entertainment_Retail = 14</field>
		Entertainment_Retail: 14,
		///<field name='Equipment_Rental_and_Leasing' type='PickListValue'>Equipment_Rental_and_Leasing = 15</field>
		Equipment_Rental_and_Leasing: 15,
		///<field name='Financial' type='PickListValue'>Financial = 16</field>
		Financial: 16,
		///<field name='Food_and_Tobacco_Processing' type='PickListValue'>Food_and_Tobacco_Processing = 17</field>
		Food_and_Tobacco_Processing: 17,
		///<field name='Inbound_Capital_Intensive_Processing' type='PickListValue'>Inbound_Capital_Intensive_Processing = 18</field>
		Inbound_Capital_Intensive_Processing: 18,
		///<field name='Inbound_Repair_and_Services' type='PickListValue'>Inbound_Repair_and_Services = 19</field>
		Inbound_Repair_and_Services: 19,
		///<field name='Insurance' type='PickListValue'>Insurance = 20</field>
		Insurance: 20,
		///<field name='Legal_Services' type='PickListValue'>Legal_Services = 21</field>
		Legal_Services: 21,
		///<field name='Non_Durable_Merchandise_Retail' type='PickListValue'>Non_Durable_Merchandise_Retail = 22</field>
		Non_Durable_Merchandise_Retail: 22,
		///<field name='Outbound_Consumer_Service' type='PickListValue'>Outbound_Consumer_Service = 23</field>
		Outbound_Consumer_Service: 23,
		///<field name='Petrochemical_Extraction_and_Distribution' type='PickListValue'>Petrochemical_Extraction_and_Distribution = 24</field>
		Petrochemical_Extraction_and_Distribution: 24,
		///<field name='Service_Retail' type='PickListValue'>Service_Retail = 25</field>
		Service_Retail: 25,
		///<field name='SIG_Affiliations' type='PickListValue'>SIG_Affiliations = 26</field>
		SIG_Affiliations: 26,
		///<field name='Social_Services' type='PickListValue'>Social_Services = 27</field>
		Social_Services: 27,
		///<field name='Special_Outbound_Trade_Contractors' type='PickListValue'>Special_Outbound_Trade_Contractors = 28</field>
		Special_Outbound_Trade_Contractors: 28,
		///<field name='Specialty_Realty' type='PickListValue'>Specialty_Realty = 29</field>
		Specialty_Realty: 29,
		///<field name='Transportation' type='PickListValue'>Transportation = 30</field>
		Transportation: 30,
		///<field name='Utility_Creation_and_Distribution' type='PickListValue'>Utility_Creation_and_Distribution = 31</field>
		Utility_Creation_and_Distribution: 31,
		///<field name='Vehicle_Retail' type='PickListValue'>Vehicle_Retail = 32</field>
		Vehicle_Retail: 32,
		///<field name='Wholesale' type='PickListValue'>Wholesale = 33</field>
		Wholesale: 33
	};
	///<field name='OwnershipCode' type='PickList'></field>
	account.OptionSet.OwnershipCode = {
		///<field name='Public' type='PickListValue'>Public = 1</field>
		Public: 1,
		///<field name='Private' type='PickListValue'>Private = 2</field>
		Private: 2,
		///<field name='Subsidiary' type='PickListValue'>Subsidiary = 3</field>
		Subsidiary: 3,
		///<field name='Other' type='PickListValue'>Other = 4</field>
		Other: 4
	};
	///<field name='PaymentTermsCode' type='PickList'></field>
	account.OptionSet.PaymentTermsCode = {
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
	account.OptionSet.PreferredAppointmentDayCode = {
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
	account.OptionSet.PreferredAppointmentTimeCode = {
		///<field name='Morning' type='PickListValue'>Morning = 1</field>
		Morning: 1,
		///<field name='Afternoon' type='PickListValue'>Afternoon = 2</field>
		Afternoon: 2,
		///<field name='Evening' type='PickListValue'>Evening = 3</field>
		Evening: 3
	};
	///<field name='PreferredContactMethodCode' type='PickList'></field>
	account.OptionSet.PreferredContactMethodCode = {
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
	account.OptionSet.ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='StateCode' type='PickList'></field>
	account.OptionSet.StateCode = {
		///<field name='Active' type='PickListValue'>Active = 0</field>
		Active: 0,
		///<field name='Inactive' type='PickListValue'>Inactive = 1</field>
		Inactive: 1
	};
	///<field name='StatusCode' type='PickList'></field>
	account.OptionSet.StatusCode = {
		///<field name='Active' type='PickListValue'>Active = 1</field>
		Active: 1,
		///<field name='Inactive' type='PickListValue'>Inactive = 2</field>
		Inactive: 2
	};
	///<field name='TerritoryCode' type='PickList'></field>
	account.OptionSet.TerritoryCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	return account;
}
//{'JsForm':['Account','Account Quick Create'],'JsWebApi':false,'IsDebugForm':false,'IsDebugWebApi':false}
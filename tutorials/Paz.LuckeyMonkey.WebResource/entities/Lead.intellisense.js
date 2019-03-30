///<reference path='devkit.intellisense.js' />
LuckeyMonkey.FormLead = function (executionContext, defaultWebResourceName) {
	var lead = intellisense.Form;
	lead.Utility = intellisense.Utility;
	var tab = {};
	tab.Summary = {
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
			Contact: intellisense.FormSection,
			company: intellisense.FormSection,
			MapSection: intellisense.FormSection,
			SOCIAL_PANE: intellisense.FormSection,
			RELATED_TAB: intellisense.FormSection
		}
	};
	tab.VersiumPredictInsights = {
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
			tab_3_section_1: intellisense.FormSection
		}
	};
	tab.details_tab = {
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
			lead_information: intellisense.FormSection,
			marketing_information: intellisense.FormSection,
			contact_methods: intellisense.FormSection
		}
	};
	tab.linkedinmemberprofile = {
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
			linkedinmemberprofilesection: intellisense.FormSection
		}
	};
	tab.linkedincompanyprofile = {
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
			linkedincompanyprofilesection: intellisense.FormSection
		}
	};
	var body = {
		///<field name='Tab' type='Object'>A tab is a group of sections on a page</field>
		Tab: tab,
		///<field name='Address1_Composite' type='String'></field>
		Address1_Composite: intellisense.FieldString,
		///<field name='adx_LeadTypeId' type='Lookup'></field>
		adx_LeadTypeId: intellisense.FieldLookup,
		///<field name='CampaignId' type='Lookup'></field>
		CampaignId: intellisense.FieldLookup,
		///<field name='CompanyName' type='String'></field>
		CompanyName: intellisense.FieldString,
		///<field name='Description' type='String'></field>
		Description: intellisense.FieldString,
		///<field name='DoNotBulkEMail' type='Boolean'></field>
		DoNotBulkEMail: intellisense.FieldBoolean,
		///<field name='DoNotEMail' type='Boolean'></field>
		DoNotEMail: intellisense.FieldBoolean,
		///<field name='DoNotPhone' type='Boolean'></field>
		DoNotPhone: intellisense.FieldBoolean,
		///<field name='DoNotPostalMail' type='Boolean'></field>
		DoNotPostalMail: intellisense.FieldBoolean,
		///<field name='DoNotSendMM' type='Boolean'></field>
		DoNotSendMM: intellisense.FieldBoolean,
		///<field name='EMailAddress1' type='String'></field>
		EMailAddress1: intellisense.FieldString,
		///<field name='FullName' type='String'></field>
		FullName: intellisense.FieldString,
		///<field name='IndustryCode' type='OptionSet'></field>
		IndustryCode: intellisense.FieldOptionSet,
		///<field name='JobTitle' type='String'></field>
		JobTitle: intellisense.FieldString,
		///<field name='LastUsedInCampaign' type='DateTime'></field>
		LastUsedInCampaign: intellisense.FieldDateTime,
		///<field name='MobilePhone' type='String'></field>
		MobilePhone: intellisense.FieldString,
		///<field name='msdyn_ordertype' type='OptionSet'></field>
		msdyn_ordertype: intellisense.FieldOptionSet,
		///<field name='new_df_validationletter' type='String'></field>
		new_df_validationletter: intellisense.FieldString,
		///<field name='NumberOfEmployees' type='Integer'></field>
		NumberOfEmployees: intellisense.FieldNumber,
		///<field name='PreferredContactMethodCode' type='OptionSet'></field>
		PreferredContactMethodCode: intellisense.FieldOptionSet,
		///<field name='Revenue' type='Money'></field>
		Revenue: intellisense.FieldNumber,
		///<field name='SIC' type='String'></field>
		SIC: intellisense.FieldString,
		///<field name='Subject' type='String'></field>
		Subject: intellisense.FieldString,
		///<field name='Telephone1' type='String'></field>
		Telephone1: intellisense.FieldString,
		///<field name='TransactionCurrencyId' type='Lookup'></field>
		TransactionCurrencyId: intellisense.FieldLookup,
		///<field name='WebSiteUrl' type='String'></field>
		WebSiteUrl: intellisense.FieldString
	};
	lead.Body = body;
	var header = {
		///<field name='LeadQualityCode' type='OptionSet'></field>
		LeadQualityCode: intellisense.FieldOptionSet,
		///<field name='LeadSourceCode' type='OptionSet'></field>
		LeadSourceCode: intellisense.FieldOptionSet,
		///<field name='OwnerId' type='Lookup'></field>
		OwnerId: intellisense.FieldLookup,
		///<field name='StatusCode' type='OptionSet'></field>
		StatusCode: intellisense.FieldOptionSet
	};
	lead.Header = header;
	var footer = {

	};
	lead.Footer = footer;
	var quickForm = {

	};
	lead.QuickForm = quickForm;
	var navigation = {
		navActivities: intellisense.FormNavigation,
		navCampaignsInSFA: intellisense.FormNavigation,
		navConnections: intellisense.FormNavigation,
		navAsyncOperations: intellisense.FormNavigation,
		navAudit: intellisense.FormNavigation,
		navProcessSessions: intellisense.FormNavigation,
		navLeadCompetitor: intellisense.FormNavigation,
		nav_adobe_lead_adobe_recipient_relatedlead: intellisense.FormNavigation
	};
	lead.Navigation = navigation;
	lead.OptionSet = {};
	///<field name='Address1_AddressTypeCode' type='PickList'></field>
	lead.OptionSet.Address1_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address1_ShippingMethodCode' type='PickList'></field>
	lead.OptionSet.Address1_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_AddressTypeCode' type='PickList'></field>
	lead.OptionSet.Address2_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_ShippingMethodCode' type='PickList'></field>
	lead.OptionSet.Address2_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='BudgetStatus' type='PickList'></field>
	lead.OptionSet.BudgetStatus = {
		///<field name='No_Committed_Budget' type='PickListValue'>No_Committed_Budget = 0</field>
		No_Committed_Budget: 0,
		///<field name='May_Buy' type='PickListValue'>May_Buy = 1</field>
		May_Buy: 1,
		///<field name='Can_Buy' type='PickListValue'>Can_Buy = 2</field>
		Can_Buy: 2,
		///<field name='Will_Buy' type='PickListValue'>Will_Buy = 3</field>
		Will_Buy: 3
	};
	///<field name='IndustryCode' type='PickList'></field>
	lead.OptionSet.IndustryCode = {
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
	///<field name='InitialCommunication' type='PickList'></field>
	lead.OptionSet.InitialCommunication = {
		///<field name='Contacted' type='PickListValue'>Contacted = 0</field>
		Contacted: 0,
		///<field name='Not_Contacted' type='PickListValue'>Not_Contacted = 1</field>
		Not_Contacted: 1
	};
	///<field name='LeadQualityCode' type='PickList'></field>
	lead.OptionSet.LeadQualityCode = {
		///<field name='Hot' type='PickListValue'>Hot = 1</field>
		Hot: 1,
		///<field name='Warm' type='PickListValue'>Warm = 2</field>
		Warm: 2,
		///<field name='Cold' type='PickListValue'>Cold = 3</field>
		Cold: 3
	};
	///<field name='LeadSourceCode' type='PickList'></field>
	lead.OptionSet.LeadSourceCode = {
		///<field name='Advertisement' type='PickListValue'>Advertisement = 1</field>
		Advertisement: 1,
		///<field name='Employee_Referral' type='PickListValue'>Employee_Referral = 2</field>
		Employee_Referral: 2,
		///<field name='External_Referral' type='PickListValue'>External_Referral = 3</field>
		External_Referral: 3,
		///<field name='Partner' type='PickListValue'>Partner = 4</field>
		Partner: 4,
		///<field name='Public_Relations' type='PickListValue'>Public_Relations = 5</field>
		Public_Relations: 5,
		///<field name='Seminar' type='PickListValue'>Seminar = 6</field>
		Seminar: 6,
		///<field name='Trade_Show' type='PickListValue'>Trade_Show = 7</field>
		Trade_Show: 7,
		///<field name='Web' type='PickListValue'>Web = 8</field>
		Web: 8,
		///<field name='Word_of_Mouth' type='PickListValue'>Word_of_Mouth = 9</field>
		Word_of_Mouth: 9,
		///<field name='Other' type='PickListValue'>Other = 10</field>
		Other: 10
	};
	///<field name='msdyn_ordertype' type='PickList'></field>
	lead.OptionSet.msdyn_ordertype = {
		///<field name='Work_based' type='PickListValue'>Work_based = 192350001</field>
		Work_based: 192350001,
		///<field name='Item_based' type='PickListValue'>Item_based = 192350000</field>
		Item_based: 192350000,
		///<field name='Service_Maintenance_Based' type='PickListValue'>Service_Maintenance_Based = 690970002</field>
		Service_Maintenance_Based: 690970002
	};
	///<field name='Need' type='PickList'></field>
	lead.OptionSet.Need = {
		///<field name='Must_have' type='PickListValue'>Must_have = 0</field>
		Must_have: 0,
		///<field name='Should_have' type='PickListValue'>Should_have = 1</field>
		Should_have: 1,
		///<field name='Good_to_have' type='PickListValue'>Good_to_have = 2</field>
		Good_to_have: 2,
		///<field name='No_need' type='PickListValue'>No_need = 3</field>
		No_need: 3
	};
	///<field name='PreferredContactMethodCode' type='PickList'></field>
	lead.OptionSet.PreferredContactMethodCode = {
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
	///<field name='PriorityCode' type='PickList'></field>
	lead.OptionSet.PriorityCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='PurchaseProcess' type='PickList'></field>
	lead.OptionSet.PurchaseProcess = {
		///<field name='Individual' type='PickListValue'>Individual = 0</field>
		Individual: 0,
		///<field name='Committee' type='PickListValue'>Committee = 1</field>
		Committee: 1,
		///<field name='Unknown' type='PickListValue'>Unknown = 2</field>
		Unknown: 2
	};
	///<field name='PurchaseTimeFrame' type='PickList'></field>
	lead.OptionSet.PurchaseTimeFrame = {
		///<field name='Immediate' type='PickListValue'>Immediate = 0</field>
		Immediate: 0,
		///<field name='This_Quarter' type='PickListValue'>This_Quarter = 1</field>
		This_Quarter: 1,
		///<field name='Next_Quarter' type='PickListValue'>Next_Quarter = 2</field>
		Next_Quarter: 2,
		///<field name='This_Year' type='PickListValue'>This_Year = 3</field>
		This_Year: 3,
		///<field name='Unknown' type='PickListValue'>Unknown = 4</field>
		Unknown: 4
	};
	///<field name='SalesStage' type='PickList'></field>
	lead.OptionSet.SalesStage = {
		///<field name='Qualify' type='PickListValue'>Qualify = 0</field>
		Qualify: 0
	};
	///<field name='SalesStageCode' type='PickList'></field>
	lead.OptionSet.SalesStageCode = {
		///<field name='_1_Prospect' type='PickListValue'>_1_Prospect = 1</field>
		_1_Prospect: 1,
		///<field name='_2_Contacting' type='PickListValue'>_2_Contacting = 100000000</field>
		_2_Contacting: 100000000,
		///<field name='_3_Interest_Confirmed' type='PickListValue'>_3_Interest_Confirmed = 100000001</field>
		_3_Interest_Confirmed: 100000001,
		///<field name='_4_Quoting' type='PickListValue'>_4_Quoting = 100000002</field>
		_4_Quoting: 100000002,
		///<field name='_5_Closing' type='PickListValue'>_5_Closing = 100000003</field>
		_5_Closing: 100000003
	};
	///<field name='StateCode' type='PickList'></field>
	lead.OptionSet.StateCode = {
		///<field name='Open' type='PickListValue'>Open = 0</field>
		Open: 0,
		///<field name='Qualified' type='PickListValue'>Qualified = 1</field>
		Qualified: 1,
		///<field name='Disqualified' type='PickListValue'>Disqualified = 2</field>
		Disqualified: 2
	};
	///<field name='StatusCode' type='PickList'></field>
	lead.OptionSet.StatusCode = {
		///<field name='New' type='PickListValue'>New = 1</field>
		New: 1,
		///<field name='Contacted' type='PickListValue'>Contacted = 2</field>
		Contacted: 2,
		///<field name='Qualified' type='PickListValue'>Qualified = 3</field>
		Qualified: 3,
		///<field name='Lost' type='PickListValue'>Lost = 4</field>
		Lost: 4,
		///<field name='Cannot_Contact' type='PickListValue'>Cannot_Contact = 5</field>
		Cannot_Contact: 5,
		///<field name='No_Longer_Interested' type='PickListValue'>No_Longer_Interested = 6</field>
		No_Longer_Interested: 6,
		///<field name='Canceled' type='PickListValue'>Canceled = 7</field>
		Canceled: 7
	};
	return lead;
};
LuckeyMonkey.LeadApi = function (entity) {
	return {
		///<field name='AccountId' type='Lookup'>ReadOnly - Edm.Guid</field>
		AccountId: intellisense.EntityValue,
		///<field name='Address1_AddressId' type='Uniqueidentifier'>Edm.Guid</field>
		Address1_AddressId: intellisense.EntityValue,
		///<field name='Address1_AddressTypeCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address1_AddressTypeCode</field>
		Address1_AddressTypeCode: intellisense.EntityValue,
		///<field name='Address1_City' type='String'>Edm.String</field>
		Address1_City: intellisense.EntityValue,
		///<field name='Address1_Composite' type='Memo'>ReadOnly - Edm.String</field>
		Address1_Composite: intellisense.EntityValue,
		///<field name='Address1_Country' type='String'>Edm.String</field>
		Address1_Country: intellisense.EntityValue,
		///<field name='Address1_County' type='String'>Edm.String</field>
		Address1_County: intellisense.EntityValue,
		///<field name='Address1_Fax' type='String'>Edm.String</field>
		Address1_Fax: intellisense.EntityValue,
		///<field name='Address1_Latitude' type='Double'>Edm.Double</field>
		Address1_Latitude: intellisense.EntityValue,
		///<field name='Address1_Line1' type='String'>Edm.String</field>
		Address1_Line1: intellisense.EntityValue,
		///<field name='Address1_Line2' type='String'>Edm.String</field>
		Address1_Line2: intellisense.EntityValue,
		///<field name='Address1_Line3' type='String'>Edm.String</field>
		Address1_Line3: intellisense.EntityValue,
		///<field name='Address1_Longitude' type='Double'>Edm.Double</field>
		Address1_Longitude: intellisense.EntityValue,
		///<field name='Address1_Name' type='String'>Edm.String</field>
		Address1_Name: intellisense.EntityValue,
		///<field name='Address1_PostalCode' type='String'>Edm.String</field>
		Address1_PostalCode: intellisense.EntityValue,
		///<field name='Address1_PostOfficeBox' type='String'>Edm.String</field>
		Address1_PostOfficeBox: intellisense.EntityValue,
		///<field name='Address1_ShippingMethodCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address1_ShippingMethodCode</field>
		Address1_ShippingMethodCode: intellisense.EntityValue,
		///<field name='Address1_StateOrProvince' type='String'>Edm.String</field>
		Address1_StateOrProvince: intellisense.EntityValue,
		///<field name='Address1_Telephone1' type='String'>Edm.String</field>
		Address1_Telephone1: intellisense.EntityValue,
		///<field name='Address1_Telephone2' type='String'>Edm.String</field>
		Address1_Telephone2: intellisense.EntityValue,
		///<field name='Address1_Telephone3' type='String'>Edm.String</field>
		Address1_Telephone3: intellisense.EntityValue,
		///<field name='Address1_UPSZone' type='String'>Edm.String</field>
		Address1_UPSZone: intellisense.EntityValue,
		///<field name='Address1_UTCOffset' type='Integer'>Edm.Int32</field>
		Address1_UTCOffset: intellisense.EntityValue,
		///<field name='Address2_AddressId' type='Uniqueidentifier'>Edm.Guid</field>
		Address2_AddressId: intellisense.EntityValue,
		///<field name='Address2_AddressTypeCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address2_AddressTypeCode</field>
		Address2_AddressTypeCode: intellisense.EntityValue,
		///<field name='Address2_City' type='String'>Edm.String</field>
		Address2_City: intellisense.EntityValue,
		///<field name='Address2_Composite' type='Memo'>ReadOnly - Edm.String</field>
		Address2_Composite: intellisense.EntityValue,
		///<field name='Address2_Country' type='String'>Edm.String</field>
		Address2_Country: intellisense.EntityValue,
		///<field name='Address2_County' type='String'>Edm.String</field>
		Address2_County: intellisense.EntityValue,
		///<field name='Address2_Fax' type='String'>Edm.String</field>
		Address2_Fax: intellisense.EntityValue,
		///<field name='Address2_Latitude' type='Double'>Edm.Double</field>
		Address2_Latitude: intellisense.EntityValue,
		///<field name='Address2_Line1' type='String'>Edm.String</field>
		Address2_Line1: intellisense.EntityValue,
		///<field name='Address2_Line2' type='String'>Edm.String</field>
		Address2_Line2: intellisense.EntityValue,
		///<field name='Address2_Line3' type='String'>Edm.String</field>
		Address2_Line3: intellisense.EntityValue,
		///<field name='Address2_Longitude' type='Double'>Edm.Double</field>
		Address2_Longitude: intellisense.EntityValue,
		///<field name='Address2_Name' type='String'>Edm.String</field>
		Address2_Name: intellisense.EntityValue,
		///<field name='Address2_PostalCode' type='String'>Edm.String</field>
		Address2_PostalCode: intellisense.EntityValue,
		///<field name='Address2_PostOfficeBox' type='String'>Edm.String</field>
		Address2_PostOfficeBox: intellisense.EntityValue,
		///<field name='Address2_ShippingMethodCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address2_ShippingMethodCode</field>
		Address2_ShippingMethodCode: intellisense.EntityValue,
		///<field name='Address2_StateOrProvince' type='String'>Edm.String</field>
		Address2_StateOrProvince: intellisense.EntityValue,
		///<field name='Address2_Telephone1' type='String'>Edm.String</field>
		Address2_Telephone1: intellisense.EntityValue,
		///<field name='Address2_Telephone2' type='String'>Edm.String</field>
		Address2_Telephone2: intellisense.EntityValue,
		///<field name='Address2_Telephone3' type='String'>Edm.String</field>
		Address2_Telephone3: intellisense.EntityValue,
		///<field name='Address2_UPSZone' type='String'>Edm.String</field>
		Address2_UPSZone: intellisense.EntityValue,
		///<field name='Address2_UTCOffset' type='Integer'>Edm.Int32</field>
		Address2_UTCOffset: intellisense.EntityValue,
		///<field name='adx_ImportStatus' type='Boolean'>Edm.Boolean</field>
		adx_ImportStatus: intellisense.EntityValue,
		///<field name='adx_LeadTypeId' type='Lookup'>Edm.Guid</field>
		adx_LeadTypeId: intellisense.EntityValue,
		///<field name='adx_LeadTypetext' type='String'>Edm.String</field>
		adx_LeadTypetext: intellisense.EntityValue,
		///<field name='adx_OpportuntiyProductsfromLead' type='Memo'>Edm.String</field>
		adx_OpportuntiyProductsfromLead: intellisense.EntityValue,
		///<field name='adx_ReferenceCode' type='String'>Edm.String</field>
		adx_ReferenceCode: intellisense.EntityValue,
		///<field name='adx_TerritoryId' type='Lookup'>Edm.Guid</field>
		adx_TerritoryId: intellisense.EntityValue,
		///<field name='BudgetAmount' type='Money'>Edm.Decimal</field>
		BudgetAmount: intellisense.EntityValue,
		///<field name='BudgetAmount_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		BudgetAmount_Base: intellisense.EntityValue,
		///<field name='BudgetStatus' type='OptionSet'>Edm.Int32 - this.OptionSet.BudgetStatus</field>
		BudgetStatus: intellisense.EntityValue,
		///<field name='CampaignId' type='Lookup'>Edm.Guid</field>
		CampaignId: intellisense.EntityValue,
		///<field name='CompanyName' type='String'>Edm.String</field>
		CompanyName: intellisense.EntityValue,
		///<field name='ConfirmInterest' type='Boolean'>Edm.Boolean</field>
		ConfirmInterest: intellisense.EntityValue,
		///<field name='ContactId' type='Lookup'>ReadOnly - Edm.Guid</field>
		ContactId: intellisense.EntityValue,
		///<field name='CreatedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedBy: intellisense.EntityValue,
		///<field name='CreatedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		CreatedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='CreatedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedOnBehalfBy: intellisense.EntityValue,
		///<field name='CustomerId' type='Lookup'>Edm.Guid</field>
		customerid_account: intellisense.EntityValue,
		///<field name='CustomerId' type='Lookup'>Edm.Guid</field>
		customerid_contact: intellisense.EntityValue,
		///<field name='cxlvhlp_chatactivityid' type='String'>Edm.String</field>
		cxlvhlp_chatactivityid: intellisense.EntityValue,
		///<field name='DecisionMaker' type='Boolean'>Edm.Boolean</field>
		DecisionMaker: intellisense.EntityValue,
		///<field name='Description' type='Memo'>Edm.String</field>
		Description: intellisense.EntityValue,
		///<field name='DoNotBulkEMail' type='Boolean'>Edm.Boolean</field>
		DoNotBulkEMail: intellisense.EntityValue,
		///<field name='DoNotEMail' type='Boolean'>Edm.Boolean</field>
		DoNotEMail: intellisense.EntityValue,
		///<field name='DoNotFax' type='Boolean'>Edm.Boolean</field>
		DoNotFax: intellisense.EntityValue,
		///<field name='DoNotPhone' type='Boolean'>Edm.Boolean</field>
		DoNotPhone: intellisense.EntityValue,
		///<field name='DoNotPostalMail' type='Boolean'>Edm.Boolean</field>
		DoNotPostalMail: intellisense.EntityValue,
		///<field name='DoNotSendMM' type='Boolean'>Edm.Boolean</field>
		DoNotSendMM: intellisense.EntityValue,
		///<field name='EMailAddress1' type='String'>Edm.String</field>
		EMailAddress1: intellisense.EntityValue,
		///<field name='EMailAddress2' type='String'>Edm.String</field>
		EMailAddress2: intellisense.EntityValue,
		///<field name='EMailAddress3' type='String'>Edm.String</field>
		EMailAddress3: intellisense.EntityValue,
		///<field name='EntityImageId' type='Uniqueidentifier'>ReadOnly - Edm.Guid</field>
		EntityImageId: intellisense.EntityValue,
		///<field name='EstimatedAmount' type='Money'>Edm.Decimal</field>
		EstimatedAmount: intellisense.EntityValue,
		///<field name='EstimatedAmount_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		EstimatedAmount_Base: intellisense.EntityValue,
		///<field name='EstimatedCloseDate_DateOnly' type='DateOnly'>Edm.Date</field>
		EstimatedCloseDate_DateOnly: intellisense.EntityValue,
		///<field name='EstimatedValue' type='Double'>Edm.Double</field>
		EstimatedValue: intellisense.EntityValue,
		///<field name='EvaluateFit' type='Boolean'>Edm.Boolean</field>
		EvaluateFit: intellisense.EntityValue,
		///<field name='ExchangeRate' type='Decimal'>ReadOnly - Edm.Decimal</field>
		ExchangeRate: intellisense.EntityValue,
		///<field name='Fax' type='String'>Edm.String</field>
		Fax: intellisense.EntityValue,
		///<field name='FirstName' type='String'>Edm.String</field>
		FirstName: intellisense.EntityValue,
		///<field name='FollowEmail' type='Boolean'>Edm.Boolean</field>
		FollowEmail: intellisense.EntityValue,
		///<field name='FullName' type='String'>ReadOnly - Edm.String</field>
		FullName: intellisense.EntityValue,
		///<field name='ImportSequenceNumber' type='Integer'>Edm.Int32</field>
		ImportSequenceNumber: intellisense.EntityValue,
		///<field name='IndustryCode' type='OptionSet'>Edm.Int32 - this.OptionSet.IndustryCode</field>
		IndustryCode: intellisense.EntityValue,
		///<field name='InitialCommunication' type='OptionSet'>Edm.Int32 - this.OptionSet.InitialCommunication</field>
		InitialCommunication: intellisense.EntityValue,
		///<field name='IsAutoCreate' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsAutoCreate: intellisense.EntityValue,
		///<field name='IsPrivate' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsPrivate: intellisense.EntityValue,
		///<field name='JobTitle' type='String'>Edm.String</field>
		JobTitle: intellisense.EntityValue,
		///<field name='LastName' type='String'>Edm.String</field>
		LastName: intellisense.EntityValue,
		///<field name='LastOnHoldTime_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		LastOnHoldTime_UtcDateAndTime: intellisense.EntityValue,
		///<field name='LastUsedInCampaign_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		LastUsedInCampaign_UtcDateOnly: intellisense.EntityValue,
		///<field name='LeadId' type='Uniqueidentifier'>Edm.Guid</field>
		LeadId: intellisense.EntityValue,
		///<field name='LeadQualityCode' type='OptionSet'>Edm.Int32 - this.OptionSet.LeadQualityCode</field>
		LeadQualityCode: intellisense.EntityValue,
		///<field name='LeadSourceCode' type='OptionSet'>Edm.Int32 - this.OptionSet.LeadSourceCode</field>
		LeadSourceCode: intellisense.EntityValue,
		///<field name='li_CompanyId' type='Integer'>Edm.Int32</field>
		li_CompanyId: intellisense.EntityValue,
		///<field name='li_MemberToken' type='String'>Edm.String</field>
		li_MemberToken: intellisense.EntityValue,
		///<field name='MasterId' type='Lookup'>ReadOnly - Edm.Guid</field>
		MasterId: intellisense.EntityValue,
		///<field name='Merged' type='Boolean'>ReadOnly - Edm.Boolean</field>
		Merged: intellisense.EntityValue,
		///<field name='MiddleName' type='String'>Edm.String</field>
		MiddleName: intellisense.EntityValue,
		///<field name='MobilePhone' type='String'>Edm.String</field>
		MobilePhone: intellisense.EntityValue,
		///<field name='ModifiedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedBy: intellisense.EntityValue,
		///<field name='ModifiedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		ModifiedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='ModifiedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedOnBehalfBy: intellisense.EntityValue,
		///<field name='msdyn_gdproptout' type='Boolean'>Edm.Boolean</field>
		msdyn_gdproptout: intellisense.EntityValue,
		///<field name='msdyn_ordertype' type='OptionSet'>Edm.Int32 - this.OptionSet.msdyn_ordertype</field>
		msdyn_ordertype: intellisense.EntityValue,
		///<field name='Need' type='OptionSet'>Edm.Int32 - this.OptionSet.Need</field>
		Need: intellisense.EntityValue,
		///<field name='new_df_contactfieldsfull' type='Memo'>Edm.String</field>
		new_df_contactfieldsfull: intellisense.EntityValue,
		///<field name='new_df_datelastsynced_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		new_df_datelastsynced_UtcDateOnly: intellisense.EntityValue,
		///<field name='new_df_leadscore' type='Integer'>Edm.Int32</field>
		new_df_leadscore: intellisense.EntityValue,
		///<field name='new_df_validationletter' type='String'>Edm.String</field>
		new_df_validationletter: intellisense.EntityValue,
		///<field name='new_df_validationtype' type='String'>Edm.String</field>
		new_df_validationtype: intellisense.EntityValue,
		///<field name='new_versium_import' type='Memo'>Edm.String</field>
		new_versium_import: intellisense.EntityValue,
		///<field name='NumberOfEmployees' type='Integer'>Edm.Int32</field>
		NumberOfEmployees: intellisense.EntityValue,
		///<field name='OnHoldTime' type='Integer'>ReadOnly - Edm.Int32</field>
		OnHoldTime: intellisense.EntityValue,
		///<field name='OriginatingCaseId' type='Lookup'>Edm.Guid</field>
		OriginatingCaseId: intellisense.EntityValue,
		///<field name='OverriddenCreatedOn_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		OverriddenCreatedOn_UtcDateOnly: intellisense.EntityValue,
		///<field name='OwnerId_systemuser' type='Lookup'></field>
		OwnerId_systemuser: intellisense.EntityValue,
		///<field name='OwnerId_team' type='Lookup'></field>
		OwnerId_team: intellisense.EntityValue,
		///<field name='OwningBusinessUnit' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningBusinessUnit: intellisense.EntityValue,
		///<field name='OwningTeam' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningTeam: intellisense.EntityValue,
		///<field name='OwningUser' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningUser: intellisense.EntityValue,
		///<field name='Pager' type='String'>Edm.String</field>
		Pager: intellisense.EntityValue,
		///<field name='ParentAccountId' type='Lookup'>Edm.Guid</field>
		ParentAccountId: intellisense.EntityValue,
		///<field name='ParentContactId' type='Lookup'>Edm.Guid</field>
		ParentContactId: intellisense.EntityValue,
		///<field name='ParticipatesInWorkflow' type='Boolean'>Edm.Boolean</field>
		ParticipatesInWorkflow: intellisense.EntityValue,
		///<field name='paz_Field1' type='String'>Edm.String</field>
		paz_Field1: intellisense.EntityValue,
		///<field name='paz_Field2' type='String'>Edm.String</field>
		paz_Field2: intellisense.EntityValue,
		///<field name='paz_Field3' type='String'>Edm.String</field>
		paz_Field3: intellisense.EntityValue,
		///<field name='PreferredContactMethodCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PreferredContactMethodCode</field>
		PreferredContactMethodCode: intellisense.EntityValue,
		///<field name='PriorityCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PriorityCode</field>
		PriorityCode: intellisense.EntityValue,
		///<field name='ProcessId' type='Uniqueidentifier'>Edm.Guid</field>
		ProcessId: intellisense.EntityValue,
		///<field name='PurchaseProcess' type='OptionSet'>Edm.Int32 - this.OptionSet.PurchaseProcess</field>
		PurchaseProcess: intellisense.EntityValue,
		///<field name='PurchaseTimeFrame' type='OptionSet'>Edm.Int32 - this.OptionSet.PurchaseTimeFrame</field>
		PurchaseTimeFrame: intellisense.EntityValue,
		///<field name='QualificationComments' type='Memo'>Edm.String</field>
		QualificationComments: intellisense.EntityValue,
		///<field name='QualifyingOpportunityId' type='Lookup'>Edm.Guid</field>
		QualifyingOpportunityId: intellisense.EntityValue,
		///<field name='RelatedObjectId' type='Lookup'>Edm.Guid</field>
		RelatedObjectId: intellisense.EntityValue,
		///<field name='Revenue' type='Money'>Edm.Decimal</field>
		Revenue: intellisense.EntityValue,
		///<field name='Revenue_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		Revenue_Base: intellisense.EntityValue,
		///<field name='SalesStage' type='OptionSet'>Edm.Int32 - this.OptionSet.SalesStage</field>
		SalesStage: intellisense.EntityValue,
		///<field name='SalesStageCode' type='OptionSet'>Edm.Int32 - this.OptionSet.SalesStageCode</field>
		SalesStageCode: intellisense.EntityValue,
		///<field name='Salutation' type='String'>Edm.String</field>
		Salutation: intellisense.EntityValue,
		///<field name='ScheduleFollowUp_Prospect_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		ScheduleFollowUp_Prospect_UtcDateOnly: intellisense.EntityValue,
		///<field name='ScheduleFollowUp_Qualify_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		ScheduleFollowUp_Qualify_UtcDateOnly: intellisense.EntityValue,
		///<field name='SIC' type='String'>Edm.String</field>
		SIC: intellisense.EntityValue,
		///<field name='SLAId' type='Lookup'>Edm.Guid</field>
		SLAId: intellisense.EntityValue,
		///<field name='SLAInvokedId' type='Lookup'>ReadOnly - Edm.Guid</field>
		SLAInvokedId: intellisense.EntityValue,
		///<field name='StageId' type='Uniqueidentifier'>Edm.Guid</field>
		StageId: intellisense.EntityValue,
		///<field name='StateCode' type='OptionSet'>Edm.Int32 - this.OptionSet.StateCode</field>
		StateCode: intellisense.EntityValue,
		///<field name='StatusCode' type='OptionSet'>Edm.Int32 - this.OptionSet.StatusCode</field>
		StatusCode: intellisense.EntityValue,
		///<field name='Subject' type='String'>Edm.String</field>
		Subject: intellisense.EntityValue,
		///<field name='TeamsFollowed' type='Integer'>Edm.Int32</field>
		TeamsFollowed: intellisense.EntityValue,
		///<field name='Telephone1' type='String'>Edm.String</field>
		Telephone1: intellisense.EntityValue,
		///<field name='Telephone2' type='String'>Edm.String</field>
		Telephone2: intellisense.EntityValue,
		///<field name='Telephone3' type='String'>Edm.String</field>
		Telephone3: intellisense.EntityValue,
		///<field name='TimeSpentByMeOnEmailAndMeetings' type='String'>ReadOnly - Edm.String</field>
		TimeSpentByMeOnEmailAndMeetings: intellisense.EntityValue,
		///<field name='TimeZoneRuleVersionNumber' type='Integer'>Edm.Int32</field>
		TimeZoneRuleVersionNumber: intellisense.EntityValue,
		///<field name='TransactionCurrencyId' type='Lookup'>Edm.Guid</field>
		TransactionCurrencyId: intellisense.EntityValue,
		///<field name='TraversedPath' type='String'>Edm.String</field>
		TraversedPath: intellisense.EntityValue,
		///<field name='UTCConversionTimeZoneCode' type='Integer'>Edm.Int32</field>
		UTCConversionTimeZoneCode: intellisense.EntityValue,
		///<field name='VersionNumber' type='BigInt'>ReadOnly - </field>
		VersionNumber: intellisense.EntityValue,
		///<field name='WebSiteUrl' type='String'>Edm.String</field>
		WebSiteUrl: intellisense.EntityValue,
		///<field name='YomiCompanyName' type='String'>Edm.String</field>
		YomiCompanyName: intellisense.EntityValue,
		///<field name='YomiFirstName' type='String'>Edm.String</field>
		YomiFirstName: intellisense.EntityValue,
		///<field name='YomiFullName' type='String'>ReadOnly - Edm.String</field>
		YomiFullName: intellisense.EntityValue,
		///<field name='YomiLastName' type='String'>Edm.String</field>
		YomiLastName: intellisense.EntityValue,
		///<field name='YomiMiddleName' type='String'>Edm.String</field>
		YomiMiddleName: intellisense.EntityValue,
		///<field name='Entity' type='Object'></field>
		Entity: null,
		///<field name='EntityName' type='String'></field>
		EntityName: null,
		///<field name='EntityCollectionName' type='String'></field>
		EntityCollectionName: null,
		///<field name='OptionSet' type='Object'></field>
		OptionSet: {
			///<field name='Address1_AddressTypeCode' type='PickList'></field>
			Address1_AddressTypeCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='Address1_ShippingMethodCode' type='PickList'></field>
			Address1_ShippingMethodCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='Address2_AddressTypeCode' type='PickList'></field>
			Address2_AddressTypeCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='Address2_ShippingMethodCode' type='PickList'></field>
			Address2_ShippingMethodCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='BudgetStatus' type='PickList'></field>
			BudgetStatus: {
				///<field name='No_Committed_Budget' type='PickListValue'>No_Committed_Budget = 0</field>
				No_Committed_Budget: 0,
				///<field name='May_Buy' type='PickListValue'>May_Buy = 1</field>
				May_Buy: 1,
				///<field name='Can_Buy' type='PickListValue'>Can_Buy = 2</field>
				Can_Buy: 2,
				///<field name='Will_Buy' type='PickListValue'>Will_Buy = 3</field>
				Will_Buy: 3
			},
			///<field name='IndustryCode' type='PickList'></field>
			IndustryCode: {
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
			},
			///<field name='InitialCommunication' type='PickList'></field>
			InitialCommunication: {
				///<field name='Contacted' type='PickListValue'>Contacted = 0</field>
				Contacted: 0,
				///<field name='Not_Contacted' type='PickListValue'>Not_Contacted = 1</field>
				Not_Contacted: 1
			},
			///<field name='LeadQualityCode' type='PickList'></field>
			LeadQualityCode: {
				///<field name='Hot' type='PickListValue'>Hot = 1</field>
				Hot: 1,
				///<field name='Warm' type='PickListValue'>Warm = 2</field>
				Warm: 2,
				///<field name='Cold' type='PickListValue'>Cold = 3</field>
				Cold: 3
			},
			///<field name='LeadSourceCode' type='PickList'></field>
			LeadSourceCode: {
				///<field name='Advertisement' type='PickListValue'>Advertisement = 1</field>
				Advertisement: 1,
				///<field name='Employee_Referral' type='PickListValue'>Employee_Referral = 2</field>
				Employee_Referral: 2,
				///<field name='External_Referral' type='PickListValue'>External_Referral = 3</field>
				External_Referral: 3,
				///<field name='Partner' type='PickListValue'>Partner = 4</field>
				Partner: 4,
				///<field name='Public_Relations' type='PickListValue'>Public_Relations = 5</field>
				Public_Relations: 5,
				///<field name='Seminar' type='PickListValue'>Seminar = 6</field>
				Seminar: 6,
				///<field name='Trade_Show' type='PickListValue'>Trade_Show = 7</field>
				Trade_Show: 7,
				///<field name='Web' type='PickListValue'>Web = 8</field>
				Web: 8,
				///<field name='Word_of_Mouth' type='PickListValue'>Word_of_Mouth = 9</field>
				Word_of_Mouth: 9,
				///<field name='Other' type='PickListValue'>Other = 10</field>
				Other: 10
			},
			///<field name='msdyn_ordertype' type='PickList'></field>
			msdyn_ordertype: {
				///<field name='Work_based' type='PickListValue'>Work_based = 192350001</field>
				Work_based: 192350001,
				///<field name='Item_based' type='PickListValue'>Item_based = 192350000</field>
				Item_based: 192350000,
				///<field name='Service_Maintenance_Based' type='PickListValue'>Service_Maintenance_Based = 690970002</field>
				Service_Maintenance_Based: 690970002
			},
			///<field name='Need' type='PickList'></field>
			Need: {
				///<field name='Must_have' type='PickListValue'>Must_have = 0</field>
				Must_have: 0,
				///<field name='Should_have' type='PickListValue'>Should_have = 1</field>
				Should_have: 1,
				///<field name='Good_to_have' type='PickListValue'>Good_to_have = 2</field>
				Good_to_have: 2,
				///<field name='No_need' type='PickListValue'>No_need = 3</field>
				No_need: 3
			},
			///<field name='PreferredContactMethodCode' type='PickList'></field>
			PreferredContactMethodCode: {
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
			},
			///<field name='PriorityCode' type='PickList'></field>
			PriorityCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='PurchaseProcess' type='PickList'></field>
			PurchaseProcess: {
				///<field name='Individual' type='PickListValue'>Individual = 0</field>
				Individual: 0,
				///<field name='Committee' type='PickListValue'>Committee = 1</field>
				Committee: 1,
				///<field name='Unknown' type='PickListValue'>Unknown = 2</field>
				Unknown: 2
			},
			///<field name='PurchaseTimeFrame' type='PickList'></field>
			PurchaseTimeFrame: {
				///<field name='Immediate' type='PickListValue'>Immediate = 0</field>
				Immediate: 0,
				///<field name='This_Quarter' type='PickListValue'>This_Quarter = 1</field>
				This_Quarter: 1,
				///<field name='Next_Quarter' type='PickListValue'>Next_Quarter = 2</field>
				Next_Quarter: 2,
				///<field name='This_Year' type='PickListValue'>This_Year = 3</field>
				This_Year: 3,
				///<field name='Unknown' type='PickListValue'>Unknown = 4</field>
				Unknown: 4
			},
			///<field name='SalesStage' type='PickList'></field>
			SalesStage: {
				///<field name='Qualify' type='PickListValue'>Qualify = 0</field>
				Qualify: 0
			},
			///<field name='SalesStageCode' type='PickList'></field>
			SalesStageCode: {
				///<field name='_1_Prospect' type='PickListValue'>_1_Prospect = 1</field>
				_1_Prospect: 1,
				///<field name='_2_Contacting' type='PickListValue'>_2_Contacting = 100000000</field>
				_2_Contacting: 100000000,
				///<field name='_3_Interest_Confirmed' type='PickListValue'>_3_Interest_Confirmed = 100000001</field>
				_3_Interest_Confirmed: 100000001,
				///<field name='_4_Quoting' type='PickListValue'>_4_Quoting = 100000002</field>
				_4_Quoting: 100000002,
				///<field name='_5_Closing' type='PickListValue'>_5_Closing = 100000003</field>
				_5_Closing: 100000003
			},
			///<field name='StateCode' type='PickList'></field>
			StateCode: {
				///<field name='Open' type='PickListValue'>Open = 0</field>
				Open: 0,
				///<field name='Qualified' type='PickListValue'>Qualified = 1</field>
				Qualified: 1,
				///<field name='Disqualified' type='PickListValue'>Disqualified = 2</field>
				Disqualified: 2
			},
			///<field name='StatusCode' type='PickList'></field>
			StatusCode: {
				///<field name='New' type='PickListValue'>New = 1</field>
				New: 1,
				///<field name='Contacted' type='PickListValue'>Contacted = 2</field>
				Contacted: 2,
				///<field name='Qualified' type='PickListValue'>Qualified = 3</field>
				Qualified: 3,
				///<field name='Lost' type='PickListValue'>Lost = 4</field>
				Lost: 4,
				///<field name='Cannot_Contact' type='PickListValue'>Cannot_Contact = 5</field>
				Cannot_Contact: 5,
				///<field name='No_Longer_Interested' type='PickListValue'>No_Longer_Interested = 6</field>
				No_Longer_Interested: 6,
				///<field name='Canceled' type='PickListValue'>Canceled = 7</field>
				Canceled: 7
			}
		}
	};
};
//{'JsForm':['Lead'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':false}
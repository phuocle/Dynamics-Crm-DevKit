///<reference path='devkit.intellisense.js' />
WebResource.FormLead = function (executionContext, defaultWebResourceName) {
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
			Summary_section_6: intellisense.FormSection,
			RELATED_TAB: intellisense.FormSection
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
	var body = {
		///<field name='Tab' type='Object'>A tab is a group of sections on a page</field>
		Tab: tab,
		///<field name='Address1_Composite' type='String'></field>
		Address1_Composite: intellisense.FieldString,
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
		///<field name='FollowEmail' type='Boolean'></field>
		FollowEmail: intellisense.FieldBoolean,
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
	var process = intellisense.Process;
	var _LeadtoOpportunitySalesProcess = {
		///<field name='BudgetAmount' type='Money'></field>
		BudgetAmount: intellisense.FieldNumber,
		///<field name='DecisionMaker' type='Boolean'></field>
		DecisionMaker: intellisense.FieldBoolean,
		///<field name='Description' type='String'></field>
		Description: intellisense.FieldString,
		///<field name='ParentAccountId' type='Lookup'></field>
		ParentAccountId: intellisense.FieldLookup,
		///<field name='ParentContactId' type='Lookup'></field>
		ParentContactId: intellisense.FieldLookup,
		///<field name='PurchaseProcess' type='OptionSet'></field>
		PurchaseProcess: intellisense.FieldOptionSet,
		///<field name='PurchaseTimeFrame' type='OptionSet'></field>
		PurchaseTimeFrame: intellisense.FieldOptionSet
	}
	process.LeadtoOpportunitySalesProcess = _LeadtoOpportunitySalesProcess;
	lead.Process = process;
	var quickForm = {

	};
	lead.QuickForm = quickForm;
	var navigation = {
		navActivities: intellisense.FormNavigation,
		navCampaignsInSFA: intellisense.FormNavigation,
		navConnections: intellisense.FormNavigation,
		navDocument: intellisense.FormNavigation,
		navAsyncOperations: intellisense.FormNavigation,
		navAudit: intellisense.FormNavigation,
		navProcessSessions: intellisense.FormNavigation,
		navLeadCompetitor: intellisense.FormNavigation
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
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
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
//{'JsForm':['Lead'],'JsWebApi':false,'IsDebugForm':false,'IsDebugWebApi':false}
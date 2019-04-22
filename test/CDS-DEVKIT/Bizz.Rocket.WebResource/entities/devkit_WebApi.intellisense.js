///<reference path='devkit.intellisense.js' />
Rocket.FormWebApi = function (executionContext, defaultWebResourceName) {
	var devkit_webapi = intellisense.Form;
	devkit_webapi.Utility = intellisense.Utility;
	var tab = {};
	tab.tab_3 = {
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
			tab_3_section_1: intellisense.FormSection,
			tab_3_section_2: intellisense.FormSection
		}
	};
	tab.tab_OPTIONSET = {
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
			tab_OPTIONSET_section_SINGLE: intellisense.FormSection,
			tab_OPTIONSET_section_MULTI_OPTIONSET: intellisense.FormSection,
			tab_OPTIONSEST_section_STATUS: intellisense.FormSection,
			tab_OPTIONSET_section_STATE: intellisense.FormSection
		}
	};
	tab.tab_ADMINISTRATOR = {
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
			tab_ADMINISTRATOR_section_CREATED: intellisense.FormSection,
			tab_ADMINISTRATOR_section_HIDDEN_1: intellisense.FormSection,
			tab_ADMINISTRATOR_section_MODIFIED: intellisense.FormSection
		}
	};
	var body = {
		///<field name='Tab' type='Object'>A tab is a group of sections on a page</field>
		Tab: tab,
		///<field name='CreatedBy' type='Lookup'></field>
		CreatedBy: intellisense.FieldLookup,
		///<field name='CreatedOn' type='DateTime'></field>
		CreatedOn: intellisense.FieldDateTime,
		///<field name='devkit_CalculatedSingleOptionSetCalculated' type='OptionSet'></field>
		devkit_CalculatedSingleOptionSetCalculated: intellisense.FieldOptionSet,
		///<field name='devkit_Name' type='String'></field>
		devkit_Name: intellisense.FieldString,
		///<field name='devkit_SingleOptionSetCode' type='OptionSet'></field>
		devkit_SingleOptionSetCode: intellisense.FieldOptionSet,
		///<field name='ModifiedBy' type='Lookup'></field>
		ModifiedBy: intellisense.FieldLookup,
		///<field name='ModifiedOn' type='DateTime'></field>
		ModifiedOn: intellisense.FieldDateTime,
		///<field name='OwnerId' type='Lookup'></field>
		OwnerId: intellisense.FieldLookup,
		///<field name='statecode' type='OptionSet'></field>
		statecode: intellisense.FieldOptionSet,
		///<field name='statuscode' type='OptionSet'></field>
		statuscode: intellisense.FieldOptionSet
	};
	devkit_webapi.Body = body;
	var header = {

	};
	devkit_webapi.Header = header;
	var footer = {

	};
	devkit_webapi.Footer = footer;
	var quickForm = {

	};
	devkit_webapi.QuickForm = quickForm;
	var navigation = {

	};
	devkit_webapi.Navigation = navigation;
	devkit_webapi.OptionSet = {};
	///<field name='devkit_CalculatedSingleOptionSetCalculated' type='PickList'></field>
	devkit_webapi.OptionSet.devkit_CalculatedSingleOptionSetCalculated = {
		///<field name='Crm_4' type='PickListValue'>Crm_4 = 100000000</field>
		Crm_4: 100000000,
		///<field name='Crm_2011' type='PickListValue'>Crm_2011 = 100000001</field>
		Crm_2011: 100000001,
		///<field name='Crm_2013' type='PickListValue'>Crm_2013 = 100000002</field>
		Crm_2013: 100000002,
		///<field name='Crm_2015' type='PickListValue'>Crm_2015 = 100000003</field>
		Crm_2015: 100000003,
		///<field name='Crm_2016' type='PickListValue'>Crm_2016 = 100000004</field>
		Crm_2016: 100000004,
		///<field name='Dynamics_365' type='PickListValue'>Dynamics_365 = 100000005</field>
		Dynamics_365: 100000005
	};
	///<field name='devkit_SingleOptionSetCode' type='PickList'></field>
	devkit_webapi.OptionSet.devkit_SingleOptionSetCode = {
		///<field name='Crm_4' type='PickListValue'>Crm_4 = 100000000</field>
		Crm_4: 100000000,
		///<field name='Crm_2011' type='PickListValue'>Crm_2011 = 100000001</field>
		Crm_2011: 100000001,
		///<field name='Crm_2013' type='PickListValue'>Crm_2013 = 100000002</field>
		Crm_2013: 100000002,
		///<field name='Crm_2015' type='PickListValue'>Crm_2015 = 100000003</field>
		Crm_2015: 100000003,
		///<field name='Crm_2016' type='PickListValue'>Crm_2016 = 100000004</field>
		Crm_2016: 100000004,
		///<field name='Dynamics_365' type='PickListValue'>Dynamics_365 = 100000005</field>
		Dynamics_365: 100000005
	};
	///<field name='statecode' type='PickList'></field>
	devkit_webapi.OptionSet.statecode = {
		///<field name='Active' type='PickListValue'>Active = 0</field>
		Active: 0,
		///<field name='Inactive' type='PickListValue'>Inactive = 1</field>
		Inactive: 1
	};
	///<field name='statuscode' type='PickList'></field>
	devkit_webapi.OptionSet.statuscode = {
		///<field name='Active' type='PickListValue'>Active = 1</field>
		Active: 1,
		///<field name='Inactive' type='PickListValue'>Inactive = 2</field>
		Inactive: 2
	};
	return devkit_webapi;
};
Rocket.devkit_WebApiApi = function (entity) {
	return {
		///<field name='CreatedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedBy: intellisense.EntityValue,
		///<field name='CreatedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		CreatedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='CreatedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedOnBehalfBy: intellisense.EntityValue,
		///<field name='devkit_CalculatedSingleOptionSetCalculated' type='OptionSet'>ReadOnly - Edm.Int32 - this.OptionSet.devkit_CalculatedSingleOptionSetCalculated</field>
		devkit_CalculatedSingleOptionSetCalculated: intellisense.EntityValue,
		///<field name='devkit_Name' type='String'>Edm.String</field>
		devkit_Name: intellisense.EntityValue,
		///<field name='devkit_SingleOptionSetCode' type='OptionSet'>Edm.Int32 - this.OptionSet.devkit_SingleOptionSetCode</field>
		devkit_SingleOptionSetCode: intellisense.EntityValue,
		///<field name='devkit_WebApiId' type='Uniqueidentifier'>Edm.Guid</field>
		devkit_WebApiId: intellisense.EntityValue,
		///<field name='ImportSequenceNumber' type='Integer'>Edm.Int32</field>
		ImportSequenceNumber: intellisense.EntityValue,
		///<field name='ModifiedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedBy: intellisense.EntityValue,
		///<field name='ModifiedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		ModifiedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='ModifiedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedOnBehalfBy: intellisense.EntityValue,
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
		///<field name='statecode' type='OptionSet'>Edm.Int32 - this.OptionSet.statecode</field>
		statecode: intellisense.EntityValue,
		///<field name='statuscode' type='OptionSet'>Edm.Int32 - this.OptionSet.statuscode</field>
		statuscode: intellisense.EntityValue,
		///<field name='TimeZoneRuleVersionNumber' type='Integer'>Edm.Int32</field>
		TimeZoneRuleVersionNumber: intellisense.EntityValue,
		///<field name='UTCConversionTimeZoneCode' type='Integer'>Edm.Int32</field>
		UTCConversionTimeZoneCode: intellisense.EntityValue,
		///<field name='VersionNumber' type='BigInt'>ReadOnly - </field>
		VersionNumber: intellisense.EntityValue,
		///<field name='Entity' type='Object'></field>
		Entity: null,
		///<field name='EntityName' type='String'></field>
		EntityName: null,
		///<field name='EntityCollectionName' type='String'></field>
		EntityCollectionName: null,
		///<field name='OptionSet' type='Object'></field>
		OptionSet: {
			///<field name='devkit_CalculatedSingleOptionSetCalculated' type='PickList'></field>
			devkit_CalculatedSingleOptionSetCalculated: {
				///<field name='Crm_4' type='PickListValue'>Crm_4 = 100000000</field>
				Crm_4: 100000000,
				///<field name='Crm_2011' type='PickListValue'>Crm_2011 = 100000001</field>
				Crm_2011: 100000001,
				///<field name='Crm_2013' type='PickListValue'>Crm_2013 = 100000002</field>
				Crm_2013: 100000002,
				///<field name='Crm_2015' type='PickListValue'>Crm_2015 = 100000003</field>
				Crm_2015: 100000003,
				///<field name='Crm_2016' type='PickListValue'>Crm_2016 = 100000004</field>
				Crm_2016: 100000004,
				///<field name='Dynamics_365' type='PickListValue'>Dynamics_365 = 100000005</field>
				Dynamics_365: 100000005
			},
			///<field name='devkit_SingleOptionSetCode' type='PickList'></field>
			devkit_SingleOptionSetCode: {
				///<field name='Crm_4' type='PickListValue'>Crm_4 = 100000000</field>
				Crm_4: 100000000,
				///<field name='Crm_2011' type='PickListValue'>Crm_2011 = 100000001</field>
				Crm_2011: 100000001,
				///<field name='Crm_2013' type='PickListValue'>Crm_2013 = 100000002</field>
				Crm_2013: 100000002,
				///<field name='Crm_2015' type='PickListValue'>Crm_2015 = 100000003</field>
				Crm_2015: 100000003,
				///<field name='Crm_2016' type='PickListValue'>Crm_2016 = 100000004</field>
				Crm_2016: 100000004,
				///<field name='Dynamics_365' type='PickListValue'>Dynamics_365 = 100000005</field>
				Dynamics_365: 100000005
			},
			///<field name='statecode' type='PickList'></field>
			statecode: {
				///<field name='Active' type='PickListValue'>Active = 0</field>
				Active: 0,
				///<field name='Inactive' type='PickListValue'>Inactive = 1</field>
				Inactive: 1
			},
			///<field name='statuscode' type='PickList'></field>
			statuscode: {
				///<field name='Active' type='PickListValue'>Active = 1</field>
				Active: 1,
				///<field name='Inactive' type='PickListValue'>Inactive = 2</field>
				Inactive: 2
			}
		}
	};
};
//{'JsForm':['WebApi'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
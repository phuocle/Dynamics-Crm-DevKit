'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormContact_AI_for_Sales = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ActionCards: {},
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_ShippingMethodCode: {},
			Anniversary: {},
			BirthDate: {},
			CadenceWidgetControl: {},
			contactopportunitiesgrid: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FollowEmail: {},
			FullName: {},
			GenderCode: {},
			JobTitle: {},
			LastUsedInCampaign: {},
			mapcontrol: {},
			MobilePhone: {},
			notescontrol: {},
			OriginatingLeadId: {},
			ParentCustomerId: {},
			ParentCustomerId1: {},
			ParentCustomerId2: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode1: {},
			SpousesName: {},
			TalkingPoints: {},
			Telephone1: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS_TAB: {
				Section: {
					billing_information: {},
					CONTACT_PREFERENCES: {},
					marketing_information: {},
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					shipping_information: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					CONTACT_INFORMATION: {},
					CUSTOMER_DETAILS_TAB: {},
					MapSection: {},
					SOCIAL_PANE_TAB: {},
					Summary_CadenceWidget: {},
					Summary_section_6: {},
					TalkingPoints_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			contactopportunitiesgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navAddresses: {},
			navAsyncOperations: {},
			navInvoices: {},
			navOrders: {},
			navProcessSessions: {},
			navQuotes: {},
			navRelationships: {},
			navSubConts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ActionCards: {},
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_Latitude: {},
			Address1_Line1: {},
			Address1_Longitude: {},
			Address1_ShippingMethodCode: {},
			Anniversary: {},
			BirthDate: {},
			BusinessCard: {},
			contactcasessgrid: {},
			contactopportunitiesgrid: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DocumentsSubGrid: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FollowEmail: {},
			FullName: {},
			GenderCode: {},
			JobTitle: {},
			LastUsedInCampaign: {},
			mapcontrol: {},
			MobilePhone: {},
			msdyusd_CurrentProfile: {},
			msdyusd_Facebook: {},
			msdyusd_Twitter: {},
			notescontrol: {},
			OriginatingLeadId: {},
			ParentCustomerId: {},
			ParentCustomerId1: {},
			ParentCustomerId2: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode1: {},
			SpousesName: {},
			subgrid_Entitlement: {},
			TalkingPoints: {},
			Telephone1: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS_TAB: {
				Section: {
					billing_information: {},
					CONTACT_PREFERENCES: {},
					marketing_information: {},
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					shipping_information: {}
				}
			},
			documents_sharepoint: {
				Section: {
					documents_sharepoint_section: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					BusinessCard: {},
					CONTACT_INFORMATION: {},
					CUSTOMER_DETAILS_TAB: {},
					MapSection: {},
					SOCIAL_PANE_TAB: {},
					Summary_section_6: {},
					SUMMARY_TAB_section_6: {},
					TalkingPoints_section: {}
				}
			},
			urstab: {
				Section: {
					tab_3_section_2: {},
					tab_3_section_3: {},
					urstab_section_general: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			contactcasessgrid: {},
			contactopportunitiesgrid: {},
			DocumentsSubGrid: {},
			subgrid_Entitlement: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_contact_bookableresource_ContactId: {},
			nav_msdyn_contact_msdyn_purchaseorder_VendorSalesPerson: {},
			nav_msdyn_contact_msdyn_rma_RequestedByContact: {},
			nav_msdyn_contact_msdyn_rtv_VendorContact: {},
			nav_msdyn_contact_msdyn_workorder_ReportedByContact: {},
			navAddresses: {},
			navAsyncOperations: {},
			navInvoices: {},
			navOrders: {},
			navProcessSessions: {},
			navQuotes: {},
			navRelationships: {},
			navSubConts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_Mobile = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Address1_Composite: {},
			Address1_Line1: {},
			CONTACTS: {},
			EMailAddress1: {},
			Fax: {},
			FullName: {},
			INVOICES: {},
			JobTitle: {},
			MobilePhone: {},
			notescontrol: {},
			ORDERS: {},
			OwnerId: {},
			ParentCustomerId: {},
			PreferredContactMethodCode: {},
			QUOTES: {},
			Telephone1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_address: {
				Section: {
					fstab_address_section_address: {},
					tab_2_section_2: {},
					tab_2_section_3: {}
				}
			},
			fstab_other: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_2: {},
					tab_4_section_3: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					fstab_sub_grids_section: {},
					tab_3_section_2: {},
					tab_3_section_3: {}
				}
			},
			fstab_summary: {
				Section: {
					fstab_summary_section_contact_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var grid = {
			CONTACTS: {},
			INVOICES: {},
			ORDERS: {},
			QUOTES: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_contact_msdyn_rma_RequestedByContact: {},
			nav_msdyn_contact_msdyn_rtv_VendorContact: {},
			nav_msdyn_contact_msdyn_workorder_ReportedByContact: {},
			navAddresses: {},
			navAsyncOperations: {},
			navCampaignsInSFA: {},
			navContracts: {},
			navEntitlement: {},
			navInvoices: {},
			navListsInSFA: {},
			navOrders: {},
			navProcessSessions: {},
			navQuotes: {},
			navRelationships: {},
			navSubConts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_ShippingMethodCode: {},
			Anniversary: {},
			BirthDate: {},
			contactcasessgrid: {},
			contactopportunitiesgrid: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			EMailAddress11: {},
			FamilyStatusCode: {},
			Fax: {},
			FirstName: {},
			FollowEmail: {},
			GenderCode: {},
			LastName: {},
			LastUsedInCampaign: {},
			MobilePhone: {},
			notescontrol: {},
			OriginatingLeadId: {},
			ParentCustomerId: {},
			ParentCustomerId1: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode1: {},
			SpousesName: {},
			subgrid_Entitlement: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			conflictstab: {
				Section: {
					conflictssection: {}
				}
			},
			DETAILS_TAB: {
				Section: {
					billing_information: {},
					CONTACT_PREFERENCES: {},
					marketing_information: {},
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					shipping_information: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					CONTACT_INFORMATION: {},
					Timeline: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EMailAddress1: {},
			JobTitle: {},
			OwnerId: {},
			Telephone1: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				FullName: {},
				MobilePhone: {},
				ParentCustomerId: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			contactcasessgrid: {},
			contactopportunitiesgrid: {},
			subgrid_Entitlement: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navAddresses: {},
			navAsyncOperations: {},
			navCampaignsInSFA: {},
			navContracts: {},
			navInvoices: {},
			navListsInSFA: {},
			navOrders: {},
			navProcessSessions: {},
			navQuotes: {},
			navRelationships: {},
			navSubConts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_for_Multisession_experience = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_ShippingMethodCode: {},
			Anniversary: {},
			BirthDate: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FirstName: {},
			FollowEmail: {},
			GenderCode: {},
			LastName: {},
			LastUsedInCampaign: {},
			MobilePhone: {},
			notescontrol: {},
			OriginatingLeadId: {},
			ParentCustomerId: {},
			ParentCustomerId1: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode1: {},
			RelatedCases: {},
			SpousesName: {},
			TransactionCurrencyId: {},
			WebResource_RecordWall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS_TAB: {
				Section: {
					billing_information: {},
					CONTACT_PREFERENCES: {},
					marketing_information: {},
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					shipping_information: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					CONTACT_INFORMATION: {},
					SUMMARY_TAB_section_4: {},
					Timeline: {}
				}
			},
			tab_recordwall: {
				Section: {
					tab_recordwall_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EMailAddress1: {},
			JobTitle: {},
			OwnerId: {},
			Telephone1: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				FullName: {},
				MobilePhone: {},
				ParentCustomerId: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			RelatedCases: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navAddresses: {},
			navAsyncOperations: {},
			navCampaignsInSFA: {},
			navContracts: {},
			navInvoices: {},
			navListsInSFA: {},
			navOrders: {},
			navProcessSessions: {},
			navQuotes: {},
			navRelationships: {},
			navSubConts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			AccountRoleCode: {},
			Address1_AddressTypeCode: {},
			Address1_City: {},
			Address1_Country: {},
			Address1_FreightTermsCode: {},
			Address1_Line1: {},
			Address1_Line2: {},
			Address1_Line3: {},
			Address1_Name: {},
			Address1_PostalCode: {},
			Address1_ShippingMethodCode: {},
			Address1_StateOrProvince: {},
			Address1_Telephone1: {},
			Anniversary: {},
			AssistantName: {},
			AssistantPhone: {},
			BirthDate: {},
			contactactivitiesgrid: {},
			CreditLimit: {},
			CreditOnHold: {},
			DefaultPriceLevelId: {},
			Department: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FirstName: {},
			GenderCode: {},
			JobTitle: {},
			LastName: {},
			LastUsedInCampaign: {},
			ManagerName: {},
			ManagerPhone: {},
			MiddleName: {},
			MobilePhone: {},
			notescontrol: {},
			OriginatingLeadId: {},
			OwnerId: {},
			ParentCustomerId: {},
			PaymentTermsCode: {},
			PreferredAppointmentDayCode: {},
			PreferredAppointmentTimeCode: {},
			PreferredContactMethodCode: {},
			PreferredEquipmentId: {},
			PreferredServiceId: {},
			PreferredSystemUserId: {},
			Salutation: {},
			SpousesName: {},
			Telephone1: {},
			Telephone2: {},
			TransactionCurrencyId: {},
			WebResource_RecordWall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			administration: {
				Section: {
					billing_information: {},
					contact_methods: {},
					internal_information: {}
				}
			},
			conflictstab: {
				Section: {
					conflictssection: {},
					marketing_information: {},
					service_preferences: {}
				}
			},
			details: {
				Section: {
					personal_information: {},
					professional_information: {}
				}
			},
			general: {
				Section: {
					address: {},
					description: {},
					name: {},
					shipping_information: {}
				}
			},
			notes_and_activities: {
				Section: {
					activities: {},
					notes: {}
				}
			},
			tab_recordwall: {
				Section: {
					tab_recordwall_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EMailAddress1: {},
			OwnerId: {},
			PreferredContactMethodCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var grid = {
			contactactivitiesgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navActivities: {},
			navActivityHistory: {},
			navAddresses: {},
			navRelationships: {},
			navSubConts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormTimelineWallControl_Contact_Main = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					SOCIAL_PANE_TAB: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Address1_City: {},
			Address1_Line1: {},
			Address1_Line2: {},
			Address1_PostalCode: {},
			BusinessCard: {},
			Description: {},
			EMailAddress1: {},
			FirstName: {},
			JobTitle: {},
			LastName: {},
			MobilePhone: {},
			ParentCustomerId: {},
			Telephone1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_Quick_Create_Field_Service = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Address1_Line1: {},
			Description: {},
			EMailAddress1: {},
			FirstName: {},
			JobTitle: {},
			LastName: {},
			MobilePhone: {},
			ParentCustomerId: {},
			Telephone1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
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
		msdyn_orgchangestatus : {
			Ignore: 2,
			No_Feedback: 0,
			Not_at_Company: 1
		},
		OwnerIdType : {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSharePointDocument_Information {
		interface Tabs {
		}
		interface Body {

		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSharePointDocument_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form SharePointDocument_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SharePointDocument_Information */
		Body: DevKit.FormSharePointDocument_Information.Body;
		/** The Process of form SharePointDocument_Information */
		Process: DevKit.FormSharePointDocument_Information.Process;
		/** The SidePanes of form SharePointDocument_Information */
		SidePanes: DevKit.SidePanes;
	}
	class SharePointDocumentApi {
		/**
		* DynamicsCrm.DevKit SharePointDocumentApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Type the URL where the SharePoint document is located. */
		AbsoluteUrl: DevKit.WebApi.StringValueReadonly;
		/** Name of the person who created the application. */
		AppCreatedBy: DevKit.WebApi.StringValueReadonly;
		/** Name of the person who last modified the application. */
		AppModifiedBy: DevKit.WebApi.StringValueReadonly;
		/** Name of the author of the SharePoint document. */
		Author: DevKit.WebApi.StringValue;
		/** Shows the business unit that the record is associated with. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Shows who the SharePoint document is checked out to. */
		CheckedOutTo: DevKit.WebApi.StringValueReadonly;
		/** Type a comment about the document that is being checked in. */
		CheckInComment: DevKit.WebApi.StringValueReadonly;
		/** Shows the number of child folders. */
		ChildFolderCount: DevKit.WebApi.IntegerValueReadonly;
		/** Shows how many child items there are. */
		ChildItemCount: DevKit.WebApi.IntegerValueReadonly;
		/** The content type of the document. */
		ContentType: DevKit.WebApi.StringValueReadonly;
		/** Shows the unique identifier of the content type. */
		ContentTypeId: DevKit.WebApi.IntegerValueReadonly;
		/** SharePoint source item URL */
		CopySource: DevKit.WebApi.StringValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of a SharePoint document in document library. */
		DocumentId: DevKit.WebApi.IntegerValueReadonly;
		/** Location type of the SharePoint document location. */
		DocumentLocationType: DevKit.WebApi.OptionSetValueReadonly;
		/** Edit Url of the Sharepoint Form */
		Edit: DevKit.WebApi.StringValueReadonly;
		/** Shows the edit URL of the SharePoint document. */
		EditUrl: DevKit.WebApi.StringValueReadonly;
		/** Shows the exchange rate between the currency associated with the SharePoint document record and the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the file size. */
		FileSize: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the file type. */
		FileType: DevKit.WebApi.StringValueReadonly;
		/** Shows the full name of the SharePoint document. */
		FullName: DevKit.WebApi.StringValueReadonly;
		/** Stores the Icon Class name of the SharePoint document. */
		IconClassName: DevKit.WebApi.StringValueReadonly;
		/** Shows whether the file is checked out. */
		IsCheckedOut: DevKit.WebApi.BooleanValueReadonly;
		/** Shows whether the file is a folder. */
		IsFolder: DevKit.WebApi.BooleanValueReadonly;
		/** Shows whether to fetch data recursively from the given folder location. */
		IsRecursiveFetch: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the associated document location. */
		LocationId: DevKit.WebApi.StringValueReadonly;
		/** Name of the associated document location. */
		LocationName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time when the SharePoint document was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		Modified_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who modified the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the SharePoint document. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Shows the Read URL of the SharePoint document. */
		ReadUrl: DevKit.WebApi.StringValueReadonly;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_opportunity: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_lead: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_agreement: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_agreementbookingdate: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_bookingtimestamp: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_expense: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_inventoryadjustment: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_inventorytransfer: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_playbookactivity: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_project: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_purchaseorder: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_purchaseorderproduct: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_resourceterritory: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_rma: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_rmareceipt: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_rtv: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_timegroup: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_timegroupdetail: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_warehouse: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_workorder: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_workorderincident: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_workorderproduct: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_workorderservice: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_workorderservicetask: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_product: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_quote: DevKit.WebApi.LookupValue;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_salesliterature: DevKit.WebApi.LookupValue;
		/** Relative location of Sharepoint Document */
		RelativeLocation: DevKit.WebApi.StringValueReadonly;
		/** Shows the service type of the SharePoint site. */
		ServiceType: DevKit.WebApi.OptionSetValue;
		/** Shows the date and time when the SharePoint document record was created. */
		SharePointCreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows the unique identifier of the SharePoint document record. */
		SharePointDocumentId: DevKit.WebApi.GuidValue;
		/** Shows who last updated the document record. */
		SharePointModifiedBy: DevKit.WebApi.StringValueReadonly;
		/** Shows the title or name that describes the SharePoint document. */
		Title: DevKit.WebApi.StringValueReadonly;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the SharePoint document version */
		Version: DevKit.WebApi.StringValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SharePointDocument {
		enum DocumentLocationType {
			/** 1 */
			Dedicated_for_OneNote_Integration,
			/** 0 */
			General
		}
		enum ServiceType {
			/** 3 */
			MS_Teams,
			/** 1 */
			OneDrive,
			/** 2 */
			Shared_with_me,
			/** 0 */
			SharePoint
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
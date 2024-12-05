//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSharePointDocument_Information {
		interface Tabs {
		}
		interface Body {

		}
		interface Navigation {

		}
	}
	class FormSharePointDocument_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SharePointDocument_Information */
		Body: DevKit.FormSharePointDocument_Information.Body;
		/** The Navigation of form SharePointDocument_Information */
		Navigation: DevKit.FormSharePointDocument_Information.Navigation;
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Type the URL where the SharePoint document is located. */
		readonly AbsoluteUrl: string;
		/** Name of the person who created the application. */
		readonly AppCreatedBy: string;
		/** Name of the person who last modified the application. */
		readonly AppModifiedBy: string;
		/** Name of the author of the SharePoint document. */
		Author: string;
		/** Shows the business unit that the record is associated with. */
		BusinessUnitId: string;
		/** Shows who the SharePoint document is checked out to. */
		readonly CheckedOutTo: string;
		/** Type a comment about the document that is being checked in. */
		readonly CheckInComment: string;
		/** Shows the number of child folders. */
		readonly ChildFolderCount: number;
		/** Shows how many child items there are. */
		readonly ChildItemCount: number;
		/** The content type of the document. */
		readonly ContentType: string;
		/** Shows the unique identifier of the content type. */
		readonly ContentTypeId: number;
		/** SharePoint source item URL */
		readonly CopySource: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of a SharePoint document in document library. */
		readonly DocumentId: number;
		/** Location type of the SharePoint document location. */
		readonly DocumentLocationType: OptionSet.SharePointDocument.DocumentLocationType;
		/** Edit Url of the Sharepoint Form */
		readonly Edit: string;
		/** Shows the edit URL of the SharePoint document. */
		readonly EditUrl: string;
		/** Shows the exchange rate between the currency associated with the SharePoint document record and the base currency. */
		readonly ExchangeRate: number;
		/** Shows the file size. */
		readonly FileSize: number;
		/** Shows the file type. */
		readonly FileType: string;
		/** Shows the full name of the SharePoint document. */
		readonly FullName: string;
		/** Stores the Icon Class name of the SharePoint document. */
		readonly IconClassName: string;
		/** Shows whether the file is checked out. */
		readonly IsCheckedOut: boolean;
		/** Shows whether the file is a folder. */
		readonly IsFolder: boolean;
		/** Shows whether to fetch data recursively from the given folder location. */
		readonly IsRecursiveFetch: boolean;
		/** Unique identifier of the associated document location. */
		readonly LocationId: string;
		/** Name of the associated document location. */
		readonly LocationName: string;
		/** Shows the date and time when the SharePoint document was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly Modified_UtcDateAndTime: Date;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who modified the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the SharePoint document. */
		readonly OrganizationId: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string;
		/** Shows the Read URL of the SharePoint document. */
		readonly ReadUrl: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_account: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_adx_portalcomment: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_opportunity: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_incident: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_kbarticle: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_knowledgearticle: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_lead: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_agreement: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_agreementbookingdate: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_agreementbookingsetup: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_agreementinvoicedate: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_agreementinvoicesetup: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_bookingtimestamp: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_incidenttypeproduct: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_inventoryadjustment: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_inventorytransfer: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_playbookactivity: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_purchaseorder: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_purchaseorderproduct: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_purchaseorderreceipt: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_resourceterritory: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_rma: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_rmareceipt: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_rtv: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_timegroup: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_timegroupdetail: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_warehouse: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_workorder: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_workorderincident: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_workorderproduct: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_workorderservice: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_msdyn_workorderservicetask: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_product: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_quote: string;
		/** Choose the parent record that the SharePoint document record is associated with. */
		regardingobjectid_salesliterature: string;
		/** Relative location of Sharepoint Document */
		readonly RelativeLocation: string;
		/** Shows the service type of the SharePoint site. */
		ServiceType: OptionSet.SharePointDocument.ServiceType;
		/** Shows the date and time when the SharePoint document record was created. */
		readonly SharePointCreatedOn_UtcDateAndTime: Date;
		/** Shows the unique identifier of the SharePoint document record. */
		SharePointDocumentId: string;
		/** Shows who last updated the document record. */
		readonly SharePointModifiedBy: string;
		/** Shows the title or name that describes the SharePoint document. */
		readonly Title: string;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		readonly TransactionCurrencyId: string;
		/** Shows the SharePoint document version */
		readonly Version: string;
		readonly FormattedValue: {
			/** Type the URL where the SharePoint document is located. */
			readonly AbsoluteUrl: string;
			/** Name of the person who created the application. */
			readonly AppCreatedBy: string;
			/** Name of the person who last modified the application. */
			readonly AppModifiedBy: string;
			/** Name of the author of the SharePoint document. */
			readonly Author: string;
			/** Shows the business unit that the record is associated with. */
			readonly BusinessUnitId: string;
			/** Shows who the SharePoint document is checked out to. */
			readonly CheckedOutTo: string;
			/** Type a comment about the document that is being checked in. */
			readonly CheckInComment: string;
			/** Shows the number of child folders. */
			readonly ChildFolderCount: string;
			/** Shows how many child items there are. */
			readonly ChildItemCount: string;
			/** The content type of the document. */
			readonly ContentType: string;
			/** Shows the unique identifier of the content type. */
			readonly ContentTypeId: string;
			/** SharePoint source item URL */
			readonly CopySource: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of a SharePoint document in document library. */
			readonly DocumentId: string;
			/** Location type of the SharePoint document location. */
			readonly DocumentLocationType: string;
			/** Edit Url of the Sharepoint Form */
			readonly Edit: string;
			/** Shows the edit URL of the SharePoint document. */
			readonly EditUrl: string;
			/** Shows the exchange rate between the currency associated with the SharePoint document record and the base currency. */
			readonly ExchangeRate: string;
			/** Shows the file size. */
			readonly FileSize: string;
			/** Shows the file type. */
			readonly FileType: string;
			/** Shows the full name of the SharePoint document. */
			readonly FullName: string;
			/** Stores the Icon Class name of the SharePoint document. */
			readonly IconClassName: string;
			/** Shows whether the file is checked out. */
			readonly IsCheckedOut: string;
			/** Shows whether the file is a folder. */
			readonly IsFolder: string;
			/** Shows whether to fetch data recursively from the given folder location. */
			readonly IsRecursiveFetch: string;
			/** Unique identifier of the associated document location. */
			readonly LocationId: string;
			/** Name of the associated document location. */
			readonly LocationName: string;
			/** Shows the date and time when the SharePoint document was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly Modified_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who modified the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the SharePoint document. */
			readonly OrganizationId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the record owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Shows the Read URL of the SharePoint document. */
			readonly ReadUrl: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_account: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_opportunity: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_incident: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_kbarticle: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_lead: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_agreement: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_agreementbookingdate: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_agreementbookingsetup: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_agreementinvoicedate: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_bookingtimestamp: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_incidenttypeproduct: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_inventoryadjustment: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_inventorytransfer: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_playbookactivity: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_purchaseorder: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_purchaseorderproduct: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_resourceterritory: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_rma: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_rmareceipt: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_rtv: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_timegroup: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_timegroupdetail: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_warehouse: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_workorder: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_workorderincident: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_workorderproduct: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_workorderservice: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_msdyn_workorderservicetask: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_product: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_quote: string;
			/** Choose the parent record that the SharePoint document record is associated with. */
			readonly regardingobjectid_salesliterature: string;
			/** Relative location of Sharepoint Document */
			readonly RelativeLocation: string;
			/** Shows the service type of the SharePoint site. */
			readonly ServiceType: string;
			/** Shows the date and time when the SharePoint document record was created. */
			readonly SharePointCreatedOn_UtcDateAndTime: string;
			/** Shows the unique identifier of the SharePoint document record. */
			readonly SharePointDocumentId: string;
			/** Shows who last updated the document record. */
			readonly SharePointModifiedBy: string;
			/** Shows the title or name that describes the SharePoint document. */
			readonly Title: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Shows the SharePoint document version */
			readonly Version: string;
		}
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
		enum RegardingObjectTypeCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSharePointDocumentLocation_Information {
		interface tab_general_Sections {
			_272EB814_0769_5EBE_3ED1_E95A0B16853E: DevKit.Controls.Section;
			url_option: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Absolute URL of the SharePoint document location. */
			AbsoluteURL: DevKit.Controls.String;
			/** Description of the SharePoint document location record. */
			Description: DevKit.Controls.String;
			/** Location type of the SharePoint document location. */
			LocationType: DevKit.Controls.OptionSet;
			/** Name of the SharePoint document location record. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the SharePoint document location record. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the parent site or location. */
			ParentSiteOrLocation: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the SharePoint document location record is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Relative URL of the SharePoint document location. */
			RelativeUrl: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the SharePoint document location record. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navSubDocumentLocations: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSharePointDocumentLocation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SharePointDocumentLocation_Information */
		Body: DevKit.FormSharePointDocumentLocation_Information.Body;
		/** The Footer section of form SharePointDocumentLocation_Information */
		Footer: DevKit.FormSharePointDocumentLocation_Information.Footer;
		/** The Navigation of form SharePointDocumentLocation_Information */
		Navigation: DevKit.FormSharePointDocumentLocation_Information.Navigation;
		/** The Process of form SharePointDocumentLocation_Information */
		Process: DevKit.FormSharePointDocumentLocation_Information.Process;
		/** The SidePanes of form SharePointDocumentLocation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class SharePointDocumentLocationApi {
		/**
		* DynamicsCrm.DevKit SharePointDocumentLocationApi
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
		/** Absolute URL of the SharePoint document location. */
		AbsoluteURL: string;
		/** Unique identifier of the user who created the SharePoint document location record. */
		readonly CreatedBy: string;
		/** Date and time when the SharePoint document location record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the SharePoint document location record. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the SharePoint document location record. */
		Description: string;
		/** Exchange rate between the currency associated with the SharePoint document location record and the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created the SharePoint document location record. */
		ImportSequenceNumber: number;
		/** Location type of the SharePoint document location. */
		LocationType: OptionSet.SharePointDocumentLocation.LocationType;
		/** Unique identifier of the user who last modified the SharePoint document location record. */
		readonly ModifiedBy: string;
		/** Date and time when the SharePoint document location record was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the SharePoint document location record. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the SharePoint document location record. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the SharePoint document location record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the SharePoint document location record. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the SharePoint document location record. */
		readonly OwningUser: string;
		/** Unique identifier of the parent site or location. */
		parentsiteorlocation_sharepointdocumentlocation: string;
		/** Unique identifier of the parent site or location. */
		parentsiteorlocation_sharepointsite: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_account: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_kbarticle: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_knowledgearticle: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_lead: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_agreement: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_agreementbookingdate: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_bookingtimestamp: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_expense: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_inventoryadjustment: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_inventorytransfer: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_playbookactivity: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_project: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_purchaseorder: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_purchaseorderproduct: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_resourceterritory: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_rma: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_rmareceipt: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_rtv: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_timegroup: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_timegroupdetail: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_warehouse: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_workorder: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_workorderincident: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_workorderproduct: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_workorderservice: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_workorderservicetask: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_opportunity: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_product: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_quote: string;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_salesliterature: string;
		/** Relative URL of the SharePoint document location. */
		RelativeUrl: string;
		/** Shows the service type of the SharePoint site. */
		ServiceType: OptionSet.SharePointDocumentLocation.ServiceType;
		/** Unique identifier of the SharePoint document location record. */
		SharePointDocumentLocationId: string;
		/** For internal use only. */
		readonly SiteCollectionId: string;
		/** Status of the SharePoint document location record. */
		StateCode: OptionSet.SharePointDocumentLocation.StateCode;
		/** Reason for the status of the SharePoint document location record. */
		StatusCode: OptionSet.SharePointDocumentLocation.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the SharePoint document location record. */
		readonly TransactionCurrencyId: string;
		/** Choose the user who owns the SharePoint document location. */
		UserId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace SharePointDocumentLocation {
		enum LocationType {
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
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}